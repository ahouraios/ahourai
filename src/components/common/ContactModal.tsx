import React, { useEffect, useRef, useState } from 'react';
import {
  X,
  Phone,
  Send,
  MessageCircle,
  Instagram,
  Mail,
  ChevronLeft,
  CheckCircle,
  Copy,
  Clock,
  Sparkles
} from 'lucide-react';
import { AhouraiWingedLogo } from './AhouraiLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = 'عمومی'
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'channels' | 'quickMessage'>('channels');
  
  // Quick form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    topic: defaultTopic,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle outside click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-xl transition-all duration-300 animate-fadeIn"
      aria-modal="true"
      role="dialog"
    >
      {/* Modal Container */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-gradient-to-b from-white/95 to-slate-50/95 dark:from-slate-900/95 dark:to-slate-950/95 border border-white/20 dark:border-cyan-500/20 rounded-3xl shadow-2xl shadow-cyan-950/40 p-6 sm:p-8 text-slate-800 dark:text-slate-100 overflow-hidden transform transition-all"
        style={{
          boxShadow: '0 25px 60px -15px rgba(2, 132, 199, 0.25), 0 0 40px rgba(6, 182, 212, 0.15)'
        }}
      >
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Row with Close button */}
        <div className="flex items-start justify-between border-b border-slate-200/80 dark:border-slate-800 pb-4 mb-5">
          <div className="flex items-center gap-3">
            <AhouraiWingedLogo size="sm" showText={false} />
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                ارتباط با ما
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                از طریق راه‌های زیر با ما در ارتباط باشید.
              </p>
            </div>
          </div>

          {/* Close button with explicit target and hover state */}
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
            title="بستن پنجره"
            aria-label="بستن"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch between channels and instant message */}
        <div className="flex items-center gap-2 p-1 mb-5 bg-slate-100 dark:bg-slate-800/70 rounded-xl text-xs sm:text-sm font-medium">
          <button
            type="button"
            onClick={() => setActiveTab('channels')}
            className={`flex-1 py-2 px-3 rounded-lg transition-all text-center ${
              activeTab === 'channels'
                ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            کانال‌های ارتباط مستقیم
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('quickMessage')}
            className={`flex-1 py-2 px-3 rounded-lg transition-all text-center ${
              activeTab === 'quickMessage'
                ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            ثبت پیام و استعلام سریع
          </button>
        </div>

        {activeTab === 'channels' ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Visual Phone Illustration with floating icons (Left column on desktop) */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-4 bg-gradient-to-b from-cyan-50/60 to-blue-50/30 dark:from-slate-800/40 dark:to-slate-900/40 rounded-2xl border border-cyan-100 dark:border-cyan-900/30 relative overflow-hidden">
              <div className="relative w-36 h-52 sm:w-40 sm:h-56 bg-slate-900 rounded-[2rem] border-4 border-slate-700/80 shadow-xl flex flex-col items-center justify-center p-3 text-center">
                {/* Speaker notch */}
                <div className="w-12 h-1.5 bg-slate-700 rounded-full mb-3" />
                
                {/* Screen content */}
                <div className="w-full flex-1 bg-gradient-to-b from-slate-950 to-slate-900 rounded-2xl flex flex-col items-center justify-center p-2 border border-cyan-500/30">
                  <AhouraiWingedLogo size="sm" showText={false} />
                  <span className="text-[11px] font-bold text-cyan-400 tracking-wider mt-1">AHOURAI</span>
                  <div className="flex items-center gap-1 text-[9px] text-emerald-400 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>پاسخگوی آنلاین</span>
                  </div>
                </div>

                {/* Floating channel badges orbiting */}
                <div className="absolute -top-1 -right-2 p-2 bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-500/40 animate-bounce duration-1000">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="absolute top-12 -left-3 p-2 bg-sky-500 text-white rounded-full shadow-lg shadow-sky-500/40">
                  <Send className="w-4 h-4" />
                </div>
                <div className="absolute bottom-14 -right-3 p-2 bg-emerald-600 text-white rounded-full shadow-lg shadow-emerald-600/40">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="absolute -bottom-2 -left-2 p-2 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white rounded-full shadow-lg">
                  <Instagram className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-3 text-center">
                <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 flex items-center justify-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  پشتیبانی یکپارچه گروه اهورایی
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                  پوشش سراسری پروژه‌های دیجیتال و ساختمانی
                </span>
              </div>
            </div>

            {/* Channels List (Right column) */}
            <div className="md:col-span-7 flex flex-col gap-2.5">
              {/* Phone */}
              <a
                href="tel:09121234567"
                className="group flex items-center justify-between p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/60 hover:border-emerald-500/50 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 transition-all shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      تماس تلفنی
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      پاسخگویی از ۹ صبح تا ۹ شب
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  <span className="font-mono text-sm font-semibold dir-ltr">۰۲۱-۸۸۸۸۴۳۲۱</span>
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </div>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/ahourai_assistant"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/60 hover:border-sky-500/50 hover:bg-sky-50/30 dark:hover:bg-sky-950/20 transition-all shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      تلگرام
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      ارتباط با دستیار هوشمند اهورایی
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-sky-600 dark:text-sky-400 font-medium">
                  <span className="font-mono dir-ltr">@ahourai_assistant</span>
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/989121234567"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/60 hover:border-emerald-500/50 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 transition-all shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      واتس‌اپ
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      مشاوره و پشتیبانی سریع
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  <span>شروع چت</span>
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/ahourai.ir"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/60 hover:border-rose-500/50 hover:bg-rose-50/30 dark:hover:bg-rose-950/20 transition-all shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      اینستاگرام
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      دنبال کنید و با ما در ارتباط باشید
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-rose-600 dark:text-rose-400 font-medium">
                  <span className="font-mono dir-ltr">@ahourai.ir</span>
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </div>
              </a>

              {/* Email */}
              <div className="group flex items-center justify-between p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/60 hover:border-cyan-500/50 hover:bg-cyan-50/30 dark:hover:bg-cyan-950/20 transition-all shadow-sm">
                <a
                  href="mailto:info.ahourai@gmail.com"
                  className="flex items-center gap-3 flex-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      ایمیل
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono dir-ltr">
                      info.ahourai@gmail.com
                    </p>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard('info.ahourai@gmail.com', 'email')}
                  className="p-2 text-slate-400 hover:text-cyan-500 transition-colors"
                  title="کپی آدرس ایمیل"
                >
                  {copiedKey === 'email' ? (
                    <span className="text-[11px] text-emerald-500 flex items-center gap-1 font-semibold">
                      <CheckCircle className="w-3.5 h-3.5" /> کپی شد
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Quick Message Form */
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {submitted ? (
              <div className="p-8 text-center bg-emerald-500/10 border border-emerald-500/30 rounded-2xl">
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-2" />
                <h4 className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                  درخواست شما با موفقیت ثبت شد
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  کارشناسان اهورایی در اسرع وقت با شما تماس خواهند گرفت.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      نام و نام خانوادگی
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: علیرضا محمدی"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      شماره تماس همراه
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:border-cyan-500 focus:outline-none dir-ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    حوزه مدنظر برای استعلام و مشاوره
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="آشیانه اهورایی: طراحی ویلا و معماری">آشیانه اهورایی: طراحی ویلا و معماری</option>
                    <option value="آشیانه اهورایی: رندرینگ و مدلسازی ۳بعدی">آشیانه اهورایی: رندرینگ و مدلسازی ۳بعدی (3Ds Max)</option>
                    <option value="آشیانه اهورایی: دکوراسیون و بازسازی لوکس">آشیانه اهورایی: دکوراسیون داخلی و بازسازی لوکس</option>
                    <option value="اهورایی دیجیتال: طراحی وب و سامانه اختصاصی">اهورایی دیجیتال: طراحی وب و سامانه‌های ابری</option>
                    <option value="اهورایی دیجیتال: راهکارهای هوش مصنوعی و اتوماسیون">اهورایی دیجیتال: راهکارهای هوش مصنوعی و اتوماسیون</option>
                    <option value="اهورایی دیجیتال: برندینگ، سئو و رشد محتوا">اهورایی دیجیتال: برندینگ، سئو و رشد محتوا</option>
                    <option value="همکاری تجاری و سرمایه‌گذاری">همکاری تجاری و سرمایه‌گذاری</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    توضیحات کوتاه پروژه یا پرسش شما
                  </label>
                  <textarea
                    rows={3}
                    placeholder="مختصری درباره متراژ، سبک یا ویژگی‌های مدنظر خود بنویسید..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:border-cyan-500 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  ثبت رایگان درخواست مشاوره
                </button>
              </>
            )}
          </form>
        )}

        {/* Modal Bottom Sign-off (matches the user's mockup footer exactly!) */}
        <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-slate-800 text-center">
          <div className="inline-flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700" />
            <span>ما اینجا هستیم تا به سوالات شما پاسخ دهیم.</span>
            <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700" />
          </div>
        </div>
      </div>
    </div>
  );
};
