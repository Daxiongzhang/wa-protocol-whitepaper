import { memo } from 'react';
import type { Language } from '../App';
import { footerTranslations } from '../data/footer-content';

function FooterComponent({ language }: { language: Language }) {
  const t = footerTranslations[language];

  return (
    <footer className="border-t border-white/5 bg-slate-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-white font-medium mb-4 text-sm">
              {t.about}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.aboutDesc}
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4 text-sm">{t.quickLinks}</h3>
            <ul className="space-y-3">
              {t.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4 text-sm">{t.contact}</h3>
            <ul className="space-y-3">
              <li className="text-slate-400 text-sm">contact@example.com</li>
              <li>
                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                  Discord
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4 text-sm">{t.legal}</h3>
            <ul className="space-y-3">
              {t.legalLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5">
          <p className="text-slate-500 text-sm text-center">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export const Footer = memo(FooterComponent);
