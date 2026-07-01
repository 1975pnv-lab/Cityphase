'use client';
import { useEffect, useRef } from 'react';

const PAGE_CSS = `*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#ffffff;--fg:#171717;
  --navy:#1B3A6B;--navy2:#2E5299;--navy-dark:#122847;
  --teal:#1D9E75;--teal-dark:#178563;
  --ink:#5A6478;--fog:#F2F3F6;--mist:#DDE1E9;
  --display:'Raleway',system-ui,sans-serif;
  --body:'Onest',system-ui,sans-serif;
}
html,body{height:100%;overflow:hidden}
body{background:var(--bg);color:var(--fg);font-family:var(--body);font-size:16px;line-height:1.6;overflow:hidden;height:100vh}
#pager{height:100vh;overflow-y:scroll;scroll-snap-type:y proximity;scroll-behavior:smooth;scroll-padding-top:64px}

/* ── REVEAL ── */
.r{opacity:0;transform:translateY(32px);transition:opacity .8s ease,transform .8s ease}
.r.in{opacity:1;transform:translateY(0)}
.r2{opacity:0;transform:translateY(32px);transition:opacity .8s .15s ease,transform .8s .15s ease}
.r2.in{opacity:1;transform:translateY(0)}
.r3{opacity:0;transform:translateY(32px);transition:opacity .8s .3s ease,transform .8s .3s ease}
.r3.in{opacity:1;transform:translateY(0)}
.rl{opacity:0;transform:translateX(-32px);transition:opacity .8s ease,transform .8s ease}
.rl.in{opacity:1;transform:translateX(0)}
.rr{opacity:0;transform:translateX(32px);transition:opacity .8s ease,transform .8s ease}
.rr.in{opacity:1;transform:translateX(0)}

/* ── NAV ── */
nav{
  position:fixed;top:0;left:0;right:0;z-index:300;
  display:flex;align-items:center;justify-content:space-between;
  padding:0 48px;height:64px;
  background:rgba(255,255,255,.97);
  backdrop-filter:blur(12px);
  border-bottom:1px solid var(--mist);
}
.nav-logo{
  font-family:'Raleway',sans-serif;font-size:15px;font-weight:500;
  letter-spacing:0.22em;text-transform:uppercase;color:#1B3A6B;text-decoration:none;
}
.nav-links{display:flex;gap:32px;list-style:none;position:absolute;left:50%;transform:translateX(-50%)}
.nav-links a{font-family:var(--body);font-size:13px;font-weight:400;color:var(--fg);text-decoration:none;opacity:.6;transition:opacity .2s}
.nav-links a:hover{opacity:1;color:var(--navy)}
.nav-cta{
  font-family:var(--display);font-size:12px;font-weight:500;
  letter-spacing:2px;text-transform:uppercase;
  color:#fff;background:#1D9E75;text-decoration:none;
  padding:10px 22px;border-radius:6px;transition:background .2s;
}
.nav-cta:hover{background:#178563}

/* ── STICKY CTA ── */
.scta{
  position:fixed;bottom:28px;right:28px;z-index:299;
  background:var(--navy);color:#fff;
  padding:14px 28px;font-family:var(--display);font-size:12px;font-weight:500;
  letter-spacing:2px;text-transform:uppercase;text-decoration:none;
  box-shadow:0 8px 32px rgba(27,58,107,.35);
  opacity:0;pointer-events:none;
  transition:opacity .3s,transform .3s,background .2s;
  transform:translateY(12px);
}
.scta.on{opacity:1;pointer-events:auto;transform:translateY(0)}
.scta:hover{background:var(--navy2)}

/* ── SIDE DOTS ── */
.sdots{position:fixed;right:20px;top:50%;transform:translateY(-50%);z-index:299;display:flex;flex-direction:column;gap:10px}
.sd{width:7px;height:7px;border-radius:50%;background:var(--mist);border:1.5px solid var(--mist);cursor:pointer;transition:all .25s;display:block}
.sd.on{background:var(--navy);border-color:var(--navy);transform:scale(1.4)}
.sd:hover{background:var(--teal);border-color:var(--teal)}

/* ── SECTION BASE ── */
.sec{height:100vh;display:flex;flex-direction:column;justify-content:flex-start;border-bottom:1px solid var(--mist);position:relative;scroll-snap-align:start;scroll-snap-stop:always;overflow:hidden;flex-shrink:0}
.sec:last-child{border-bottom:none}

/* ── PHOTO PLACEHOLDER ── */
.ph{
  background:linear-gradient(135deg,#e8ecf2 0%,#d4dbe6 100%);
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:12px;color:var(--ink);font-size:13px;text-align:center;padding:24px;
  font-family:var(--display);font-weight:400;
}
.ph::before{content:'📷';font-size:32px}
.ph span{font-size:12px;opacity:.7;max-width:220px;line-height:1.5}

/* ──────────────────────────────
   S0 HERO — full bleed banner
────────────────────────────── */
#s0{
  height:100vh;padding:0;border-bottom:none;
  display:grid;grid-template-columns:1.2fr 0.8fr;
}
.hero-photo{
  position:relative;overflow:hidden;
  background:linear-gradient(160deg,#c8d4e4 0%,#a8bcd4 100%);
}
.hero-photo .ph{height:100%;font-size:14px}
.hero-photo .ph::before{font-size:48px}
.hero-content{
  display:flex;flex-direction:column;justify-content:space-between;
  padding:40px 56px;background:var(--bg);
  border-right:1px solid var(--mist);height:100%;
}
.hero-content-top{
  flex:1;display:flex;flex-direction:column;justify-content:center;
}
.hero-eyebrow{
  font-family:var(--display);font-size:11px;font-weight:500;
  letter-spacing:4px;text-transform:uppercase;color:var(--teal);
  margin-bottom:28px;display:block;
}
.hero-times{
  font-family:var(--body);font-size:clamp(11px,1vw,13px);
  font-weight:400;color:var(--ink);line-height:1.9;margin-bottom:0;
  opacity:.7;letter-spacing:.3px;
}
.hero-times strong{color:var(--ink);font-weight:400}
.hero-h1{
  font-family:var(--display);font-size:clamp(24px,3.2vw,44px);
  font-weight:400;color:var(--fg);line-height:1.1;
  letter-spacing:-1.5px;margin-bottom:16px;white-space:nowrap;
}
.hero-h1 em{font-style:normal;color:var(--teal);font-weight:500}
.hero-sub{
  font-family:var(--body);max-width:500px;margin-bottom:32px;
  display:flex;flex-direction:column;
}
.hero-sub span:nth-child(1){margin-bottom:1em}
.hero-sub span:nth-child(2){margin-bottom:2em}
.hero-sub span{
  display:flex;align-items:flex-start;gap:12px;
  padding:7px 0;
  font-size:clamp(13px,1.2vw,15px);font-weight:400;color:var(--ink);line-height:1.5;
}
.hero-sub span:first-child{border-top:none;}
.hero-sub span::before{
  content:'◆';color:var(--teal);font-family:var(--display);
  font-size:7px;flex-shrink:0;padding-top:4px;
}
.btn-primary{
  display:inline-flex;align-items:center;gap:12px;
  padding:16px 36px;background:var(--navy);color:#fff;
  font-family:var(--display);font-size:12px;font-weight:500;
  letter-spacing:2px;text-transform:uppercase;
  text-decoration:none;border:none;cursor:pointer;
  transition:background .2s,transform .2s;
}
.btn-primary:hover{background:var(--navy2);transform:translateY(-1px)}
.btn-primary .arr{font-size:16px;font-weight:400;transition:transform .2s}
.btn-primary:hover .arr{transform:translateX(4px)}
.btn-ghost{
  display:inline-flex;align-items:center;gap:12px;
  padding:16px 36px;background:transparent;color:var(--navy);
  font-family:var(--display);font-size:12px;font-weight:500;
  letter-spacing:2px;text-transform:uppercase;
  text-decoration:none;border:1.5px solid var(--mist);cursor:pointer;
  transition:border-color .2s,color .2s;
}
.btn-ghost:hover{border-color:var(--navy);opacity:1}
.hero-btns{display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-top:auto}
.hero-scarcity{
  font-family:var(--body);font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--ink);opacity:.5;
}

/* ──────────────────────────────
   SECTION HEADLINES
────────────────────────────── */
.sh{
  font-family:var(--display);font-size:clamp(22px,2.5vw,36px);
  font-weight:400;color:var(--fg);line-height:1.15;
  letter-spacing:-1px;padding:80px 64px 0;margin-bottom:20px;
}
.sh em{font-style:normal;color:var(--teal);font-weight:400}
.sh strong{font-weight:500}

/* ──────────────────────────────
   S2 SOLUTION — full banner
────────────────────────────── */
#s1{
  padding:0;
  background:linear-gradient(135deg,var(--navy-dark) 0%,#0a1228 60%,var(--navy) 100%);
  position:relative;overflow:hidden;
  justify-content:center;
}
#s1::before{
  content:'12';
  position:absolute;right:-40px;top:50%;transform:translateY(-50%);
  font-family:var(--display);font-size:400px;font-weight:600;
  color:rgba(255,255,255,.03);line-height:1;pointer-events:none;
  letter-spacing:-20px;
}
.s2-inner{
  position:relative;z-index:1;
  padding:64px 80px;max-width:960px;width:100%;
}
.s2-label{
  font-family:var(--display);font-size:11px;font-weight:500;
  letter-spacing:4px;text-transform:uppercase;color:var(--teal);
  margin-bottom:32px;display:block;
}
.s2-text{
  font-family:var(--display);font-size:clamp(24px,3vw,42px);
  font-weight:400;color:#fff;line-height:1.5;margin-bottom:24px;
}
.s2-text strong{font-weight:500;color:var(--teal)}
.s2-note{
  font-family:var(--body);font-size:15px;font-weight:400;
  color:rgba(255,255,255,.5);max-width:540px;line-height:1.7;
}

/* ──────────────────────────────
   S3 PROOF — dark overlay cards
────────────────────────────── */
#s2{padding:0;display:grid;grid-template-columns:1fr 1fr}
.proof-grid{
  display:grid;grid-template-columns:repeat(4,1fr);
  gap:0;background:var(--fg);
  border-top:1px solid var(--mist);
  border-bottom:1px solid var(--mist);
  margin-top:0;
}
.proof-card{
  position:relative;overflow:hidden;cursor:pointer;
  background:linear-gradient(160deg,var(--navy-dark) 0%,#080f1e 100%);
  border-right:1px solid rgba(255,255,255,.08);
  transition:transform .3s;
}
.proof-card:last-child{border-right:none}
.proof-card:hover{transform:scale(1.01);z-index:1}
.proof-card-bg{
  width:100%;aspect-ratio:4/3;
  background:linear-gradient(160deg,var(--navy) 0%,var(--navy-dark) 100%);
  display:flex;align-items:center;justify-content:center;
  position:relative;
}
.proof-card-bg::after{
  content:'';position:absolute;inset:0;
  background:linear-gradient(to bottom,transparent 30%,rgba(10,15,25,.9) 100%);
}
.play-btn{
  width:60px;height:60px;border-radius:50%;
  border:1.5px solid rgba(255,255,255,.4);
  display:flex;align-items:center;justify-content:center;
  position:relative;z-index:1;
  transition:border-color .2s,background .2s;
}
.proof-card:hover .play-btn{border-color:#fff;background:rgba(255,255,255,.1)}
.play-btn::after{
  content:'';border-style:solid;
  border-width:10px 0 10px 20px;
  border-color:transparent transparent transparent rgba(255,255,255,.8);
  margin-left:4px;
}
.proof-body{padding:28px 32px 36px}
.proof-num{
  font-family:var(--display);font-size:11px;font-weight:500;
  letter-spacing:4px;text-transform:uppercase;color:var(--teal);
  margin-bottom:10px;
}
.proof-title{
  font-family:var(--display);font-size:clamp(18px,1.8vw,22px);font-weight:400;
  color:#fff;margin-bottom:12px;line-height:1.3;
}
.proof-desc{font-family:var(--body);font-size:14px;font-weight:400;color:rgba(255,255,255,.5);line-height:1.7}
.proof-note{
  padding:16px 64px;font-family:var(--body);
  font-size:13px;font-weight:400;color:var(--ink);font-style:italic;
}

/* ──────────────────────────────
   S4 PROPERTIES
────────────────────────────── */
#s3{padding:0}
.props-wrap{display:grid;grid-template-columns:1fr;flex:1}
.prop-list{padding:0 56px 0;display:flex;flex-direction:column;}
.prop-row-photo{
  height:120px;border-bottom:1px solid var(--mist);
  display:flex;align-items:center;justify-content:center;
  background:var(--fog);
  font-family:var(--body);font-size:12px;color:var(--ink);opacity:.5;
  letter-spacing:1px;border-top:1px solid var(--mist);
}
.prop-row{
  display:flex;gap:20px;align-items:flex-start;
  padding:20px 0;border-bottom:1px solid var(--mist);
}
.prop-row:first-child{border-top:1px solid var(--mist)}
.prop-dash{
  font-family:var(--display);font-size:8px;font-weight:400;
  color:var(--teal);flex-shrink:0;padding-top:7px;
  min-width:20px;
}
.prop-body{}
.prop-name{
  font-family:var(--body);font-size:clamp(16px,1.6vw,20px);
  font-weight:400;color:var(--fg);line-height:1.4;
}
.prop-desc{
  font-family:var(--body);font-size:14px;font-weight:400;
  color:var(--ink);line-height:1.6;margin-top:4px;
}
.prop-photo{border-left:1px solid var(--mist)}

/* ──────────────────────────────
   S5 LYONEX
────────────────────────────── */
#s4{padding:0}
.lyonex-3col{
  display:grid;grid-template-columns:repeat(3,1fr);
  gap:0;background:var(--mist);
  border-top:1px solid var(--mist);border-bottom:1px solid var(--mist);
}
.lstmt{
  background:var(--bg);padding:28px 32px;
  border-right:1px solid var(--mist);
  position:relative;
}
.lstmt:last-child{border-right:none}
.lstmt-n{
  font-family:var(--display);font-size:11px;font-weight:500;
  letter-spacing:4px;text-transform:uppercase;color:var(--teal);
  margin-bottom:20px;display:block;
}
.lstmt-text{
  font-family:var(--body);font-size:clamp(16px,1.6vw,20px);
  font-weight:400;color:var(--fg);line-height:1.5;
}
.lstmt-text strong{font-weight:600;color:var(--navy)}

/* Lyonex problem-solution cards */
.lyonex-pairs{
  display:grid;grid-template-columns:repeat(3,1fr);
  gap:0;background:var(--mist);
  border-top:1px solid var(--mist);
  flex:1;
}
.lp-col{
  background:var(--bg);border-right:1px solid var(--mist);
  display:flex;flex-direction:column;
  padding:28px 32px;
}
.lp-col:last-child{border-right:none}
.lp-plabel{
  font-family:var(--display);font-size:11px;font-weight:500;
  letter-spacing:4px;text-transform:uppercase;color:var(--ink);
  opacity:.4;margin-bottom:12px;display:block;
}
.lp-ptext{
  font-family:var(--body);font-size:clamp(16px,1.6vw,20px);
  font-weight:400;color:var(--fg);line-height:1.5;
  padding-bottom:16px;
  min-height:80px;
}
.lp-ph{
  height:140px;flex-shrink:0;
  border:1px solid var(--mist);background:var(--fog);
  display:flex;align-items:center;justify-content:center;
  font-family:var(--body);font-size:11px;color:var(--ink);
  opacity:.4;letter-spacing:1px;margin-bottom:16px;
}
.lp-ptext strong{font-weight:500;color:var(--fg)}
.lp-divider{
  height:2px;background:var(--teal);
  margin-bottom:20px;
  width:40px;
}
.lp-sol-label{
  font-family:var(--display);font-size:11px;font-weight:500;
  letter-spacing:4px;text-transform:uppercase;color:var(--teal);
  margin-bottom:10px;display:block;
}
.lp-comp-name{
  font-family:var(--display);font-size:clamp(22px,2.4vw,30px);
  font-weight:400;color:var(--navy);margin-bottom:12px;
}
.lp-comp-desc{
  font-family:var(--body);font-size:14px;font-weight:400;
  color:var(--ink);line-height:1.7;
}
@media(max-width:900px){.lyonex-pairs{grid-template-columns:1fr}.lp-col{border-right:none;border-bottom:1px solid var(--mist)}}

/* Fabric texture banner */
.lyonex-banner{
  width:100%;height:80px;border-bottom:1px solid var(--mist);
  overflow:hidden;
}
.lyonex-banner .ph{height:100%;background:linear-gradient(135deg,#d8e3ef,#c0cfe0)}

/* Components */
.lyonex-comp{
  display:grid;grid-template-columns:repeat(3,1fr);
  gap:0;background:var(--mist);
  border-bottom:1px solid var(--mist);
}
.comp{
  background:var(--bg);padding:22px 24px;
  border-right:1px solid var(--mist);
  border-top:3px solid transparent;
  transition:border-color .25s;
}
.comp:last-child{border-right:none}
.comp:hover{border-top-color:var(--teal)}
.comp-role{
  font-family:var(--display);font-size:11px;font-weight:500;
  letter-spacing:4px;text-transform:uppercase;color:var(--teal);
  margin-bottom:12px;
}
.comp-name{font-family:var(--display);font-size:26px;font-weight:400;color:var(--navy);margin-bottom:14px}
.comp-desc{font-family:var(--body);font-size:14px;font-weight:400;color:var(--ink);line-height:1.7}
.lyonex-foot{
  display:flex;align-items:center;justify-content:space-between;
  padding:12px 64px;flex-wrap:wrap;gap:12px;
  border-top:1px solid var(--mist);
}
.lyonex-note{font-family:var(--body);font-size:14px;font-weight:400;color:var(--ink);font-style:italic}
.lyonex-link{
  font-family:var(--display);font-size:12px;font-weight:500;
  letter-spacing:2px;text-transform:uppercase;color:var(--navy);
  text-decoration:none;border-bottom:1.5px solid var(--mist);padding-bottom:2px;
  transition:border-color .2s;
;position:relative;z-index:200}
.lyonex-link:hover{border-color:var(--navy)}

/* ──────────────────────────────
   S6 FOR WHOM — full banner style
────────────────────────────── */
#s5{padding:0}
.whom-banner{
  background:linear-gradient(135deg,var(--navy-dark) 0%,#080f1e 60%,var(--navy) 100%);
  padding:80px 52px 40px;display:flex;flex-direction:column;justify-content:flex-start;
  padding-top:140px;
  position:relative;overflow:hidden;
}
.whom-banner::before{
  content:'';position:absolute;inset:0;
  background:radial-gradient(ellipse at 80% 50%,rgba(29,158,117,.15) 0%,transparent 60%);
}
.whom-banner::after{
  content:'12';
  position:absolute;right:-30px;top:50%;transform:translateY(-50%);
  font-family:var(--display);font-size:320px;font-weight:600;
  color:rgba(255,255,255,.04);line-height:1;pointer-events:none;
  letter-spacing:-16px;
}
.whom-headline{
  font-family:var(--display);font-size:clamp(22px,2.8vw,38px);
  font-weight:400;color:#fff;line-height:1.2;
  letter-spacing:-1px;margin-bottom:28px;position:relative;z-index:1;
}
.whom-headline em{font-style:italic;color:var(--teal)}
/* .whom-right overridden below */
.marker{
  display:flex;gap:20px;align-items:flex-start;
  padding:18px 36px;border-bottom:1px solid var(--mist);
  transition:background .2s;
}
.marker:first-child{border-top:1px solid var(--mist)}
.marker:hover{background:var(--fog)}
.mcheck{
  width:20px;height:20px;flex-shrink:0;
  display:flex;align-items:center;justify-content:center;
  margin-top:3px;
}
.mcheck::after{
  content:'◆';font-size:10px;color:var(--teal);
  font-family:var(--display);line-height:1;
}
.mtext{font-family:var(--body);font-size:clamp(16px,1.6vw,20px);font-weight:400;color:var(--fg);line-height:1.6}

/* ──────────────────────────────
   S7 DETAILS — 2-col grid + photo
────────────────────────────── */
#s6{padding:0}
#s6 .sh{padding-left:48px}
.det-wrap{display:flex;flex-direction:column;flex:1}
.det-grid{
  display:grid;grid-template-columns:repeat(4,1fr);
  flex:1;
  gap:0;background:var(--mist);
  border-top:1px solid var(--mist);border-bottom:1px solid var(--mist);
}
.det{
  background:var(--bg);padding:20px 20px 0;
  border-right:1px solid var(--mist);border-bottom:1px solid var(--mist);
  transition:background .2s;
  display:flex;flex-direction:column;
}
.det:nth-child(4n){border-right:none}
.det:nth-last-child(-n+4){border-bottom:none}
.det-text{padding-bottom:16px}
.det-ph{
  margin-top:auto;height:80px;
  background:var(--fog);border-top:1px solid var(--mist);
  display:flex;align-items:center;justify-content:center;
  font-family:var(--body);font-size:11px;color:var(--ink);opacity:.4;
  letter-spacing:1px;
}
.det:hover{background:var(--fog)}
.det-t{
  font-family:var(--display);font-size:11px;font-weight:500;
  letter-spacing:4px;text-transform:uppercase;color:var(--navy);
  margin-bottom:12px;
}
.det-d{font-family:var(--body);font-size:14px;font-weight:400;color:var(--ink);line-height:1.7}
.det-photo{border-top:1px solid var(--mist);border-bottom:1px solid var(--mist)}

/* ──────────────────────────────
   S9 ORDER + FORM
────────────────────────────── */
#s7{padding:64px 0 0;min-height:100vh;justify-content:flex-start}
.order-wrap{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--mist)}
.order-left{padding:60px 52px 32px;border-right:1px solid var(--mist);display:flex;flex-direction:column;justify-content:center}
.order-name{
  font-family:var(--display);font-size:clamp(36px,4.5vw,56px);
  font-weight:400;color:var(--fg);line-height:1;
  letter-spacing:-2px;margin-bottom:8px;
}
.order-star{color:var(--teal)}
.order-price{
  font-family:var(--display);font-size:36px;font-weight:400;
  color:var(--ink);margin-bottom:36px;letter-spacing:-1px;
}
.order-meta{display:flex;flex-direction:column;gap:18px;margin-bottom:36px}
.order-row{display:flex;gap:16px;align-items:center;flex-wrap:wrap}
.order-lbl{
  font-family:var(--display);font-size:11px;font-weight:500;
  letter-spacing:4px;text-transform:uppercase;color:var(--ink);width:72px;flex-shrink:0;
}
.sw{display:flex;gap:8px;align-items:center}
.swatch{width:22px;height:22px;border-radius:50%;border:1px solid var(--mist)}
.swname{font-family:var(--body);font-size:14px;font-weight:400;color:var(--fg)}
.spills{display:flex;gap:8px}
.spill{
  padding:7px 20px;border:1.5px solid var(--mist);
  font-family:var(--display);font-size:14px;font-weight:400;color:var(--fg);
  cursor:pointer;background:none;transition:all .2s;
}
.spill:hover,.spill.on{background:var(--navy);color:#fff;border-color:var(--navy)}
.order-name-wrap{display:flex;align-items:baseline;gap:20px;margin-bottom:8px;flex-wrap:wrap}
.order-name-sub{
  font-family:var(--display);font-size:11px;font-weight:500;
  letter-spacing:4px;text-transform:uppercase;color:var(--ink);
}
.order-tagline{
  font-family:var(--body);font-size:clamp(18px,2vw,24px);
  font-weight:400;color:var(--navy);line-height:1.5;
  margin-bottom:36px;padding:24px 0;
  border-top:1px solid var(--mist);border-bottom:1px solid var(--mist);
}

/* form */
.form-right{padding:40px 52px 24px;background:var(--fog)}
.form-title{
  font-family:var(--display);font-size:20px;font-weight:500;
  color:var(--fg);margin-bottom:6px;
}
.form-sub{
  font-family:var(--body);font-size:14px;font-weight:400;
  color:var(--ink);line-height:1.6;margin-bottom:28px;
}
.form-bar{display:flex;align-items:center;gap:16px;margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid var(--mist)}
.bar-track{flex:1;height:3px;background:var(--mist);border-radius:2px}
.bar-fill{height:100%;width:100%;background:var(--navy);border-radius:2px}
.bar-txt{font-family:var(--display);font-size:13px;font-weight:400;color:var(--navy);white-space:nowrap}
.urg{display:flex;justify-content:space-between;margin-bottom:20px}
.urg-n{font-family:var(--display);font-size:28px;font-weight:400;color:var(--navy);display:block;line-height:1;letter-spacing:-1px}
.urg-l{font-family:var(--display);font-size:11px;font-weight:500;letter-spacing:4px;text-transform:uppercase;color:var(--ink)}
.fi,.fs{
  width:100%;padding:13px 16px;
  border:1.5px solid var(--mist);background:#fff;
  font-family:var(--display);font-size:14px;font-weight:400;
  color:var(--fg);outline:none;appearance:none;-webkit-appearance:none;
  transition:border-color .2s;
}
.fi:focus,.fs:focus{border-color:var(--navy)}
.fi::placeholder{color:var(--ink)}
.frow{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.form-fields{display:flex;flex-direction:column;gap:10px}
.fsub{
  width:100%;padding:16px;background:var(--navy);color:#fff;
  border:none;cursor:pointer;margin-top:4px;
  font-family:var(--display);font-size:12px;font-weight:500;
  letter-spacing:2px;text-transform:uppercase;
  transition:background .2s;
}
.fsub:hover{background:var(--navy2)}
.fpriv{font-family:var(--body);font-size:12px;font-weight:400;color:var(--ink);margin-top:10px;line-height:1.6}
.form-ok{display:none;padding:24px;border-left:3px solid var(--teal);background:#fff;font-family:var(--body);font-size:15px;font-weight:400;color:var(--fg);line-height:1.7}

/* footer */
.footer-inner{
  display:flex;justify-content:space-between;align-items:center;
  padding:32px 64px;border-top:1px solid var(--mist);
  flex-wrap:wrap;gap:16px;background:var(--bg);
}
.fl{font-family:var(--display);font-size:11px;letter-spacing:5px;text-transform:uppercase;color:var(--fg);text-decoration:none;opacity:.4}
.flinks{display:flex;gap:24px}
.flinks a{font-family:var(--body);font-size:13px;font-weight:400;color:var(--fg);text-decoration:none;opacity:.4;transition:opacity .2s;display:inline-flex;align-items:center;gap:6px}
.flinks a:hover{opacity:.8}
.fcp{font-family:var(--body);font-size:12px;color:var(--fg);opacity:.25}

.form-swatches{display:flex;gap:12px;margin-bottom:2px}
.form-sw-item{
  display:flex;align-items:center;gap:8px;
  padding:8px 14px;border:1.5px solid var(--mist);cursor:pointer;
  transition:border-color .2s;
}
.form-sw-item.on-sw{border-color:var(--navy)}
.form-sw-dot{width:18px;height:18px;border-radius:50%;flex-shrink:0}
.form-sw-name{font-family:var(--display);font-size:13px;font-weight:400;color:var(--fg)}
.form-price{
  font-family:var(--display);font-size:28px;font-weight:400;
  color:var(--fg);letter-spacing:-1px;margin-top:16px;margin-bottom:4px;
}
.tg-cta{display:flex;align-items:center;gap:16px;margin-top:20px;padding-top:20px;border-top:1px solid var(--mist)}
.tg-or{font-family:var(--body);font-size:13px;color:var(--ink);opacity:.5;flex-shrink:0}
.tg-link{
  display:inline-flex;align-items:center;gap:8px;
  font-family:var(--display);font-size:12px;font-weight:500;letter-spacing:1.5px;
  text-transform:uppercase;color:var(--navy);text-decoration:none;
  border-bottom:1.5px solid var(--mist);padding-bottom:2px;transition:border-color .2s;
}
.tg-link:hover{border-color:var(--navy)}
.sw-pick{cursor:pointer;transition:box-shadow .2s,transform .2s}
.sw-pick.on-sw{box-shadow:0 0 0 2px var(--navy);transform:scale(1.15)}
/* ── FAQ ── */
.faq-list{border-top:1px solid var(--mist);margin:0 64px;flex:1}
.faq-item{border-bottom:1px solid var(--mist)}
.faq-q{
  width:100%;display:flex;justify-content:space-between;align-items:center;
  padding:16px 0;background:none;border:none;cursor:pointer;
  font-family:var(--body);font-size:clamp(14px,1.4vw,17px);font-weight:400;
  color:var(--fg);text-align:left;gap:16px;transition:color .2s;
}
.faq-q:hover{color:var(--navy)}
.faq-arr{font-size:18px;font-weight:200;color:var(--teal);flex-shrink:0;transition:transform .25s}
.faq-q.open .faq-arr{transform:rotate(45deg)}
.faq-a{
  display:none;padding:0 0 16px;
  font-family:var(--body);font-size:14px;font-weight:400;
  color:var(--ink);line-height:1.7;max-width:720px;
}
.faq-a.open{display:block}
@media(max-width:900px){.faq-list{margin:0 32px}}

/* ── RESPONSIVE ── */
@media(max-width:900px){
  html,body{height:auto;overflow:auto}
  #pager{height:auto;overflow-y:auto;scroll-snap-type:none}
  .sec{height:auto;overflow-y:visible}
  nav{padding:0 24px}
  .nav-links{display:none}
  .sdots{display:none}
  .scta{bottom:16px;right:16px;padding:12px 20px;font-size:11px}
  #s0{grid-template-columns:1fr}
  .hero-photo{display:none}
  .hero-content{padding:80px 32px 48px;border-right:none}
  .sh{padding:0 32px;margin-bottom:32px}
  .prob-wrap{grid-template-columns:1fr}
  .prob-left{padding:32px}
  .prob-q{padding:24px 32px 40px}
  .prob-photo{display:none}
  .s2-inner{padding:72px 32px}
  .proof-grid{grid-template-columns:1fr 1fr}
  .proof-card{border-right:none;border-bottom:1px solid rgba(255,255,255,.06)}
  .prop-list{padding:24px 32px}
  .lyonex-3col,.lyonex-comp{grid-template-columns:1fr}
  .lstmt,.comp{border-right:none;border-bottom:1px solid var(--mist)}
  .lyonex-foot{padding:16px 32px}
  #s2{grid-template-columns:1fr;min-height:auto}
  .whom-banner{padding:60px 32px}
  .marker{padding:20px 32px}
  .det-wrap{grid-template-columns:1fr}
  .det-photo{display:none}
  .det-grid{border-right:none;grid-template-columns:1fr}
  .det:nth-child(4n){border-right:none}
  .sz-wrap{grid-template-columns:1fr}
  .sz-diagram{border-right:none;border-bottom:1px solid var(--mist)}
  .order-wrap{grid-template-columns:1fr}
  .order-left,.form-right{padding:40px 32px}
  .order-left{border-right:none}
  .frow{grid-template-columns:1fr}
  .footer-inner{padding:28px 32px;flex-direction:column;align-items:flex-start}
  .proof-note{padding:16px 32px}
}
@media(max-width:600px){
  .props-grid{grid-template-columns:1fr}
}

/* ── ORDER — sizes link & price ── */
.order-price-tag{
  font-family:var(--display);font-size:clamp(28px,3vw,40px);
  font-weight:400;color:var(--fg);letter-spacing:-1px;
  margin-bottom:12px;
}
.order-sizes-ref{
  display:inline-flex;align-items:center;gap:6px;
  font-family:var(--display);font-size:12px;font-weight:500;
  letter-spacing:2px;text-transform:uppercase;color:var(--navy);
  text-decoration:none;border-bottom:1.5px solid var(--mist);
  padding-bottom:2px;transition:border-color .2s;margin-bottom:32px;
}
.order-sizes-ref:hover{border-color:var(--navy)}
.form-sizes-ref{
  font-family:var(--display);font-size:11px;font-weight:500;
  letter-spacing:2px;text-transform:uppercase;color:var(--navy);
  text-decoration:none;opacity:.6;transition:opacity .2s;
  display:inline-block;margin-top:2px;
}
.form-sizes-ref:hover{opacity:1}

/* ── S2 SCENARIOS ── */
.scenario{
  display:flex;flex-direction:column;gap:10px;
  padding:28px 36px;border-bottom:1px solid rgba(27,58,107,.12);
  transition:background .2s;
}
.scenario:first-child{border-top:1px solid rgba(27,58,107,.12)}
.scenario:hover{background:var(--fog)}
.sc-time{
  font-family:var(--display);font-size:11px;font-weight:500;
  letter-spacing:4px;text-transform:uppercase;color:var(--teal);
  display:block;
}
.whom-right{border-left:1px solid var(--mist);display:flex;flex-direction:column;justify-content:center}`;

