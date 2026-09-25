import React, { useState } from 'react';
import {
  Code2,
  Cpu,
  Layers,
  TrendingUp,
  Search,
  BookOpen,
  ArrowLeft,
  ChevronLeft,
  Sparkles,
  PhoneCall,
  Laptop,
  CheckCircle2,
  FileText,
  Share2,
  ExternalLink,
  Zap,
  ShieldCheck,
  Send
} from 'lucide-react';
import { AhouraiWingedLogo } from '../common/AhouraiLogo';

interface DigitalPageProps {
  onOpenContact: () => void;
  onBackToHub: () => void;
}

export const AhouraiDigitalPage: React.FC<DigitalPageProps> = ({
  onOpenContact,
  onBackToHub
}) => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);
  const [activeArticleCat, setActiveArticleCat] = useState<string>('all');
  
  // Interactive Brief Builder state
  const [briefStep, setBriefStep] = useState<number>(1);
  const [briefData, setBriefData] = useState({
    serviceType: 'web',
    features: ['ai_assistant', 'seo_ready'] as string[],
    urgency: 'medium',
    emailOrPhone: ''
  });
  const [briefSubmitted, setBriefSubmitted] = useState<boolean>(false);

  // 4 Consolidated Pillars (replacing previous cluttered 8 fields, 3D Max removed to Nest!)
  const pillars = [
    {
      id: 'web_platforms',
      title: 'توسعه وب، سامانه‌های ابری و اپلیکیشن‌ها',
      enTitle: 'Modern Web, Cloud & Scalable Apps',
      icon: Code2,
      accent: 'from-cyan-500 to-blue-600',
      description: 'طراحی و توسعه پورتال‌های سازمانی، سامانه‌های اختصاصی و وب‌اپلیکیشن‌های پیشرفته با جدیدترین استک‌های مهندسی نرم‌افزار.',
      highlights: [
        'توسعه وب‌اپلیکیشن‌های مدرن (React, Next.js, Node.js)',
        'معماری امن و مقیاس‌پذیر ابری (Cloud Native Architecture)',
        'طراحی پنل‌های مدیریت داده و سیستم‌های یکپارچه اتوماسیون',
        'طراحی واکنش‌گرا (PWA) با سرعت لود زیر ۱ ثانیه'
      ],
      metrics: 'بیش از ۴۵۰ سامانه و وب‌سایت فعال'
    },
    {
      id: 'ai_automation',
      title: 'راهکارهای هوش مصنوعی و اتوماسیون فرآیندها',
      enTitle: 'Enterprise AI & Workflow Automation',
      icon: Cpu,
      accent: 'from-sky-500 to-indigo-600',
      description: 'تجهیز کسب‌وکار شما به نسل نوین مدل‌های زبانی هوش مصنوعی، چت‌بات‌های پاسخگوی ۲۴ ساعته و اتوماسیون هوشمند وظایف.',
      highlights: [
        'طراحی و ادغام دستیاران صوتی و متنی هوشمند (AI Agents)',
        'اتوماسیون فرآیندهای تکراری و ادغام APIها (RPA)',
        'پردازش هوشمند و استخراج داده از اسناد سازمانی',
        'سیستم‌های پیشنهاددهنده و تحلیل رفتار مشتری'
      ],
      metrics: 'کاهش ۷۰٪ زمان پاسخگویی به مشتریان'
    },
    {
      id: 'brand_uiux',
      title: 'استراتژی برندینگ و هویت دیزاین دیجیتال',
      enTitle: 'Digital Brand Identity & UI/UX Design',
      icon: Layers,
      accent: 'from-blue-500 to-violet-600',
      description: 'خلق هویت بصری ماندگار، زبان طراحی یکپارچه (Design System) و رابط‌های کاربری چشم‌نوازی که اعتماد مشتری را برمی‌انگیزند.',
      highlights: [
        'طراحی هویت بصری کامل (لوگو، رنگ‌شناسی سازمانی، تایپوگرافی)',
        'طراحی رابط کاربری (UI) و مهندسی تجربه کاربری (UX Research)',
        'تدوین دیزاین سیستم استاندارد برای توسعه مداوم محصول',
        'موشن‌گرافیک و جلوه‌های تعاملی برندینگ'
      ],
      metrics: 'افزایش ۶۰٪ درک ارزش برند در نگاه مخاطب'
    },
    {
      id: 'seo_content',
      title: 'سئو تکنیکال، رشد و پورتال محتوای تخصصی',
      enTitle: 'Technical SEO, Content Hub & Digital Growth',
      icon: TrendingUp,
      accent: 'from-teal-500 to-cyan-600',
      description: 'رساندن رتبه کسب‌وکار شما به صدر نتایج گوگل و تولید مقالات تحلیلی، غنی و ارزش‌آفرین در پورتال تخصصی محتوای دیجیتال.',
      highlights: [
        'سئو تکنیکال و بهینه‌سازی سرعت Core Web Vitals',
        'استراتژی خوشه‌های محتوایی (Topic Clusters) و لینک‌سازی',
        'تولید محتوای تخصصی دیجیتال برای تبدیل مخاطب به مشتری',
        'مدیریت و بهینه‌سازی نرخ تبدیل (CRO & Analytics)'
      ],
      metrics: 'رشد میانگین ۱۸۰٪ ترافیک ارگانیک کارفرمایان'
    }
  ];

  // Articles in the Digital Content Portal (پورتال تخصصی محتوای دیجیتال)
  const articles = [
    {
      id: 'art-1',
      title: 'نقش هوش مصنوعی در تحول فرآیندهای ارتباط با مشتری در سال ۲۰۲۶',
      category: 'ai',
      categoryName: 'هوش مصنوعی سازمانی',
      readTime: '۶ دقیقه مطالعه',
      date: 'به‌روزرسانی جدید',
      excerpt: 'چگونه ایجنت‌های هوشمند خودکار می‌توانند جایگزین پاسخگویی سنتی شده و رضایت مخاطبان را تا ۸۵ درصد بهبود بخشند.'
    },
    {
      id: 'art-2',
      title: 'چرا تجمیع خدمات در ۴ حوزه تخصصی، ارزش کسب‌وکار شما را دوچندان می‌کند؟',
      category: 'strategy',
      categoryName: 'استراتژی کسب‌وکار',
      readTime: '۴ دقیقه مطالعه',
      date: 'تحلیل استراتژیک',
      excerpt: 'تمرکز بر هسته‌های اصلی ارزش‌آفرینی به جای شاخه‌شاخه‌شدن؛ تحول ساختاری گروه اهورایی در تفکیک خدمات مهندسی و دیجیتال.'
    },
    {
      id: 'art-3',
      title: 'معماری مدرن وب؛ گذر از سیستم‌های سنگین به سامانه‌های فوق سریع ابری',
      category: 'web',
      categoryName: 'توسعه وب و کلود',
      readTime: '۸ دقیقه مطالعه',
      date: 'تخصصی نرم‌افزار',
      excerpt: 'چگونه بهینه‌سازی زمان بارگذاری و استفاده از رندرهای هیبریدی مستقیماً فروش آنلاین شما را تا ۳ برابر ارتقا می‌دهد.'
    },
    {
      id: 'art-4',
      title: 'استراتژی انتقال سایت بدون افت رتبه سئو؛ راهنمای جامع ریدایرکت‌های ۳۰۱',
      category: 'seo',
      categoryName: 'سئو و رشد',
      readTime: '۵ دقیقه مطالعه',
      date: 'سئو تکنیکال',
      excerpt: 'اصول فنی انتقال محتوا از یک دامنه اصلی به پورتال تخصصی با حفظ کامل رتبه‌های گوگل و بک‌لینک‌های تاریخی.'
    }
  ];

  const handleToggleFeature = (feat: string) => {
    if (briefData.features.includes(feat)) {
      setBriefData({
        ...briefData,
        features: briefData.features.filter(f => f !== feat)
      });
    } else {
      setBriefData({
        ...briefData,
        features: [...briefData.features, feat]
      });
    }
  };

  const handleBriefSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBriefSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#060B14] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Top Banner Navigation for Ahourai Digital */}
      <header className="sticky top-0 z-40 w-full bg-[#060B14]/90 backdrop-blur-xl border-b border-cyan-900/30 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Lockup */}
          <div className="flex items-center gap-3">
            <AhouraiWingedLogo size="sm" variant="digital" showText={false} />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-white tracking-wider">
                  اهورایی دیجیتال
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono">
                  ahouraidigital.ir
                </span>
              </div>
              <p className="text-[11px] text-cyan-300/70">
                پورتال تخصصی محتوا، هوش مصنوعی و راهکارهای فناوری
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#pillars" className="hover:text-cyan-400 transition-colors">۴ حوزه تخصصی</a>
            <a href="#portal-content" className="hover:text-cyan-400 transition-colors text-cyan-400 font-semibold">پورتال مقالات دیجیتال</a>
            <a href="#brief-builder" className="hover:text-cyan-400 transition-colors">سازنده بریف پروژه</a>
            <a href="#cases" className="hover:text-cyan-400 transition-colors">نمونه کارهای دیجیتال</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onBackToHub}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 flex items-center gap-1.5 transition-colors"
              title="بازگشت به هاب اصلی"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">هاب اهورایی</span>
            </button>

            <button
              onClick={onOpenContact}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-md shadow-cyan-500/25 flex items-center gap-1.5 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>شروع همکاری دیجیتال</span>
            </button>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden px-4 sm:px-8 py-16">
        {/* Visual Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/ahourai_digital_cloud_tech_1790348352252.jpg"
            alt="پورتال اهورایی دیجیتال"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-45 contrast-115"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-[#060B14]/75 to-[#060B14]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-semibold mb-6 backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>نوآوری به سبک دیجیتال اهورایی | انتقال مطالب و پورتال تخصصی</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mb-6">
            معماری تحول دیجیتال؛ از ایده تا پلتفرم‌های مقیاس‌پذیر
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
            پورتال متمرکز راهکارهای نرم‌افزاری، هوش مصنوعی، طراحی تجربه کاربری و محتوای راهبردی. ساختاری جمع‌وجور، دقیق و عاری از پراکندگی برای کسب‌وکارهای بلندپرواز.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#brief-builder"
              className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-sm shadow-xl shadow-cyan-500/25 transition-all flex items-center gap-2"
            >
              <span>تنظیم هوشمند بریف پروژه آنلاین</span>
              <ChevronLeft className="w-4 h-4" />
            </a>

            <a
              href="#portal-content"
              className="px-6 py-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-md border border-cyan-500/20 text-cyan-200 font-bold text-sm transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>مشاهده پورتال محتوای تخصصی</span>
            </a>
          </div>

          {/* Highlights of Streamlined Pillars */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl pt-8 border-t border-slate-800 text-center">
            <div>
              <span className="block text-xl font-bold text-cyan-400">توسعه مدرن وب</span>
              <span className="text-xs text-slate-400">سریع، ابری و امن</span>
            </div>
            <div>
              <span className="block text-xl font-bold text-cyan-400">هوش مصنوعی</span>
              <span className="text-xs text-slate-400">اتوماسیون و ایجنت‌ها</span>
            </div>
            <div>
              <span className="block text-xl font-bold text-cyan-400">هویت برند</span>
              <span className="text-xs text-slate-400">UI/UX استاندارد</span>
            </div>
            <div>
              <span className="block text-xl font-bold text-cyan-400">سئو و محتوا</span>
              <span className="text-xs text-slate-400">رشد ترافیک ارگانیک</span>
            </div>
          </div>

        </div>
      </section>

      {/* Strategic Restructuring Notice Box (Addressing user feedback directly) */}
      <section className="py-8 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="p-4 sm:p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-3 text-cyan-300">
            <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <strong className="font-bold block text-white">بازطراحی ساختار تخصصی اهورایی دیجیتال:</strong>
              <span className="text-slate-300 text-xs">
                حوزه ۳D Max به آشیانه اهورایی منتقل شد و عناوین دیگر در ۴ ستون استراتژیک تجمیع گردید تا اعتبار، تمرکز و هویت حرفه‌ای پورتال در بالاترین سطح قرار گیرد.
              </span>
            </div>
          </div>
          <button
            onClick={() => setSelectedPillar(0)}
            className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-semibold whitespace-nowrap hover:bg-cyan-500/30 transition-colors"
          >
            بررسی ۴ ستون تخصصی
          </button>
        </div>
      </section>

      {/* The 4 Consolidated Pillars Interactive Explorer */}
      <section id="pillars" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">
            ستون‌های چهارگانه تحول
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            خدمات متمرکز و یکپارچه اهورایی دیجیتال
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            تمرکز عمیق بر لایه‌های کلیدی فناوری دیجیتال بدون شاخه‌بندی‌های زائد و گیج‌کننده.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {pillars.map((pil, idx) => {
            const Icon = pil.icon;
            const isSelected = selectedPillar === idx;
            return (
              <button
                key={pil.id}
                type="button"
                onClick={() => setSelectedPillar(idx)}
                className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-800/90 border-cyan-400 shadow-lg shadow-cyan-950/50'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-slate-500">۰{idx + 1}</span>
                </div>
                <h3 className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {pil.title}
                </h3>
                <span className="text-[10px] text-slate-500 font-mono mt-1 block dir-ltr text-right">
                  {pil.enTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detailed View */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/70 border border-cyan-500/20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-semibold font-mono">
                <span>ستون تخصصی ۰{selectedPillar + 1}</span>
                <span>·</span>
                <span>{pillars[selectedPillar].enTitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {pillars[selectedPillar].title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {pillars[selectedPillar].description}
              </p>

              <div className="pt-2">
                <span className="text-xs font-bold text-slate-400 block mb-3">
                  مزایا و ویژگی‌های اختصاصی اهورایی در این حوزه:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pillars[selectedPillar].highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-800">
                <div className="text-xs text-cyan-400 font-semibold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>شاخص کیفی: {pillars[selectedPillar].metrics}</span>
                </div>

                <button
                  onClick={onOpenContact}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                >
                  <span>استعلام و مشاوره این بخش</span>
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-[#09111E] border border-cyan-500/30 space-y-4">
                <span className="text-xs font-mono text-cyan-400 block">
                  // AH_DIGITAL_PILLAR_SPEC
                </span>
                
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">تیم توسعه‌دهنده:</span>
                    <span className="font-semibold text-slate-200">مهندسین ارشد و لید دیزاینر</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">تحویل سورس‌کد کامل:</span>
                    <span className="font-semibold text-emerald-400">۱۰۰٪ با قرارداد رسمی</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">پشتیبانی و نگهداری:</span>
                    <span className="font-semibold text-slate-200">گارانتی طلایی یکساله</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400">سازگاری زیرساخت:</span>
                    <span className="font-semibold text-cyan-400">Cloud / Docker / Kubernetes</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/30 text-[11px] text-cyan-200">
                  ⚡ فرآیند توسعه چابک (Agile) همراه با جلسات دموی هفتگی و نظارت زنده کارفرما بر پیشرفت محصول.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Digital Content Hub / Knowledge Portal (پورتال تخصصی محتوای دیجیتال) */}
      <section id="portal-content" className="py-20 px-4 sm:px-8 bg-[#040810] border-y border-cyan-900/20">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>پورتال تخصصی محتوای دیجیتال اهورایی</span>
              </div>
              <h2 className="text-3xl font-black text-white">
                پایگاه دانش، مقالات و راهنماهای کاربردی
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                انتقال مطالب و مقالات عمیق سایت اصلی با دسته‌بندی و پالایش ساختاری جدید.
              </p>
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'همه مقالات' },
                { id: 'ai', label: 'هوش مصنوعی' },
                { id: 'web', label: 'توسعه وب' },
                { id: 'strategy', label: 'استراتژی کسب‌وکار' },
                { id: 'seo', label: 'سئو و ترافیک' },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveArticleCat(c.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    activeArticleCat === c.id
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles
              .filter(a => activeArticleCat === 'all' || a.category === activeArticleCat)
              .map((art) => (
                <div
                  key={art.id}
                  className="group p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                      <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 font-medium">
                        {art.categoryName}
                      </span>
                      <div className="flex items-center gap-2 text-[11px]">
                        <span>{art.readTime}</span>
                        <span>·</span>
                        <span>{art.date}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                      {art.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-500">منبع: پورتال دیجیتال اهورایی</span>
                    <button
                      onClick={onOpenContact}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                    >
                      <span>مطالعه کامل و دریافت مشاوره</span>
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-8 text-center">
            <span className="text-xs text-slate-500">
              این پورتال به طور پیوسته با تحلیل‌های روز دنیای فناوری و راهکارهای عملی کسب‌وکار به‌روزرسانی می‌شود.
            </span>
          </div>

        </div>
      </section>

      {/* Interactive Project Brief Builder */}
      <section id="brief-builder" className="py-20 px-4 sm:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-cyan-400 block mb-1.5 uppercase tracking-wider">
            محاسبه‌گر و سازنده آنلاین بریف
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            ساخت بریف اختصاصی پروژه دیجیتال
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            خدمات مورد نیاز خود را تیک بزنید تا ساختار و نیازمندی‌های پروژه شما بلافاصله تدوین شود.
          </p>
        </div>

        <div className="bg-slate-900/90 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
          {briefSubmitted ? (
            <div className="py-10 text-center space-y-3">
              <CheckCircle2 className="w-14 h-14 text-cyan-400 mx-auto" />
              <h3 className="text-xl font-bold text-white">بریف پروژه با موفقیت ثبت شد</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                اطلاعات اولیه پروژه شما ذخیره گردید. کارشناس فنی اهورایی دیجیتال ظرف کمتر از ۳ ساعت جهت ارائه ساختار معماری و پروپوزال با شما تماس خواهد گرفت.
              </p>
              <button
                onClick={() => setBriefSubmitted(false)}
                className="mt-4 px-5 py-2 rounded-xl bg-slate-800 text-xs text-slate-300 hover:text-white"
              >
                تنظیم بریف جدید
              </button>
            </div>
          ) : (
            <form onSubmit={handleBriefSubmit} className="space-y-6">
              
              {/* Type Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">
                  ۱. نوع اصلی پروژه دیجیتال:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'web', label: 'وب‌سایت یا پورتال' },
                    { id: 'app', label: 'سامانه یا اپ ابری' },
                    { id: 'ai', label: 'هوش مصنوعی و بات' },
                    { id: 'growth', label: 'سئو و تولید محتوا' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setBriefData({ ...briefData, serviceType: t.id })}
                      className={`p-3 rounded-xl text-xs font-medium border text-center transition-all ${
                        briefData.serviceType === t.id
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold'
                          : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features selection */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">
                  ۲. ویژگی‌های کلیدی مورد نیاز:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: 'ai_assistant', label: 'ایجنت هوش مصنوعی و پاسخگوی ۲۴ ساعته' },
                    { id: 'seo_ready', label: 'معماری بهینه سئو و ترافیک ارگانیک گوگل' },
                    { id: 'design_system', label: 'دیزاین سیستم اختصاصی و طراحی UI/UX سفارشی' },
                    { id: 'crm_sync', label: 'اتصال به CRM و پنل پیامکی و اتوماسیون اداری' },
                    { id: 'multilingual', label: 'پشتیبانی چندزبانه (فارسی، انگلیسی، عربی)' },
                    { id: 'high_security', label: 'امنیت پیشرفته، بک‌آپ خودکار و گواهی SSL' },
                  ].map((f) => (
                    <div
                      key={f.id}
                      onClick={() => handleToggleFeature(f.id)}
                      className={`p-3 rounded-xl border cursor-pointer text-xs flex items-center justify-between transition-all ${
                        briefData.features.includes(f.id)
                          ? 'bg-cyan-500/10 border-cyan-400 text-white'
                          : 'bg-slate-800/40 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span>{f.label}</span>
                      <div className={`w-4 h-4 rounded-md flex items-center justify-center ${
                        briefData.features.includes(f.id) ? 'bg-cyan-500 text-black' : 'border border-slate-600'
                      }`}>
                        {briefData.features.includes(f.id) && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact info for proposal */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  ۳. شماره تماس یا ایمیل جهت ارسال پروپوزال فنی و تخمین زمان:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹ یا info@company.com"
                    value={briefData.emailOrPhone}
                    onChange={(e) => setBriefData({ ...briefData, emailOrPhone: e.target.value })}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-white focus:border-cyan-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>تایید و ارسال بریف</span>
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-8 border-t border-cyan-900/30 bg-[#040810]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <AhouraiWingedLogo size="sm" variant="digital" showText={false} />
            <div>
              <span className="font-bold text-sm text-white">اهورایی دیجیتال | ahouraidigital.ir</span>
              <p className="text-xs text-slate-500">پورتال تخصصی محتوای دیجیتال، توسعه وب و هوش مصنوعی</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHub}
              className="px-4 py-2 rounded-xl bg-slate-800 text-xs text-slate-300 hover:text-white"
            >
              هاب مرکزی اهورایی
            </button>
            <button
              onClick={onOpenContact}
              className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs"
            >
              ارتباط با تیم فنی
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
};
