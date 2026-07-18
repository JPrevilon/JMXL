import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export function FooterScene() {
  return (
    <footer data-scene="footer" className="scene footer-scene">
      <div className="scene__inner footer-scene__inner">
        <Image src="/brand/logo-white-transparent.png" alt="JaiMoney XL" width={240} height={240} />
        <h2>Built to own the future.</h2>
        <div className="footer-links">
          {siteContent.socials.map((social) => (
            <a href={social.href} key={social.label} target="_blank" rel="noreferrer">{social.label} ↗</a>
          ))}
          <a href={`mailto:${siteContent.bookingEmail}`}>Booking ↗</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} JaiMoney XL</span>
          <a href="#top">Back to top ↑</a>
          <span>Independent in Los Angeles</span>
        </div>
      </div>
    </footer>
  );
}
