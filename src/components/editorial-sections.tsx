import { Link } from '@tanstack/react-router';
import { studioServices } from '@/lib/reference-design';

export function ServiceCollection({preview=false}:{preview?:boolean}) {
 return <div className={preview?'service-rail':'service-collection'}>{studioServices.slice(0,preview?5:6).map((service,index)=><article className="service-card" key={service.title}><img src={service.image} alt={service.title+' by Lens Chronicle'} width="1067" height="1600" loading="lazy" decoding="async"/><div><p className="kicker">{String(index+1).padStart(2,'0')}</p><h3>{service.title}</h3><p>{service.body}</p><Link className="text-link" to="/contact">Enquire about this <span aria-hidden="true">→</span></Link></div></article>)}</div>;
}
