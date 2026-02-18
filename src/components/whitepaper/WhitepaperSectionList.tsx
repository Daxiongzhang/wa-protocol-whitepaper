import type { Language } from '../../App';
import type { WhitepaperSection } from '../../data/whitepaper/types';
import { WhitepaperContentRenderer } from './WhitepaperContentRenderer';

interface WhitepaperSectionListProps {
  sections: WhitepaperSection[];
  expandedSection: number | null;
  onToggle: (sectionId: number) => void;
  language: Language;
}

export function WhitepaperSectionList({
  sections,
  expandedSection,
  onToggle,
  language,
}: WhitepaperSectionListProps) {
  return (
    <main className="space-y-12">
      {sections.map((section) => (
        <article
          key={section.id}
          id={`section-${section.id}`}
          className="ui-panel-soft ui-panel-hover group hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
        >
          <button
            onClick={() => onToggle(section.id)}
            className="w-full text-left p-8 hover:bg-white/5 transition-colors duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 font-mono text-lg font-bold ${
                    expandedSection === section.id
                      ? 'bg-lime-600 text-white shadow-lg shadow-lime-500/30'
                      : 'bg-white/10 text-slate-400 group-hover:bg-lime-600/20 group-hover:text-lime-400'
                  }`}
                >
                  {String(section.id).padStart(2, '0')}
                </div>
                <div>
                  <h2
                    className={`text-xl md:text-2xl font-light transition-colors duration-300 ${
                      expandedSection === section.id ? 'text-lime-400' : 'text-white group-hover:text-lime-400'
                    }`}
                  >
                    {section.title}
                  </h2>
                  <div className="text-sm text-slate-500 mt-2">
                    {expandedSection === section.id ? 'Click to collapse' : 'Click to expand'}
                  </div>
                </div>
              </div>
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                  expandedSection === section.id
                    ? 'bg-lime-600 text-white rotate-45'
                    : 'bg-white/10 text-slate-400 group-hover:bg-lime-600/20 group-hover:text-lime-400'
                }`}
              >
                <span className="text-2xl font-light">{expandedSection === section.id ? '−' : '+'}</span>
              </div>
            </div>
          </button>

          {expandedSection === section.id && (
            <div className="border-t border-white/10 bg-black/20">
              <div className="p-8">
                <WhitepaperContentRenderer content={section.content} language={language} />
              </div>
            </div>
          )}
        </article>
      ))}
    </main>
  );
}
