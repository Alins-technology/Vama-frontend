// Receives website form leads and forwards them to Privyr.
// Needs the PRIVYR_WEBHOOK_URL environment variable set in Vercel.

function normalizePhone(raw) {
  const digits = String(raw || '').replace(/\D/g, '');
  if (digits.length === 10) return `+91${digits}`;
  if (digits.length === 11 && digits.startsWith('0')) return `+91${digits.slice(1)}`;
  if (digits.length === 12 && digits.startsWith('91')) return `+${digits}`;
  return digits ? `+${digits}` : '';
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    if (!process.env.PRIVYR_WEBHOOK_URL) {
      console.error('Lead API misconfigured: PRIVYR_WEBHOOK_URL env var is not set');
      return res.status(500).json({ success: false, message: 'Lead capture is not configured' });
    }

    const { name, phone, email, service, message, source, page } = req.body || {};

    if (!name || !phone) {
      return res.status(400).json({ success: false, message: 'Name and phone are required' });
    }

    const payload = {
      name,
      phone: normalizePhone(phone),
      display_name: name,
      ...(email ? { email } : {}),
      notes: `Interested in: ${service || 'Not specified'} | Message: ${message || '-'} | Form: ${source || 'Website'} | Page: ${page || '-'}`,
      source: source || 'VAMA Website',
      other_fields: {
        interest: service || '',
        message: message || '',
        form: source || 'Website',
        page: page || ''
      }
    };

    const response = await fetch(process.env.PRIVYR_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.text();

    if (!response.ok) {
      console.error('Privyr error:', response.status, result);
      return res.status(502).json({ success: false, message: 'Could not send lead to Privyr' });
    }

    return res.status(200).json({ success: true, message: 'Lead sent to Privyr' });
  } catch (error) {
    console.error('Lead API error:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
}
