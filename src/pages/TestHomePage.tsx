import React from 'react';
import { memo } from 'react';
import type { Language, Page } from '../App';

function TestHomePage({ language, setCurrentPage }: { language: Language; setCurrentPage: (page: Page) => void }) {
  return (
    <>
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-black">
        {/* Background Image */}
        <img
          src="/v3/bankground.png?version=4"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center pt-8">
            <h1 className="text-4xl text-white font-bold mb-4">测试页面</h1>
            <p className="text-white mb-4">如果你看到背景图，说明路径正确</p>
            <button 
              onClick={() => setCurrentPage('whitepaper')}
              className="px-6 py-3 bg-lime-500 text-white rounded-lg hover:bg-lime-600"
            >
              进入白皮书
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(TestHomePage);