const PAGE_HTML = `<!-- NAV -->
<nav>
  <a href="/" class="nav-logo">CITYPHASE</a>
  <ul class="nav-links">
    <li><a href="/12-hours">Рубашка 12 Hours ★</a></li>
    <li><a href="/technology">Ткань LYONEX</a></li>
    <li><a href="/about">О бренде</a></li>
  </ul>
  <a href="#s8" class="nav-cta">Предзаказ</a>
</nav>

<a href="#s8" class="scta" id="scta">Предзаказ →</a>

<div class="sdots" id="sdots">
  <span class="sd on" data-i="0"></span>
  <span class="sd" data-i="1"></span>
  <span class="sd" data-i="2"></span>
  <span class="sd" data-i="3"></span>
  <span class="sd" data-i="4"></span>
  <span class="sd" data-i="5"></span>
  <span class="sd" data-i="6"></span>
  <span class="sd" data-i="7"></span>
  <span class="sd" data-i="8"></span>
</div>

<div id="pager">
<!-- S0 HERO -->
<section class="sec" id="s0">
  <div class="hero-content">
    <div class="hero-content-top">
      <h1 class="hero-h1 r2">Длинный день — <em>один выбор.</em></h1>
      <p class="hero-times r2">

      </p>
      <div style="height:32px"></div>
      <p style="font-family:var(--display);font-size:clamp(13px,1.4vw,16px);font-weight:400;color:var(--navy);margin-bottom:24px;font-style:italic" class="r2">12 часов напряжённого рабочего дня — столько должна выдерживать деловая рубашка.<br>Без компромиссов!</p>
    </div>
    <div class="hero-btns r3">
      <a href="#s8" class="btn-primary">Предзаказ <span class="arr">→</span></a>
      <p class="hero-scarcity">Флагман · Первая партия · 200 единиц</p>
    </div>
  </div>
  <!-- ФОТО: рубашка на человеке, деловой контекст, вертикальный кадр -->
  <div class="hero-photo ph r">
    <span>Фото рубашки на человеке<br>деловой контекст, вертикальный кадр</span>
  </div>
</section>


<!-- S1.5 PROBLEM — dark, mirrors S1 style -->
<section class="sec" id="s1b" style="background:linear-gradient(135deg,#0a1628 0%,#0d1f3c 60%,#0f2a4a 100%);display:flex;flex-direction:column;justify-content:center;padding:clamp(40px,6vw,80px) clamp(24px,6vw,80px)">
  <p style="font-family:var(--body);font-size:11px;font-weight:500;letter-spacing:0.18em;text-transform:uppercase;color:var(--teal);margin-bottom:24px" class="r">ПРОБЛЕМА</p>
  <p class="s2-text r" style="max-width:820px;margin-bottom:48px;color:#fff">Как выглядеть по-деловому<br>и чувствовать себя <span style="color:var(--teal)">комфортно?</span></p>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:32px;max-width:900px" class="r">
    <div style="border-top:1px solid rgba(255,255,255,0.15);padding-top:20px">
      <span style="font-size:11px;font-weight:500;color:rgba(255,255,255,0.35);letter-spacing:0.1em;display:block;margin-bottom:16px">01</span>
      <p style="font-size:clamp(14px,1.3vw,16px);color:rgba(255,255,255,0.75);line-height:1.6;font-family:var(--body)">Утром погладил — к обеду уже мятая.</p>
    </div>
    <div style="border-top:1px solid rgba(255,255,255,0.15);padding-top:20px">
      <span style="font-size:11px;font-weight:500;color:rgba(255,255,255,0.35);letter-spacing:0.1em;display:block;margin-bottom:16px">02</span>
      <p style="font-size:clamp(14px,1.3vw,16px);color:rgba(255,255,255,0.75);line-height:1.6;font-family:var(--body)">Жарко. Торопишься на встречу. Ткань мокнет и липнет к телу.</p>
    </div>
    <div style="border-top:1px solid rgba(255,255,255,0.15);padding-top:20px">
      <span style="font-size:11px;font-weight:500;color:rgba(255,255,255,0.35);letter-spacing:0.1em;display:block;margin-bottom:16px">03</span>
      <p style="font-size:clamp(14px,1.3vw,16px);color:rgba(255,255,255,0.75);line-height:1.6;font-family:var(--body)">Деловой ужин после длинного дня. Рубашка выглядит несвежей.</p>
    </div>
  </div>
</section>

<!-- S1 SOLUTION — dark banner -->
<section class="sec" id="s1">
  <div class="s2-inner">
    <p class="s2-text r2">12 Hours ★ — трикотажная рубашка из ткани LYONEX, которая <strong>выдержит ваш темп.</strong> Спроектирована для 12-часового рабочего дня.</p>
  </div>
</section>



<!-- S2 FOR WHOM — portrait left, scenarios right -->
<section class="sec" id="s2">
  <div class="whom-banner rl" style="display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:clamp(40px,6vw,80px);">
    <h2 class="whom-headline" style="font-size:clamp(28px,3.5vw,52px);line-height:1.2;margin-bottom:32px;font-weight:700;color:#fff;">
      Один человек.<br>Несколько форматов.<br><span style="color:var(--teal);font-style:normal;">Двенадцать часов.</span>
    </h2>
    <p style="font-family:var(--body);font-size:clamp(15px,1.4vw,18px);font-weight:400;color:#fff;line-height:1.6;">Статус или комфорт? И то и другое...</p>
  </div>  </div>
  <div class="whom-right rr">
    <div class="scenario">
      <span class="sc-time">08:15 — Аэропорт</span>
      <p class="mtext">Утренний рейс. Переговоры в 12:00. Рубашка провела несколько часов в чемодане — достали, надели.</p>
    </div>
    <div class="scenario">
      <span class="sc-time">16:30 — Третья встреча</span>
      <p class="mtext">Позади три встречи — вас ждёт важный клиент. Рубашка не должна выдавать напряжение.</p>
    </div>
    <div class="scenario">
      <span class="sc-time">19:30 — Деловой ужин</span>
      <p class="mtext">Переодеться некогда. Та же рубашка что и утром — и выглядит так же.</p>
    </div>
  </div>
</section>

<!-- S3 PROOF — dark overlay cards -->
<section class="sec" id="s3">
  <h2 class="sh r">Четыре теста, которые не пройдёт <em>обычная рубашка</em></h2>
  <div class="proof-grid r">
    <div class="proof-card">
      <div class="proof-card-bg ph" style="background:linear-gradient(160deg,var(--navy-dark),#080f1e)">
        <div class="play-btn"></div>
      </div>
      <div class="proof-body">
        <p class="proof-num">Тест 01</p>
        <p class="proof-title">«Пар»</p>
        <p class="proof-desc">Стакан с горячей водой. Накрываете тканью рубашки, сверху — зеркало. Рядом — обычная рубашка. Зеркало над рубашкой 12 Hours от CityPhase запотеет. Над обычной — нет.<br><br><em>Почему: трикотаж пропускает воздух.</em></p>
      </div>
    </div>
    <div class="proof-card">
      <div class="proof-card-bg ph" style="background:linear-gradient(160deg,var(--navy-dark),#080f1e)">
        <div class="play-btn"></div>
      </div>
      <div class="proof-body">
        <p class="proof-num">Тест 02</p>
        <p class="proof-title">«Чемодан»</p>
        <p class="proof-desc">Складываете рубашку в чемодан на 3 часа. Достаёте. Рубашка 12 Hours от CityPhase — почти без заломов. Обычная — гармошка.<br><br><em>Почему: нейлон + эластан возвращают форму.</em></p>
      </div>
    </div>
    <div class="proof-card">
      <div class="proof-card-bg ph" style="background:linear-gradient(160deg,var(--navy-dark),#080f1e)">
        <div class="play-btn"></div>
      </div>
      <div class="proof-body">
        <p class="proof-num">Тест 03</p>
        <p class="proof-title">«Стирка»</p>
        <p class="proof-desc">Стираете в раковине, вешаете на плечики, засекаете время. Рубашка 12 Hours от CityPhase готова к носке через час. Обычная — мокрая полдня.<br><br><em>Почему: лиоцелл отводит влагу быстрее хлопка.</em></p>
      </div>
    </div>
    <div class="proof-card">
      <div class="proof-card-bg ph" style="background:linear-gradient(160deg,var(--navy-dark),#080f1e)">
        <div class="play-btn"></div>
      </div>
      <div class="proof-body">
        <p class="proof-num">Тест 04</p>
        <p class="proof-title">«12 часов»</p>
        <p class="proof-desc">Надеваете утром. Снимаете видео в 9 утра и в 9 вечера. Воротник держит форму, ткань не помялась.<br><br><em>Почему: она спроектирована именно для этого.</em></p>
      </div>
    </div>
  </div>
  <p class="proof-note r">Видео появятся после получения первых образцов ткани.</p>
</section>

<!-- S4 WHAT YOU GET -->
<section class="sec" id="s4">
  <div style="margin-top:28px"></div>
  <h2 class="sh r">Что вы <em>получаете.</em></h2>
  <div class="props-wrap r">
    <div class="prop-list">
      <div class="prop-row"><span class="prop-dash">01</span><div class="prop-body"><p class="prop-name">Отличная паропроницаемость — трикотажная структура лучше пропускает воздух</p><p class="prop-desc">Трикотажное плетение — это петельная структура, а не плотный слой нити. Воздух свободно циркулирует. Обычная рубашка так не работает — можно проверить тестом с зеркалом.</p></div></div>
      <div class="prop-row"><span class="prop-dash">02</span><div class="prop-body"><p class="prop-name">Достали из чемодана — надели.</p><p class="prop-desc">Рубашка едет в сложенном виде. Достали — выглядит отлично. Гладить не нужно.</p></div></div>
      <div class="prop-row"><span class="prop-dash">03</span><div class="prop-body"><p class="prop-name">Никакой скованности.</p><p class="prop-desc">Эластан обеспечивает свободу движений.</p></div></div>
      <div class="prop-row"><span class="prop-dash">04</span><div class="prop-body"><p class="prop-name">Постирали вечером — надели утром.</p><p class="prop-desc">Постирали руками, повесили на плечики. Через час рубашка готова к носке — без сушки и глажки.</p></div></div>
      <div class="prop-row"><span class="prop-dash">05</span><div class="prop-body"><p class="prop-name">К вечеру выглядит как утром.</p><p class="prop-desc">Лиоцелл не накапливает запахи в течение дня. Деловой ужин после рабочего дня — и выглядите уверенно.</p></div></div>
    </div>
  </div>
</section>

<!-- S5 LYONEX -->
<section class="sec" id="s5">
  <h2 class="sh r" style="padding-top:104px">LYONEX — три компонента,<br><em>каждый со своей задачей.</em></h2>
  <p class="sh r" style="padding-top:0;font-size:clamp(14px,1.5vw,18px);color:var(--ink);font-weight:400;letter-spacing:0">Инженерный подход: каждый компонент решает одну задачу</p>
  <div class="lyonex-pairs r">
    <div class="lp-col">
      <span class="lp-plabel">Задача</span>
      <p class="lp-ptext"><strong>Не перегреваться в длинный день</strong></p>
      <div class="lp-ph ph"><span>фото</span></div>
      <div class="lp-divider"></div>
      <p class="lp-comp-name">Трикотажное плетение</p>
      <p class="lp-comp-desc">Воздух свободно циркулирует между петлями. Обычная рубашка так не умеет.</p>
    </div>
    <div class="lp-col">
      <span class="lp-plabel">Задача</span>
      <p class="lp-ptext"><strong>Не терять форму после многих стирок</strong></p>
      <div class="lp-ph ph"><span>фото</span></div>
      <div class="lp-divider"></div>
      <p class="lp-comp-name">Нейлон</p>
      <p class="lp-comp-desc">Держит форму там, где хлопок вытягивается и рвётся.</p>
    </div>
    <div class="lp-col">
      <span class="lp-plabel">Задача</span>
      <p class="lp-ptext"><strong>Не впитывать запахи к концу дня</strong></p>
      <div class="lp-ph ph"><span>фото</span></div>
      <div class="lp-divider"></div>
      <p class="lp-comp-name">Лиоцелл</p>
      <p class="lp-comp-desc">Отводит влагу — рубашка остаётся свежей дольше. Матовая поверхность, мягкость натурального волокна.</p>
    </div>
  </div>
  <!-- ФОТО: макросъёмка текстуры ткани — будет добавлено после съёмки -->
  <div class="lyonex-foot r">
    <p class="lyonex-note">Никаких пропиток. Только физика. Проверяется тестами.</p>
    <a href="/technology" class="lyonex-link">Подробнее о LYONEX →</a>
  </div>
</section>


<!-- S6 DETAILS -->
<section class="sec" id="s6">
  <h2 class="sh r">Каждая деталь — <em>решение.</em></h2>
  <p class="sh r" style="padding-top:0;font-size:clamp(13px,1.4vw,17px);color:var(--ink);font-weight:400;letter-spacing:0;margin-bottom:0">Ничего декоративного. Каждый элемент — ответ на вопрос «зачем».</p>
  <div class="det-wrap r">
    <div class="det-grid">
      <div class="det"><div class="det-text"><p class="det-t">Состав ткани</p><p class="det-d">LYONEX: нейлон + лиоцелл + эластан. Лиоцелл ощущается как натуральный материал — матовая поверхность, мягкость, дышимость.</p></div><div class="det-ph">фото</div></div>
      <div class="det"><div class="det-text"><p class="det-t">Трикотажное плетение</p><p class="det-d">Петельная структура — не плотный слой нити, а система петель с воздухом между ними. Воздух свободно циркулирует, рубашка тянется в любом направлении. Проверяется тестом с зеркалом.</p></div><div class="det-ph">фото</div></div>
      <div class="det"><div class="det-text"><p class="det-t">Воротник</p><p class="det-d">Spread collar — не валится без галстука, не душит в застёгнутом виде.</p></div><div class="det-ph">фото</div></div>
      <div class="det"><div class="det-text"><p class="det-t">Манжеты</p><p class="det-d">Одинарные манжеты — комфортно облегают запястье, не ограничивают движения.</p></div><div class="det-ph">фото</div></div>
      <div class="det"><div class="det-text"><p class="det-t">Планка</p><p class="det-d">Аккуратная ровная планка, сохраняет форму в течение дня.</p></div><div class="det-ph">фото</div></div>
      <div class="det"><div class="det-text"><p class="det-t">Пуговицы</p><p class="det-d">Логотип CityPhase. Запасная пуговица в комплекте.</p></div><div class="det-ph">фото</div></div>
      <div class="det"><div class="det-text"><p class="det-t">Тейп</p><p class="det-d">Жаккардовый тейп внутри стойки — белый логотип CITYPHASE на тёмно-синем фоне.</p></div><div class="det-ph">фото</div></div>
      <div class="det"><div class="det-text"><p class="det-t">Петля</p><p class="det-d">Зелёная тканая петля для вешалки. Фирменный акцент, который видите только вы.</p></div><div class="det-ph">фото</div></div>
    </div>
    <div style="padding:20px 24px;border-top:1px solid var(--mist);font-family:var(--body);font-size:14px;font-weight:400;color:var(--ink);line-height:1.6">
      <span style="font-family:var(--display);font-size:11px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:var(--navy);margin-right:20px">Возврат</span>
      30 дней с момента получения. Без объяснений — напишите на hello@cityphase.ru — все решим.
    </div>
  </div>
</section>


<!-- S7 FAQ -->
<section class="sec" id="s7" style="height:auto;min-height:100vh;overflow:visible">
  <h2 class="sh r">Частые <em>вопросы.</em></h2>
  <div class="faq-list r">
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)">Когда будет готова рубашка? <span class="faq-arr">+</span></button>
      <div class="faq-a">Первая партия — 200 единиц. Производство планируется завершить к сентябрю 2026. За всеми этапами производства и доставки можно следить в нашем Телеграм-канале: <a href="https://t.me/cityphase_ru" style="color:var(--navy);text-decoration:none;border-bottom:1px solid var(--mist)">@cityphase_ru</a>. После поступления товара на склад вы получите счёт на оплату.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)">Нужна ли предоплата? <span class="faq-arr">+</span></button>
      <div class="faq-a">Нет. Вы оставляете заявку — мы подтверждаем бронь письмом. Оплата только после того, как партия готова к отправке. Отказаться можно в любой момент до оплаты.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)">Что если размер не подойдёт? <span class="faq-arr">+</span></button>
      <div class="faq-a">Проверьте <a href="/sizes" style="color:var(--navy);text-decoration:none;border-bottom:1px solid var(--mist)">таблицу размеров</a> перед оформлением заявки. Если размер всё же не подойдёт после получения — напишите на hello@cityphase.ru. У вас 30 дней с момента получения — все решим.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)">Как ухаживать за рубашкой? <span class="faq-arr">+</span></button>
      <div class="faq-a">Стирка руками или деликатный режим до 30°C. Сушить на плечиках — рубашка сама восстанавливает форму. Гладить не нужно.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)">Доставка по всей России? <span class="faq-arr">+</span></button>
      <div class="faq-a">Да, по всей России. Доставляем через СДЭК. Стоимость доставки берём на себя.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)">Что значит «Основатель #N из 200»? <span class="faq-arr">+</span></button>
      <div class="faq-a">Первые 200 покупателей получают именной порядковый номер — навсегда. На email придёт цифровой сертификат и приглашение в закрытый Telegram-канал: фото с производства, голосования за следующий цвет, ранние анонсы.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)">Какой срок возврата? <span class="faq-arr">+</span></button>
      <div class="faq-a">30 дней с момента получения. Без объяснений, без вопросов. Напишите на hello@cityphase.ru — все решим.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)">Будет ли вторая партия? <span class="faq-arr">+</span></button>
      <div class="faq-a">Да. Серый и тёмно-синий цвета, расширенная сетка размеров. Первые 200 покупателей получат доступ к предзаказу второй партии за 30 дней до публичного старта.</div>
    </div>
    <div class="faq-item">
      <button class="faq-q" onclick="toggleFaq(this)">Могу ли я порекомендовать рубашку коллеге с выгодой? <span class="faq-arr">+</span></button>
      <div class="faq-a">Да. Через 7 дней после получения мы пришлём персональный промокод. Поделитесь с коллегой — оба получите приятный бонус на следующую покупку. Подробности — в письме.</div>
    </div>
    <div class="faq-item" style="border-bottom:none">
      <button class="faq-q" onclick="toggleFaq(this)">Есть ещё вопросы? <span class="faq-arr">+</span></button>
      <div class="faq-a">Пишите в Телеграм-канал <a href="https://t.me/cityphase_ru" style="color:var(--navy);text-decoration:none;border-bottom:1px solid var(--mist)">@cityphase_ru</a> или на почту <a href="mailto:hello@cityphase.ru" style="color:var(--navy);text-decoration:none;border-bottom:1px solid var(--mist)">hello@cityphase.ru</a>.</div>
    </div>
  </div>
</section>

<!-- S8 ORDER + FORM -->
<section class="sec" id="s8" style="height:auto;min-height:100vh;padding:80px 0 0;overflow:visible">
  <div class="order-wrap">
    <div class="order-left rl">
      <div class="order-name-wrap">
        <h2 class="order-name">12 Hours <span class="order-star">★</span></h2>
        <span class="order-name-sub">длинный день — один выбор.</span>
      </div>
      <p class="order-tagline">Больше не нужно выбирать между статусом и комфортом.</p>
      <p class="order-price-tag">15 900 ₽</p>
      <a href="/sizes" class="order-sizes-ref" target="_blank">Таблица размеров →</a>
    </div>
    <div id="form" class="form-right rr">
      <h3 class="form-title">Первая партия — 200 единиц</h3>
      <p class="form-sub">Каждый покупатель получает именной статус «Основатель #N из 200». Запись открыта до 25 августа. Оплата после подтверждения заявки.</p>
      <p class="form-sub" style="margin-top:-18px;margin-bottom:28px;opacity:.65;font-size:13px">Примерьте дома 30 дней — не подошло, вернём без вопросов.</p>
      <div class="form-bar">
        <div class="bar-track"><div class="bar-fill" id="barFill" style="width:0%"></div></div>
        <span class="bar-txt" id="barTxt">осталось <span id="spotsLeft">200</span> мест</span>
      </div>
      <div class="urg">
        <div><span class="urg-n" id="urgSpots">200</span><span class="urg-l">мест осталось</span></div>
        <div><span class="urg-n">25 августа</span><span class="urg-l">дедлайн</span></div>
      </div>
      <div class="form-fields" id="ff">
        <input class="fi" type="text" id="fn" placeholder="Ваше имя" required>
        <input class="fi" type="email" id="fe" placeholder="Email" required>
        <div class="form-swatches">
          <div class="form-sw-item sw-pick on-sw" data-color="Белый" onclick="pickColor(this)">
            <div class="form-sw-dot" style="background:#fff;border:1px solid var(--mist)"></div>
            <span class="form-sw-name">Белый</span>
          </div>
          <div class="form-sw-item sw-pick" data-color="Голубой" onclick="pickColor(this)">
            <div class="form-sw-dot" style="background:#A8C4E0"></div>
            <span class="form-sw-name">Голубой</span>
          </div>
        </div>
        <div class="frow">
          <select class="fs" id="fz"><option value="" disabled selected>Размер</option><option>M</option><option>L</option><option>XL</option></select>
          <select class="fs" id="fc"><option value="" disabled selected>Цвет</option><option>Белый</option><option>Голубой</option></select>
        </div>
        <a href="/sizes" class="form-sizes-ref" target="_blank">Как определить размер →</a>
        <button class="fsub" onclick="send()">Предзаказ</button>
        <!-- TODO: EmailJS — emailjs.send('service','template',{name,email,size,color}) -->
        <p class="fpriv">Нажимая кнопку, вы соглашаетесь на получение письма с подтверждением заявки.</p>
        <div class="tg-cta">
          <a href="https://t.me/cityphase_ru" class="tg-link" target="_blank">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.93 7.03l-1.69 7.96c-.13.58-.47.72-.95.45l-2.63-1.94-1.27 1.22c-.14.14-.26.26-.53.26l.19-2.68 4.87-4.4c.21-.19-.05-.29-.33-.1L8.42 14.09l-2.59-.81c-.56-.18-.57-.56.12-.83l10.12-3.9c.47-.17.88.11.76.82z" fill="currentColor"/></svg>
            Следите за нашим проектом в Телеграмм
          </a>
        </div>
      </div>
      <div class="form-ok" id="fok">Заявка принята. Мы пришлём письмо с вашим именным номером и деталями оплаты. Добро пожаловать в число первых.</div>
    </div>
  </div>
  <footer style="background:#0F2240;padding:56px 60px 32px;">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:48px;flex-wrap:wrap;gap:32px;">
      <div style="flex:1;min-width:200px;">
        <div style="font-family:'Raleway',sans-serif;font-size:15px;font-weight:500;letter-spacing:0.22em;color:#fff;margin-bottom:12px;">CITYPHASE</div>
        <p style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6;max-width:220px;">Деловая одежда для длинного дня. Право не выбирать между комфортом и статусом.</p>
      </div>
      <div style="display:flex;gap:64px;flex-wrap:wrap;">
        <div style="display:flex;flex-direction:column;gap:12px;">
          <span style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.35);">Продукт</span>
          <a href="/12-hours" style="font-size:13px;color:rgba(255,255,255,0.55);text-decoration:none;">12 Hours ★</a>
          <a href="/technology" style="font-size:13px;color:rgba(255,255,255,0.55);text-decoration:none;">Ткань LYONEX</a>
          <a href="/sizes" style="font-size:13px;color:rgba(255,255,255,0.55);text-decoration:none;">Каталог</a>
        </div>
        <div style="display:flex;flex-direction:column;gap:12px;">
          <span style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.35);">Бренд</span>
          <a href="/about" style="font-size:13px;color:rgba(255,255,255,0.55);text-decoration:none;">О бренде</a>
          <a href="/about#how" style="font-size:13px;color:rgba(255,255,255,0.55);text-decoration:none;">Как мы делаем одежду</a>
        </div>
        <div style="display:flex;flex-direction:column;gap:12px;">
          <span style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.35);">Контакты</span>
          <a href="mailto:hello@cityphase.ru" style="font-size:13px;color:rgba(255,255,255,0.55);text-decoration:none;">hello@cityphase.ru</a>
          <a href="https://t.me/cityphase_ru" style="font-size:13px;color:rgba(255,255,255,0.55);text-decoration:none;">Telegram @cityphase_ru</a>
        </div>
      </div>
    </div>
    <div style="border-top:0.5px solid rgba(255,255,255,0.1);padding-top:24px;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:12px;color:rgba(255,255,255,0.3);">© 2026 CityPhase</span>
      <span style="font-size:12px;color:rgba(255,255,255,0.3);">cityphase.ru</span>
    </div>
  </footer>
</section>

</div><!-- /#pager -->

<script>
const secs=[0,1,2,3,4,5,6,7,8].map(i=>document.getElementById('s'+i)).filter(Boolean);
const dots=document.querySelectorAll('.sd');
const scta=document.getElementById('scta');

const obs=new IntersectionObserver(e=>{
  e.forEach(en=>{
    if(en.target.classList.contains('r')||en.target.classList.contains('r2')||
       en.target.classList.contains('r3')||en.target.classList.contains('rl')||
       en.target.classList.contains('rr')){
      if(en.isIntersecting) en.target.classList.add('in');
      return;
    }
    if(en.isIntersecting){
      const i=secs.indexOf(en.target);
      if(i>=0){
        dots.forEach(d=>d.classList.remove('on'));
        if(dots[i]) dots[i].classList.add('on');
        scta.classList.toggle('on',i>0&&i<secs.length-1);
      }
    }
  });
},{threshold:0.25});

secs.forEach(s=>obs.observe(s));
document.querySelectorAll('.r,.r2,.r3,.rl,.rr').forEach(el=>obs.observe(el));

dots.forEach((d,i)=>{
  d.addEventListener('click',()=>{ if(secs[i]){
    const pager=document.getElementById('pager');
    pager.scrollTo({top:secs[i].offsetTop,behavior:'smooth'});
  }});
});

function pickSize(el){
  document.querySelectorAll('.spill').forEach(p=>p.classList.remove('on'));
  el.classList.add('on');
  const s=document.getElementById('fz');
  if(s) s.value=el.textContent;
}

function pickColor(el){
  const color=el.dataset.color;
  // sync all swatch pickers for same color
  document.querySelectorAll('.sw-pick').forEach(p=>{
    p.classList.toggle('on-sw', p.dataset.color===color);
  });
  const fc=document.getElementById('fc');
  if(fc) fc.value=color;
}

function toggleFaq(btn){
  const a=btn.nextElementSibling;
  const isOpen=a.classList.contains('open');
  // close all
  document.querySelectorAll('.faq-a').forEach(x=>x.classList.remove('open'));
  document.querySelectorAll('.faq-q').forEach(x=>x.classList.remove('open'));
  if(!isOpen){a.classList.add('open');btn.classList.add('open');}
}

function send(){
  const n=document.getElementById('fn').value.trim();
  const e=document.getElementById('fe').value.trim();
  const z=document.getElementById('fz').value;
  const c=document.getElementById('fc').value;
  if(!n||!e||!z||!c){alert('Пожалуйста, заполните все поля.');return;}
  document.getElementById('ff').style.display='none';
  document.getElementById('fok').style.display='block';
}

// ── BAR INIT (заявки пока 0) ──
(function(){
  const total=200,filled=0;
  const pct=Math.round(filled/total*100);
  const bar=document.getElementById('barFill');
  const left=document.getElementById('spotsLeft');
  const urg=document.getElementById('urgSpots');
  if(bar) bar.style.width=pct+'%';
  if(left) left.textContent=(total-filled);
  if(urg) urg.textContent=(total-filled);
})();

// ── WHEEL SNAP FALLBACK ──
(function(){
  const pager=document.getElementById('pager');
  if(!pager)return;
  const secs=[...document.querySelectorAll('.sec')];
  let busy=false,cur=0;
  function goTo(i){
    if(i<0||i>=secs.length)return;
    cur=i;busy=true;
    pager.scrollTo({top:secs[i].offsetTop,behavior:'smooth'});
    setTimeout(()=>busy=false,900);
  }
  pager.addEventListener('wheel',e=>{
    if(window.innerWidth<=900)return;
    if(cur>=secs.length-1)return;
    e.preventDefault();
    if(busy)return;
    if(e.deltaY>30)goTo(cur+1);
    else if(e.deltaY<-30)goTo(cur-1);
  },{passive:false});
  window.addEventListener('keydown',e=>{
    if(window.innerWidth<=900)return;
    if(e.key==='ArrowDown'||e.key==='PageDown'){e.preventDefault();if(!busy)goTo(cur+1);}
    if(e.key==='ArrowUp'||e.key==='PageUp'){e.preventDefault();if(!busy)goTo(cur-1);}
  });
  pager.addEventListener('scroll',()=>{
    const mid=pager.scrollTop+pager.clientHeight/2;
    secs.forEach((s,i)=>{if(s.offsetTop<=mid)cur=i;});
  });
  document.querySelectorAll('.sd').forEach((d,i)=>{
    d.onclick=()=>goTo(i);
  });
})();
</script>`;

