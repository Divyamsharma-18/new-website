// src/components/Team/index.tsx
import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";
import Link from "next/link";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Rishi Mondal",
    designation: "Founder and CTO",
    image: "/images/team/Rishi_Mondal.jpg",
    linkedinLink: "https://www.linkedin.com/in/rishi-mondal-5238b2282/",
    githubLink: "https://github.com/MAVRICK-1",
  },
  {
    id: 2,
    name: "Durgesh Prajapati",
    designation: "Founder & CEO",
    image: "/images/team/Durgesh_Prajapati.jpg",
    linkedinLink: "https://www.linkedin.com/in/durgesh4993/",
    githubLink: "https://github.com/Durgesh4993",
  },
  {
    id: 3,
    name: "Vedant Anand",
    designation: "Marketing Manager",
    image: "/images/team/Vedant_Anand.jpg",
    linkedinLink: "https://www.linkedin.com/in/vedantanand17",
    githubLink: "https://github.com/vedantanand17",
  },
  {
    id: 4,
    name: "Manjeet Singh",
    designation: "Tech Lead",
    image: "/images/team/Manjeet_Singh.jpg",
    linkedinLink: "https://www.linkedin.com/in/manaregr8/",
    githubLink: "https://github.com/Manaregr8",
  },
  {
    id: 5,
    name: "Divyam Sharma",
    designation: "Software Developer",
    image: "/images/team/Divyam_Sharma.jpg",
    linkedinLink: "https://www.linkedin.com/in/divyam-sharma-6ba700249/",
    githubLink: "https://github.com/Divyamsharma-18",
  },
  {
    id: 6,
    name: "Ayushmaan Singh Yadav",
    designation: "Software Developer",
    image: "/images/team/Ayushmaan.jpg",
    linkedinLink: "https://www.linkedin.com/in/ayushmaansinghyadav/",
    githubLink: "https://github.com/asteriskayush007",
  },
  {
    id: 7,
    name: "Ghanshyam Singh",
    designation: "Software Developer",
    image: "/images/team/Ghanshyam_Singh.jpg",
    linkedinLink: "https://www.linkedin.com/in/ghanshyam-singh-b014232b2/",
    githubLink: "https://github.com/ghanshyam2005singh",
  },
  {
    id: 8,
    name: "Sayan Rakshit",
    designation: "Software Developer",
    image: "/images/team/Sayan_Rakshit.jpg",
    linkedinLink: "https://www.linkedin.com/in/sayandotcom/",
    githubLink: "https://github.com/devsayanR",
  },
];

const Team = ({ showAll }: { showAll: boolean }) => {
  const visibleTeam = showAll ? teamData : teamData.slice(0, 4);

  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {visibleTeam.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>

        {/* Show the button only if not showing all members */}
        {!showAll && (
          <div className="flex justify-center mt-8">
            <Link href="/about">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-md">
                Show More
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
