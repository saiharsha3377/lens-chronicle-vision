import { useEffect, useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { studioServices } from '@/lib/reference-design';

const serviceDetails: Record<string, { label: string; tags: string[] }> = {
  'Editorial Shoots': { label: 'Story-led fashion', tags: ['Concept', 'Lighting', 'Direction'] },
  'Model Portfolio Development': { label: 'Agency ready', tags: ['Comp cards', 'Beauty', 'Movement'] },
  'Brand Campaign Photography': { label: 'Collections & launches', tags: ['Casting', 'Campaign', 'Retouching'] },
  'Celebrity & Talent Shoots': { label: 'Press & presence', tags: ['Covers', 'Portraits', 'Branding'] },
  'Lookbooks & E-commerce': { label: 'True to the garment', tags: ['Lookbook', 'True colour', 'Texture'] },
  'Fashion Week & Backstage': { label: 'In the moment', tags: ['Runway', 'Backstage', 'Fast delivery'] },
};

const process = [
  { title: 'Brief', body: 'We listen first - your idea, audience, references and the feeling the images must carry.' },
  { title: 'Pre-production', body: 'Moodboards, casting, styling, locations and a lighting plan, all shaped before the shoot day.' },
  { title: 'The shoot', body: 'A calm, directed set where light, pose and garment are refined frame by frame.' },
  { title: 'Delivery', body: 'Careful selection and retouching, delivered in formats ready for print, web and social.' },
];

const disciplines = ['Fashion', 'Editorial', 'Commercial', 'Beauty', 'Portfolio', 'Campaign', 'Lookbook', 'Backstage'];

function useServiceMotion<T extends HTMLElement>() {
  const root = useRef<T>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const targets = Array.from(element.querySelectorAll<HTMLElement>('.svc-anim'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach(t => t.classList.add('svc-in'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add('svc-in');
        io.unobserve(entry.target);
      }
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(t => io.observe(t));

    const parallax = Array.from(element.querySelectorAll<HTMLElement>('[data-parallax]'));
    const visible = new Set<HTMLElement>();
    const vis = new IntersectionObserver(entries => {
      for (const e of entries) e.isIntersecting ? visible.add(e.target as HTMLElement) : visible.delete(e.target as HTMLElement);
      schedule();
    });
    parallax.forEach(p => vis.observe(p));
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      visible.forEach(node => {
        const r = node.getBoundingClientRect();
        const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / vh));
        node.style.setProperty('--svc-p', p.toFixed(3));
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      io.disconnect(); vis.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(frame);
    };
  }, []);
  return root;
}

export function ServiceCollection() {
  const root = useServiceMotion<HTMLDivElement>();
  return (
    <div ref={root} className="svc-wrap">
      <div className="svc-marquee" aria-hidden="true">
        <div className="svc-marquee-track">
          {[...disciplines, ...disciplines].map((d, i) => <span key={i}>{d}<i /></span>)}
        </div>
      </div>

      <div className="svc-list">
        {studioServices.map((service, index) => {
          const detail = serviceDetails[service.title];
          return (
            <article className={'svc-row svc-anim' + (index % 2 ? ' svc-row-flip' : '')} key={service.title}>
              <div className="svc-photo" data-parallax>
                <div className="svc-photo-inner">
                  <img src={service.image} alt={service.title + ' by Lens Chronicle'} width="1067" height="1600" loading="lazy" decoding="async" />
                </div>
                <span className="svc-corner svc-tl" /><span className="svc-corner svc-br" />
                <span className="svc-shutter" />
              </div>
              <div className="svc-copy">
                <p className="svc-label"><span className="svc-dot" />{detail?.label}</p>
                <h2 className="svc-title">{service.title.split(' ').map((w, i) => <span key={i} style={{ transitionDelay: `${0.15 + i * 0.07}s` }}><span>{w}</span></span>)}</h2>
                <span className="svc-rule" />
                <p className="svc-body">{service.body}</p>
                <ul className="svc-tags">{detail?.tags.map((t, i) => <li key={t} style={{ transitionDelay: `${0.55 + i * 0.08}s` }}>{t}</li>)}</ul>
                <Link to="/book" className="svc-link">
                  <span className="svc-link-text">Discuss a shoot</span>
                  <span className="svc-link-ring" aria-hidden="true"><svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" /></svg><b>↗</b></span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <section className="svc-process" aria-labelledby="svc-process-title">
        <h2 id="svc-process-title" className="svc-anim svc-process-head">How a shoot <em>comes together</em></h2>
        <ol className="svc-steps svc-anim">
          <span className="svc-steps-line" aria-hidden="true" />
          {process.map((step, i) => (
            <li key={step.title} style={{ transitionDelay: `${0.2 + i * 0.15}s` }}>
              <span className="svc-step-node" aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
