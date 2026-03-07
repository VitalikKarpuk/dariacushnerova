import instagram from "../../../assets/instagram.svg";
import telegram from "../../../assets/telegram.svg";
import youtube from "../../../assets/youtube.svg";
import {
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  AUTHOR_COMPANY,
  AUTHOR_TAX_ID,
  COPYRIGHT_YEARS,
} from "../../../config/course";

const socialLinks = [
  { src: instagram, alt: "Instagram", href: INSTAGRAM_URL },
  { src: youtube, alt: "YouTube", href: "#" },
  { src: telegram, alt: "Telegram", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-palette-600/20 bg-palette-100 py-8 px-4 md:px-6">
      <div className="container">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <div className="flex justify-center gap-6">
            {socialLinks.map(({ src, alt, href }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-palette-700 hover:text-warm-400 transition-colors"
                aria-label={alt}
              >
                <img src={src} alt="" className="h-6 w-6" />
              </a>
            ))}
          </div>
          <p className="font-sans text-sm text-palette-700">
            © {COPYRIGHT_YEARS} <span className="font-semibold text-warm-400">{INSTAGRAM_HANDLE}</span>
          </p>
          <p className="font-sans text-xs text-palette-700">Все права защищены</p>
          <p className="font-sans text-xs text-palette-700">{AUTHOR_COMPANY} {AUTHOR_TAX_ID}</p>
          <p className="font-sans text-xs text-palette-700/90 md:text-sm">
            Сайт носит рекламно-информационный характер и не является интернет-магазином.
            Указанные цены не являются публичной офертой.
          </p>
        </div>
      </div>
    </footer>
  );
}
