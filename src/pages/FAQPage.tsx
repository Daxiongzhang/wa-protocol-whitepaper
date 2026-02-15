import { useState, memo } from 'react';
import { ArrowLeft, HelpCircle, ChevronDown, Search, AlertTriangle } from 'lucide-react';
import type { Language, Page } from '../App';
import {
  zhFAQContent,
  enFAQContent,
  idFAQContent,
  thFAQContent,
  viFAQContent,
  koFAQContent,
  jaFAQContent
} from '../data/faq-content';
import type { CategoryKey } from '../types/content.types';

interface FAQPageProps {
  language: Language;
  setCurrentPage: (page: Page) => void;
}

const translations = {
  zh: zhFAQContent,
  en: enFAQContent,
  id: idFAQContent,
  th: thFAQContent,
  vi: viFAQContent,
  ko: koFAQContent,
  ja: jaFAQContent
};

function FAQPageComponent({ language, setCurrentPage }: FAQPageProps) {
  const t = translations[language] || translations.zh;
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('basic');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showRiskSummary, setShowRiskSummary] = useState(true);

  const getCurrentFAQs = () => {
    const categoryOrder: CategoryKey[] = ['basic', 'revenue', 'organization', 'risk', 'conclusion'];
    let startNumber = 1;

    for (let i = 0; i < categoryOrder.indexOf(activeCategory); i++) {
      startNumber += t.faqs[categoryOrder[i]].length;
    }

    return t.faqs[activeCategory].map((faq, index) => ({
      ...faq,
      number: startNumber + index
    }));
  };

  const currentFAQs = getCurrentFAQs();

  const filteredFAQs = searchQuery
    ? currentFAQs.filter(faq =>
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : currentFAQs;

  const totalCount = Object.values(t.faqs).flat().length;

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      <div className="container mx-auto px-6">
        <button
          onClick={() => setCurrentPage('home')}
          className="group flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors duration-200"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="text-sm">{t.backToHome}</span>
        </button>

        <div className="max-w-5xl mx-auto text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-500/10 rounded-2xl mb-6">
            <HelpCircle className="text-lime-400" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
            {t.title}
          </h1>
          <p className="text-lg text-zinc-400">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-8">
          <button
            onClick={() => setShowRiskSummary(!showRiskSummary)}
            className="w-full p-5 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center justify-between hover:bg-red-500/15 transition-colors duration-200"
          >
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-red-400 flex-shrink-0" size={24} />
              <span className="text-lg font-medium text-white">{t.riskSummary.title}</span>
            </div>
            <ChevronDown
              size={20}
              className={`text-zinc-400 transition-transform duration-200 ${
                showRiskSummary ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              showRiskSummary ? 'max-h-[2000px] opacity-100 mt-3' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="space-y-3">
              {t.riskSummary.items.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-zinc-900/50 border border-zinc-800/50 rounded-lg"
                >
                  <h4 className="text-sm font-medium text-red-300 mb-2">{item.label}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
          <p className="text-sm text-amber-200 text-center">{t.disclaimer}</p>
        </div>

        <div className="max-w-5xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ui-input pl-12 pr-4 py-3.5"
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-8 overflow-x-auto">
          <div className="flex gap-2 p-1 bg-zinc-900/30 border border-zinc-800/50 rounded-lg w-fit min-w-full md:min-w-0">
            {(Object.keys(t.categories) as CategoryKey[]).map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null);
                  setSearchQuery('');
                }}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-lime-500/15 text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {t.categories[category]}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-3">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12 text-zinc-500">
              {t.noResults}
            </div>
          ) : (
            filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="ui-list-item overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-5 flex items-start justify-between gap-4 text-left"
                >
                  <div className="flex-1 flex items-start gap-3">
                    <span className="ui-badge ui-badge-lime ui-badge-mono flex-shrink-0">
                      Q{faq.number}
                    </span>
                    <h3 className="text-base font-medium text-white">
                      {faq.q}
                    </h3>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-zinc-400 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 pb-5 pt-0">
                    <div className="pl-11">
                      <p className="text-sm text-zinc-400 leading-relaxed pt-4">
                        <span className="ui-divider-soft block mb-4" />
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="max-w-5xl mx-auto mt-8 text-center">
          <p className="text-sm text-zinc-500">
            {t.totalQuestions.replace('{{count}}', totalCount.toString())}
          </p>
        </div>
      </div>
    </div>
  );
}

export const FAQPage = memo(FAQPageComponent);
