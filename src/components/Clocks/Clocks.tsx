import './clocks.scss';
import { ClocksItem } from '../ClocksItem';
import { IFormDate } from '../../models/models';

interface IClocksProps {
  formDate: IFormDate[]
  deleteClockItem: (id: number) => void; 
}

export function Clocks(props: IClocksProps) {
  const { deleteClockItem, formDate } = props;

  return (
    <div className='clocks'>
      { formDate.map(item => <ClocksItem key={item.id} item={item} handleClick={() => deleteClockItem(item.id)} />) }
    </div>
  );
}
