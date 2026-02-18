import type { ReactNode } from 'react';
import type { Language } from '../../App';
import { ChartRenderer } from '../ChartManager';
import DemoTable from '../demo-component';

interface WhitepaperContentRendererProps {
  content: string;
  language: Language;
}

export function WhitepaperContentRenderer({ content, language }: WhitepaperContentRendererProps) {
  const renderContent = (raw: string): ReactNode => {
    const lines = raw.split('\n');
    const elements: ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i].trim();

      if (!line) {
        i++;
        continue;
      }

      if (line.startsWith('|')) {
        const tableLines: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith('|')) {
          tableLines.push(lines[i].trim());
          i++;
        }

        const rows = tableLines.filter((row) => row.trim());
        if (rows.length >= 2) {
          const headerCells = rows[0].split('|').slice(1, -1).map((c) => c.trim());
          const columnCount = headerCells.length;

          let hasLongContent = false;
          let maxCellLen = 0;
          const colMaxLens = Array(Math.max(1, columnCount)).fill(0);
          rows.slice(2).forEach((row) => {
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

          const longContentThreshold = columnCount <= 3 ? 22 : 14;
          const preferNoWrap = !hasLongContent && maxCellLen <= longContentThreshold;
          const headerTextSizeClass = 'text-[13px]';
          const bodyTextSizeClass = 'text-[12px]';
          const cellWhitespaceClass = preferNoWrap ? 'whitespace-nowrap' : 'whitespace-normal';
          const headerWhitespaceClass = preferNoWrap ? 'whitespace-nowrap' : 'whitespace-normal';

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

            if (idx === 0) return 25;
            return 75 / Math.max(1, columnCount - 1);
          };

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
            const values = rows
              .slice(2)
              .map((r) => (r.split('|').slice(1, -1)[c] ?? '').trim())
              .filter(Boolean);
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

          elements.push(
            <div key={i} className="my-8">
              <div className="ui-panel-soft overflow-hidden">
                <div className="overflow-x-auto">
                  <div className="px-4 sm:px-5 py-2">
                    <table
                      className={`table-auto ${
                        isTwoCol
                          ? 'mx-auto w-full max-w-[560px]'
                          : columnCount === 3
                            ? 'mx-auto w-full max-w-[720px] min-w-[620px]'
                            : 'w-full min-w-[720px]'
                      } border-0 border-separate`}
                      style={{ border: 'none', borderCollapse: 'separate', borderSpacing: '0' }}
                    >
                      <thead>
                        <tr className="bg-white/[0.06] border-b border-white/10">
                          {headerCells.map((cell, idx) => (
                            <th
                              key={idx}
                              style={{ width: `${getColumnWidthPct(idx)}%` }}
                              className={`${getPaddingClass(idx)} ${
                                isTwoCol ? 'py-4' : 'py-3.5'
                              } font-semibold text-slate-50 align-middle ${
                                idx === 0 ? 'text-left' : colIsNumeric[idx] ? 'text-right tabular-nums' : 'text-left'
                              } ${idx < columnCount - 1 ? 'border-r border-white/10' : ''} ${
                                !isTwoCol && columnCount === 3 && idx === 0 ? 'whitespace-nowrap' : headerWhitespaceClass
                              } ${!isTwoCol && columnCount === 3 && idx === 1 ? 'whitespace-nowrap' : ''}`}
                            >
                              <span className={`block ${headerTextSizeClass} leading-5 tracking-wide text-slate-50/90`}>
                                {cell}
                              </span>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {rows.slice(2).map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className="border-0 odd:bg-white/[0.015] hover:bg-white/[0.035] transition-colors"
                            style={{ border: 'none' }}
                          >
                            {row
                              .split('|')
                              .slice(1, -1)
                              .map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  style={{ width: `${getColumnWidthPct(cIdx)}%`, border: 'none' }}
                                  className={`${getPaddingClass(cIdx)} ${
                                    isTwoCol ? 'py-4' : 'py-3.5'
                                  } text-slate-300 ${verticalAlignClass} ${getBodyAlignClass(cIdx)} ${
                                    !isTwoCol && columnCount === 3 && cIdx === 0 ? 'whitespace-nowrap' : cellWhitespaceClass
                                  } ${!isTwoCol && columnCount === 3 && cIdx === 1 ? 'whitespace-nowrap' : ''} border-0`}
                                >
                                  <span
                                    className={`block ${bodyTextSizeClass} leading-[22px] tracking-[0.01em] break-words ${
                                      cIdx === 0 ? 'text-slate-100/90 font-medium' : 'text-slate-300/80'
                                    }`}
                                  >
                                    {cell}
                                  </span>
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

        continue;
      }

      if (line.startsWith('•')) {
        const listItems: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith('•')) {
          listItems.push(lines[i].trim());
          i++;
        }

        elements.push(
          <ul key={i} className="space-y-3">
            {listItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300 leading-relaxed break-words">
                <span className="inline-flex items-center justify-center w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0" />
                <span
                  dangerouslySetInnerHTML={{
                    __html: item
                      .substring(1)
                      .trim()
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-medium">$1</strong>')
                      .replace(
                        /#YouTube#/g,
                        '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(220 38 38); border-color: rgb(220 38 38); color: rgb(255 255 255);">YouTube</span>'
                      )
                      .replace(
                        /#Facebook#/g,
                        '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(37 99 235); border-color: rgb(37 99 235); color: rgb(255 255 255);">Facebook</span>'
                      )
                      .replace(
                        /#微博#/g,
                        '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(225 29 72); border-color: rgb(225 29 72); color: rgb(255 255 255);">微博</span>'
                      )
                      .replace(
                        /#Weibo#/gi,
                        '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(225 29 72); border-color: rgb(225 29 72); color: rgb(255 255 255);">Weibo</span>'
                      )
                      .replace(
                        /#门户网站#/g,
                        '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(245 158 11); border-color: rgb(245 158 11); color: rgb(0 0 0);">门户网站</span>'
                      )
                      .replace(
                        /#Portal sites#/gi,
                        '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(245 158 11); border-color: rgb(245 158 11); color: rgb(0 0 0);">Portal sites</span>'
                      )
                      .replace(
                        /#Portal site#/gi,
                        '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(245 158 11); border-color: rgb(245 158 11); color: rgb(0 0 0);">Portal site</span>'
                      )
                      .replace(
                        /#Situs portal#/gi,
                        '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(245 158 11); border-color: rgb(245 158 11); color: rgb(0 0 0);">Situs portal</span>'
                      )
                      .replace(
                        /#ポータルサイト#/g,
                        '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(245 158 11); border-color: rgb(245 158 11); color: rgb(0 0 0);">ポータルサイト</span>'
                      )
                      .replace(
                        /#포털 사이트#/g,
                        '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(245 158 11); border-color: rgb(245 158 11); color: rgb(0 0 0);">포털 사이트</span>'
                      )
                      .replace(
                        /#BBS#/gi,
                        '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(5 150 105); border-color: rgb(5 150 105); color: rgb(255 255 255);">BBS</span>'
                      )
                      .replace(
                        /#早期博客#/g,
                        '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(101 163 13); border-color: rgb(63 98 18); color: rgb(255 255 255);">早期博客</span>'
                      )
                      .replace(
                        /#early blogs#/gi,
                        '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(101 163 13); border-color: rgb(63 98 18); color: rgb(255 255 255);">early blogs</span>'
                      )
                      .replace(
                        /#early blog#/gi,
                        '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(101 163 13); border-color: rgb(63 98 18); color: rgb(255 255 255);">early blog</span>'
                      )
                      .replace(
                        /#Blog awal#/gi,
                        '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(101 163 13); border-color: rgb(63 98 18); color: rgb(255 255 255);">Blog awal</span>'
                      )
                      .replace(
                        /#初期ブログ#/g,
                        '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(101 163 13); border-color: rgb(63 98 18); color: rgb(255 255 255);">初期ブログ</span>'
                      )
                      .replace(
                        /#초기 블로그#/g,
                        '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium rounded-lg border" style="background-color: rgb(101 163 13); border-color: rgb(63 98 18); color: rgb(255 255 255);">초기 블로그</span>'
                      )
                      .replace(
                        /#([^#]+)#/g,
                        '<span class="inline-flex items-center px-2 py-1 mx-1 text-xs font-medium bg-lime-500/10 text-lime-300 rounded-lg border border-lime-500/25">$1</span>'
                      ),
                  }}
                />
              </li>
            ))}
          </ul>
        );

        continue;
      }

      if (line.startsWith('✅')) {
        elements.push(
          <h4
            key={i}
            className="flex items-center gap-4 text-xl font-light text-emerald-400 mt-8 mb-6"
            dangerouslySetInnerHTML={{
              __html: line
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-medium">$1</strong>')
                .replace(
                  '✅',
                  '<span class="inline-flex items-center justify-center w-7 h-7 bg-emerald-500 text-white text-lg rounded-xl font-bold">✓</span>'
                ),
            }}
          />
        );
        i++;
        continue;
      }

      if (line.startsWith('**') && line.endsWith('**')) {
        const text = line.slice(2, -2);
        elements.push(
          <h3 key={i} className="text-xl font-light text-lime-400 mt-8 mb-6">
            {text}
          </h3>
        );

        if (text === '架构总览图（逻辑结构）') {
          elements.push(
            <div key={`demo-${i}`} className="my-8">
              <DemoTable />
            </div>
          );
        }

        elements.push(<ChartRenderer key={`chart-${i}`} text={text} index={i} language={language} />);

        i++;
        continue;
      }

      if (line.startsWith('###')) {
        const rawText = line.replace('###', '').trim();
        const text = rawText.startsWith('**') && rawText.endsWith('**') ? rawText.slice(2, -2) : rawText;
        elements.push(
          <h3 key={i} className="text-xl font-light text-lime-400 mt-8 mb-6">
            {text}
          </h3>
        );

        elements.push(<ChartRenderer key={`chart-${i}`} text={text} index={i} language={language} />);

        i++;
        continue;
      }

      if (line.startsWith('*') && line.endsWith('*')) {
        const text = line.slice(1, -1).trim();
        elements.push(
          <h3 key={i} className="text-xl font-light text-lime-400 mt-8 mb-6">
            {text}
          </h3>
        );

        elements.push(<ChartRenderer key={`chart-${i}`} text={text} index={i} language={language} />);

        i++;
        continue;
      }

      if (line.startsWith('>')) {
        elements.push(
          <blockquote
            key={i}
            className="border-l-4 border-lime-500 pl-6 py-4 my-6 bg-lime-500/10 rounded-r-xl text-slate-300 italic leading-relaxed backdrop-blur-sm break-words"
          >
            {line.replace('>', '').trim()}
          </blockquote>
        );
        i++;
        continue;
      }

      if (line.startsWith('---')) {
        elements.push(
          <div key={i} className="my-12">
            <div className="border-t border-white/10" />
          </div>
        );
        i++;
        continue;
      }

      let paragraph = line;
      while (
        i + 1 < lines.length &&
        lines[i + 1].trim() &&
        !lines[i + 1].trim().startsWith('|') &&
        !lines[i + 1].trim().startsWith('•') &&
        !lines[i + 1].trim().startsWith('**') &&
        !lines[i + 1].trim().startsWith('###') &&
        !lines[i + 1].trim().startsWith('*') &&
        !lines[i + 1].trim().startsWith('✅') &&
        !lines[i + 1].trim().startsWith('>') &&
        !lines[i + 1].trim().startsWith('---')
      ) {
        i++;
        paragraph += ' ' + lines[i].trim();
      }

      elements.push(
        <p
          key={i}
          className="text-slate-300 leading-relaxed mb-4 break-words"
          dangerouslySetInnerHTML={{
            __html: paragraph
              .replace(/\*(.*?)\*/g, '<strong class="text-white font-medium">$1</strong>')
              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-medium">$1</strong>'),
          }}
        />
      );
      i++;
    }

    return <>{elements}</>;
  };

  return <>{renderContent(content)}</>;
}
