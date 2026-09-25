import React, { useState } from 'react';
import {
  Compass,
  Building2,
  Code2,
  Sparkles,
  PhoneCall,
  ExternalLink,
  Laptop,
  Check
} from 'lucide-react';
import { ActiveTab } from './types';
import { AhouraiHub } from './components/hub/AhouraiHub';
import { AhouraiNestPage } from './components/nest/AhouraiNestPage';
import { AhouraiDigitalPage } from './components/digital/AhouraiDigitalPage';
import { RecommendationsPage } from './components/recommendations/RecommendationsPage';
import { ContactModal } from './components/common/ContactModal';
import { AhouraiWingedLogo } from './components/common/AhouraiLogo';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('hub');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState('عمومی');

  const handleOpenContact = (topic = 'عمومی') => {
    setContactTopic(topic);
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Top Global Multi-Site Switcher Bar */}
      <nav
        aria-label="پورتال‌های گروه اهورایی"
        className="sticky top-0 z-50 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/90 px-3 sm:px-6 py-2.5 shadow-md flex items-center justify-between gap-2"
      >
        <div className="flex items-center gap-3">
          {/* Brand mark */}
          <div
            onClick={() => setActiveTab('hub')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <AhouraiWingedLogo size="sm" showText={false} />
            <span className="hidden md:inline-block font-extrabold text-sm tracking-wider text-white group-hover:text-cyan-400 transition-colors">
              اکوسیستم وب‌سایت‌های اهورایی
            </span>
          </div>

          {/* Quick Domain Indicator badge */}
          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
            <span>دامنه فعال فعلی:</span>
            <span className="font-mono text-cyan-400 font-semibold">
              {activeTab === 'hub' ? 'ahourai.ir' : activeTab === 'nest' ? 'ahourainest.ir' : activeTab === 'digital' ? 'ahouraidigital.ir' : 'راهنمای استراتژیک'}
            </span>
          </div>
        </div>

        {/* Tab Buttons (Each in a separate tab as requested by the user!) */}
        <div className="flex items-center gap-1 sm:gap-1.5 p-1 bg-slate-900/90 rounded-2xl border border-slate-800 text-xs font-semibold overflow-x-auto max-w-full">
          
          {/* Tab 1: Hub (طرح اصلی ارسالی) */}
          <button
            type="button"
            onClick={() => setActiveTab('hub')}
            className={`px-3 sm:px-4 py-2 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'hub'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>۱. هاب اصلی (ahourai.ir)</span>
          </button>

          {/* Tab 2: Ahourai Nest (بازطراحی آشیانه) */}
          <button
            type="button"
            onClick={() => setActiveTab('nest')}
            className={`px-3 sm:px-4 py-2 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'nest'
                ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 shadow-md font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>۲. آشیانه اهورایی (Nest)</span>
          </button>

          {/* Tab 3: Ahourai Digital (پورتال محتوای دیجیتال) */}
          <button
            type="button"
            onClick={() => setActiveTab('digital')}
            className={`px-3 sm:px-4 py-2 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'digital'
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>۳. اهورایی دیجیتال</span>
          </button>

          {/* Tab 4: Strategic Recommendations */}
          <button
            type="button"
            onClick={() => setActiveTab('recommendations')}
            className={`px-3 sm:px-4 py-2 rounded-xl transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'recommendations'
                ? 'bg-emerald-600 text-white shadow-md font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">۴. پیشنهادات و سئو</span>
            <span className="sm:hidden">پیشنهادات</span>
          </button>

        </div>

        {/* Universal Contact Trigger */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleOpenContact('مشاوره عمومی')}
            className="px-3 sm:px-4 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-cyan-400 hover:text-cyan-300 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm whitespace-nowrap"
            title="باز کردن پنجره ارتباط با ما"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">تماس با ما</span>
          </button>
        </div>
      </nav>

      {/* Main View Area Rendered Based on Active Tab */}
      <div className="flex-1 w-full">
        {activeTab === 'hub' && (
          <AhouraiHub
            onNavigateTab={(tab) => setActiveTab(tab)}
            onOpenContact={() => handleOpenContact('هاب مرکزی اهورایی')}
          />
        )}

        {activeTab === 'nest' && (
          <AhouraiNestPage
            onBackToHub={() => setActiveTab('hub')}
            onOpenContact={() => handleOpenContact('آشیانه اهورایی: پروژه ساختمانی')}
          />
        )}

        {activeTab === 'digital' && (
          <AhouraiDigitalPage
            onBackToHub={() => setActiveTab('hub')}
            onOpenContact={() => handleOpenContact('اهورایی دیجیتال: پروژه فناوری و وب')}
          />
        )}

        {activeTab === 'recommendations' && (
          <RecommendationsPage
            onBackToHub={() => setActiveTab('hub')}
            onOpenContact={() => handleOpenContact('مشاوره استراتژی انتقال')}
          />
        )}
      </div>

      {/* Floating Quick Contact Button on bottom left */}
      <button
        type="button"
        onClick={() => handleOpenContact('دکمه شناور تماس')}
        className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all group flex items-center gap-2"
        title="ارتباط با ما"
        aria-label="تماس با ما"
      >
        <PhoneCall className="w-5 h-5 animate-pulse" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pl-1">
          ارتباط با ما
        </span>
      </button>

      {/* The Exact Contact Modal Requested with Blurred Backdrop and Outside Click Dismiss */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        defaultTopic={contactTopic}
      />

    </div>
  );
}
