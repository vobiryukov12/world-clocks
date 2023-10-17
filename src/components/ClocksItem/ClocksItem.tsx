import { useEffect, useState } from 'react';
import { IFormDate } from '../../models/models';
import moment from 'moment';

interface IClocksItemProps {
  item: IFormDate,
  handleClick: () => void
}

export function ClocksItem({ item, handleClick }: IClocksItemProps) {
  const [date, setDate] = useState(addTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(addTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function addTime(): [number, number, number] {
    const moments = moment().utcOffset(Number(item.offset));
    const h = Number(moments.format('H'));
    const m = Number(moments.format('mm'));
    const s = Number(moments.format('ss'));

    return [h, m, s];
  }

  const [h, m, s] = date;
  const hour = h * 30;
  const minute = m * 6;
  const second = s * 6;

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
