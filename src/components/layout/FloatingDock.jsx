import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { primaryPhone, whatsappNumber } from "../../data/locations";
import { FacebookIcon, InstagramIcon } from "../ui/SocialIcons";

export default function FloatingDock() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    {
      key: "whatsapp",
      href: `https://api.whatsapp.com/send?phone=${whatsappNumber}`,
      icon: MessageCircle,
      bg: "bg-[#25D366]",
      label: "Chat on WhatsApp",
    },
    {
      key: "phone",
      href: `tel:${primaryPhone.replace(/\s/g, "")}`,
      icon: Phone,
      bg: "bg-brand",
      label: "Call the clinic",
    },
    {
      key: "facebook",
      href: "https://www.facebook.com/vamaadvancedhairandskinclinic/",
      icon: FacebookIcon,
      bg: "bg-[#1877F2]",
      label: "Facebook",
    },
    {
      key: "instagram",
      href: "https://www.instagram.com/vamaskinandhairclinic/",
      icon: InstagramIcon,
      bg: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]",
      label: "Instagram",
    },
  ];

  return (
    <div className="fixed right-4 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-3 md:right-6">
      {items.map((item, i) => (
        <motion.a
          key={item.key}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 * i, duration: 0.4 }}
          whileHover={{ scale: 1.1 }}
          className={`group relative flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg ${item.bg}`}
        >
          <item.icon className="h-5 w-5" strokeWidth={2} />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-ink px-2.5 py-1 text-xs font-medium text-ivory opacity-0 transition-opacity group-hover:opacity-100">
            {item.label}
          </span>
        </motion.a>
      ))}

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-ivory shadow-lg"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
