import smallestStar from '../assets/smallest-star.png';
import Button from '../components/Button';

//takes in edge to show the jagged sides either on all or just top/bottom
export default function Bio({ edge = 'all', className = '' }) {
  const edgeClass = edge === 'y' ? 'torn-edge-y px-3 py-3' : 'torn-edge-all p-2 pr-5';
  return (
    <div className={`bg-darkest-green ${edgeClass} flex flex-col gap-2 ${className}`}>
        <h3 className="text-h3 text-gold">Full stack developer who believes both backend 
            code and frontend design deserve to be pretty.</h3>
        <p className="text-body1 text-gold">Based in Akron, Ohio. Currently working at Westfield 
            Insurance with 5 years of experience.</p>
        <div className="flex flex row items-center gap-2 mt-2">
            <img src={smallestStar} alt="" className="max-h-[20px]"/>
            <p className='text-gold text-subtitle2 text-center'>Open to new <br /> opportunities</p>
            <img src={smallestStar} alt="" className="max-h-[20px]"/>
        </div>
        <div className='flex flex-row gap-3 mt-2'>
        <Button className='flex-1 items-center justify-center' href="/KaitlynBoehlkeResume.pdf" variant="solid" target="_blank" rel="noopener noreferrer">
            Resume
        </Button> 
        <Button className='flex-1' variant="outline" href="/projects">
            Things I'm Proud Of →
        </Button>
        </div>
    </div>  
  );
}
