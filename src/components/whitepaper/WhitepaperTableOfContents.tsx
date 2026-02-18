import type { WhitepaperSection } from '../../data/whitepaper/types';

interface WhitepaperTableOfContentsProps {
  sections: WhitepaperSection[];
  activeSection: number | null;
  onSelect: (sectionId: number) => void;
  tableOfContentsLabel: string;
}

export function WhitepaperTableOfContents({
  sections,
  activeSection,
  onSelect,
  tableOfContentsLabel,
}: WhitepaperTableOfContentsProps) {
  return (
    <nav className="mb-24">
      <div className="ui-panel-soft ui-panel-hover p-8 hover:border-emerald-500/50 transition-all duration-300">
        <h2 className="text-xl font-light text-white mb-8 flex items-center gap-3">
          <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
          {tableOfContentsLabel}
        </h2>
        <div className="grid gap-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSelect(section.id)}
              className={`group text-left p-5 rounded-xl transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-lime-600/20 border border-lime-500/30 text-lime-400 shadow-lg shadow-lime-500/10'
                  : 'hover:bg-white/5 border border-transparent text-slate-300 hover:text-white hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 font-mono text-sm ${
                      activeSection === section.id
                        ? 'bg-lime-600 text-white shadow-lg'
                        : 'bg-white/10 text-slate-500 group-hover:bg-lime-600/20 group-hover:text-lime-400'
                    }`}
                  >
                    {String(section.id).padStart(2, '0')}
                  </div>
                  <div>
                    <div
                      className={`font-medium transition-colors duration-300 ${
                        activeSection === section.id ? 'text-lime-300' : 'text-white group-hover:text-lime-400'
                      }`}
                    >
                      {section.title}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">Chapter {section.id}</div>
                  </div>
                </div>
                <div
                  className={`transition-all duration-300 ${
                    activeSection === section.id ? 'text-lime-400' : 'text-slate-600 group-hover:text-lime-400'
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-current" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
