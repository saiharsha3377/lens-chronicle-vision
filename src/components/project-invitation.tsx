import { Link } from "@tanstack/react-router";

export function ProjectInvitation() {
  return (
    <section className="about-closing editorial-container">
      <div className="closing-copy" data-motion="mask">
        <p className="kicker">Let&rsquo;s create something meaningful</p>
        <h2 className="closing-line"><span><i>Have a project <em>in mind?</em></i></span></h2>
        <p>A creative concept, a portfolio to build, or a brand story to tell - let&rsquo;s collaborate and bring your vision to life.</p>
        <Link className="text-link" to="/contact">See contact details <span aria-hidden="true">↗</span></Link>
      </div>
      <Link to="/book" className="closing-dial" data-motion="settle" aria-label="Book a shoot">
        <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
          <circle className="dial-track" cx="60" cy="60" r="54"/>
          <circle className="dial-draw" cx="60" cy="60" r="54"/>
          <circle className="dial-ticks" cx="60" cy="60" r="45"/>
        </svg>
        <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
