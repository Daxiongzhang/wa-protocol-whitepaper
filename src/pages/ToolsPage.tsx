import { useState, memo } from 'react';
import { Calculator, Code, Zap, TrendingUp } from 'lucide-react';
import type { Language } from '../App';
import { toolsTranslations } from '../data/tools-content';

function ToolsPageComponent({ language }: { language: Language }) {
  const t = toolsTranslations[language];
  const [selectedTool, setSelectedTool] = useState(0);
  const [investment, setInvestment] = useState('10000');
  const [period, setPeriod] = useState('12');
  const [rate, setRate] = useState('30');
  const [result, setResult] = useState<{ return: number; total: number } | null>(null);

  const icons = {
    calculator: Calculator,
    code: Code,
    zap: Zap,
    trending: TrendingUp
  };

  const handleCalculate = () => {
    const principal = parseFloat(investment) || 0;
    const months = parseFloat(period) || 0;
    const annualRate = parseFloat(rate) || 0;
    
    const monthlyRate = annualRate / 100 / 12;
    const returns = principal * monthlyRate * months;
    const total = principal + returns;
    
    setResult({ return: returns, total });
  };

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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tools List */}
          <div className="lg:col-span-1 space-y-3">
            {t.tools.map((tool, index) => {
              const Icon = icons[tool.icon as keyof typeof icons];
              return (
                <button
                  key={index}
                  onClick={() => setSelectedTool(index)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-200 flex items-start gap-3 ${
                    selectedTool === index
                      ? 'bg-lime-600 text-white shadow-lg shadow-lime-500/30'
                      : 'ui-panel-soft ui-panel-hover hover:border-lime-500/50 text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon size={24} className={selectedTool === index ? 'text-white' : 'text-lime-400'} />
                  <div>
                    <h3 className="font-medium mb-1">{tool.name}</h3>
                    <p className={`text-sm ${selectedTool === index ? 'text-lime-100' : 'text-slate-500'}`}>
                      {tool.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tool Content */}
          <div className="lg:col-span-2">
            <div className="ui-panel-soft p-8">
              {selectedTool === 0 && (
                <div>
                  <h2 className="text-2xl font-medium text-white mb-6">
                    {t.calculatorTitle}
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {t.investmentLabel}
                      </label>
                      <input
                        type="number"
                        value={investment}
                        onChange={(e) => setInvestment(e.target.value)}
                        className="ui-input px-4 py-3"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {t.periodLabel}
                      </label>
                      <input
                        type="number"
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                        className="ui-input px-4 py-3"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        {t.rateLabel}
                      </label>
                      <input
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        className="ui-input px-4 py-3"
                      />
                    </div>

                    <button
                      onClick={handleCalculate}
                      className="ui-btn ui-btn-primary w-full px-6 py-3 text-sm"
                    >
                      {t.calculateBtn}
                    </button>

                    {result && (
                      <div className="mt-6 p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="ui-meta text-slate-300">{t.resultLabel}:</span>
                            <span className="text-2xl font-medium text-green-400">
                              ${result.return.toFixed(2)}
                            </span>
                          </div>
                          <div className="flex justify-between items-center pt-3 border-t border-white/10">
                            <span className="ui-meta text-white">{t.totalLabel}:</span>
                            <span className="text-3xl font-bold text-white">
                              ${result.total.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {selectedTool !== 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🚧</div>
                  <p className="text-slate-400">
                    {t.underDevelopment}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export const ToolsPage = memo(ToolsPageComponent);
