import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";
export const Header = () => {
  return (
    <header className='py-4 border-b border-b-[#2A2A2A] md:border-none sticky top-0 z-10    '>
      <div className='absolute inset-0 backdrop-blur -z-10 md:hidden'></div>
      <div className='container max-w-full mx-auto px-4'>
        <div className='flex justify-between items-center border border-white/15 md:p-2.5 rounded-xl w-90% mx-auto md:backdrop-blur '>
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
            <Button>Register</Button>
            <MenuIcon className='h-8 w-8 md:hidden' />
          </div>
        </div>
      </div>
    </header>
  );
};
