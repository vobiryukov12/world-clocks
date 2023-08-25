import { useClocksItem } from '../../hooks/clocksItem';
import { IFormDate } from '../../models/models';

interface IClocksItemProps {
  item: IFormDate,
  handleClick: () => void
}

export function ClocksItem({ item, handleClick }: IClocksItemProps) {
  const { hour, minute, second } = useClocksItem(item);

  return (
    <div className="clocks__item">
      <div className='clocks__city'>{item.city}</div>
      <button className='clocks__close' type='button' onClick={handleClick}>X</button> 

      <div className="clock">
        <div className="wrap">
          <span className="hour" style={{transform:`rotate(${hour}deg)`}}></span>
          <span className="minute" style={{transform:`rotate(${minute}deg)`}}></span>
          <span className="second" style={{transform:`rotate(${second}deg)`}}></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
}
