import { Link } from '@tanstack/react-router';
import { studioServices } from '@/lib/reference-design';
import { Button } from '@/components/ui/button';

export function ServiceCollection({preview=false}:{preview?:boolean}) {
 return <div className={preview?'service-rail':'commission-collection'}>{studioServices.slice(0,preview?5:6).map((service,index)=><article className={preview?'service-card':'commission-row'} data-motion={index%2===0?'from-left':'from-right'} key={service.title}><div className="commission-photo"><img src={service.image} alt={service.title+' by Lens Chronicle'} width="1067" height="1600" loading="lazy" decoding="async"/></div><div className="commission-copy"><p className="kicker">{String(index+1).padStart(2,'0')} / Commissions</p><h2>{service.title}</h2><p>{service.body}</p><Button asChild variant="ghost" className="editorial-button"><Link to="/book">Discuss a shoot <span aria-hidden="true">↗</span></Link></Button></div></article>)}</div>;
}
