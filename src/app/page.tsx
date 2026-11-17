// src\app\page.tsx
import Image from "next/image";
import styles from "./page.module.css";

const collection = [
  {
    name: "Sapphires",
    description: "From deep blue to soft cornflower.",
    image: "/images/blue-pendant.jpg",
    alt: "Blue gemstone pendant in warm natural light",
    imagePosition: "center 42%",
  },
  {
    name: "Colour stones",
    description: "Distinctive colours, each with its own character.",
    image: "/images/wearing-pendant.jpg",
    alt: "A delicate pendant worn in a relaxed, everyday setting",
    imagePosition: "center 45%",
  },
  {
    name: "Special finds",
    description: "For when you have something particular in mind.",
    image: "/images/ring-detail.jpg",
    alt: "Close detail of a carefully set gemstone ring",
    imagePosition: "center 52%",
  },
];

export default function Home() {
  return (
    <main className={styles.site}>
      <header className={styles.header}>
        <a className={styles.wordmark} href="#top" aria-label="Ceylon Gem Co. home">
          
          <img 
            src={"/images/logo.png"} 
            alt="Saffragam Logo" 
            style={{ height: '80px', width: 'auto' }} 
          />
        
          
        
        </a>
        <nav className={styles.navigation} aria-label="Main navigation">
          <a href="#collection">Our collection</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className={styles.headerCta} href="#contact">
          Ask about a stone <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>GEMSTONES FROM SRI LANKA</p>
          <h1>Good stones.<br />Good stories.</h1>
          <p className={styles.heroDescription}>
            We source beautiful gemstones here in Sri Lanka. Tell us what
            you&apos;re looking for, or simply come and have a look around.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#collection">
              See what we love <span aria-hidden="true">↗</span>
            </a>
            <a className={styles.textLink} href="#about">
              A little about us
            </a>
          </div>
          <p className={styles.locationNote}>
            <span aria-hidden="true" />
            Based in Sri Lanka · Happy to help you find the right stone
          </p>
        </div>
        <div className={styles.heroPhoto}>
          <Image
            src="/images/blue-pendant.jpg"
            alt="A blue gemstone pendant in soft evening light"
            fill
            priority
            sizes="(max-width: 700px) 100vw, 52vw"
            className={styles.heroImage}
          />
          <span className={styles.photoCaption}>A little colour goes a long way.</span>
        </div>
      </section>

      <section className={styles.collection} id="collection">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>A FEW PLACES TO START</p>
            <h2>There&apos;s a stone<br />for <em>every story.</em></h2>
          </div>
          <p className={styles.sectionIntro}>
            We believe choosing a gemstone should feel personal, not
            overwhelming. Start with a colour you love and we&apos;ll take it
            from there.
          </p>
        </div>

        <div className={styles.collectionGrid}>
          {collection.map((item, index) => (
            <a className={styles.collectionCard} href="#contact" key={item.name}>
              <div className={styles.cardPhoto}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 680px) 88vw, 30vw"
                  className={styles.cardImage}
                  style={{ objectPosition: item.imagePosition }}
                />
                <span className={styles.cardNumber}>0{index + 1}</span>
                <span className={styles.cardArrow} aria-hidden="true">↗</span>
              </div>
              <div className={styles.cardDetails}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <span className={styles.cardLink}>TAKE A LOOK</span>
              </div>
            </a>
          ))}
        </div>
        <p className={styles.collectionNote}>
          Looking for a particular colour or cut? <a href="#contact">Just ask us.</a>
        </p>
      </section>

      <section className={styles.about} id="about">
        <div className={styles.aboutPhoto}>
          <Image
            src="/images/wearing-pendant.jpg"
            alt="A simple gemstone pendant worn close to the heart"
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
            className={styles.aboutImage}
          />
          <span className={styles.photoCaption}>From our island, with care.</span>
        </div>
        <div className={styles.aboutCopy}>
          <p className={styles.eyebrow}>A NOTE FROM SRI LANKA</p>
          <h2>It should feel<br /><em>like your stone.</em></h2>
          <p>
            Sri Lanka has a long history with gems, and we&apos;re proud to be
            part of it. We keep things personal: thoughtful recommendations,
            honest answers, and time to find the colour that feels right to you.
          </p>
          <a className={styles.storyLink} href="#contact">
            Tell us what you&apos;re looking for <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <p className={styles.eyebrow}>LET&apos;S FIND SOMETHING LOVELY</p>
        <h2>What do you<br />have in <em>mind?</em></h2>
        <p className={styles.contactDescription}>
          A colour, a shape, a gift, or just a question. We&apos;re always happy
          to chat.
        </p>
        <a
          className={styles.contactButton}
          href="mailto:hello@ceylongemco.lk?subject=Looking%20for%20a%20gem"
        >
          Say hello <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className={styles.footer}>
        <a className={styles.wordmark} href="#top" aria-label="Ceylon Gem Co. home">
          <img 
            src={"/images/logo.png"} 
            alt="Saffragam Logo" 
            style={{ height: '80px', width: 'auto' }} 
          />
        </a>
        <span className={styles.footerNote}>Gemstones, with a personal touch.</span>
        <a className={styles.backToTop} href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
