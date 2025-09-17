"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 2, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "FAQ", id: "faq" },
            { name: "Footer", id: "footer" }]
          }
          logoSrc="/images/logo.svg"
          logoAlt="NeonSpark Logo"
          brandName="NeonSpark"
        />
      </div>
      <div id="hero" data-section="hero">
        <FrameHero
          title="Welcome to NeonSpark"
          description="A vibrant platform to explore the future of fun and innovative projects!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about">
        <CtaAbout
          title="About NeonSpark"
          descriptions={["We provide trends you won't want to miss!", "Join us on this exciting journey of innovation."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <NumberGridTokenomics
          title="Tokenomics Overview"
          description="Our transparent approach to token distribution and utilization."
          kpiItems={[{ value: "100M", description: "Total Supply" }, { value: "30M", description: "Circulating Supply" }]}
        />
      </div>
      <div id="faq" data-section="faq">
        <CentralFAQ
          items={[
            { title: "How to join?", content: "Simply sign up on our website!" },
            { title: "What do I get?", content: "Exclusive access and tailored services tailored to your needs." }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={150}
          logoHeight={50}
          columns={[
            { title: "Features", items: [{ label: "Feature One", onClick: () => {} }, { label: "Feature Two", onClick: () => {} }] },
            { title: "Company", items: [{ label: "About Us", onClick: () => {} }, { label: "Contact", onClick: () => {} }] },
            { title: "Resources", items: [{ label: "Blog", onClick: () => {} }, { label: "Help", onClick: () => {} }] },
          ]}
          copyrightText="© 2023 NeonSpark. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}