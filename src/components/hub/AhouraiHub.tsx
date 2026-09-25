import React, { useState } from 'react';
import {
  Menu,
  X,
  ArrowLeft,
  Award,
  Layers,
  Users,
  Compass,
  Building2,
  Code2,
  PhoneCall,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { AhouraiWingedLogo } from '../common/AhouraiLogo';
import { ActiveTab } from '../../types';

interface AhouraiHubProps {
  onNavigateTab: (tab: ActiveTab) => void;
  onOpenContact: () => void;
}

export const AhouraiHub: React.FC<AhouraiHubProps> = ({
  onNavigateTab,
  onOpenContact
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="relative min-h-[calc(100vh-64px)] w-full flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#F3F9FF] via-[#EAF4FE] to-[#DCECFD] dark:from-[#060D1A] dark:via-[#09152A] dark:to-[#040914] text-slate-800 dark:text-slate-100 transition-colors duration-500">
      {/* Background ambient lighting matching the mockup */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-cyan-400/15 via-blue-500/10 to-transparent pointer-events-none blur-3xl" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-400/20 via-sky-300/15 to-transparent rounded-full blur-[100px] pointer-events-none" />
      
      {/* Subtle organic light curves like the mockup's soft aurora background */}
      <div className="absolute inset-0 opacity-40 dark:opacity-25 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
          <path
            d="M-100 200 C 300 100, 600 350, 1100 150 C 1300 80, 1500 220, 1600 260 L 1600 0 L -100 0 Z"
            fill="url(#aurora-grad)"
          />
          <defs>
            <linearGradient id="aurora-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Top Navigation Bar (Zone 1: Menu, Zone 2: Title, Zone 3: Ahourai Logo) */}
      <header className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between">
        {/* Hamburger Menu on the Right/Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDrawerOpen(true)}
            className="p-2.5 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-cyan-500 hover:border-cyan-400/50 transition-all shadow-sm group"
            title="منوی دسترسی سریع"
            aria-label="منو"
          >
            <Menu className="w-6 h-6 transition-transform group-hover:scale-105" />
          </button>

          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-slate-800 transition-all shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>تماس با ما</span>
          </button>
        </div>

        {/* Current Domain Badge Indicator */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-700 dark:text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
          <span className="font-mono">ahourai.ir</span>
          <span className="text-slate-400">·</span>
          <span>هاب مرکزی ارتباطی</span>
        </div>

        {/* Brand Lockup in Header */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigateTab('hub')}>
          <div className="text-left hidden sm:block">
            <span className="block text-sm font-extrabold tracking-widest text-slate-900 dark:text-white uppercase font-sans">
              AHOURAI
            </span>
            <span className="text-[10px] text-cyan-500 font-semibold tracking-wider">
              گروه مهندسی و فناوری
            </span>
          </div>
          <AhouraiWingedLogo size="sm" showText={false} />
        </div>
      </header>

      {/* Main Hub Content Area */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center max-w-6xl mx-auto w-full px-4 sm:px-6 py-6 md:py-10">
        
        {/* Central Brand Crest & Welcome Header (Matches Mockup) */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12 animate-fadeIn">
          {/* Large Winged Emblem */}
          <div className="relative mb-3 group">
            <div className="absolute inset-0 bg-cyan-400/25 rounded-full blur-2xl transform scale-110 group-hover:scale-125 transition-transform duration-500" />
            <AhouraiWingedLogo size="xl" showText={true} />
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-4 mb-3">
            به اهورایی خوش آمدید
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            یک مجموعه، دو مسیر تخصصی؛ حوزه‌ای را که می‌خواهید دنبال کنید انتخاب کنید.
          </p>
        </div>

        {/* The Two Prominent Destination Glassmorphic Cards (Matches Mockup) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl mx-auto">
          
          {/* Card 1: Ahourai Nest (آشیانه اهورایی) */}
          <div className="group relative rounded-3xl overflow-hidden bg-white/75 dark:bg-slate-900/75 backdrop-blur-xl border border-white/60 dark:border-amber-400/20 shadow-xl shadow-slate-200/50 dark:shadow-black/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-amber-400/40 flex flex-col">
            {/* Ambient warm glow on hover */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-amber-400/15 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-400/25 transition-all" />

            {/* Visual Header / Banner Backdrop */}
            <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-gradient-to-b from-amber-50 to-amber-100/50 dark:from-slate-800 dark:to-slate-900">
              {/* Architecture image overlay */}
              <img
                src="/src/assets/images/ahourai_nest_villa_hero_1790348329382.jpg"
                alt="معماری و ویلای لوکس آشیانه اهورایی"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-black/30" />

              {/* Logo / Badge in Center */}
              <div className="absolute top-4 inset-x-0 flex flex-col items-center justify-center text-center">
                <div className="px-5 py-2.5 rounded-2xl bg-white/90 dark:bg-slate-950/85 backdrop-blur-md border border-amber-400/30 shadow-lg flex flex-col items-center">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-black tracking-widest text-slate-900 dark:text-white uppercase font-sans">
                      AHOURAI NEST
                    </span>
                  </div>
                  <span className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold tracking-wide">
                    — آشیانه‌ای به سبک اهورایی —
                  </span>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-7 flex flex-col items-center text-center flex-1 justify-between">
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1.5">
                  آشیانه اهورایی
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium mb-4">
                  معماری، ساختمان و دکوراسیون
                </p>

                {/* Scope highlights */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                  {['طراحی ویلا و نما', 'مدلسازی ۳بعدی تخصصی', 'بازسازی لوکس', 'نظارت و اجرا'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-lg bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button: "ورود به آشیانه" */}
              <button
                type="button"
                onClick={() => onNavigateTab('nest')}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-white font-bold text-sm shadow-lg shadow-amber-600/25 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                <span>ورود به آشیانه</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1.5" />
              </button>
            </div>

            {/* Footer domain tag */}
            <div className="px-6 py-2 bg-slate-50/70 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
              <span className="font-mono text-amber-600 dark:text-amber-400">ahourainest.ir</span>
              <span>دامنه خدمات ساختمانی</span>
            </div>
          </div>

          {/* Card 2: Ahourai Digital (اهورایی دیجیتال) */}
          <div className="group relative rounded-3xl overflow-hidden bg-white/75 dark:bg-slate-900/75 backdrop-blur-xl border border-white/60 dark:border-cyan-400/20 shadow-xl shadow-slate-200/50 dark:shadow-black/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-cyan-400/40 flex flex-col">
            {/* Ambient cyan glow on hover */}
            <div className="absolute -top-20 -left-20 w-48 h-48 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-400/25 transition-all" />

            {/* Visual Header / Banner Backdrop */}
            <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-gradient-to-b from-cyan-50 to-blue-100/50 dark:from-slate-800 dark:to-slate-900">
              {/* Tech workspace image overlay */}
              <img
                src="/src/assets/images/ahourai_digital_cloud_tech_1790348352252.jpg"
                alt="راهکارهای فناوری و دیجیتال اهورایی"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-black/30" />

              {/* Logo / Badge in Center */}
              <div className="absolute top-4 inset-x-0 flex flex-col items-center justify-center text-center">
                <div className="px-5 py-2.5 rounded-2xl bg-white/90 dark:bg-slate-950/85 backdrop-blur-md border border-cyan-400/30 shadow-lg flex flex-col items-center">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-black tracking-widest text-slate-900 dark:text-white uppercase font-sans">
                      AHOURAI DIGITAL
                    </span>
                  </div>
                  <span className="text-[11px] text-cyan-600 dark:text-cyan-400 font-semibold tracking-wide">
                    — نوآوری به سبک دیجیتال اهورایی —
                  </span>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-7 flex flex-col items-center text-center flex-1 justify-between">
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1.5">
                  اهورایی دیجیتال
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium mb-4">
                  وب، فناوری و راهکارهای دیجیتال
                </p>

                {/* Scope highlights */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                  {['پلتفرم‌های وب و کلود', 'هوش مصنوعی و اتوماسیون', 'برندینگ سازمانی', 'سئو و محتوای تخصصی'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-lg bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button: "ورود به دیجیتال" */}
              <button
                type="button"
                onClick={() => onNavigateTab('digital')}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-600/25 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                <span>ورود به دیجیتال</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1.5" />
              </button>
            </div>

            {/* Footer domain tag */}
            <div className="px-6 py-2 bg-slate-50/70 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
              <span className="font-mono text-cyan-600 dark:text-cyan-400">ahouraidigital.ir</span>
              <span>پورتال تخصصی محتوای دیجیتال</span>
            </div>
          </div>

        </div>

        {/* Bottom Statistics Bar (Matches Mockup) */}
        <div className="w-full max-w-3xl mt-8 sm:mt-12 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/60 dark:border-slate-800/80 rounded-2xl p-4 sm:p-5 shadow-lg shadow-slate-200/50 dark:shadow-black/30">
          <div className="grid grid-cols-3 divide-x-reverse divide-x divide-slate-200/80 dark:divide-slate-800 text-center">
            
            {/* Stat 1: 8 Specialized Pillars */}
            <div className="flex flex-col items-center justify-center px-2">
              <div className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 mb-1">
                <Users className="w-5 h-5" />
                <span className="text-xl sm:text-2xl font-black font-mono">۸</span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
                حوزه تخصصی
              </span>
            </div>

            {/* Stat 2: 2000+ Projects */}
            <div className="flex flex-col items-center justify-center px-2">
              <div className="flex items-center gap-1.5 text-blue-600 dark:text-sky-400 mb-1">
                <Layers className="w-5 h-5" />
                <span className="text-xl sm:text-2xl font-black font-mono">+ ۲,۰۰۰</span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
                پروژه اجرا شده
              </span>
            </div>

            {/* Stat 3: 25+ Years of Experience */}
            <div className="flex flex-col items-center justify-center px-2">
              <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 mb-1">
                <Award className="w-5 h-5" />
                <span className="text-xl sm:text-2xl font-black font-mono">+ ۲۵</span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
                سال تجربه
              </span>
            </div>

          </div>
        </div>

        {/* Quick Contact Trigger Pill */}
        <div className="mt-6 flex items-center justify-center">
          <button
            onClick={onOpenContact}
            className="group px-6 py-2.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 transition-all flex items-center gap-2.5"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-500 group-hover:scale-125 transition-transform" />
            <span>نیاز به راهنمایی یا مشاوره دارید؟ با ما در ارتباط باشید</span>
            <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>

      </main>

      {/* Footer Note */}
      <footer className="relative z-20 w-full py-4 px-6 border-t border-slate-200/50 dark:border-slate-900 text-center text-xs text-slate-500 dark:text-slate-400">
        <p>© تمام حقوق برای گروه اهورایی محفوظ است | سامانه مدیریت یکپارچه پورتال‌های تخصصی دیجیتال و معماری</p>
      </footer>

      {/* Drawer Menu for Hamburger */}
      {drawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex justify-start animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm h-full bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <AhouraiWingedLogo size="sm" showText={false} />
                  <span className="font-bold text-base text-slate-900 dark:text-white">
                    منوی دسترسی اهورایی
                  </span>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="mt-6 space-y-2">
                <button
                  onClick={() => {
                    setDrawerOpen(false);
                    onNavigateTab('hub');
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-cyan-50 dark:hover:bg-slate-800/70 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-colors text-right"
                >
                  <div className="flex items-center gap-3">
                    <Compass className="w-5 h-5 text-cyan-500" />
                    <span>هاب مرکزی (صفحه فعلی)</span>
                  </div>
                  <ChevronRight className="w-4 h-4 rotate-180 text-slate-400" />
                </button>

                <button
                  onClick={() => {
                    setDrawerOpen(false);
                    onNavigateTab('nest');
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-950/20 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-colors text-right"
                >
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-amber-500" />
                    <div>
                      <span>آشیانه اهورایی</span>
                      <span className="block text-[11px] text-slate-500 font-normal">معماری، ساختمان، بازسازی و رندر ۳D</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 rotate-180 text-slate-400" />
                </button>

                <button
                  onClick={() => {
                    setDrawerOpen(false);
                    onNavigateTab('digital');
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-sky-50 dark:hover:bg-sky-950/20 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-colors text-right"
                >
                  <div className="flex items-center gap-3">
                    <Code2 className="w-5 h-5 text-sky-500" />
                    <div>
                      <span>اهورایی دیجیتال</span>
                      <span className="block text-[11px] text-slate-500 font-normal">وب، فناوری، AI و محتوای دیجیتال</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 rotate-180 text-slate-400" />
                </button>

                <button
                  onClick={() => {
                    setDrawerOpen(false);
                    onNavigateTab('recommendations');
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/20 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-colors text-right"
                >
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-emerald-500" />
                    <div>
                      <span>پیشنهادات استراتژیک انتقال</span>
                      <span className="block text-[11px] text-slate-500 font-normal">راهکار سئو، دامنه‌ها و توسعه برند</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 rotate-180 text-slate-400" />
                </button>
              </div>

              {/* Direct Domains Quick Jump */}
              <div className="mt-8 p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300 block mb-2">
                  دامنه‌های مجموعه اهورایی:
                </span>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-slate-700 dark:text-slate-300 font-mono">
                    <span>ahourai.ir</span>
                    <span className="text-[10px] text-cyan-500 font-sans">هاب اصلی</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700 dark:text-slate-300 font-mono">
                    <span>ahourainest.ir</span>
                    <span className="text-[10px] text-amber-500 font-sans">ساختمان</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700 dark:text-slate-300 font-mono">
                    <span>ahouraidigital.ir</span>
                    <span className="text-[10px] text-sky-500 font-sans">دیجیتال</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Drawer Footer CTA */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => {
                  setDrawerOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>ارتباط مستقیم با کارشناسان</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
