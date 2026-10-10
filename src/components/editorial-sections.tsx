import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { referenceImages, studioServices } from '@/lib/reference-design';

export function ProjectInvitation() {
 return <section className="project-invitation"><img src={referenceImages.cta} alt="" loading="lazy" decoding="async" width="1067" height="1600" /><div className="editorial-container"><p className="kicker">Your story, next</p><h2>Let’s create something <em>iconic</em></h2><Button asChild className="editorial-button"><Link to="/contact">Book a Shoot <span aria-hidden="true">→</span></Link></Button></div></section>;
}
export function ServiceCollection({preview=false}:{preview?:boolean}) {
 return <div className={preview?'service-rail':'service-collection'}>{studioServices.slice(0,preview?5:6).map((service,index)=><article className="service-card" key={service.title}><img src={service.image} alt={service.title+' by Lens Chronicle'} width="1067" height="1600" loading="lazy" decoding="async"/><div><p className="kicker">{String(index+1).padStart(2,'0')}</p><h3>{service.title}</h3><p>{service.body}</p><Link className="text-link" to="/contact">Enquire about this <span aria-hidden="true">→</span></Link></div></article>)}</div>;
}
