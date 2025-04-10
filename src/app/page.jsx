import Navbar from "@/components/Button/Navbar";
import Image from "next/image";
import NewsletterCard from "@/components/NewsLetterCard";
import WorkCard from "@/components/WorkCard";
import SkillsCard from "@/components/SkillsCard";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

export default function Home() {
  // Updated articles reflecting your expertise, including agile (Jira) and Excel
  const articles = [
    {
      date: "January 15, 2024",
      title: "Harnessing Agile Tools: Jira & Excel",
      description:
        "Discover how I leverage Jira for agile project management and Excel for efficient data tracking to streamline workflows.",
    },
    {
      date: "February 10, 2024",
      title: "Innovations in Front-End Development",
      description:
        "Explore my journey in crafting responsive web interfaces using modern frameworks and cutting-edge front-end technologies.",
    },
    {
      date: "March 05, 2024",
      title: "Balancing Academics and Innovation",
      description:
        "As a full-time Software Engineering student at Ensign College, I integrate academic rigor with real-world tech challenges to drive impactful solutions.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-10">
          {/* Left side */}
          <div className="md:col-span-2">
            <Image
              src="/Raziel%20Vidal.jpg"
              alt="Profile of Raziel Vidal"
              width={128}
              height={128}
              className="rounded-full shadow-lg"
            />
            <h1 className="text-2xl font-bold mt-4">
              Raziel Vidal | Software Engineer & Front-End Developer
            </h1>
            <p className="mt-2 text-gray-600">
              I am a full-time Software Engineering student at Ensign College in Provo, UT.
              Passionate about creating innovative solutions, I specialize in front-end development
              and agile project management. I use modern tools like Next.js, Jira, and Excel to design
              scalable, user-friendly applications that meet real-world challenges.
            </p>

            {/* Article Section */}
            <div className="w-full md:w-[594px] flex flex-col gap-[40px] pt-8 pb-8">
              {articles.map((article, index) => (
                <div key={index} className="space-y-2">
                  <time className="inline-flex items-center gap-2 font-roboto font-normal text-[14px] leading-6 tracking-[0%] text-[#A1A1AA]">
                    <span className="mr-1 text-[#A1A1AA]">|</span> {article.date}
                  </time>
                  <h2 className="text-xl font-bold">{article.title}</h2>
                  <div className="w-[512px] pt-2">
                    <p className="w-[512px] font-roboto font-normal text-[14px] leading-6 tracking-[0%] text-[#52525B]">
                      {article.description}
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="#"
                      className="inline-flex items-center font-roboto font-medium text-[14px] leading-6 tracking-[0%] text-[#14B8A6]"
                    >
                      Read article &gt;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-6 transform scale-90 origin-top-right">
            <NewsletterCard />
            <WorkCard />
            <SkillsCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
