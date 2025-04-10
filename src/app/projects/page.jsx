export const metadata = {
  title: 'Portfolio - Projects',
  description: 'The projects page of my portfolio.',
};

export default function Projects() {
  const projects = [
    {
      title: "MILO Web App",
      description:
        "Developed an intuitive dashboard and secure login system for the MILO web app, streamlining user experience and data visualization.",
      link: "https://miloapp.com",
      icon: "M",
    },
    {
      title: "Personal Portfolio",
      description:
        "A polished portfolio built with Next.js to showcase my front-end development skills and innovative projects.",
      link: "https://razielvidal.com",
      icon: "P",
    },
    {
      title: "Energy Pulse App",
      description:
        "Served as Scrum Master for the Energy Pulse app, leading agile teams to innovate in energy monitoring solutions and efficient workflows.",
      link: "https://energypulse.com",
      icon: "E",
    },
  ];

  return (
    <section style={{ padding: '2rem' }}>
      {/* Grid Container for Project Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '1rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderRadius: '8px',
            }}
          >
            {/* Icon Circle */}
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#F63B59',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
              }}
            >
              <span style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
                {project.icon}
              </span>
            </div>

            {/* Project Title */}
            <h3 style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
              {project.title}
            </h3>

            {/* Project Description */}
            <p style={{ marginBottom: '1rem' }}>
              {project.description}
            </p>

            {/* Link with Chain-Link Icon */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '16px', height: '16px' }}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.828 10.172a4 4 0 0 0-5.656 5.656l1.414 1.414
                     M10.172 13.828a4 4 0 0 0 5.656-5.656l-1.414-1.414
                     M8 12h.01M16 12h.01M12 8v.01M12 16v.01"
                />
              </svg>
              <a
                href={project.link}
                style={{ color: '#333', textDecoration: 'none' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
