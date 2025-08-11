export default function ExperienceTimeline() {
  const items = [
    {
      date: "Feb 2025 – Now",
      title: "Senior Developer",
      company: "Asvatour",
      location: "Indonesia (Remote)",
      desc: "Led Full Stack Development for the Umrah and Hajj Management System, enhancing jamaah registration.",
      icon: "🕛",
    },
    {
      date: "Jul 2024 – Feb 2025",
      title: "Senior Developer",
      company: "Zitechnosoft",
      location: "Indonesia (Remote)",
      desc: "Full Stack Development on ERP, MES and Ceisa H2H (Indonesian Beacukai).",
      icon: "🕐",
    },
    {
      date: "Jan 2024 – Jul 2024",
      title: "System Analyst Developer",
      company: "Lee Yin Group",
      location: "Indonesia - Singapore (Remote)",
      desc: "Executed full stack coding tasks for the MES system & Sage ERP Integration.",
      icon: "🕐",
    },
    {
      date: "May 2023 – Jan 2024",
      title: "Full Stack Web Developer",
      company: "Proqua Consulting",
      location: "Indonesia (Onsite Karanganyar)",
      desc: "Developed front-end tasks using PHP + JQuery (Web) and React Native (Mobile), and back-end tasks using CodeIgniter 4.",
      icon: "🕑",
    },
    {
      date: "Feb 2020 – Mar 2023",
      title: "IT Officer Programmer",
      company: "KSPPS Al Ishlah Mitra Sejahtera",
      location: "Indonesia (Remote)",
      desc: "Responsible for office hardware, software and apps management.",
      icon: "🕖",
    },
    {
      date: "2021 — 2024",
      title: "Fullstack Developer",
      company: "Startup X",
      location: "Indonesia (Remote)",
      desc: "Built core product and CI/CD pipelines.",
      icon: "🕔",
    },
    {
      date: "2021 — 2024",
      title: "Fullstack Developer",
      company: "Startup X",
      location: "Indonesia (Remote)",
      desc: "Built core product and CI/CD pipelines.",
      icon: "🕠",
    },
    {
      date: "2021 — 2024",
      title: "Fullstack Developer",
      company: "Startup X",
      location: "Indonesia (Remote)",
      desc: "Built core product and CI/CD pipelines.",
      icon: "🕑",
    },
  ];
  // items = [{ date: '2021 - 2023', title: 'Senior Dev', company: 'ACME', desc: '...', icon: '💼' }, ...]
  return (
    <section className="timeline-section">
      <div className="timeline">
        {items.map((it, idx) => (
          <article
            key={idx}
            className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
          >
            <div className="marker" aria-hidden>
              <span className="marker-icon">{it.icon || "●"}</span>
            </div>
            <div className="card">
              <div className="meta">
                <time
                  className="date"
                  style={idx == 0 ? { fontWeight: "bold" } : {}}
                >
                  {it.date}
                </time>
                <span
                  className="company"
                  style={idx == 0 ? { fontWeight: "bold" } : {}}
                >
                  {it.company}
                </span>
              </div>
              <h3 className="title">{it.title}</h3>
              <p className="desc">{it.desc}</p>
              {it.more && (
                <button
                  className="more-btn"
                  aria-expanded="false"
                  onClick={(e) => {
                    const btn = e.currentTarget;
                    const expanded =
                      btn.getAttribute("aria-expanded") === "true";
                    btn.setAttribute("aria-expanded", (!expanded).toString());
                    btn.previousElementSibling.classList.toggle("expanded");
                  }}
                >
                  {it.moreLabel || "More"}
                </button>
              )}
              {it.more && <div className="more">{it.more}</div>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
