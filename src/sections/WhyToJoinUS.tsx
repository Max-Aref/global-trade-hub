import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import global from "@/assets/global.gif";
import noCost from "@/assets/noCost.gif";
import Image from "next/image";

const Why = [
  {
    text: " Reach verified importers, retailers, and distributors actively sourcing international products.",

    title: "Direct Access to U.S. Buyers",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: global,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: noCost,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const WhyToJoinUS = () => {
  return (
    <section className='py-20'>
      <div className='container '>
        <h2 className='text-5xl text-center tracking-tighter front-medium'>
          Why Exporters and manufactures should Join our platform
        </h2>
        <h3 className='text-3xl md:text-4xl text-center mt-5 tracking-tight text-[#8c44ff]'>
          {" "}
          We Are Unlocking the World’s Most Profitable Market Without the Usual
          Barriers
        </h3>
        <p className='text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight'>
          Our Revolutionary AI tools will transform your Exporting journey to
          Breeze from products listing, buyers market analytics and helping you
          to find a product market fit and a lot more than that.
        </p>
        <div className='overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)] '>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 '>
            {Why.map((why) => (
              <div
                key={why.name}
                className='min-w-[300px] min-h-[338px] p-10 px-5 bg-white/5 rounded-2xl border border-gray-200/30'
                style={{
                  background:
                    "linear-gradient(to bottom left, rgba(140, 69, 255, 0.3), black)",
                }}
              >
                <div className='text-lg  tracking-tight md:text-2xl'>
                  <div className='flex flex-col items-center gap-3'>
                    <div className="relative after:content-[''] after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:absolute  before:border before:border-white/30 before:z-10 before:rounded-lg">
                      {" "}
                      <Image
                        src={why.avatarImg}
                        alt={`Avatar for ${why.name}`}
                        className='h-14 w-14 rounded-lg grayscale'
                      />
                    </div>

                    <div>
                      <div className='text-3xl font-bold'>{why.title}</div>
                    </div>
                  </div>
                  <div className='text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5'>
                    {why.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
