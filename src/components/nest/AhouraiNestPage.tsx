import React, { useState } from 'react';
import {
  Compass,
  Building,
  Home,
  Layers,
  Box,
  CheckCircle2,
  Calculator,
  ArrowLeft,
  ChevronLeft,
  PhoneCall,
  Calendar,
  Sparkles,
  Shield,
  Clock,
  Eye,
  Ruler,
  Maximize2
} from 'lucide-react';
import { AhouraiWingedLogo } from '../common/AhouraiLogo';

interface NestPageProps {
  onOpenContact: () => void;
  onBackToHub: () => void;
}

export const AhouraiNestPage: React.FC<NestPageProps> = ({
  onOpenContact,
  onBackToHub
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Cost Estimator state
  const [area, setArea] = useState<number>(250);
  const [projectType, setProjectType] = useState<string>('villa');
  const [style, setStyle] = useState<string>('modern');
  const [include3D, setInclude3D] = useState<boolean>(true);

  // Calculate estimated budget
  const calculateEstimate = () => {
    let basePerSqM = 35000000; // Base tomans per meter for full design & execution supervision
    if (projectType === 'villa') basePerSqM = 45000000;
    if (projectType === 'renovation') basePerSqM = 22000000;
    if (projectType === 'interior') basePerSqM = 28000000;
    if (projectType === 'facade') basePerSqM = 15000000;

    if (style === 'classic') basePerSqM *= 1.35;
    if (style === 'minimal') basePerSqM *= 1.1;

    const totalEstimate = (area * basePerSqM) / 1000000; // in Million Tomans
    return Math.round(totalEstimate).toLocaleString('fa-IR');
  };

  const services = [
    {
      id: '3dmax',
      title: 'مدلسازی و رندرینگ ۳بعدی تخصصی (3Ds Max & Corona)',
      category: 'طراحی سه‌بعدی و شبیه‌سازی',
      description: 'شبیه‌سازی دقیق و فوتورئالیستیک پروژه‌های معماری، رندرهای روز و شب، تور مجازی ۳۶۰ درجه و انیمیشن‌های سینمایی قبل از شروع ساخت.',
      badge: 'انتقال‌یافته به آشیانه',
      icon: Box,
      points: ['مدلسازی دقیق با نرم‌افزارهای 3Ds Max, Corona, V-Ray', 'شبیه‌سازی نور طبیعی و متریال‌های واقعی', 'انیمیشن معماری و ارائه تخصصی برای کارفرمایان']
    },
    {
      id: 'villa',
      title: 'طراحی و معماری ویلاهای لوکس و اقامتگاهی',
      category: 'معماری جامع',
      description: 'طراحی صفر تا صد ویلا با رویکرد هماهنگی با توپوگرافی و اقلیم، کانسپت‌های متمایز، لنداسکیپ و روف‌گاردن، استخر و فضاهای تفریحی.',
      icon: Home,
      points: ['طراحی نقشه‌های فاز ۱ و فاز ۲ اجرایی', 'طراحی محوطه، استخر و فضای باز اختصاصی', 'بهینه‌سازی مصرف انرژی و نورگیری هوشمند']
    },
    {
      id: 'facade',
      title: 'طراحی و مهندسی نما (مدرن، کلاسیک، مینیمال)',
      category: 'پوسته و نمای خارجی',
      description: 'خلق نماهای شاخص شهری و ویلایی با استفاده از سنگ‌های مرغوب، بتن اکسپوز، لوورهای آلومینیومی و ترموود همراه با اخذ تاییدیه کمیته نما.',
      icon: Building,
      points: ['دریافت تاییدیه رسمی از کمیته‌های شهرداری', 'جزئیات اجرایی دیتیل وال و زیرسازی مهندسی', 'نورپردازی شبانه معماری با محاسبات لوکس']
    },
    {
      id: 'interior',
      title: 'طراحی داخلی و دکوراسیون لوکس',
      category: 'معماری داخلی',
      description: 'طراحی فضاهای مسکونی، پنت‌هاوس‌ها، اداری و کلینیک‌ها با تناسبات هارمونیک، متریال‌های طبیعی، رنگ‌شناسی و چیدمان سفارشی.',
      icon: Layers,
      points: ['چیدمان سفارشی فرنیش و مبلمان ارگونومیک', 'طراحی و ساخت کابینت، کلوزت‌روم و وال‌پنل‌های چوبی', 'پلان‌های نورپردازی متغیر با سناریوهای هوشمند']
    },
    {
      id: 'renovation',
      title: 'بازسازی جامع و بهسازی ابنیه',
      category: 'اجرا و نوسازی',
      description: 'تبدیل خانه‌ها و فضاهای قدیمی به سازه‌هایی لوکس و مدرن، تعویض کامل تاسیسات مکانیکی و برقی، بازطراحی فضاهای پرتی و تقویت سازه.',
      icon: Ruler,
      points: ['تخریب اصولی با رعایت ایمنی کامل سازه‌ای', 'تعویض لوله‌کشی و هوشمندسازی تاسیسات', 'تضمین بازه زمانی فشرده و مدیریت دقیق هزینه']
    },
    {
      id: 'supervision',
      title: 'مدیریت پیمان و نظارت کارگاهی مهندسی',
      category: 'اجرا و ساخت',
      description: 'مدیریت حرفه‌ای ساخت با شفافیت کامل مالی، نظارت روزانه مهندسین ناظر، کنترل کیفیت مصالح و تحویل طبق برنامه زمان‌بندی مدون.',
      icon: Shield,
      points: ['قراردادهای شفاف مدیریت پیمان با فاکتورهای واقعی', 'نظارت روزانه اکیپ‌های اجرایی توسط سرپرست کارگاه', 'تحویل کلید در دست با گواهی کیفیت']
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'ویلای معلق کردان (Kordan Floating Villa)',
      category: 'villa',
      categoryLabel: 'معماری و ویلا',
      area: '۶۸۰ مترمربع زیربنا',
      location: 'کردان، البرز',
      image: '/src/assets/images/ahourai_nest_villa_hero_1790348329382.jpg',
      tags: ['معماری مدرن', 'مدلسازی 3Ds Max', 'استخر اینفینیتی', 'روف گاردن']
    },
    {
      id: 2,
      title: 'پنت‌هاوس زعفرانیه (Zafaraniyeh Luxury Penthouse)',
      category: 'interior',
      categoryLabel: 'طراحی داخلی',
      area: '۳۴۰ مترمربع',
      location: 'زعفرانیه، تهران',
      image: '/src/assets/images/ahourai_nest_interior_luxury_1790348341628.jpg',
      tags: ['چوب گردوی طبیعی', 'سنگ مرمر لته', 'نورپردازی خطی', 'کلوزت روم']
    },
    {
      id: 3,
      title: 'مجتمع مسکونی مهرشهر (Mehrshahr Facade)',
      category: 'facade',
      categoryLabel: 'طراحی نما',
      area: '۵ طبقه مسکونی',
      location: 'مهرشهر، کرج',
      image: '/src/assets/images/ahourai_facade_modern_1790348365908.jpg',
      tags: ['نمای تراورتن و لوور', 'تاییدیه شهرداری', 'تراس گاردن', 'نورپردازی شب']
    },
    {
      id: 4,
      title: 'بازسازی دوبلکس فرمانیه (Farmaniyeh Renovation)',
      category: 'renovation',
      categoryLabel: 'بازسازی و نوسازی',
      area: '۲۹۰ مترمربع',
      location: 'فرمانیه، تهران',
      image: '/src/assets/images/ahourai_nest_interior_luxury_1790348341628.jpg',
      tags: ['تخریب و بازطراحی پلان', 'کابینت پلی‌اورتان', 'هوشمندسازی KNX']
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-[#0C1017] text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      
      {/* Top Banner Navigation for Ahourai Nest */}
      <header className="sticky top-0 z-40 w-full bg-[#0C1017]/90 backdrop-blur-xl border-b border-amber-900/30 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Lockup */}
          <div className="flex items-center gap-3">
            <AhouraiWingedLogo size="sm" variant="nest" showText={false} />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-white tracking-wider">
                  آشیانه اهورایی
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono">
                  ahourainest.ir
                </span>
              </div>
              <p className="text-[11px] text-amber-200/70">
                طراحی معماری، ویلا، دکوراسیون و رندرینگ سه‌بعدی
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#services" className="hover:text-amber-400 transition-colors">خدمات معماری</a>
            <a href="#3dmax-highlight" className="hover:text-amber-400 transition-colors text-amber-300/90 font-semibold">مدلسازی 3Ds Max</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">نمونه پروژه‌ها</a>
            <a href="#estimator" className="hover:text-amber-400 transition-colors">برآورد هزینه آنلاین</a>
            <a href="#process" className="hover:text-amber-400 transition-colors">مراحل اجرا</a>
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
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-600/30 flex items-center gap-1.5 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>مشاوره و استعلام</span>
            </button>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden px-4 sm:px-8 py-16">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/ahourai_nest_villa_hero_1790348329382.jpg"
            alt="معماری لوکس آشیانه اهورایی"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-50 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1017] via-[#0C1017]/70 to-[#0C1017]/40" />
          <div className="absolute inset-0 bg-radial-vignette opacity-70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>آشیانه‌ای به سبک اهورایی | مهندسی و هنر ساخت</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl mb-6">
            خلق فضاهای ماندگار؛ از کانسپت اولیه تا تحویل کلید
          </h1>

          {/* Hero Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
            تلفیق دانش مهندسی معماری، مدلسازی فوتورئال ۳بعدی، طراحی داخلی لوکس و اجرای بی‌نقص ساختمانی با سابقه ۲۵ سال حضور در پروژه‌های شاخص کشور.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center gap-2"
            >
              <span>رزرو بازدید و مشاوره اختصاصی</span>
              <ChevronLeft className="w-4 h-4" />
            </button>

            <a
              href="#estimator"
              className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white font-bold text-sm transition-all flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>محاسبه آنلاین برآورد هزینه</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl pt-8 border-t border-white/10 text-center">
            <div>
              <span className="block text-2xl font-black text-amber-400 font-mono">+ ۲,۰۰۰</span>
              <span className="text-xs text-slate-400">پروژه معماری و ساختمانی</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-amber-400 font-mono">+ ۲۵ سال</span>
              <span className="text-xs text-slate-400">سابقه تخصصی کارگاهی</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-amber-400 font-mono">۱۰۰٪</span>
              <span className="text-xs text-slate-400">تعهد زمان‌بندی و کیفیت</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-amber-400 font-mono">3Ds Max</span>
              <span className="text-xs text-slate-400">رندرینگ فوتورئال استاندارد</span>
            </div>
          </div>

        </div>
      </section>

      {/* Special Feature Spotlight: 3Ds Max Architecture Transfer */}
      <section id="3dmax-highlight" className="py-16 px-4 sm:px-8 bg-gradient-to-b from-[#0C1017] to-[#121722] border-y border-amber-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/30 rounded-3xl border border-amber-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-semibold">
                  <Box className="w-3.5 h-3.5" />
                  <span>انتقال به آشیانه اهورایی جهت تمرکز ساختمانی</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  مدلسازی و رندرینگ ۳بعدی تخصصی 3Ds Max
                </h2>
                
                <p className="text-sm text-slate-300 leading-relaxed">
                  بر اساس استراتژی جدید گروه اهورایی، خدمات طراحی و رندرینگ ۳بعدی نرم‌افزارهای 3Ds Max، Corona و V-Ray از پورتال دیجیتال به <strong className="text-amber-400">آشیانه اهورایی</strong> منتقل شده است. بدین ترتیب تمامی زنجیره مدلسازی فوتورئال معماری، شبیه‌سازی متریال‌های ساختمانی و پرزانته‌های سینمایی، مستقیماً زیر نظر معماران و مجریان کارگاهی ما اجرا می‌شود.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>شبیه‌سازی دقیق قبل از تخریب یا خرید متریال</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>محاسبه دقیق زاویه تابش خورشید و لوکس نوری</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>انیمیشن گذر زمان، روز و شب و بارندگی</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>نقشه‌های فنی فاز ۲ اجرایی منطبق بر رندر</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-amber-500/40 shadow-2xl group">
                  <img
                    src="/src/assets/images/ahourai_nest_interior_luxury_1790348341628.jpg"
                    alt="رندرینگ ۳بعدی معماری 3Ds Max"
                    referrerPolicy="no-referrer"
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex items-center justify-between text-xs">
                    <div>
                      <span className="block font-bold text-white">رندر نهایی موتور Corona Renderer</span>
                      <span className="text-[10px] text-amber-400">دقت بافت و رفلکس‌های نور طبیعی</span>
                    </div>
                    <span className="px-2 py-1 rounded bg-amber-500 text-slate-950 font-bold text-[10px]">
                      کیفیت 8K
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
            خدمات یکپارچه مهندسی و ساختمانی
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            خدمات تخصصی آشیانه اهورایی
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            از نخستین ایده‌های کاغذی تا تحویل کلید و گواهی پایان کار، همه چیز تحت نظارت مهندسین مجرب.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => {
            const IconComponent = srv.icon;
            return (
              <div
                key={srv.id}
                className="group relative p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {srv.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                        {srv.badge}
                      </span>
                    )}
                  </div>

                  <span className="text-xs text-amber-500/90 font-medium block mb-1">
                    {srv.category}
                  </span>
                  <h3 className="text-lg font-black text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {srv.description}
                  </p>

                  <ul className="space-y-1.5 pt-3 border-t border-slate-800">
                    {srv.points.map((pt, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={onOpenContact}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
                  >
                    <span>استعلام و مشاوره این خدمت</span>
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Project Cost Estimator */}
      <section id="estimator" className="py-16 px-4 sm:px-8 bg-[#0F141E] border-y border-amber-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-amber-400 block mb-1.5">
              شفافیت و برآورد هوشمند مالی
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              محاسبه‌گر آنلاین برآورد هزینه پروژه ساختمانی
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              متراژ، نوع پروژه و سبک معماری را مشخص کنید تا حدود بودجه مورد نیاز برآورد شود.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              
              {/* Controls */}
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-slate-300">
                      متراژ زیربنای تقریبی پروژه:
                    </label>
                    <span className="text-sm font-black text-amber-400 font-mono">
                      {area.toLocaleString('fa-IR')} مترمربع
                    </span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={1200}
                    step={10}
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>۵۰ م²</span>
                    <span>۶۰۰ م²</span>
                    <span>۱,۲۰۰ م²</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    نوع پروژه:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'villa', label: 'ساخت ویلای لوکس' },
                      { id: 'interior', label: 'طراحی داخلی و چیدمان' },
                      { id: 'renovation', label: 'بازسازی و نوسازی' },
                      { id: 'facade', label: 'طراحی و اجرای نما' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setProjectType(item.id)}
                        className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                          projectType === item.id
                            ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                            : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    سبک طراحی مدنظر:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'modern', label: 'مدرن و مینیمال' },
                      { id: 'classic', label: 'کلاسیک و نئوکلاسیک' },
                      { id: 'minimal', label: 'ارگانیک و اکو' },
                    ].map((st) => (
                      <button
                        key={st.id}
                        type="button"
                        onClick={() => setStyle(st.id)}
                        className={`p-2 rounded-xl text-xs font-medium border text-center transition-all ${
                          style === st.id
                            ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                            : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white'
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={include3D}
                      onChange={(e) => setInclude3D(e.target.checked)}
                      className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400"
                    />
                    <span>شامل مدلسازی کامل سه‌بعدی 3Ds Max و انیمیشن معماری</span>
                  </label>
                </div>
              </div>

              {/* Estimate Result Box */}
              <div className="flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-amber-950/30 to-slate-950 border border-amber-500/30 text-center">
                <div>
                  <span className="text-xs text-amber-400/90 font-semibold block mb-2">
                    تخمین حدودی بودجه اجرای پروژه
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-amber-300 font-mono my-3">
                    {calculateEstimate()}
                    <span className="text-xs text-slate-400 font-sans mr-2">میلیون تومان</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    این برآورد شامل طراحی کانسپت، نقشه‌های فاز ۲ مهندسی، شبیه‌سازی ۳بعدی، و متریال‌های مرغوب استاندارد شرکتی می‌باشد.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-amber-900/30">
                  <button
                    onClick={onOpenContact}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>ارسال مشخصات برای استعلام دقیق قرارداد</span>
                  </button>
                  <span className="text-[10px] text-slate-500 block mt-2">
                    امکان بازدید رایگان و کارشناسی پروژه در تهران و اطراف
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              کارنامه و ژورنال اجرایی
            </span>
            <h2 className="text-3xl font-black text-white">
              پروژه‌های شاخص آشیانه اهورایی
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'همه پروژه‌ها' },
              { id: 'villa', label: 'ویلا' },
              { id: 'interior', label: 'دکوراسیون داخلی' },
              { id: 'facade', label: 'نما' },
              { id: 'renovation', label: 'بازسازی' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveCategory(f.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === f.id
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="group rounded-3xl overflow-hidden bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/20" />

                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-amber-300">
                  {p.categoryLabel}
                </div>

                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-xs text-slate-300">
                  <span>{p.location}</span>
                  <span className="font-mono text-amber-400">{p.area}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {p.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] rounded-lg bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">طراحی و نظارت کامل آشیانه</span>
                  <button
                    onClick={onOpenContact}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                  >
                    <span>درخواست پروژه مشابه</span>
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Step-by-Step Execution Workflow */}
      <section id="process" className="py-20 px-4 sm:px-8 bg-slate-950/70 border-t border-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              فرآیند کاری استاندارد
            </span>
            <h2 className="text-3xl font-black text-white">
              از اولین تماس تا تحویل کلید در ۴ گام
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '۰۱',
                title: 'بازدید و ایده‌پردازی اولیه',
                desc: 'بررسی زمین یا ملک، تحلیل توپوگرافی و نیازسنجی دقیق کارفرما به همراه برآورد اولیه بودجه.'
              },
              {
                step: '۰۲',
                title: 'طراحی سه‌بعدی 3Ds Max',
                desc: 'مدلسازی کامل فوتورئال، انتخاب دقیق متریال و نورپردازی قبل از صرف هرگونه هزینه کارگاهی.'
              },
              {
                step: '۰۳',
                title: 'نقشه‌های اجرایی فاز ۲',
                desc: 'ترسیم نقشه‌های سازه، تاسیسات، مقاطع و دیتیل‌های میلی‌متری اجرایی همراه با اخذ مجوزها.'
              },
              {
                step: '۰۴',
                title: 'اجرا و نظارت مدیریت پیمان',
                desc: 'عملیات ساخت و دکوراسیون با نظارت مقیم مهندسین، گزارش‌های تصویری هفتگی و تحویل به موقع.'
              }
            ].map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800 relative group hover:border-amber-500/30 transition-all"
              >
                <span className="text-4xl font-black text-amber-500/20 font-mono block mb-3 group-hover:text-amber-500/40 transition-colors">
                  {st.step}
                </span>
                <h4 className="text-base font-bold text-white mb-2">
                  {st.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-8 border-t border-amber-900/30 bg-[#0A0D14]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <AhouraiWingedLogo size="sm" variant="nest" showText={false} />
            <div>
              <span className="font-bold text-sm text-white">آشیانه اهورایی | ahourainest.ir</span>
              <p className="text-xs text-slate-500">پورتال تخصصی معماری، دکوراسیون و شبیه‌سازی ۳بعدی ساختمان</p>
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
              className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"
            >
              تماس مستقیم با مهندسین
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
};
