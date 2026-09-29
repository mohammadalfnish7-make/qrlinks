"use client";

import { useEffect, useState } from "react";

type Lang = "ar" | "en";

const copy = {
  title: { ar: "شؤون شباب - سوريا", en: "Youth Affairs - Syria" },
  subtitle: {
    ar: "تابعنا وتواصل معنا عبر منصاتنا الرسمية",
    en: "Follow us on our official platforms",
  },
  facebook: { ar: "صفحتنا على فيسبوك", en: "Our Facebook Page" },
  instagram: { ar: "حسابنا على انستغرام", en: "Our Instagram Account" },
  website: { ar: "موقعنا الإلكتروني", en: "Our Website" },
  telegram: { ar: "قناتنا على تيليغرام", en: "Our Telegram Channel" },
  whatsapp: { ar: "تواصل معنا على واتساب", en: "Contact Us on WhatsApp" },
  footer: { ar: "© 2026 شؤون شباب - سوريا", en: "© 2026 Youth Affairs - Syria" },
} as const;

const links = [
  {
    id: "facebook",
    href: "https://www.facebook.com/share/1Hrimq4tfb/",
    className: "link-facebook",
    label: copy.facebook,
    icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/youthafairs?stkn=N3hraDl5NzR3bmVx",
    className: "link-instagram",
    label: copy.instagram,
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    id: "website",
    href: "https://syrianYouth.org",
    className: "link-website",
    label: copy.website,
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
  },
  {
    id: "telegram",
    href: "https://t.me/YOUR_CHANNEL",
    className: "link-telegram",
    label: copy.telegram,
    icon: "M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
  },
  {
    id: "whatsapp",
    href: "https://wa.me/963987760595",
    className: "link-whatsapp",
    label: copy.whatsapp,
    icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  },
] as const;

export function LandingPage() {
  const [lang, setLang] = useState<Lang>("ar");

  useEffect(() => {
    const saved = localStorage.getItem("qrlinks-lang");
    if (saved === "en" || saved === "ar") {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  function toggleLanguage() {
    const next: Lang = lang === "ar" ? "en" : "ar";
    setLang(next);
    localStorage.setItem("qrlinks-lang", next);
  }

  return (
    <>
      <button
        type="button"
        className="lang-toggle"
        aria-label="Switch language"
        onClick={toggleLanguage}
      >
        <span className="lang-icon" aria-hidden="true">
          🌐
        </span>
        <span>{lang === "ar" ? "EN" : "عربي"}</span>
      </button>

      <div className="page-wrapper">
        <main className="card">
          <div className="orb orb-1" aria-hidden="true" />
          <div className="orb orb-2" aria-hidden="true" />

          <div className="logo-container">
            <img src="/logo.png" alt="شؤون شباب - سوريا" className="logo" />
          </div>

          <h1 className="title">{copy.title[lang]}</h1>
          <p className="subtitle">{copy.subtitle[lang]}</p>

          <nav className="links-container" aria-label="Social media links">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`link-btn ${link.className}`}
              >
                <svg className="link-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={link.icon} />
                </svg>
                <span>{link.label[lang]}</span>
              </a>
            ))}
          </nav>

          <footer className="footer">
            <p>{copy.footer[lang]}</p>
          </footer>
        </main>
      </div>
    </>
  );
}
