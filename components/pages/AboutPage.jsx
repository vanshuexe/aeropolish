import CompanyContent from '../CompanyContent';
import SiteLink from '../SiteLink';
export default function AboutPage() {
 return <div className="aeropolish-page">
  <section className="aeropolish-hero">
   <span className="company-eyebrow">PAINTS & COATING INDUSTRY</span>
   <h1>About Aeropolish</h1>
   <p>From Industrial Coatings to Everyday Paints.</p>
  </section>
  <CompanyContent />
  <div className="company-cta"><h2>Let's build lasting partnerships.</h2><p>Connect with Aeropolish for your coating requirements, supply opportunities or strategic growth.</p><div className="company-actions"><SiteLink href="/client">Client Inquiry</SiteLink><SiteLink href="/vendor">Become a Vendor</SiteLink><SiteLink href="/investor">Investment & Partnerships</SiteLink></div></div>
 </div>;
}
