import { useState, useEffect } from "react";
import moment from 'moment';
import { IFormDate } from "../models/models";

export function useClocksItem(item: IFormDate) {
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

  return { hour, minute, second };
}
