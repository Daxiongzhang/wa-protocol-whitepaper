import React from 'react';

const DemoTable = () => {
  const tableData = [
    {
      feature: 'AI智能分析',
      description: '基于深度学习的智能数据分析系统，提供实时洞察和预测'
    },
    {
      feature: '数据可视化',
      description: '直观的图表展示，支持多种数据格式和自定义样式'
    },
    {
      feature: '实时监控',
      description: '24/7全天候监控系统，及时发现异常并自动报警'
    },
    {
      feature: '云端同步',
      description: '多设备数据同步，随时随地访问和管理您的数据'
    }
  ];

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
      <div className="overflow-x-auto">
        <table className="table-fixed w-full">
          {/* 表头 */}
          <thead>
            <tr className="bg-white/5 border-b border-white/10">
              <th className="w-1/3 px-6 py-4 text-left font-semibold text-white">
                功能名称
              </th>
              <th className="w-2/3 px-6 py-4 text-left font-semibold text-white">
                功能描述
              </th>
            </tr>
          </thead>

          {/* 表体 */}
          <tbody>
            {tableData.map((item, index) => (
              <tr 
                key={index}
                className="hover:bg-white/5 transition-colors duration-200 border-b border-white/5 last:border-b-0"
              >
                <td className="px-6 py-4 text-slate-300 align-middle">
                  <span className="inline-block text-sm leading-normal">
                    {item.feature}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-300 align-middle">
                  <span className="inline-block text-sm leading-normal">
                    {item.description}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DemoTable;
