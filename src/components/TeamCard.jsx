import Aos from "aos";
import { useEffect } from "react";

const TeamCard = () => {
  const teamMembers = [
    
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="mx-5 my-10">
      <h1 className="px-5 text-3xl leading-10 text-center block font-kanit md:text-4xl">
        Meet your
        <span className="font-kanit text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text mx-1">
          premier advisors
        </span>
        , the
        <span className="font-kanit text-transparent bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text mx-1">
          leading experts
        </span>
      </h1>
      <div className="grid grid-cols-1 gap-4 p-3 px-0 my-16 md:p-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {teamMembers.map((member, index) => {
          return (
            <div
              key={index}
              className="max-w-md rounded-md mx-auto cursor-pointer px-4 border-[1px] border-gray-200 hover:shadow-md ease-in-out duration-300"
            >
              <div className="space-y-2.5 my-3 text-center">
                <div className="text-xl text-transparent font-kanit md:text-2xl bg-gradient-to-l from-[#4a7999] via-[#5b99c3] to-[#4c8db8] bg-clip-text">
                  {member.name}
                </div>
                <p className="font-kanit text-[#4a7999]">{member.position}</p>
              </div>
              <div className="my-3">
                <p className="text-[#8ca1b3] leading-8">{member.bio}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamCard;
