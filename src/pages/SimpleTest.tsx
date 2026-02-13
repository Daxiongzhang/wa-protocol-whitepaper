import React from 'react';

function SimpleTest() {
  return (
    <div style={{ padding: '20px', fontSize: '18px' }}>
      <h1>简单测试页面</h1>
      <p>如果你看到这个，说明React正常工作</p>
      <img 
        src="/v3/bankground.png?version=4" 
        alt="测试背景图"
        style={{ width: '200px', height: '150px', border: '2px solid red' }}
      />
      <p>背景图路径: /bankground.png?version=4</p>
    </div>
  );
}

export default SimpleTest;
