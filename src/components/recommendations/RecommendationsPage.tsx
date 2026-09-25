import React from 'react';
import {
  Sparkles,
  ArrowRightLeft,
  Globe,
  Share2,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Palette,
  Search,
  Zap,
  ShieldCheck,
  TrendingUp,
  FileCheck
} from 'lucide-react';
import { AhouraiWingedLogo } from '../common/AhouraiLogo';

interface RecommendationsPageProps {
  onBackToHub: () => void;
  onOpenContact: () => void;
}

export const RecommendationsPage: React.FC<RecommendationsPageProps> = ({
  onBackToHub,
  onOpenContact
}) => {
  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 px-4 sm:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AhouraiWingedLogo size="sm" showText={false} />
            <div>
              <h1 className="text-base sm:text-lg font-bold text-white">
                پیشنهادات استراتژیک و نقشه راه انتقال
              </h1>
              <p className="text-xs text-slate-400">
                بررسی تخصصی سئو، معماری برند، دامنه‌ها و انتقال محتوا به تفکیک سه سایت
              </p>
            </div>
          </div>

          <button
            onClick={onBackToHub}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors"
          >
            مشاهده هاب اهورایی
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        
        {/* Intro Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-slate-900 border border-cyan-500/30 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-400 block mb-1">
                سند تحلیلی و راهنمای استراتژیک کارفرما
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
                نقشه گذار ساختار وب‌سایت‌های اهورایی به اکوسیستم چندپورتالی
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
                تفکیک دقیق فعالیت‌های ساختمانی و دکوراسیون در <strong className="text-amber-300">ahourainest.ir</strong>، راه‌اندازی پورتال تخصصی محتوای دیجیتال در <strong className="text-cyan-300">ahouraidigital.ir</strong>، و تبدیل <strong className="text-white">ahourai.ir</strong> به یک هاب دروازه‌ای مدرن، اقدامی بسیار حرفه‌ای و موثر است. در ادامه راهکارهای فنی و برندینگ برای اجرای بی‌نقص این گذار گردآوری شده است.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: Domain & SEO Migration Strategy */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-cyan-400">
            <Globe className="w-5 h-5" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              ۱. استراتژی سئو و جلوگیری از افت رتبه گوگل در انتقال مطالب
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <ArrowRightLeft className="w-4 h-4" />
                <span>ریدایرکت ۳۰۱ تک‌به‌تک (1-to-1 301 Redirects)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                هر مقاله‌ای که از دامنه اصلی (ahourai.ir) به دامنه دیجیتال (ahouraidigital.ir) منتقل می‌شود، نباید صفحه قبلی‌اش بدون هدایت رها شود (خطای ۴۰۴). حتماً فایل <code className="text-cyan-300 bg-slate-800 px-1.5 py-0.5 rounded">.htaccess</code> یا تنظیمات سرور Nginx را به گونه‌ای تنظیم کنید که هر URL دقیقاً به آدرس معادل خود در سایت دیجیتال هدایت دائمی (301) شود. بدین ترتیب تمامی اعتبار سئو و بک‌لینک‌های قدیمی حفظ خواهد شد.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                <Search className="w-4 h-4" />
                <span>ثبت دامنه و نقشه سایت در Google Search Console</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                دامنه <span className="font-mono text-cyan-300">ahouraidigital.ir</span> را بلافاصله در سرچ کنسول گوگل به صورت Domain Property ثبت کنید. نقشه سایت XML ایجاد کرده و در ابزار Change of Address گوگل، فرآیند انتقال زیرشاخه مقالات را اطلاع‌رسانی کنید تا ربات‌های گوگل به سرعت صفحات جدید را ایندکس کنند.
              </p>
            </div>

          </div>
        </section>

        {/* Section 2: Consolidating 8 Fields into 4 Pillars & 3D Max Relocation */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-amber-400">
            <Layers className="w-5 h-5" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              ۲. منطق تجمیع حوزه‌های تخصصی و انتقال 3D Max به آشیانه
            </h3>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              نگرانی شما کاملاً به‌جا بود؛ در وب‌سایت‌های شرکتی اگر کاربر با تعداد زیادی حوزه‌های خرد روبرو شود، این حس القا می‌شود که مجموعه «در همه چیز دست دارد اما در هیچ‌کدام عمیق نیست». با اصلاح انجام‌شده:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-slate-200">
                <strong className="text-amber-400 block mb-1 font-bold">
                  انتقال کامل 3D Max به آشیانه اهورایی:
                </strong>
                نرم‌افزار 3Ds Max ابزار اصلی معماران و طراحان دکوراسیون است. قرارگیری آن در آشیانه باعث می‌شود مشتریانی که ویلا، آپارتمان یا نما می‌خواهند، مستقیماً خدمات شبیه‌سازی را در کنار اجرای کارگاهی دریافت کنند و از پراکندگی ذهن جلوگیری شود.
              </div>

              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-slate-200">
                <strong className="text-cyan-400 block mb-1 font-bold">
                  ۴ ستون قدرتمند در اهورایی دیجیتال:
                </strong>
                حوزه‌های دیجیتال اکنون به صورت استاندارد بین‌المللی دسته‌بندی شده‌اند:
                (۱) توسعه وب و پلتفرم‌های ابری،
                (۲) هوش مصنوعی و اتوماسیون،
                (۳) برندینگ و دیزاین سیستم،
                (۴) سئو و پورتال محتوا.
                این چیدمان، شرکت را به عنوان یک «آژانس فناوری سطح بالا» تثبیت می‌کند.
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Visual Identity & Sub-branding */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-cyan-400">
            <Palette className="w-5 h-5" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              ۳. هویت بصری یکپارچه و تفکیک رنگی برندها (Brand Architecture)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Hub Identity */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-3" />
              <h4 className="text-sm font-bold text-white mb-1">هاب اهورایی (Ahourai Hub)</h4>
              <span className="text-[11px] text-cyan-400 font-mono block mb-2">ahourai.ir</span>
              <p className="text-xs text-slate-400">
                پالت فیروزه‌ای، آبی برقی و نقره‌ای متالیک؛ القاکننده مرکزیت، اصالت، اعتبار و هماهنگی دو بال مجموعه.
              </p>
            </div>

            {/* Nest Identity */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-amber-900/40 text-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 mx-auto mb-3" />
              <h4 className="text-sm font-bold text-amber-300 mb-1">آشیانه اهورایی (Nest)</h4>
              <span className="text-[11px] text-amber-400 font-mono block mb-2">ahourainest.ir</span>
              <p className="text-xs text-slate-400">
                پالت طلایی گرم شامپاینی، سنگ تراورتن و طوسی گرافیتی؛ القاکننده لوکس بودن، استحکام، مهندسی و گرما.
              </p>
            </div>

            {/* Digital Identity */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-cyan-900/40 text-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 mx-auto mb-3" />
              <h4 className="text-sm font-bold text-cyan-300 mb-1">اهورایی دیجیتال (Digital)</h4>
              <span className="text-[11px] text-cyan-400 font-mono block mb-2">ahouraidigital.ir</span>
              <p className="text-xs text-slate-400">
                پالت سرمه‌ای فضایی عمیق، آبی سایبرنتیک و نئون فیروزه‌ای؛ القاکننده نوآوری، سرعت، هوش مصنوعی و امنیت داده.
              </p>
            </div>

          </div>
        </section>

        {/* Section 4: Lead Generation & Next Steps */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-emerald-400">
            <TrendingUp className="w-5 h-5" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              ۴. چک‌لیست مراحل اجرایی برای راه‌اندازی روی سرورهای واقعی
            </h3>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            {[
              {
                title: 'مرحله ۱: استقرار هاب روی ahourai.ir',
                desc: 'صفحه اصلی ahourai.ir دقیقاً با دیزاین ارسالی (کارت‌های شیشه‌ای دوگانه و پاپ‌آپ بلور) روی هاست اصلی قرار می‌گیرد.'
              },
              {
                title: 'مرحله ۲: برپایی پورتال دیجیتال روی ahouraidigital.ir',
                desc: 'قالب اختصاصی دیجیتال شامل ۴ ستون و بخش مقالات نصب شده و مطالب سایت قبلی همراه با ریدایرکت منتقل می‌گردد.'
              },
              {
                title: 'مرحله ۳: اتصال سیستم آشیانه روی ahourainest.ir',
                desc: 'پورتال ساختمانی همراه با محاسبه‌گر آنلاین، گالری ۳Ds Max و فرم برآورد پروژه بارگذاری می‌شود.'
              },
              {
                title: 'مرحله ۴: پیوند شبکه‌های اجتماعی و ابزارهای ارتباطی',
                desc: 'کانال‌های تلگرام، واتس‌اپ، تلفن و اینستاگرام در پاپ‌آپ مشترک هاب و صفحات اختصاصی سینک می‌گردند.'
              }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/40 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold mb-0.5">{step.title}</strong>
                  <span className="text-slate-400">{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Action Button */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-black">
            آماده بررسی طرح‌ها و نهایی‌سازی پورتال‌ها هستید؟
          </h3>
          <p className="text-xs sm:text-sm text-cyan-100 max-w-xl mx-auto">
            می‌توانید با استفاده از زبانه بالای صفحه بین «هاب اصلی»، «آشیانه اهورایی» و «اهورایی دیجیتال» سوییچ کرده و عملکرد زنده هر بخش را بررسی فرمایید.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={onBackToHub}
              className="px-6 py-3 rounded-xl bg-white text-slate-950 font-black text-xs hover:bg-slate-100 transition-colors"
            >
              مشاهده هاب اصلی اهورایی
            </button>
            <button
              onClick={onOpenContact}
              className="px-6 py-3 rounded-xl bg-slate-950/60 hover:bg-slate-950 text-white font-bold text-xs border border-white/20 transition-colors"
            >
              ارتباط مستقیم با تیم اهورایی
            </button>
          </div>
        </div>

      </main>
    </div>
  );
};
