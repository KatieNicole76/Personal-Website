import photo from '../assets/photo.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import email from '../assets/email.png';
import Bio from './Bio';
import star4 from '../assets/star-4.png';


function IntroText() {
  return (
    <div className="flex flex-col leading-none md:justify-right">
      <h1 className="text-h1 text-gold">Hi, I'm<br />Katie</h1>
      <p className="text-h3 text-gold mt-2">Software Engineer</p>
      <div className='flex flex-row gap-2 mt-1 flex-wrap'>
      <a href="https://linkedin.com/in/katiekaiser17" aria-label="LinkedIn">
          <img src={linkedin} alt="" className="max-h-[18px]" />
      </a>
      <a href="https://github.com/KatieNicole76" aria-label="Github">
          <img src={github} alt="" className="max-h-[19px]" />
      </a>
      <a href="mailto:katienicole404@gmail.com" aria-label="Email">
          <img src={email} alt="" className="max-h-[21px]" />
      </a>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <div className="relative flex flex-col mt-4 ml-1
          md:static md:flex-row md:items-start md:ml-5 md:mr-1 md:justify-center">
        <div className="absolute top-0 mt-2 md:static md:flex md:flex-col md:w-[45%]">
          <IntroText />
          <Bio edge="all" className="hidden mt-6 md:flex" />
        </div>
        <img
          src={photo}
          alt="Profile Picture"
            className="w-[clamp(220px,70vw,550px)]  h-auto ml-auto mt-4
             md:ml-2 md:mr-2"
        />
      </div>
      <Bio edge="y" className="md:hidden mt-4" />
    </>
  );
}
