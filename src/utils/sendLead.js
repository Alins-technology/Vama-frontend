// Sends a form lead to /api/lead (which forwards it to Privyr).
// keepalive lets the request finish even while the page navigates / WhatsApp opens.
export function sendLead({ name, phone, email = "", service = "", message = "", source = "Website" }) {
  try {
    return fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        name,
        phone,
        email,
        service,
        message,
        source,
        page: typeof window !== "undefined" ? window.location.pathname : "",
      }),
    }).catch((err) => console.error("Lead submission error:", err));
  } catch (err) {
    console.error("Lead submission error:", err);
    return Promise.resolve();
  }
}
