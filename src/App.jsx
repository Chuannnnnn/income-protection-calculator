import React, { useState } from 'react';
import { Shield, AlertTriangle, Calculator, Heart, ArrowRight, Copy, CheckCircle2, MessageSquare } from 'lucide-react';

export default function App() {
  const [annualIncome, setAnnualIncome] = useState(60000);
  const [years, setYears] = useState(20);
  const [copied, setCopied] = useState(false);

  const totalValue = annualIncome * years;

  // --- WhatsApp Link Configuration ---
  // 替换成你自己的电话号码 (已更新为 60132095056, 记得省略+号)
  const phoneNumber = '60132095056'; 
  // 预设信息，方便客户一点击就能发送 (已更新为：我想了解收入保障)
  const prefilledMessage = encodeURIComponent('我想了解收入保障。');
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${prefilledMessage}`;
  // -----------------------------------


  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-MY', { style: 'currency', currency: 'MYR', maximumFractionDigits: 0 }).format(amount);
  };

  const originalText = `什么是“收入保障”？为什么这么多人都需要？

简单讲啦，收入保障就是在保护你未来几十年还没赚到的钱。

我们每天做工、做生意，都是靠收入来撑生活，一旦发生意外、重病或无法工作，收入一断，家里的生活马上受影响。😔

你想下，如果一年赚 RM${(annualIncome/1000).toFixed(0)}k，还会做 ${years} 年，你未来可以赚到的收入其实超过 ${formatCurrency(totalValue)}。
这笔钱，就是你最值钱的资产。💰

收入保障的作用，就是当你无法继续赚钱时，帮你“顶上”那份原本属于你未来的收入。

这样家人还是能继续生活、缴贷款、顾孩子、顾父母，不会因为你倒下，整个家庭跟着倒。❤️

一句话总结：
👉 你倒下，收入不倒。
👉 你不在，生活还能继续。

如果你的收入对家人重要，收入保障就会显得很关键；如果你的收入一点都不重要，那自然就不需要这种东西啦。`;

  const copyToClipboard = () => {
    // navigator.clipboard.writeText is used here for copying text to clipboard
    navigator.clipboard.writeText(originalText); 
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans text-gray-800">
      
      {/* Main Container */}
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Header Section - Visual Hook */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <Shield size={120} className="absolute -right-4 -top-4 transform rotate-12" />
          </div>
          <h2 className="text-2xl font-bold mb-2 relative z-10">你的身价是多少？</h2>
          <p className="text-blue-100 text-sm relative z-10">输入数字，看看你未来的价值</p>
        </div>

        {/* Calculator Section */}
        <div className="p-6 bg-blue-50 border-b border-blue-100">
          <div className="flex items-center gap-2 mb-4 text-indigo-800 font-semibold">
            <Calculator size={20} />
            <span>算一算你的资产</span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">年收入 (RM)</label>
              <input 
                type="number" 
                value={annualIncome}
                onChange={(e) => setAnnualIncome(Number(e.target.value))}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-lg"
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">未来工作年数</label>
              <div className="flex items-center gap-4">
                <input 
                  type="range" 
                  min="5" 
                  max="40" 
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="font-mono text-lg font-bold text-blue-700 w-12">{years}年</span>
              </div>
            </div>

            <div className="mt-4 p-4 bg-white rounded-xl border-l-4 border-yellow-400 shadow-sm">
              <p className="text-xs text-gray-500 uppercase tracking-wider">你未来的潜在总收入</p>
              <p className="text-3xl font-extrabold text-gray-900 mt-1">
                {formatCurrency(totalValue)}
              </p>
            </div>
          </div>
        </div>

        {/* Copy Content Section */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <Heart className="text-red-500 fill-current" size={18} />
              文案预览
            </h3>
            <button 
              onClick={copyToClipboard}
              className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-full transition-all ${
                copied 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />}
              {copied ? '已复制' : '复制文案'}
            </button>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl text-sm leading-relaxed text-gray-700 whitespace-pre-wrap border border-gray-100 shadow-inner">
            <p className="font-medium text-indigo-900 mb-2">📌 什么是“收入保障”？为什么这么多人都需要？</p>
            <p className="mb-3">简单讲啦，收入保障就是在保护你未来几十年还没赚到的钱。</p>
            
            <p className="mb-3">我们每天做工、做生意，都是靠收入来撑生活，一旦发生意外、重病或无法工作，收入一断，家里的生活马上受影响。😔</p>

            <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100 my-3 text-yellow-900">
              <span className="font-bold">💡 你想下：</span><br/>
              如果一年赚 RM{(annualIncome/1000).toFixed(0)}k，还会做 {years} 年，你未来可以赚到的收入其实超过 <span className="font-bold underline decoration-yellow-500 decoration-2">{formatCurrency(totalValue)}</span>。<br/>
              这笔钱，就是你最值钱的资产。💰
            </div>

            <p className="mb-3">收入保障的作用，就是当你无法继续赚钱时，帮你“顶上”那份原本属于你未来的收入。</p>
            
            <p className="mb-3">这样家人还是能继续生活、缴贷款、顾孩子、顾父母，不会因为你倒下，整个家庭跟着倒。❤️</p>

            <div className="font-semibold text-gray-900 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500 my-3">
              一句话总结：<br/>
              👉 你倒下，收入不倒。<br/>
              👉 你不在，生活还能继续。
            </div>

            <p className="text-gray-500 italic text-xs mt-4 border-t pt-2">
              如果你的收入对家人重要，收入保障就会显得很关键；如果你的收入一点都不重要，那自然就不需要这种东西啦。
            </p>
          </div>
        </div>

        {/* Footer CTA - Now a WhatsApp Link */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 text-center">
          <a
            href={whatsappLink}
            target="_blank" // 确保在新标签页打开，不会离开你的社交平台
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transform transition hover:-translate-y-1"
          >
            马上 WhatsApp 免费咨询 <MessageSquare size={18} />
          </a>
          <p className="text-xs text-gray-500 mt-2">点击直接发起 WhatsApp 对话</p>
        </div>

      </div>
    </div>
  );
}