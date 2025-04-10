export const metadata = {
  title: 'Portfolio - Projects',
  description: 'The projects page of my portfolio.',
};

export default function Projects() {
  return (
    <section style={{ padding: '2rem' }}>
      {/* Container for 6 cards (2 rows x 3 columns) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            {/* Pink circle icon */}
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
              <span style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>H</span>
            </div>

            {/* Card heading */}
            <h3 style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>Company</h3>

            {/* Description */}
            <p style={{ marginBottom: '1rem' }}>
              Creating technology to empower civilians to explore space on their own terms.
            </p>

            {/* Link with chain-link icon */}
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
                href="https://company.com"
                style={{ color: '#333', textDecoration: 'none' }}
              >
                https://company.com
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
