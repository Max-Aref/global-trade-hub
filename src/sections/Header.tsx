import { LiaGlobeAmericasSolid } from "react-icons/lia";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";
import Link from "next/link";
export const Header = () => {
  return (
    <header className='py-4 border-b border-b-[#2A2A2A] md:border-none sticky top-0 z-50  '>
      <div className='absolute inset-0 backdrop-blur -z-10 md:hidden'></div>
      <div className='container max-w-full mx-auto px-4'>
        <div className='flex justify-between items-center border border-white/15 md:p-2.5 rounded-xl w-90% mx-auto md:backdrop-blur '>
          <div>
            <Link
              href='/'
              className='border h-12 w-12 rounded-lg inline-flex justify-center border-[#2A2A2A] hover:border-[#8c45ff]/40 transition-colors duration-300 p-2 items-center'
            >
              <LiaGlobeAmericasSolid className='h-10 w-10 text-[#8c45ff]' />
            </Link>
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
            <Link
              href='/auth'
              className='text-white/70 hover:text-white transition'
            >
              <Button>Register</Button>
            </Link>

            <MenuIcon className='h-8 w-8 md:hidden' />
          </div>
        </div>
      </div>
    </header>
  );
};
