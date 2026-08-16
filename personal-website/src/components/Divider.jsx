import dividerline from '../assets/divider-line.png';
import dividerstars from '../assets/divider-stars.png';
export default function Divider() {
  return (
    <div className="flex flex-row mt-6 px-2 justify-center items-center gap-2">
        <img alt="" className="max-h-[5px] w-full flex-1 min-w-0 object-fill" src={dividerline} />
        <img alt="" className="max-h-[60px] shrink-0" src={dividerstars} />
        <img alt="" className="max-h-[5px] w-full flex-1 min-w-0 object-fill" src={dividerline} />
    </div>
  );
}