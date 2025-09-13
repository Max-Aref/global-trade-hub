import React from "react";
import Button from "@/components/Button";

export const ManufacturersShowcase = () => {
  const categories = [
    {
      title: "Textiles & Apparel",
      description:
        "From fine cotton to modern fashion, showcase the quality of Egyptian textiles.",
    },
    {
      title: "Furniture & Home Goods",
      description:
        "Bring the artistry of Egyptian design to homes across the U.S.",
    },
    {
      title: "Handicrafts & Artisanal Goods",
      description:
        "Share the rich heritage and unique stories behind your handmade products.",
    },
    {
      title: "Food & Beverages",
      description:
        "Introduce the flavors of Egypt, from traditional spices to innovative food products.",
    },
  ];

  return (
    <section
      id='gth-manufacturers-showcase'
      className='py-20 md:py-28 relative overflow-hidden'
    >
      {/* Background decorative element */}
      <div className='absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none'>
        <div className='absolute top-0 right-0 w-2/3 h-2/3 bg-[#4a208a]/10 rounded-bl-[200px] transform -rotate-12'></div>
      </div>

      <div className='container mx-auto px-4 relative'>
        {/* Header section */}
        <div className='max-w-4xl mx-auto mb-16 md:mb-20'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-6'>
            Built for Egyptian Manufacturers & Producers
          </h2>
          <p className='text-xl text-white/70 leading-relaxed mb-8'>
            Navigating the U.S. market can be complex, but with our platform,
            Egyptian manufacturers and producers can build their business with
            confidence.
          </p>
          <p className='text-xl mb-6'>
            Your craftsmanship deserves a global stage. Our platform is designed
            to connect you directly with U.S. buyers, whether you specialize in:
          </p>
        </div>

        {/* Categories grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 mb-16'>
          {categories.map((category, index) => (
            <div
              key={index}
              className='group border border-white/15 rounded-xl p-6 hover:border-white/30 transition-all duration-300 bg-gradient-to-tr from-[#190d2e] to-transparent'
            >
              <div className='flex gap-4 items-start mb-4'>
                <div className='h-14 w-14 shrink-0 border border-white/15 rounded-lg inline-flex items-center justify-center bg-[#190d2e] overflow-hidden group-hover:border-white/30 transition-all'>
                  {/* <!-- IMAGE: Category icon, 1:1 ratio --> */}
                  <div className='h-8 w-8 bg-[#8c45ff]/50 rounded-full'></div>
                </div>
                <h3 className='text-2xl font-medium'>{category.title}</h3>
              </div>
              <p className='text-white/70 pl-[4.5rem]'>
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing statement and CTA */}
        <div className='max-w-3xl mx-auto text-center'>
          <p className='text-xl font-medium mb-8 leading-relaxed'>
            Forget the hassle of expensive trade shows and the reliance on
            third-party agents. We provide a direct, streamlined path to sales,
            empowering you to control your brand and your bottom line.
          </p>
          <div className='mt-10'>
            <Button>Get Started Today</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturersShowcase;
