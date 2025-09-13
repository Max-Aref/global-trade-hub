import Button from "@/components/Button";
import starsBg from "@/assets/stars.png";
export const Hero = () => {
  return (
    <section
      className='h-[600px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'
      style={{ backgroundImage: `url(${starsBg.src})` }}
    >
      <div className='absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]'></div>

      {/* Planet and rings system */}
      <div className='absolute inset-0'>
        {/* Staring the planet layout */}
        <div className='absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]'></div>
        {/* End of the planet */}

        {/* start of ring 1 */}
        <div className='absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20'>
          {/* first dot */}
          <div className='absolute h-2 w-2 bg-white rounded-full top-1 left-0 -translate-x-1/2 -translate-y-1/2'></div>
          {/* second dot */}
          <div className='absolute h-2 w-2 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
          {/* 3rd object */}
          <div className='absolute h-5 w-5 border border-white rounded-full top-1/4 left-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center'>
            <div className='h-2 w-2 bg-white rounded-full'></div>
          </div>
        </div>
        {/* End of ring 1 */}

        {/* dashed ring start of ring2 */}
        <div className='absolute  h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed'></div>
        {/* End of ring 2 */}

        {/* Third external ring */}
        <div className='absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] opacity-20 rounded-full border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          {/* first dot */}
          <div className='absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2'></div>
          {/* second dot */}
          <div className='absolute h-2 w-2 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2'></div>
        </div>
        {/* End of external ring- Ring 3 */}
      </div>
      <div className='container text-center relative mt-16'>
        <h1 className='text-8xl md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center'>
          GLOBAL TRADE HUB
        </h1>
        <p className='text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto '>
          Export to America and tap into the world’s largest market. Start
          growing your business globally today!
        </p>
        {/* button section */}
        <div className=' inline-flex gap-4 items-center justify-center mt-10'>
          <Button>Learn More</Button>{" "}
          <p className='text-lg text-white/70'>It&rsquo; s Free!</p>
        </div>
      </div>
    </section>
  );
};
