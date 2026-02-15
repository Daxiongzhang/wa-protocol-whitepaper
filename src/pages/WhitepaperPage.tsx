import { useState, useEffect, memo } from 'react';
import type { ReactNode } from 'react';
import { Sparkles, Star, ArrowLeft } from 'lucide-react';
import type { Language, Page } from '../App';
import { whitepaperTranslations, whitepaperContent } from '../data/whitepaper-content';
import DemoTable from '../components/demo-component';
import { ChartManager, ChartRenderer, useChartInitialization } from '../components/ChartManager';

interface WhitepaperPageProps {
  language: Language;
  setCurrentPage: (page: Page) => void;
}

function WhitepaperPageComponent({ language, setCurrentPage }: WhitepaperPageProps) {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const t = whitepaperTranslations[language];
  const content = whitepaperContent[language as keyof typeof whitepaperContent] || whitepaperContent.en;

  // 初始化图表组件
  useChartInitialization();

  useEffect(() => {
    const handleScroll = () => {
      const sections = content.sections;
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(`section-${sections[i].id}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 80) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [content.sections]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: number) => {
    setExpandedSection(sectionId);
    const doScroll = () => {
      const element = document.getElementById(`section-${sectionId}`);
      if (!element) return;
      const topbar = document.querySelector('.ui-topbar');
      const headerEl = (topbar instanceof HTMLElement ? topbar.closest('header') : null) || document.querySelector('header');
      const headerHeight = headerEl instanceof HTMLElement ? headerEl.getBoundingClientRect().height : 0;
      const extraGap = 12;
      const y = element.getBoundingClientRect().top + window.scrollY - headerHeight - extraGap;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        doScroll();
        requestAnimationFrame(() => {
          doScroll();
        });
      });
    });
  };

  const toggleSection = (sectionId: number) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const renderContent = (content: string): ReactNode => {
    const lines = content.split('\n');
    const elements: ReactNode[] = [];
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i].trim();
      
      if (!line) {
        i++;
        continue;
      }
      
      // 处理表格
      if (line.startsWith('|')) {
        let tableLines = [];
        while (i < lines.length && lines[i].trim().startsWith('|')) {
          tableLines.push(lines[i].trim());
          i++;
        }
        
        const rows = tableLines.filter(row => row.trim());
        if (rows.length >= 2) {
          const headerCells = rows[0].split('|').slice(1, -1).map(c => c.trim());
          const columnCount = headerCells.length;
          
          // 检查内容长度，决定字体大小
          let hasLongContent = false;
          let maxCellLen = 0;
          const colMaxLens = Array(Math.max(1, columnCount)).fill(0);
          rows.slice(2).forEach(row => {
            const cells = row.split('|').slice(1, -1);
            cells.forEach((cell, cellIdx) => {
              const len = cell.trim().length;
              maxCellLen = Math.max(maxCellLen, len);
              colMaxLens[cellIdx] = Math.max(colMaxLens[cellIdx] ?? 0, len);
              if (len > 20) {
                hasLongContent = true;
              }
            });
          });

          // 不需要换行的表格：列数少时尽量不换行，只有内容真的变长才换行
          const longContentThreshold = columnCount <= 3 ? 22 : 14;
          const preferNoWrap = !hasLongContent && maxCellLen <= longContentThreshold;
          const headerTextSizeClass = 'text-[13px]';
          const bodyTextSizeClass = 'text-[12px]';
          const cellWhitespaceClass = preferNoWrap ? 'whitespace-nowrap' : 'whitespace-normal';
          const headerWhitespaceClass = preferNoWrap ? 'whitespace-nowrap' : 'whitespace-normal';

          // 列宽策略：用 style.width，避免 Tailwind 动态 class 不生效
          const getColumnWidthPct = (idx: number) => {
            if (columnCount === 2) {
              const leftLen = colMaxLens[0] || 0;
              const rightLen = colMaxLens[1] || 0;
              const denom = Math.max(1, leftLen + rightLen);
              const bias = (leftLen - rightLen) / denom;
              const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
              const leftPct = clamp(42 + bias * 12, 38, 46);
              if (idx === 0) return leftPct;
              return 100 - leftPct;
            }

            if (columnCount === 3) {
              const col2Len = colMaxLens[1] || 0;
              const col3Len = colMaxLens[2] || 0;
              const balanced = Math.abs(col2Len - col3Len) <= 10;

              if (balanced) {
                if (idx === 0) return 22;
                return 39;
              }

              if (idx === 0) return 22;
              if (idx === 1) return 48;
              return 30;
            }

            if (columnCount === 4) {
              if (idx === 0) return 15;
              if (idx === 1) return 25;
              if (idx === 2) return 25;
              return 35;
            }

            if (columnCount === 5) {
              if (idx === 0) return 12;
              if (idx === 1) return 20;
              if (idx === 2) return 20;
              if (idx === 3) return 20;
              return 28;
            }

            if (columnCount === 6) {
              if (idx === 0) return 10;
              if (idx === 1) return 18;
              if (idx === 2) return 18;
              if (idx === 3) return 18;
              if (idx === 4) return 18;
              return 18;
            }

            if (columnCount === 7) {
              if (idx === 0) return 8;
              if (idx === 1) return 15;
              if (idx === 2) return 15;
              if (idx === 3) return 15;
              if (idx === 4) return 15;
              if (idx === 5) return 15;
              return 17;
            }

            // 默认：第一列较窄，其余均分
            if (idx === 0) return 25;
            return 75 / Math.max(1, (columnCount - 1));
          };

          // 2 列表格：两列都居中，更像“左右一分为二，文字在各自区域中间”
          const isTwoCol = columnCount === 2;
          const verticalAlignClass = hasLongContent ? 'align-top' : 'align-middle';

          const numericLike = (value: string) => {
            const v = value.trim();
            if (!v) return false;
            const normalized = v.replace(/,/g, '');
            return /^[-+]?\d+(?:\.\d+)?%?$/.test(normalized);
          };

          const colIsNumeric = Array(Math.max(1, columnCount)).fill(false);
          for (let c = 0; c < columnCount; c++) {
            const values = rows.slice(2).map(r => (r.split('|').slice(1, -1)[c] ?? '').trim()).filter(Boolean);
            if (values.length === 0) {
              colIsNumeric[c] = false;
              continue;
            }
            const numericCount = values.filter(numericLike).length;
            colIsNumeric[c] = numericCount / values.length >= 0.7;
          }

          const getBodyAlignClass = (idx: number) => {
            if (idx === 0) return 'text-left';
            if (colIsNumeric[idx]) return 'text-right tabular-nums';
            if (isTwoCol) return 'text-left';
            if (columnCount >= 3) return 'text-left';
            if (idx === 0) return 'text-left';
            return (colMaxLens[idx] || 0) <= 8 ? 'text-center' : 'text-left';
          };

          const getPaddingClass = (idx: number) => {
            if (columnCount === 2) {
              // 2列表格：优化排版，减少难受感
              if (idx === 0) return 'pl-10 pr-7';
              return 'pl-7 pr-10';
            }

            if (columnCount === 3) {
              if (idx === 0) return 'pl-9 pr-7';
              if (idx === 1) return 'px-7';
              return 'pl-7 pr-9';
            }

            if (columnCount === 4) {
              if (idx === 0) return 'px-6';
              if (idx === 1) return 'px-4';
              if (idx === 2) return 'px-4';
              return 'px-6';
            }

            if (columnCount >= 5) {
              if (idx === 0 || idx === columnCount - 1) return 'px-4';
              return 'px-3';
            }

            return 'px-4';
          };

          // 其他表格的正常渲染
          elements.push(
          <div key={i} className="my-8">
            <div className="ui-panel-soft overflow-hidden">
              <div className="overflow-x-auto">
                <div className="px-4 sm:px-5 py-2">
                  <table className={`table-auto ${
                    isTwoCol
                      ? 'mx-auto w-full max-w-[560px]'
                      : (columnCount === 3 ? 'mx-auto w-full max-w-[720px] min-w-[620px]' : 'w-full min-w-[720px]')
                  } border-0 border-separate`}
                         style={{ border: 'none', borderCollapse: 'separate', borderSpacing: '0' }}>
                    <thead>
                      <tr className="bg-white/[0.06] border-b border-white/10">
                        {headerCells.map((cell, idx) => (
                          <th
                            key={idx}
                            style={{ width: `${getColumnWidthPct(idx)}%` }}
                            className={`${getPaddingClass(idx)} ${isTwoCol ? 'py-4' : 'py-3.5'} font-semibold text-slate-50 align-middle ${
                              idx === 0 ? 'text-left' : (colIsNumeric[idx] ? 'text-right tabular-nums' : 'text-left')
                            } ${idx < columnCount - 1 ? 'border-r border-white/10' : ''} ${(!isTwoCol && columnCount === 3 && idx === 0) ? 'whitespace-nowrap' : headerWhitespaceClass} ${(!isTwoCol && columnCount === 3 && idx === 1) ? 'whitespace-nowrap' : ''}`}
                          >
                            <span className={`block ${headerTextSizeClass} leading-5 tracking-wide text-slate-50/90`}>{cell}</span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rows.slice(2).map((row, rIdx) => (
                        <tr key={rIdx} className="border-0 odd:bg-white/[0.015] hover:bg-white/[0.035] transition-colors"
                            style={{ border: 'none' }}>
                          {row.split('|').slice(1, -1).map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              style={{ width: `${getColumnWidthPct(cIdx)}%`, border: 'none' }}
                              className={`${getPaddingClass(cIdx)} ${isTwoCol ? 'py-4' : 'py-3.5'} text-slate-300 ${verticalAlignClass} ${getBodyAlignClass(cIdx)} ${(!isTwoCol && columnCount === 3 && cIdx === 0) ? 'whitespace-nowrap' : cellWhitespaceClass} ${(!isTwoCol && columnCount === 3 && cIdx === 1) ? 'whitespace-nowrap' : ''} border-0`}
                            >
                              <span className={`block ${bodyTextSizeClass} leading-[22px] tracking-[0.01em] break-words ${cIdx === 0 ? 'text-slate-100/90 font-medium' : 'text-slate-300/80'}`}>{cell}</span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );
        }
        continue; // 跳过后续处理，避免重复渲染
      }
      // 处理列表
      if (line.startsWith('•')) {
        let listItems = [];
        while (i < lines.length && lines[i].trim().startsWith('•')) {
          listItems.push(lines[i].trim());
          i++;
        }
        
        elements.push(
          <ul key={i} className="space-y-3">
            {listItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300 leading-relaxed break-words">
                <span className="inline-flex items-center justify-center w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></span>
                <span dangerouslySetInnerHTML={{
                  __html: item.substring(1).trim()
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-medium">$1</strong>')
                    .replace(/#YouTube#/g, '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(220 38 38); border-color: rgb(220 38 38); color: rgb(255 255 255);">YouTube</span>')
                    .replace(/#Facebook#/g, '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(37 99 235); border-color: rgb(37 99 235); color: rgb(255 255 255);">Facebook</span>')
                    .replace(/#微博#/g, '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(225 29 72); border-color: rgb(225 29 72); color: rgb(255 255 255);">微博</span>')
                    .replace(/#Weibo#/gi, '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(225 29 72); border-color: rgb(225 29 72); color: rgb(255 255 255);">Weibo</span>')
                    .replace(/#门户网站#/g, '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(245 158 11); border-color: rgb(245 158 11); color: rgb(0 0 0);">门户网站</span>')
                    .replace(/#BBS#/gi, '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(5 150 105); border-color: rgb(5 150 105); color: rgb(255 255 255);">BBS</span>')
                    .replace(/#早期博客#/g, '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(101 163 13); border-color: rgb(63 98 18); color: rgb(255 255 255);">早期博客</span>')
                    .replace(/#([^#]+)#/g, '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium bg-lime-500/10 text-lime-300 rounded-lg border border-lime-500/25">$1</span>')
                }} />
              </li>
            ))}
          </ul>
        );
      }
      // 处理✅标题
      else if (line.startsWith('✅')) {
        elements.push(
          <h4 key={i} className="flex items-center gap-4 text-xl font-light text-emerald-400 mt-8 mb-6"
            dangerouslySetInnerHTML={{
              __html: line
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-medium">$1</strong>')
                .replace('✅', '<span class="inline-flex items-center justify-center w-7 h-7 bg-emerald-500 text-white text-lg rounded-xl font-bold">✓</span>')
            }}
          />
        );
        i++;
      }
      // 处理粗体标题
      else if (line.startsWith('**') && line.endsWith('**')) {
        const text = line.slice(2, -2);
        elements.push(
          <h3 key={i} className="text-xl font-light text-lime-400 mt-8 mb-6">
            {text}
          </h3>
        );
        
        // 如果是"架构总览图（逻辑结构）"标题，在其后添加DemoTable
        if (text === '架构总览图（逻辑结构）') {
          elements.push(
            <div key={`demo-${i}`} className="my-8">
              <DemoTable />
            </div>
          );
        }
        
        // 渲染图表
        elements.push(<ChartRenderer key={`chart-${i}`} text={text} index={i} language={language} />);
        
        i++;
      }
      // 处理###标题
      else if (line.startsWith('###')) {
        const rawText = line.replace('###', '').trim();
        const text = rawText.startsWith('**') && rawText.endsWith('**')
          ? rawText.slice(2, -2)
          : rawText;
        elements.push(
          <h3 key={i} className="text-xl font-light text-lime-400 mt-8 mb-6">
            {text}
          </h3>
        );

        // 渲染图表
        elements.push(<ChartRenderer key={`chart-${i}`} text={text} index={i} language={language} />);
        
        i++;
      }
      // 处理*标题*
      else if (line.startsWith('*') && line.endsWith('*')) {
        const text = line.slice(1, -1).trim();
        elements.push(
          <h3 key={i} className="text-xl font-light text-lime-400 mt-8 mb-6">
            {text}
          </h3>
        );
        
        // 渲染图表
        elements.push(<ChartRenderer key={`chart-${i}`} text={text} index={i} language={language} />);
        
        i++;
      }
      // 处理引用块
      else if (line.startsWith('>')) {
        elements.push(
          <blockquote key={i} className="border-l-4 border-lime-500 pl-6 py-4 my-6 bg-lime-500/10 rounded-r-xl text-slate-300 italic leading-relaxed backdrop-blur-sm break-words">
            {line.replace('>', '').trim()}
          </blockquote>
        );
        i++;
      }
      // 处理分隔线
      else if (line.startsWith('---')) {
        elements.push(
          <div key={i} className="my-12">
            <div className="border-t border-white/10"></div>
          </div>
        );
        i++;
      }
      // 处理普通段落
      else {
        let paragraph = line;
        while (i + 1 < lines.length && lines[i + 1].trim() && 
               !lines[i + 1].trim().startsWith('|') && 
               !lines[i + 1].trim().startsWith('•') &&
               !lines[i + 1].trim().startsWith('**') &&
               !lines[i + 1].trim().startsWith('###') &&
               !lines[i + 1].trim().startsWith('*') &&
               !lines[i + 1].trim().startsWith('✅') &&
               !lines[i + 1].trim().startsWith('>') &&
               !lines[i + 1].trim().startsWith('---')) {
          i++;
          paragraph += ' ' + lines[i].trim();
        }
        
        elements.push(
          <p key={i} className="text-slate-300 leading-relaxed mb-4 break-words"
            dangerouslySetInnerHTML={{
              __html: paragraph
                .replace(/\*(.*?)\*/g, '<strong class="text-white font-medium">$1</strong>')
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-medium">$1</strong>')
            }}
          />
        );
        i++;
      }
    }
    
    return <>{elements}</>;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Animated background effect - same as homepage */}
      <div className="fixed inset-0 overflow-hidden z-[-1] opacity-60">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-gradient-to-br from-lime-500/20 via-emerald-500/10 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/3 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-gradient-to-bl from-amber-500/20 via-orange-500/10 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1400"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative max-w-2xl lg:max-w-3xl">
        {/* Decorative elements - same as homepage */}
        <Star className="absolute top-28 right-[15%] text-lime-400/40" size={16} />
        <Star className="absolute top-48 left-[20%] text-lime-300/30" size={12} />
        <Sparkles className="absolute bottom-32 right-[25%] text-lime-400/30" size={18} />

        {/* Header */}
        <header className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs tracking-wide text-lime-300/90 bg-lime-500/5 border border-lime-500/20 rounded-full">
            <span className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse" />
            Whitepaper Documentation
          </div>

          <h1 className="mb-8">
            <div className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tight mb-3">
              {t.title}
            </div>
          </h1>
          
          <p className="text-slate-400 text-lg mb-14 max-w-2xl mx-auto font-light leading-relaxed">
            {t.subtitle}
          </p>
        </header>

        {/* Table of Contents */}
      <nav className="mb-24">
          <div className="ui-panel-soft ui-panel-hover p-8 hover:border-emerald-500/50 transition-all duration-300">
            <h2 className="text-xl font-light text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              {t.tableOfContents}
            </h2>
            <div className="grid gap-3">
              {content.sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`group text-left p-5 rounded-xl transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-lime-600/20 border border-lime-500/30 text-lime-400 shadow-lg shadow-lime-500/10'
                      : 'hover:bg-white/5 border border-transparent text-slate-300 hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 font-mono text-sm ${
                        activeSection === section.id 
                          ? 'bg-lime-600 text-white shadow-lg' 
                          : 'bg-white/10 text-slate-500 group-hover:bg-lime-600/20 group-hover:text-lime-400'
                      }`}>
                        {String(section.id).padStart(2, '0')}
                      </div>
                      <div>
                        <div className={`font-medium transition-colors duration-300 ${
                          activeSection === section.id ? 'text-lime-300' : 'text-white group-hover:text-lime-400'
                        }`}>
                          {section.title}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          Chapter {section.id}
                        </div>
                      </div>
                    </div>
                    <div className={`transition-all duration-300 ${
                      activeSection === section.id ? 'text-lime-400' : 'text-slate-600 group-hover:text-lime-400'
                    }`}>
                      <div className="w-2 h-2 rounded-full bg-current"></div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Content */}
        <main className="space-y-12">
          {content.sections.map((section) => (
            <article
              key={section.id}
              id={`section-${section.id}`}
              className="ui-panel-soft ui-panel-hover group hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full text-left p-8 hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 font-mono text-lg font-bold ${
                      expandedSection === section.id 
                        ? 'bg-lime-600 text-white shadow-lg shadow-lime-500/30' 
                        : 'bg-white/10 text-slate-400 group-hover:bg-lime-600/20 group-hover:text-lime-400'
                    }`}>
                      {String(section.id).padStart(2, '0')}
                    </div>
                    <div>
                      <h2 className={`text-xl md:text-2xl font-light transition-colors duration-300 ${
                        expandedSection === section.id ? 'text-lime-400' : 'text-white group-hover:text-lime-400'
                      }`}>
                        {section.title}
                      </h2>
                      <div className="text-sm text-slate-500 mt-2">
                        {expandedSection === section.id ? 'Click to collapse' : 'Click to expand'}
                      </div>
                    </div>
                  </div>
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                    expandedSection === section.id 
                      ? 'bg-lime-600 text-white rotate-45' 
                      : 'bg-white/10 text-slate-400 group-hover:bg-lime-600/20 group-hover:text-lime-400'
                  }`}>
                    <span className="text-2xl font-light">
                      {expandedSection === section.id ? '−' : '+'}
                    </span>
                  </div>
                </div>
              </button>

              {expandedSection === section.id && (
                <div className="border-t border-white/10 bg-black/20">
                  <div className="p-8">
                    {renderContent(section.content)}
                  </div>
                </div>
              )}
            </article>
          ))}
        </main>

        {/* Back to Home */}
        <div className="mt-24 text-center">
          <button
            onClick={() => setCurrentPage('home')}
            className="group flex items-center justify-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200 mx-auto"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm">{t.backToHome}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export const WhitepaperPage = memo(WhitepaperPageComponent);
