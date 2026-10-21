import {artPieces, hytaleMods, projects, socialLinks} from "../data/portfolio";
import styles from "./page.module.css"
import ProjectCard from "../components/ProjectCard/ProjectCard";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Lordimass home">
          Lordimass.net
        </a>
        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#art">Art</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id={styles.top}>
        <div id={styles.avatarBox} aria-label="Lordimass character artwork">
          <img src="/images/Lordi Sticker.png" alt="A sticker-style imp character playing a handheld computer." />
        </div>
        <div className={styles.heroInner}>
          <h1>Welcome to Lordimass.net! :D</h1>
          <p className={styles.lede}>
            Hi! I'm Lordi and I do stuff. I like to code, draw, and play games with friends.
          </p>
          <p>
            Currently, I'm very focused on Hytale! I've been spending a lot of my time modding it and generally being
            part of the amazing community that's forming around it.
          </p>
          <p>
            Previously, I was part of a community called Havoc. We did lots of different projects, but the most notable
            was our award-winning annual 24hr charity streams which I am very proud to have be the lead organiser of.
            Check out our website for that at <a href="https://havoc-hub.com">havoc-hub.com</a>.
          </p>
          <p>
            Anyways, the point of this website is to be a little hub for myself and everything I do, rather than
            focusing on just one community or project, it's basically just another portfolio site from a random
            programmer on the internet, we've all seen them before :P.
          </p>
          <div className={styles.heroActions} aria-label="Featured links">
            <a className="button primary" href="#projects">View projects</a>
            <a className="button" href="#art">Browse art</a>
          </div>
        </div>
      </section>

      <section className={styles.introBand} aria-label="Featured Projects" id="projects">
        <div>
          <span className={styles.sectionLabel}>Projects</span>
          <h2>A portfolio of all of the projects I'm most proud of.</h2>
        </div>
        <p>
          This is a bank for my development work, drawing, 3D modelling, charity stream organising, <i>worldbuilding</i>
          ...
          <br/><br/>
          ...and anything else I get my grubby little ADHD imp mitts on.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className={styles.sectionLabel}>Java, ECS, & Asset Management</span>
          <h2>Hytale Mods</h2>
          <p>Mods I've created (or been part of creating) for Hytale!</p>
        </div>
        <div className={styles.projectGrid}>
          {hytaleMods.map((project) => <ProjectCard project={project} key={project.name}/>)}
        </div>
        <br/><hr/><br/>
        <div className="section-heading">
          <span className={styles.sectionLabel}>Assorted content</span>
          <h2>Other Projects</h2>
          <p>Various projects that don't fit in any other category.</p>
        </div>
        <div className={styles.projectGrid}>
          {projects.map((project) => <ProjectCard project={project} key={project.name}/>)}
        </div>
      </section>

      <section className="section art-section" id="art">
        <div className="section-heading">
          <span className={styles.sectionLabel}>Art</span>
          <h2>Gallery</h2>
          <p>Character pieces, creature sketches, maps, logos, and commissions.</p>
        </div>
        <div className="art-grid">
          {artPieces.map((piece) => (
            <figure className="art-card" key={piece.src}>
              <img src={piece.src} alt={piece.title} loading="lazy" />
              <figcaption>{piece.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.contactBand} id="contact">
        <div>
          <span className={styles.sectionLabel}>Find me</span>
          <h2>Want to see more?</h2>
          <p>Here are the places I am most likely to point people when a project, stream, or wiki rabbit-hole comes up.</p>
        </div>
        <div className="social-grid">
          {socialLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
      </section>
    </main>
  );
}
