import smallestStar from '../assets/smallest-star.png';
import Button from '../components/Button';

export default function Bio() {
  return (
    <div className='bg-darkest-green torn-edge p-2 flex flex-col pr-5 gap-2'>
        <h3 className="text-h3 text-gold">Full stack developer who believes both backend 
            code and frontend design deserve to be pretty.</h3>
        <p className="text-body1 text-gold">Based in Akron, Ohio. Currently working at Westfield 
            Insurance with 5 years of experience.</p>
        <div className="flex flex row items-center gap-2 mt-2">
            <img src={smallestStar} alt="" className="max-h-[20px]"/>
            <p className='text-gold text-subtitle2 w-[120px] text-center'>Open to new opportunities</p>
            <img src={smallestStar} alt="" className="max-h-[20px]"/>
        </div>
        <div className='flex flex-row gap-2 mt-2'>
        <Button className='flex-1' href="/KaitlynBoehlkeResume.pdf" variant="solid" target="_blank" rel="noopener noreferrer">
            Resume →
        </Button> 
        {/* todo: make this a contact page not just an email link            */}
        <Button className='flex-1' href="mailto:katienicole404@gmail.com" variant="outline">
            Contact Me</Button>
        </div>
    </div>  
  );
}
