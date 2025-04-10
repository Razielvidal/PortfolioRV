import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 mt-10 flex flex-col md:flex-row gap-10">
        {/* Left Column: Text */}
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-6">
            I’m Raziel. I live in Provo, UT, where I develop the future.
          </h1>
          <p className="text-gray-700 mb-4">
            I am a full-time Software Engineering student at Ensign College,
            passionate about front-end development and building visually appealing,
            highly functional web interfaces. My diverse background as an international
            student enriches my creative approach to problem-solving.
          </p>
          <p className="text-gray-700 mb-4">
            I have strong skills in object-oriented programming, data structures,
            and database management using SQL. I also have hands-on experience with
            front-end technologies, system modeling, and agile methodologies using
            tools like Jira.
          </p>
          <p className="text-gray-700 mb-4">
            In addition to my academic pursuits, I have practical work experience
            from roles like Laundry Assistant at BYU Laundry and Events Coordinator
            at ALJUCAR EVENTS. This experience has honed my time management,
            organizational, and interpersonal skills.
          </p>
          <p className="text-gray-700 mb-4">
            I am continuously exploring innovative ways to leverage technology to solve
            real-world problems and drive projects forward.
          </p>
        </div>

        {/* Right Column: Image + Links */}
        <div className="md:w-1/3">
          <div className="mb-6">
            <Image
              src="/Raziel%20Vidal.jpg"
              alt="Profile Picture of Raziel Vidal"
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-3 text-sm">
            <a
              href="https://x.com"
              className="block hover:text-teal-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow me on X
            </a>
            <a
              href="https://github.com/Razielvidal"
              className="block hover:text-teal-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow me on GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/raziel-vidal-levio-7071b7300/"
              className="block hover:text-teal-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow me on LinkedIn
            </a>
            <a
              href="mailto:raziel.vl@outlook.com"
              className="block hover:text-teal-500"
            >
              raziel.vl@outlook.com
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
