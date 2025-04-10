import UsesSection from "@/components/UsesSection";

export const metadata = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};

export default function Uses() {
  const developmentTools = [
    {
      name: "Visual Studio Code",
      description:
        "My go-to code editor for writing clean, efficient code with a robust ecosystem of extensions that support JavaScript, React, and more.",
    },
    {
      name: "GitHub",
      description:
        "I leverage GitHub for version control and collaborative development, integrating CI/CD pipelines to streamline deployments.",
    },
    {
      name: "Next.js",
      description:
        "Next.js is my framework of choice for building scalable, server-rendered React applications that power modern web interfaces.",
    },
    {
      name: "Jira",
      description:
        "I use Jira to manage my projects using agile methodologies, keeping tasks organized and ensuring timely delivery.",
    },
  ];

  const designTools = [
    {
      name: "Figma",
      description:
        "Figma is my primary design tool for UI/UX prototyping and collaboration, allowing me to iterate and refine interfaces efficiently.",
    },
    {
      name: "Whimsical",
      description:
        "Whimsical helps me map out user flows and wireframes, turning complex ideas into clear visual diagrams for planning and brainstorming.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Intro */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Software I use, gadgets I love, and other things I recommend.
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          Here’s a list of tools and tech that power my daily workflow — from development to design and beyond.
        </p>
      </div>

      {/* Tool Sections */}
      <div className="flex flex-col gap-12">
        <UsesSection title="Development Tools" items={developmentTools} />
        <UsesSection title="Design" items={designTools} />
      </div>
    </div>
  );
}
