import React, { useState } from "react";
import {
  Phone, MessageCircle, MapPin, Star, ChevronDown, Menu, X,
  Ear, Wind, Mic2, Moon, Activity, Sparkles, ShieldCheck, Stethoscope,
  Baby, ClipboardList, HeartHandshake, Snowflake, CheckCircle2, CalendarCheck,
} from "lucide-react";

/* ============================================================
   د. أحمد مصطفى حجازي — صفحة هبوط (أنف وأذن وحنجرة)
   الاتجاه: RTL — عربي | تصميم طبي: بترولي/تركوازي/سماوي
   ============================================================ */

const C = {
  navy: "#0E3A53",
  teal: "#0E7C8B",
  cyan: "#16A6C9",
  gold: "#C7972B",
  ink: "#1F2933",
  soft: "#5A6B76",
  tint: "#EAF4F6",
  line: "#D7E3E8",
  white: "#FFFFFF",
};

const WA_HELIO = "https://wa.me/201149243824";
const WA_MADINATY = "https://wa.me/201558885158";

export default function DrAhmedHegazyLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const nav = [
    ["#about", "عن العيادة"],
    ["#doctor", "عن الدكتور"],
    ["#services", "الخدمات"],
    ["#coblation", "الكوبليشن"],
    ["#reviews", "المرضى"],
    ["#branches", "الفروع"],
    ["#faq", "الأسئلة"],
  ];

  return (
    <div dir="rtl" style={{ fontFamily: "Tajawal, Cairo, system-ui, sans-serif", color: C.ink, background: C.white }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&family=Cairo:wght@400;600;700;900&display=swap');
        html { scroll-behavior: smooth; }
        .fade-up { animation: fadeUp .7s ease both; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px);} to {opacity:1; transform:none;} }
        @media (prefers-reduced-motion: reduce){ .fade-up{ animation:none } html{scroll-behavior:auto} }
        .card-hover{ transition: transform .25s ease, box-shadow .25s ease; }
        .card-hover:hover{ transform: translateY(-4px); box-shadow: 0 14px 34px rgba(14,58,83,.14); }
      `}</style>

      {/* ===== Header ===== */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,.92)", backdropFilter: "blur(8px)", borderBottom: `1px solid ${C.line}` }}>
        <div className="mx-auto max-w-6xl px-5 flex items-center justify-between" style={{ height: 68 }}>
          <a href="#top" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
            <span style={{ width: 40, height: 40, borderRadius: 12, background: C.navy, color: C.white, display: "grid", placeItems: "center", fontWeight: 800 }}>أ</span>
            <span style={{ fontWeight: 800, color: C.navy, lineHeight: 1.1 }}>
              د. أحمد حجازي
              <span style={{ display: "block", fontSize: 11, fontWeight: 500, color: C.soft }}>أنف وأذن وحنجرة</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {nav.map(([href, label]) => (
              <a key={href} href={href} style={{ color: C.ink, textDecoration: "none", fontSize: 15, fontWeight: 500 }}>{label}</a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a href={WA_HELIO} target="_blank" rel="noreferrer"
              style={{ background: C.cyan, color: C.white, padding: "9px 18px", borderRadius: 12, textDecoration: "none", fontWeight: 700, fontSize: 15, display: "inline-flex", gap: 8, alignItems: "center" }}>
              <CalendarCheck size={18} /> احجز الآن
            </a>
          </div>

          <button className="lg:hidden" onClick={() => setMenuOpen(v => !v)} aria-label="القائمة" style={{ background: "transparent", border: "none", color: C.navy }}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden px-5 pb-4" style={{ borderTop: `1px solid ${C.line}` }}>
            {nav.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}
                style={{ display: "block", padding: "12px 4px", color: C.ink, textDecoration: "none", borderBottom: `1px solid ${C.line}`, fontWeight: 500 }}>{label}</a>
            ))}
            <a href={WA_HELIO} target="_blank" rel="noreferrer"
              style={{ marginTop: 12, background: C.cyan, color: C.white, padding: "12px", borderRadius: 12, textDecoration: "none", fontWeight: 700, display: "block", textAlign: "center" }}>احجز موعدك الآن</a>
          </div>
        )}
      </header>

      {/* ===== Hero ===== */}
      <section id="top" style={{ background: `linear-gradient(160deg, ${C.navy} 0%, #0b2c40 55%, ${C.teal} 140%)`, color: C.white, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", insetInlineStart: -120, top: -120, width: 340, height: 340, borderRadius: "50%", background: "rgba(22,166,201,.22)", filter: "blur(10px)" }} />
        <div style={{ position: "absolute", insetInlineEnd: -80, bottom: -140, width: 300, height: 300, borderRadius: "50%", background: "rgba(199,151,43,.16)", filter: "blur(6px)" }} />
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24 grid lg:grid-cols-12 gap-10 items-center" style={{ position: "relative" }}>
          <div className="lg:col-span-7 fade-up">
            <span style={{ display: "inline-block", background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.22)", padding: "6px 14px", borderRadius: 999, fontSize: 14, fontWeight: 600, marginBottom: 20 }}>
              أخصائي جراحة ومناظير الأنف والأذن والحنجرة — وتجميل الأنف والأذن
            </span>
            <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 800, lineHeight: 1.25, margin: 0 }}>
              د. أحمد مصطفى حجازي
            </h1>
            <p style={{ fontSize: "clamp(20px, 3.4vw, 28px)", fontWeight: 700, color: "#BFEAF3", margin: "14px 0 10px" }}>
              تنفّس بحرية… واسمع بوضوح… وابتسم بثقة.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.9, color: "rgba(255,255,255,.9)", maxWidth: 620 }}>
              رعاية طبية دقيقة للكبار والأطفال، تشخيص صحيح من أول زيارة، وخطة علاج واضحة بأحدث الأجهزة والتقنيات — في مصر الجديدة ومدينتي.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#branches" style={{ background: C.cyan, color: C.white, padding: "14px 26px", borderRadius: 14, textDecoration: "none", fontWeight: 700, fontSize: 17, display: "inline-flex", gap: 8, alignItems: "center" }}>
                <Phone size={20} /> احجز موعدك الآن
              </a>
              <a href={WA_HELIO} target="_blank" rel="noreferrer" style={{ background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.3)", color: C.white, padding: "14px 26px", borderRadius: 14, textDecoration: "none", fontWeight: 700, fontSize: 17, display: "inline-flex", gap: 8, alignItems: "center" }}>
                <MessageCircle size={20} /> تواصل عبر واتساب
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 fade-up">
            <div style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: 24, padding: 24 }}>
              <div className="grid grid-cols-3 gap-3">
                {[[Ear, "الأذن"], [Wind, "الأنف"], [Mic2, "الحنجرة"], [Snowflake, "الكوبليشن"], [Sparkles, "التجميل"], [Baby, "الأطفال"]].map(([Icon, label], i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,.1)", borderRadius: 16, padding: "18px 8px", textAlign: "center" }}>
                    <Icon size={26} color="#BFEAF3" />
                    <div style={{ marginTop: 8, fontSize: 14, fontWeight: 600 }}>{label}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16, textAlign: "center", fontSize: 14, color: "rgba(255,255,255,.8)" }}>
                تشخيص بالمنظار • عمليات دقيقة • متابعة بعد العلاج
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== About / Why us ===== */}
      <Section id="about" tint eyebrow="عن العيادة" title="لماذا تختارنا؟">
        <p style={{ fontSize: 18, lineHeight: 1.9, color: C.soft, maxWidth: 820, margin: "0 auto 8px", textAlign: "center" }}>
          عيادة د. أحمد مصطفى حجازي ليست مجرد مكان للكشف، بل منظومة رعاية متكاملة لأمراض الأنف والأذن والحنجرة — لتحصل على التشخيص الصحيح والعلاج المناسب في أقل وقت ممكن، للكبار والأطفال.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {[
            [Stethoscope, "تشخيص دقيق بالمنظار", "نصل لسبب المشكلة الحقيقي، وليس علاج الأعراض فقط."],
            [Snowflake, "أحدث الأجهزة والتقنيات", "بما فيها جهاز الكوبليشن لعمليات أدق وألم أقل وتعافٍ أسرع."],
            [ShieldCheck, "خبرة جراحية موثوقة", "جراحات ميكروسكوبية وبالمنظار، وتجميل الأنف والأذن."],
            [Baby, "رعاية متخصصة للأطفال", "تعامل هادئ ومطمئن في حالات اللوز واللحمية والتهابات الأذن."],
            [ClipboardList, "خطة علاج واضحة", "نشرح لك الحالة والخيارات بلغة بسيطة دون تعقيد."],
            [HeartHandshake, "متابعة بعد العلاج", "نتابع معك حتى تطمئن على نتيجة العلاج بشكل كامل."],
          ].map(([Icon, t, d], i) => (
            <div key={i} className="card-hover" style={{ background: C.white, border: `1px solid ${C.line}`, borderRadius: 18, padding: 24 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: C.tint, display: "grid", placeItems: "center", marginBottom: 14 }}>
                <Icon size={24} color={C.teal} />
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: C.navy, margin: "0 0 6px" }}>{t}</h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.8, color: C.soft, margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== Doctor ===== */}
      <Section id="doctor" eyebrow="تعرّف عليه" title="عن د. أحمد مصطفى حجازي">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <div style={{ background: `linear-gradient(160deg, ${C.navy}, ${C.teal})`, borderRadius: 22, padding: 28, color: C.white, textAlign: "center" }}>
              <div style={{ width: 96, height: 96, borderRadius: "50%", background: "rgba(255,255,255,.15)", display: "grid", placeItems: "center", margin: "0 auto 14px" }}>
                <Stethoscope size={44} color="#BFEAF3" />
              </div>
              <div style={{ fontSize: 20, fontWeight: 800 }}>د. أحمد مصطفى حجازي</div>
              <div style={{ fontSize: 14.5, color: "rgba(255,255,255,.85)", marginTop: 6, lineHeight: 1.7 }}>
                أخصائي جراحة ومناظير الأنف والأذن والحنجرة — وتجميل الأنف والأذن
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <p style={{ fontSize: 17, lineHeight: 1.95, color: C.ink }}>
              يجمع د. أحمد بين الدقة في التشخيص والمهارة في الجراحة، مع حرصه على اختيار أقل وسيلة علاجية تدخّلًا تحقق أفضل نتيجة للمريض. يؤمن أن نجاح العلاج يبدأ من فهم الحالة بشكل صحيح، ولذلك يعتمد على المناظير التشخيصية الحديثة قبل البدء في أي خطة علاج.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.95, color: C.ink }}>
              يتميّز أسلوبه بالهدوء والوضوح مع الكبار والأطفال، ويحرص على أن يخرج كل مريض فاهمًا لحالته ومطمئنًا لخطوات علاجه.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              {[
                "جراحات الجيوب الأنفية بالمنظار وتعديل الحاجز الأنفي",
                "جراحات الأذن الميكروسكوبية وتركيب أنابيب التهوية",
                "استئصال اللوز واللحمية بأحدث التقنيات (الكوبليشن)",
                "عمليات تجميل الأنف والأذن الخفاشية",
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-2" style={{ background: C.tint, borderRadius: 12, padding: "12px 14px" }}>
                  <CheckCircle2 size={20} color={C.teal} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 15.5, fontWeight: 500, color: C.navy }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ===== Services ===== */}
      <Section id="services" tint eyebrow="خدماتنا" title="خدمات العيادة">
        <p style={{ fontSize: 17, color: C.soft, textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          رعاية شاملة لكل أمراض الأنف والأذن والحنجرة — تشخيصًا وعلاجًا وجراحةً، للكبار والأطفال.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {[
            [Ear, "خدمات الأذن", ["التهابات الأذن الوسطى والخارجية", "ضعف السمع وطنين الأذن", "الدوار ومشاكل الاتزان", "مناظير الأذن التشخيصية", "تركيب أنابيب تهوية الأذن", "جراحات الأذن الميكروسكوبية"]],
            [Wind, "الأنف والجيوب الأنفية", ["مشاكل الجيوب الأنفية", "حساسية الأنف والانسداد الأنفي", "جراحات الجيوب بالمنظار", "تعديل الحاجز الأنفي", "استخراج الأجسام الغريبة من الأنف"]],
            [Mic2, "الحنجرة والحلق", ["اللوز واللحمية والتهابات الحلق المزمنة", "اضطرابات الصوت والأحبال الصوتية", "استئصال اللوزتين واللحمية", "استخراج الأجسام الغريبة من الحلق", "مناظير الحنجرة التشخيصية"]],
            [Moon, "النوم والتنفس", ["متابعة وعلاج الشخير", "علاج انقطاع التنفس أثناء النوم"]],
            [Activity, "أورام الرأس والرقبة", ["متابعة وعلاج أورام الرأس والرقبة في تخصص الأنف والأذن والحنجرة"]],
            [Sparkles, "التجميل", ["تجميل الأنف مع الحفاظ على وظيفة التنفس", "تجميل الأذن الخفاشية (تصحيح الأذن البارزة)"]],
          ].map(([Icon, title, items], i) => (
            <div key={i} className="card-hover" style={{ background: C.white, border: `1px solid ${C.line}`, borderRadius: 18, padding: 24, borderTop: `4px solid ${C.cyan}` }}>
              <div className="flex items-center gap-3 mb-4">
                <div style={{ width: 44, height: 44, borderRadius: 12, background: C.navy, display: "grid", placeItems: "center" }}>
                  <Icon size={22} color={C.white} />
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: C.navy, margin: 0 }}>{title}</h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {items.map((it, j) => (
                  <li key={j} className="flex items-start gap-2" style={{ padding: "6px 0", fontSize: 15.5, color: C.ink }}>
                    <span style={{ color: C.teal, marginTop: 2 }}>•</span>{it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Surgeries */}
        <div style={{ marginTop: 28, background: C.navy, borderRadius: 20, padding: "28px 26px", color: C.white }}>
          <h3 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 16px" }}>العمليات الجراحية التي نجريها</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
            {["استئصال اللوزتين واللحمية بأحدث الأجهزة", "جراحات الجيوب الأنفية بالمنظار", "تعديل الحاجز الأنفي", "تركيب أنابيب تهوية الأذن", "جراحات الأذن الميكروسكوبية", "عمليات تجميل الأنف", "تجميل الأذن الخفاشية"].map((t, i) => (
              <div key={i} className="flex items-start gap-2" style={{ fontSize: 15.5 }}>
                <CheckCircle2 size={18} color={C.cyan} style={{ flexShrink: 0, marginTop: 3 }} />{t}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== Coblation ===== */}
      <Section id="coblation" eyebrow="تقنية حديثة" title="جهاز الكوبليشن (الكي بالتبريد)">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <h3 style={{ fontSize: 22, fontWeight: 800, color: C.teal, margin: "0 0 12px" }}>علاج أدق… ألم أقل… تعافٍ أسرع</h3>
            <p style={{ fontSize: 17, lineHeight: 1.95, color: C.ink }}>
              الكوبليشن (Coblation) — أو الكي بالتبريد — من أحدث التقنيات في جراحات الأنف والأذن والحنجرة، خاصةً في استئصال اللوز واللحمية وتصغير قرينات الأنف.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.95, color: C.ink }}>
              يعتمد على موجات الترددات الراديوية عند درجة حرارة منخفضة لإزالة الأنسجة بدقة، بدلًا من الحرارة العالية في الطرق التقليدية — ما يُحدث فارقًا كبيرًا في تجربة المريض ونتيجة العملية.
            </p>
            <div style={{ background: C.tint, borderInlineStart: `4px solid ${C.teal}`, borderRadius: 12, padding: "16px 18px", marginTop: 18 }}>
              <p style={{ margin: 0, fontSize: 15.5, color: C.navy, fontWeight: 500, lineHeight: 1.8 }}>
                خيار مثالي لأولياء الأمور القلقين على أطفالهم من عملية اللوز واللحمية — تجربة أسهل وأقل ألمًا وتعافٍ أسرع.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ["نزيف أقل", "أثناء وبعد العملية"],
                ["ألم أقل", "في فترة التعافي"],
                ["تعافٍ أسرع", "رجوع أسرع للنشاط الطبيعي"],
                ["دقة أعلى", "حفاظ على الأنسجة السليمة"],
                ["أمان للأطفال", "أخف وطأة وأكثر أمانًا"],
              ].map(([t, d], i) => (
                <div key={i} className="card-hover" style={{ background: C.white, border: `1px solid ${C.line}`, borderRadius: 16, padding: "18px 16px" }}>
                  <Snowflake size={22} color={C.cyan} />
                  <div style={{ fontWeight: 800, color: C.navy, fontSize: 17, marginTop: 8 }}>{t}</div>
                  <div style={{ fontSize: 14, color: C.soft, marginTop: 2 }}>{d}</div>
                </div>
              ))}
              <a href={WA_HELIO} target="_blank" rel="noreferrer" className="card-hover" style={{ background: C.cyan, borderRadius: 16, padding: "18px 16px", color: C.white, textDecoration: "none", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <MessageCircle size={22} />
                <div style={{ fontWeight: 800, fontSize: 16, marginTop: 8 }}>استشر الدكتور</div>
                <div style={{ fontSize: 13.5, opacity: .9 }}>حول عملية الكوبليشن</div>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== Booking steps ===== */}
      <Section id="booking" tint eyebrow="الحجز" title="احجز موعدك الآن">
        <p style={{ fontSize: 17, color: C.soft, textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
          خطوة واحدة بينك وبين حلّ مشكلتك. احجز كشفك واختر الفرع الأقرب إليك.
        </p>
        <div className="grid sm:grid-cols-3 gap-5 mt-10">
          {[
            [Phone, "اتصل أو راسلنا", "عبر واتساب على رقم الفرع المناسب لك."],
            [CalendarCheck, "حدّد موعدك", "اختر الوقت المناسب مع فريق الاستقبال."],
            [HeartHandshake, "احضر واطمئن", "نحن معك من أول زيارة حتى التعافي."],
          ].map(([Icon, t, d], i) => (
            <div key={i} style={{ background: C.white, border: `1px solid ${C.line}`, borderRadius: 18, padding: 26, textAlign: "center", position: "relative" }}>
              <div style={{ position: "absolute", insetInlineStart: 18, top: 16, fontWeight: 900, fontSize: 28, color: C.line }}>{i + 1}</div>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: C.tint, display: "grid", placeItems: "center", margin: "0 auto 14px" }}>
                <Icon size={26} color={C.teal} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.navy, margin: "0 0 6px" }}>{t}</h3>
              <p style={{ fontSize: 15, color: C.soft, margin: 0, lineHeight: 1.75 }}>{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== Reviews ===== */}
      <Section id="reviews" eyebrow="ثقة مرضانا" title="آراء ومراجعات المرضى">
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {[
            ["تجربة ممتازة من أول لحظة. الدكتور شرح لي حالتي بالتفصيل وطمأنني، والعملية كانت أسهل بكثير مما توقعت.", "مريض من مصر الجديدة"],
            ["ابني أجرى عملية لوز ولحمية بجهاز الكوبليشن، والتعافي كان سريعًا جدًا والألم بسيط. شكرًا جزيلًا يا دكتور.", "ولية أمر من مدينتي"],
          ].map(([q, a], i) => (
            <div key={i} style={{ background: C.white, border: `1px solid ${C.line}`, borderRadius: 18, padding: 26 }}>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, s) => <Star key={s} size={20} color={C.gold} fill={C.gold} />)}
              </div>
              <p style={{ fontSize: 16.5, lineHeight: 1.9, color: C.ink, margin: "0 0 12px" }}>«{q}»</p>
              <div style={{ fontWeight: 700, color: C.teal, fontSize: 15 }}>— {a}</div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: 14, color: C.soft, marginTop: 18 }}>
          * نماذج توضيحية — يُوصى بربط القسم بمراجعات Google للفرعين لعرض التقييمات بالنجوم في نتائج البحث.
        </p>
      </Section>

      {/* ===== Branches ===== */}
      <Section id="branches" tint eyebrow="مواقعنا" title="الفروع وأرقام التواصل">
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <BranchCard
            name="فرع مصر الجديدة" clinic="عيادات Tri Care"
            lines={["ميدان سانت فاتيما – مصر الجديدة", "٧٠ ش عبد العزيز فهمي – الدور الثاني", "أعلى المصرف المتحد"]}
            tel="0114 9243824" telHref="tel:+201149243824" wa={WA_HELIO}
            map="https://maps.app.goo.gl/ntFb489ZEAPErAP88?g_st=iwb"
          />
          <BranchCard
            name="فرع مدينتي" clinic="عيادات Sira Clinics"
            lines={["مدينتي – إيست هب (East Hub)", "الدور الثاني"]}
            tel="+20 155 8885158" telHref="tel:+201558885158" wa={WA_MADINATY}
            map={null}
          />
        </div>
      </Section>

      {/* ===== FAQ ===== */}
      <Section id="faq" eyebrow="أسئلة متكررة" title="الأسئلة الشائعة">
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          {[
            ["ما هي تخصصات د. أحمد مصطفى حجازي؟", "أخصائي جراحة ومناظير الأنف والأذن والحنجرة، وتجميل الأنف والأذن، ويتعامل مع الكبار والأطفال في التشخيص والعلاج والجراحة."],
            ["أين توجد عيادات د. أحمد حجازي؟", "فرعان: مصر الجديدة (عيادات Tri Care – ميدان سانت فاتيما، ٧٠ ش عبد العزيز فهمي)، ومدينتي (عيادات Sira Clinics – إيست هب)."],
            ["كيف يمكنني حجز موعد؟", "بالاتصال أو عبر واتساب على رقم الفرع الأقرب إليك: مصر الجديدة (0114 9243824) أو مدينتي (155 8885158 20+)."],
            ["ما هو جهاز الكوبليشن ولماذا يُستخدم؟", "تقنية حديثة (الكي بالتبريد) تستخدم الترددات الراديوية عند حرارة منخفضة لإزالة الأنسجة بدقة، خاصةً في استئصال اللوز واللحمية. مميزاتها: نزيف وألم أقل وتعافٍ أسرع، ومناسبة جدًا للأطفال."],
            ["هل تناسب عملية اللوز بالكوبليشن الأطفال؟", "نعم، من أنسب الخيارات للأطفال لأنها أقل ألمًا وأسرع تعافيًا، بعد تقييم حالة الطفل من قبل الدكتور."],
            ["هل تقدّمون عمليات تجميل الأنف والأذن؟", "نعم، تشمل خدماتنا تجميل الأنف (مع الحفاظ على وظيفة التنفس) وتجميل الأذن الخفاشية للحصول على مظهر طبيعي ومتناسق."],
            ["متى يجب أن أزور طبيب الأنف والأذن والحنجرة؟", "عند استمرار أعراض مثل: انسداد الأنف، حساسية متكررة، التهابات أذن متكررة، ضعف سمع أو طنين، بحة صوت مستمرة، دوخة، أو شخير وانقطاع نفس أثناء النوم."],
            ["هل تعالجون الشخير وانقطاع النفس أثناء النوم؟", "نعم، نقوم بتشخيص ومتابعة وعلاج حالات الشخير وانقطاع التنفس أثناء النوم لتحسين جودة نومك وصحتك العامة."],
          ].map(([q, a], i) => (
            <div key={i} style={{ borderBottom: `1px solid ${C.line}` }}>
              <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                style={{ width: "100%", background: "transparent", border: "none", cursor: "pointer", padding: "18px 4px", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "right", gap: 12 }}>
                <span style={{ fontSize: 17, fontWeight: 700, color: C.navy }}>{q}</span>
                <ChevronDown size={22} color={C.teal} style={{ flexShrink: 0, transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform .25s" }} />
              </button>
              {openFaq === i && (
                <p style={{ margin: "0 4px 18px", fontSize: 16, lineHeight: 1.9, color: C.soft }}>{a}</p>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ===== Footer ===== */}
      <footer style={{ background: C.navy, color: "rgba(255,255,255,.85)" }}>
        <div className="mx-auto max-w-6xl px-5 py-14 grid md:grid-cols-3 gap-10">
          <div>
            <div style={{ fontSize: 22, fontWeight: 800, color: C.white }}>د. أحمد مصطفى حجازي</div>
            <p style={{ fontSize: 15, lineHeight: 1.8, marginTop: 10 }}>
              أخصائي جراحة ومناظير الأنف والأذن والحنجرة — تجميل الأنف والأذن. رعاية دقيقة للكبار والأطفال في مصر الجديدة ومدينتي.
            </p>
          </div>
          <div>
            <div style={{ fontWeight: 700, color: C.white, marginBottom: 12 }}>فرع مصر الجديدة</div>
            <p style={{ fontSize: 15, lineHeight: 1.9 }}>عيادات Tri Care – ميدان سانت فاتيما، ٧٠ ش عبد العزيز فهمي، الدور الثاني، أعلى المصرف المتحد</p>
            <a href="tel:+201149243824" style={{ color: "#BFEAF3", textDecoration: "none", fontWeight: 700, display: "inline-flex", gap: 6, alignItems: "center", marginTop: 6 }}><Phone size={16} /> 0114 9243824</a>
          </div>
          <div>
            <div style={{ fontWeight: 700, color: C.white, marginBottom: 12 }}>فرع مدينتي</div>
            <p style={{ fontSize: 15, lineHeight: 1.9 }}>عيادات Sira Clinics – إيست هب، الدور الثاني</p>
            <a href="tel:+201558885158" style={{ color: "#BFEAF3", textDecoration: "none", fontWeight: 700, display: "inline-flex", gap: 6, alignItems: "center", marginTop: 6 }}><Phone size={16} /> 155 8885158 20+</a>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.14)" }}>
          <div className="mx-auto max-w-6xl px-5 py-5 text-center" style={{ fontSize: 13.5, color: "rgba(255,255,255,.6)" }}>
            © جميع الحقوق محفوظة — عيادة د. أحمد مصطفى حجازي لجراحة الأنف والأذن والحنجرة.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={WA_HELIO} target="_blank" rel="noreferrer" aria-label="واتساب"
        style={{ position: "fixed", insetInlineStart: 20, bottom: 20, zIndex: 60, background: "#25D366", width: 58, height: 58, borderRadius: "50%", display: "grid", placeItems: "center", boxShadow: "0 8px 24px rgba(37,211,102,.45)" }}>
        <MessageCircle size={30} color="#fff" />
      </a>
    </div>
  );
}

/* ---------- reusable Section ---------- */
function Section({ id, eyebrow, title, children, tint }) {
  return (
    <section id={id} style={{ background: tint ? "#F5FAFB" : C.white, padding: "68px 0" }}>
      <div className="mx-auto max-w-6xl px-5">
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <span style={{ color: C.cyan, fontWeight: 700, fontSize: 14, letterSpacing: 1 }}>{eyebrow}</span>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 800, color: C.navy, margin: "6px 0 0" }}>{title}</h2>
          <div style={{ width: 64, height: 4, background: C.gold, borderRadius: 4, margin: "14px auto 0" }} />
        </div>
        <div style={{ marginTop: 28 }}>{children}</div>
      </div>
    </section>
  );
}

/* ---------- Branch card ---------- */
function BranchCard({ name, clinic, lines, tel, telHref, wa, map }) {
  return (
    <div style={{ background: C.white, border: `1px solid ${C.line}`, borderRadius: 20, overflow: "hidden" }}>
      <div style={{ background: C.navy, color: C.white, padding: "18px 22px", display: "flex", alignItems: "center", gap: 10 }}>
        <MapPin size={22} color="#BFEAF3" />
        <div>
          <div style={{ fontWeight: 800, fontSize: 18 }}>{name}</div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,.8)" }}>{clinic}</div>
        </div>
      </div>
      <div style={{ padding: 22 }}>
        {lines.map((l, i) => (
          <p key={i} style={{ margin: "0 0 6px", fontSize: 15.5, color: C.ink, lineHeight: 1.7 }}>{l}</p>
        ))}
        <div className="flex flex-wrap gap-3 mt-4">
          <a href={telHref} style={{ background: C.tint, color: C.navy, padding: "11px 18px", borderRadius: 12, textDecoration: "none", fontWeight: 700, display: "inline-flex", gap: 8, alignItems: "center", fontSize: 15 }}>
            <Phone size={18} /> {tel}
          </a>
          <a href={wa} target="_blank" rel="noreferrer" style={{ background: "#25D366", color: C.white, padding: "11px 18px", borderRadius: 12, textDecoration: "none", fontWeight: 700, display: "inline-flex", gap: 8, alignItems: "center", fontSize: 15 }}>
            <MessageCircle size={18} /> واتساب
          </a>
          {map && (
            <a href={map} target="_blank" rel="noreferrer" style={{ background: C.cyan, color: C.white, padding: "11px 18px", borderRadius: 12, textDecoration: "none", fontWeight: 700, display: "inline-flex", gap: 8, alignItems: "center", fontSize: 15 }}>
              <MapPin size={18} /> الخريطة
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
