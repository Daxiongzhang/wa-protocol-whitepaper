import React from 'react';

const FlowDiagramImage = () => {
  return (
    <div className="my-8 flex justify-center">
      <div className="relative max-w-4xl w-full">
        {/* 直接显示流程图 */}
        <div className="w-full flex justify-center">
          <img 
            src="/wa-protocol-whitepaper/flow-diagram.png" 
            alt="WA Protocol 流程结构图"
            className="max-w-full h-auto rounded-lg"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              // 图片加载失败时显示提示
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const placeholder = target.parentElement?.querySelector('.placeholder') as HTMLElement;
              if (placeholder) placeholder.style.display = 'flex';
            }}
          />
          
          {/* 图片加载失败或不存在时的占位符 */}
          <div className="placeholder hidden flex-col items-center justify-center w-full h-64 bg-white/10 rounded-lg border-2 border-dashed border-white/20">
            <svg className="w-12 h-12 text-slate-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-slate-400 text-sm text-center">
              流程图已上传：<br/>
              <code className="text-lime-400">/public/flow-diagram.png</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowDiagramImage;
