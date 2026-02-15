import React from 'react';
import type { Language } from '../App';

const OptimizedArchitectureImage: React.FC<{ language?: Language }> = ({ language }) => {
  const baseUrl = ((import.meta as any).env?.BASE_URL as string | undefined) ?? '/';

  const normalizedLang = (language || 'en').toLowerCase();
  const primarySrc = `${baseUrl}architecture-diagram-anchors.${normalizedLang}.svg`;
  const fallbackEnSrc = `${baseUrl}architecture-diagram-anchors.en.svg`;
  const fallbackZhSrc = `${baseUrl}architecture-diagram-anchors.zh.svg`;
  const fallbackSrc = `${baseUrl}architecture-diagram-anchors.svg`;

  return (
    <div className="my-8 flex justify-center">
      <div className="relative w-full max-w-3xl">
        <div className="w-full flex justify-center">
          <div className="relative w-full" style={{ maxHeight: '400px', aspectRatio: '2570 / 1434' }}>
            <img
              src={primarySrc}
              alt="WA Protocol Architecture Diagram"
              className="w-full h-full rounded-lg"
              style={{ objectFit: 'contain' }}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                const currentSrc = target.getAttribute('src') || '';

                if (currentSrc === primarySrc && primarySrc !== fallbackEnSrc) {
                  target.src = fallbackEnSrc;
                  return;
                }

                if (currentSrc === fallbackEnSrc && fallbackEnSrc !== fallbackZhSrc) {
                  target.src = fallbackZhSrc;
                  return;
                }

                if (currentSrc !== fallbackSrc) {
                  target.src = fallbackSrc;
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizedArchitectureImage;
