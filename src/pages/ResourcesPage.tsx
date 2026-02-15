import { useState, memo } from 'react';
import { Search, Download, Eye } from 'lucide-react';
import type { Language } from '../App';
import { resourcesTranslations } from '../data/resources-content';


function ResourcesPageComponent({ language }: { language: Language }) {
  const t = resourcesTranslations[language];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(t.categories[0]);

  const filteredResources = t.resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         resource.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === t.categories[0] || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="container mx-auto px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-white font-medium text-5xl mb-3 tracking-tight">
            {t.title}
          </h1>
          <p className="text-slate-400 text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="ui-input pl-12 pr-4 py-4"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {t.categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-lime-600 text-white'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <div
              key={index}
              className="ui-panel-soft ui-panel-hover group p-6 hover:border-lime-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                <span className="ui-badge ui-badge-emerald mb-3">
                  {resource.category}
                </span>
                <h3 className="text-white font-medium text-lg mb-2">
                  {resource.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {resource.desc}
                </p>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <span className="ui-meta">
                  <Eye size={14} />
                  {resource.views} {t.viewsLabel}
                </span>
                <span className="ui-meta">
                  <Download size={14} />
                  {resource.downloads} {t.downloadsLabel}
                </span>
              </div>

              <div className="flex gap-2">
                <button className="ui-btn ui-btn-secondary flex-1 px-3 py-2 text-sm">
                  {t.viewBtn}
                </button>
                <button className="ui-btn ui-btn-primary flex-1 px-3 py-2 text-sm">
                  <Download size={14} />
                  {t.downloadBtn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export const ResourcesPage = memo(ResourcesPageComponent);
