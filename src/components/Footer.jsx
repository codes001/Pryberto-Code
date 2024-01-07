import LOGOWHITE from '../assets/prybertocode-white.png'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { FaArrowCircleRight } from 'react-icons/fa'
import Button from './Button'

const Footer = () => {
   
const route = '/about'
  return (
    <footer className='w-full py-12 bg-[--blue] text-white'>
      <div className='px-10 grid-cols-1 w-full lg:max-w-[95%]  grid mx-auto  gap-5'>

        <div>
          <Link to='/'>
            <img src={LOGOWHITE} className='scale-1' alt="" />
          </Link>
          <p>We are poised to create value for our corporate clients through excellent IT service delivery to enhance personnel productivity and efficiency. From fully outsourced IT services to single-service packages like helpdesk support, IT procurement, or Infrastructure deployment, our experts have what you need. We partner with top-class original equipment manufacturers to bring you the best value for your money.</p>
        </div>
        <ul className="flex flex-col gap-2">
          <strong>OTHERS LINKS</strong>
          <li className='flex items-center transition-all duration-700 hover:translate-x-4'>
          <FaArrowCircleRight className='mr-2' />
            <Link to='/solutions'> Our Solutions</Link>
          </li>
          <li className='flex items-center transition-all duration-700 hover:translate-x-4'>
          <FaArrowCircleRight className='mr-2' />
            <Link to='/about'> About us </Link>
          </li>
          <li className='flex items-center transition-all duration-700 hover:translate-x-4'> <FaArrowCircleRight className='mr-2' />
            <Link to='/careers'>Careers </Link>
          </li>
          <li className='flex items-center transition-all duration-700 hover:translate-x-4'>
          <FaArrowCircleRight className='mr-2' />
            <Link to='/contact'>Contact </Link>
          </li>
        </ul>

        {/* SOCIALS */}
        <div className="flex flex-col gap-6">
          <h2>Connect with us</h2>
          <div className="flex gap-6">
            <FaFacebook className=' scale-125' />
            <FaInstagram className=' scale-125' />
            <IoLogoTwitter className=' scale-125' />
          </div>

         <Button text='Subscribe to Updates' route={route} />
        </div>
      </div>


      <div className="text-center mt-8">
        <p>&copy; 2023 Pryberto Code |  ...The future is here.</p>
      </div>
    </footer>)
}

export default Footer