import { useEffect, useState } from "react";
import {
  publications,
  posters,
  recognition,
  researchSystems,
  selectedEngineering,
  service,
  updates,
  type Link,
} from "./content";

type Theme = "light" | "dark";

function LinkList({ links }: { links: Link[] }) {
  if (!links.length) return null;

  return (
    <span className="link-list">
      {links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
          {link.label}<span aria-hidden="true"> ↗</span>
        </a>
      ))}
    </span>
  );
}

function WorkVisual({
  src,
  alt,
  variant = "row",
  fit = "cover",
  shape,
  expandable = false,
}: {
  src?: string;
  alt?: string;
  variant?: "row" | "card";
  fit?: "cover" | "contain";
  shape?: "square" | "wide";
  expandable?: boolean;
}) {
  if (!src) return null;

  const className = [
    "work-visual",
    `work-visual--${variant}`,
    `work-visual--${fit}`,
    shape ? `work-visual--${shape}` : "",
    expandable ? "work-visual--expandable" : "",
  ].filter(Boolean).join(" ");

  return (
    <figure className={className}>
      {expandable ? (
        <a
          className="work-visual__image-link"
          href={src}
          target="_blank"
          rel="noreferrer"
          aria-label={`View full poster: ${alt ?? "poster"}`}
        >
          <img src={src} alt={alt ?? ""} loading="lazy" decoding="async" />
        </a>
      ) : (
        <img src={src} alt={alt ?? ""} loading="lazy" decoding="async" />
      )}
      {expandable && (
        <figcaption>
          <a href={src} target="_blank" rel="noreferrer">View full poster ↗</a>
        </figcaption>
      )}
    </figure>
  );
}

