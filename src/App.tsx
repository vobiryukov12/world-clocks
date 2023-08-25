import './App.scss';
import { FormClocks } from './components/FormClocks';
import { Clocks } from './components/Clocks';
import { useClocks } from './hooks/clocks';

function App() {
  const { form, handleSubmit, handleChange, formDate, deleteClockItem } = useClocks();
  const { city, offset } = form;

  return (
    <div className='app'>
      <FormClocks 
        handleSubmit={handleSubmit} 
        handleChange={handleChange}
        city={city}
        offset={offset}
      />
      <Clocks formDate={formDate} deleteClockItem={deleteClockItem} />
    </div>
  );
}

export default App;
