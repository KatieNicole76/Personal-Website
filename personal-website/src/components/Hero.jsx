import photo from '../assets/photo.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import email from '../assets/email.png';

export default function Hero() {
  return (
    <div className='relative ml-1'>
        <div className="flex flex-col leading-none absolute top mt-2">
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
        <img src={photo} alt="Profile Picture" className="w-[70vw] max-w-[412px] h-auto ml-auto mt-4"/>
    </div>
  );
}