function SectionHeader({ index, title, command }: { index: string; title: string; command: string }) {
  return (
    <div className="section-heading">
      <div className="section-heading__title">
        <span>{index}</span>
        <h2>{title}</h2>
      </div>
      <code>$ {command}</code>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("fitsum-theme") as Theme | null;
    return saved ?? "light";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("fitsum-theme", theme);
  }, [theme]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <a className="site-name" href="#top">
          <span>fitsum@psu</span>:~$
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          [{menuOpen ? "close" : "menu"}]
        </button>

        <nav
          id="primary-nav"
          className={menuOpen ? "nav nav--open" : "nav"}
          aria-label="Primary navigation"
        >
          <a href="#publications" onClick={closeMenu}>publications</a>
          <a href="#cv" onClick={closeMenu}>cv</a>
          <a href="#news" onClick={closeMenu}>news</a>
          <a href="#contact" onClick={closeMenu}>contact</a>
          <a href="#research-tools" onClick={closeMenu}>research tools</a>
        </nav>

        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          onClick={() => setTheme((current) => current === "light" ? "dark" : "light")}
        >
          [{theme === "light" ? "dark" : "light"}]
        </button>
      </header>

      <main id="main">
        <div className="page-shell">
          <section className="hero" id="top">
            <div className="hero__identity">
              <p className="terminal-label">fitsum@about:~$ whoami</p>
              <div className="hero__name-row">
                <div className="hero__portrait" aria-label="Portrait placeholder">
                  <span>FSB</span>
                </div>
                <h1>Fitsum S.<br />Beyene</h1>
              </div>
              <p className="hero__role">
                School of Electrical Engineering and Computer Science · The Pennsylvania
                State University
              </p>
              <div className="profile-links" aria-label="Profile links">
                <a href="mailto:fsb5110@psu.edu">Email ↗</a>
                <a href="https://github.com/FII78" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/fitsum-sileshi" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href="https://orcid.org/0009-0009-2006-7580" target="_blank" rel="noreferrer">ORCID ↗</a>
              </div>
            </div>

            <div className="hero__summary">
              <p className="terminal-label">fitsum@research:~$ cat bio.txt</p>
              <p className="hero__intro">
                I am a Ph.D. candidate in{" "}
                <a href="https://www.eecs.psu.edu/departments/EECS-Departments-Computer-Science-Engineering3.aspx" target="_blank" rel="noreferrer">Computer Science and Engineering</a>{" "}
                at <a href="https://www.psu.edu/" target="_blank" rel="noreferrer">The Pennsylvania State University</a>, where I conduct research alongside with <a href="https://www.ime.psu.edu/department/directory-detail-g.aspx?q=cld5070" target="_blank" rel="noreferrer">Prof. Christopher L. Dancy</a> at the <a href="https://thicc-lab.org/" target="_blank" rel="noreferrer">THiCC Lab</a>.
                My research focuses on human–AI interaction, multimodal systems, and
                empirical AI evaluation. My approach integrates cognitive theories of learning and decision-making to design human-in-the-loop systems and reproducible evaluation pipelines. Through these frameworks, I study uncertainty, calibration, and human correction to explore how human judgment can inform multimodal AI development without sacrificing rigor.
              </p>
            </div>
          </section>

          <div className="status-strip" aria-label="Current status">
            <span><i /> available · summer 2027</span>
            <span></span>
            <a href="mailto:fsb5110@psu.edu">email me ↗</a>
          </div>

          <div className="workspace">
            <section className="content-section" id="publications">
              <SectionHeader index="01" title="Publications" command="ls -la ./publications" />

              <div className="output-group">
                <div className="output-group__heading">
                  <h3>Peer-reviewed publications</h3>
                  <span>{publications.length} papers</span>
                </div>
                <div className="publication-list">
                  {publications.map((publication) => (
                    <article className={publication.image ? "publication publication--with-image" : "publication"} key={publication.title}>
                      <WorkVisual
                        src={publication.image}
                        alt={publication.imageAlt}
                        fit={publication.imageFit}
                        shape={publication.imageShape}
                      />
                      <div className="publication__content">
                        <div className="publication__meta">
                          <span className="publication__year">{publication.year}</span>
                          <span className="publication__venue">{publication.venue}</span>
                        </div>
                        <h3>{publication.title}</h3>
                        <p className="authors">{publication.authors}</p>
                        <LinkList links={publication.links} />
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="output-group">
                <div className="output-group__heading">
                  <h3>Posters</h3>
                  <span>{posters.length} presentations</span>
                </div>
                <div className="publication-list publication-list--posters">
                  {posters.map((poster) => (
                    <article className={poster.image ? "publication publication--with-image" : "publication"} key={`${poster.year}-${poster.title}`}>
                      <WorkVisual
                        src={poster.image}
                        alt={poster.imageAlt}
                        fit={poster.imageFit}
                        shape={poster.imageShape}
                        expandable
                      />
                      <div className="publication__content">
                        <div className="publication__meta">
                          <span className="publication__year">{poster.year}</span>
                          <span className="publication__venue">{poster.venue}</span>
                        </div>
                        <h3>{poster.title}</h3>
                        <p className="authors">{poster.authors}</p>
                        <LinkList links={poster.links} />
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* <section className="cv-section" id="cv" aria-labelledby="cv-title">
              <div className="cv-section__title">
                <span>02</span>
                <div>
                  <code>./fitsum-beyene-cv.pdf</code>
                  <h2 id="cv-title">Curriculum vitae (CV)</h2>
                </div>
              </div>
              <p>The updated academic CV is in progress.</p>
              <a href="mailto:fsb5110@psu.edu?subject=CV%20request">Request the current curriculum vitae ↗</a>
            </section> */}

            <section className="content-section activity-section" id="news">
              <SectionHeader index="03" title="News" command="tail -n 3 ./news.log" />
              <div className="update-list update-list--grid">
                {updates.map((item) => (
                  <div className="update-row" key={`${item.date}-${item.text}`}>
                    <time>{item.date}</time>
                    <p>
                      {item.href ? (
                        <>
                          {item.text}
                          <a className="update-link" href={item.href} target="_blank" rel="noreferrer">View source ↗</a>
                        </>
                      ) : item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="news-support" aria-label="Academic service and recognition">
                <div className="community-panel">
                  <div className="community-heading">
                    <span>svc</span>
                    <h2>Academic service</h2>
                  </div>
                  <div className="compact-list">
                    {service.map((item) => (
                      <div className="compact-row" key={`${item.year}-${item.title}`}>
                        <span>{item.year}</span>
                        <p>
                          <strong>{item.title}</strong><br />
                          {item.href ? (
                            <a href={item.href} target="_blank" rel="noreferrer">{item.organization} ↗</a>
                          ) : item.organization}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="community-panel">
                  <div className="community-heading">
                    <span>rec</span>
                    <h2>Recognition</h2>
                  </div>
                  <div className="compact-list">
                    {recognition.map((item) => (
                      <div className="compact-row" key={`${item.year}-${item.title}`}>
                        <span>{item.year}</span>
                        <p>
                          <strong>{item.title}</strong><br />
                          {item.href ? (
                            <a href={item.href} target="_blank" rel="noreferrer">{item.organization} ↗</a>
                          ) : item.organization}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* <section className="contact" id="contact">
              <p className="terminal-label">fitsum@contact:~$ mail</p>
              <p>
                Interested in research, systems, or a Summer 2027 internship?
                <br /><a href="mailto:fsb5110@psu.edu">Send me an email ↗</a>
              </p>
            </section> */}

            <section className="content-section research-tools-section" id="research-tools">
              {/* <SectionHeader index="05" title="Research tools" command="find ./research -type f" /> */}

              {/* <div className="output-group">
                <div className="output-group__heading">
                  <h3>Ongoing research systems</h3>
                  <span>ongoing</span>
                </div>
                <div className="system-grid">
                  {researchSystems.map((work) => (
                    <article className="system-card" key={work.name}>
                      <div className="system-card__top">
                        <span>./{work.name.toLowerCase().replaceAll(" ", "-")}</span>
                        <span>{work.status}</span>
                      </div>
                      <WorkVisual
                        src={work.image}
                        alt={work.imageAlt}
                        variant="card"
                        fit={work.imageFit}
                        shape={work.imageShape}
                      />
                      <h3>{work.name}</h3>
                      <p>{work.description}</p>
                      {work.stack && <code>{work.stack}</code>}
                      <LinkList links={work.links} />
                    </article>
                  ))}
                </div>
              </div> */}

              <div className="output-group">
                <div className="output-group__heading">
                  <h3>Selected engineering</h3>
                  <span>deployed work</span>
                </div>
                <div className="product-list">
                  {selectedEngineering.map((work) => (
                    <article className={work.image ? "product-row product-row--with-image" : "product-row"} key={work.name}>
                      <WorkVisual
                        src={work.image}
                        alt={work.imageAlt}
                        fit={work.imageFit}
                        shape={work.imageShape}
                      />
                      <div className="product-row__content">
                        <div className="product-row__title">
                          <h3>{work.name}</h3>
                          <span>{work.role}</span>
                        </div>
                        <p>{work.description}</p>
                        <LinkList links={work.links} />
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Fitsum S. Beyene</span>
        <span></span>
        <a href="#top">cd ~/top ↑</a>
      </footer>
    </>
  );
}

export default App;
