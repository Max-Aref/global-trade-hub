import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
export const Header = () => {
  return (
    <header className='py-4 border-b border-b-[#2A2A2A] md:border-none'>
      <div className='container max-w-full mx-auto px-4'>
        <div className='flex justify-between items-center border border-white/15 md:p-2.5 rounded-xl w-90% mx-auto '>
          <div>
            <div className='border h-10 w-10 rounded-lg inline-flex justify-center  border-[#2A2A2A] p-2 items-center'>
              <LogoIcon className='h-8 w-8' />
            </div>
          </div>
          {/* navigation menu */}
          <div>
            <nav className=' gap-8 text-lg font-medium hidden md:flex'>
              <a href='#' className='text-white/70 hover:text-white transition'>
                Mission
              </a>
              <a href='#' className='text-white/70 hover:text-white transition'>
                Features
              </a>
              <a href='#' className='text-white/70 hover:text-white transition'>
                Blog
              </a>
              <a href='#' className='text-white/70 hover:text-white transition'>
                policies
              </a>
            </nav>
          </div>
          <div className='flex items-center gap-4'>
            <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]'>
              <div className='absolute inset-0'>
                <div className=' rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                <div className=' rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
                <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>
              </div>
              <span>Add your company</span>
            </button>
            <MenuIcon className='h-8 w-8 md:hidden' />
          </div>
        </div>
      </div>
    </header>
  );
};