export default function TwelveHours() {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    window.pickSize=function(el){
  document.querySelectorAll('.spill').forEach(p=>p.classList.remove('on'));
  el.classList.add('on');
  const s=document.getElementById('fz');
  if(s)s.value=el.textContent.trim();
};
window.pickColor=function(el){
  const color=el.dataset.color;
  document.querySelectorAll('.sw-pick').forEach(p=>{
    p.classList.toggle('on-sw',p.dataset.color===color);
  });
  const fc=document.getElementById('fc');
  if(fc)fc.value=color;
};
window.toggleFaq=function(btn){
  const a=btn.nextElementSibling;
  const isOpen=a.classList.contains('open');
  document.querySelectorAll('.faq-a').forEach(x=>x.classList.remove('open'));
  document.querySelectorAll('.faq-q').forEach(x=>x.classList.remove('open'));
  if(!isOpen){a.classList.add('open');btn.classList.add('open');}
};
window.send=async function(){
  const n=document.getElementById('fn').value.trim();
  const e=document.getElementById('fe').value.trim();
  const z=document.getElementById('fz').value;
  const c=document.getElementById('fc').value;
  if(!n||!e||!z||!c){alert('Пожалуйста, заполните все поля.');return;}
  const btn=document.getElementById('fsubmit');
  if(btn){btn.disabled=true;btn.textContent='Отправляем...';}
  try{
    const fd=new FormData();
    fd.append('name',n);fd.append('email',e);
    fd.append('size',z);fd.append('color',c);
    await fetch('https://formspree.io/f/mykldvkv',{
      method:'POST',body:fd,headers:{Accept:'application/json'}
    });
    document.getElementById('ff').style.display='none';
    document.getElementById('fok').style.display='block';
  }catch(err){
    if(btn){btn.disabled=false;btn.textContent='Записаться';}
    alert('Ошибка отправки. Попробуйте ещё раз.');
  }
};

    const secs=[0,1,2,3,4,5,6,7,8].map(i=>document.getElementById('s'+i)).filter(Boolean);
const dots=document.querySelectorAll('.sd');
const scta=document.getElementById('scta');

const obs=new IntersectionObserver(e=>{
  e.forEach(en=>{
    if(en.target.classList.contains('r')||en.target.classList.contains('r2')||
       en.target.classList.contains('r3')||en.target.classList.contains('rl')||
       en.target.classList.contains('rr')){
      if(en.isIntersecting) en.target.classList.add('in');
      return;
    }
    if(en.isIntersecting){
      const i=secs.indexOf(en.target);
      if(i>=0){
        dots.forEach(d=>d.classList.remove('on'));
        if(dots[i]) dots[i].classList.add('on');
        scta.classList.toggle('on',i>0&&i<secs.length-1);
      }
    }
  });
},{threshold:0.25});

secs.forEach(s=>obs.observe(s));
document.querySelectorAll('.r,.r2,.r3,.rl,.rr').forEach(el=>obs.observe(el));

dots.forEach((d,i)=>{
  d.addEventListener('click',()=>{ if(secs[i]){
    const pager=document.getElementById('pager');
    pager.scrollTo({top:secs[i].offsetTop,behavior:'smooth'});
  }});
});

// ── BAR INIT (заявки пока 0) ──
(function(){
  const total=200,filled=0;
  const pct=Math.round(filled/total*100);
  const bar=document.getElementById('barFill');
  const left=document.getElementById('spotsLeft');
  const urg=document.getElementById('urgSpots');
  if(bar) bar.style.width=pct+'%';
  if(left) left.textContent=(total-filled);
  if(urg) urg.textContent=(total-filled);
})();

// ── WHEEL SNAP FALLBACK ──
(function(){
  const pager=document.getElementById('pager');
  if(!pager)return;
  const secs=[...document.querySelectorAll('.sec')];
  let busy=false,cur=0;
  function goTo(i){
    if(i<0||i>=secs.length)return;
    cur=i;busy=true;
    pager.scrollTo({top:secs[i].offsetTop,behavior:'smooth'});
    setTimeout(()=>busy=false,900);
  }
  pager.addEventListener('wheel',e=>{
    if(window.innerWidth<=900)return;
    if(cur>=secs.length-1)return;
    e.preventDefault();
    if(busy)return;
    if(e.deltaY>30)goTo(cur+1);
    else if(e.deltaY<-30)goTo(cur-1);
  },{passive:false});
  window.addEventListener('keydown',e=>{
    if(window.innerWidth<=900)return;
    if(e.key==='ArrowDown'||e.key==='PageDown'){e.preventDefault();if(!busy)goTo(cur+1);}
    if(e.key==='ArrowUp'||e.key==='PageUp'){e.preventDefault();if(!busy)goTo(cur-1);}
  });
  pager.addEventListener('scroll',()=>{
    const mid=pager.scrollTop+pager.clientHeight/2;
    secs.forEach((s,i)=>{if(s.offsetTop<=mid)cur=i;});
  });
  document.querySelectorAll('.sd').forEach((d,i)=>{
    d.onclick=()=>goTo(i);
  });
})();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: PAGE_CSS}} />
      <div dangerouslySetInnerHTML={{__html: PAGE_HTML}} />
    </>
  );
}



