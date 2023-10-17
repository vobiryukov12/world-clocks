import './App.scss';
import { FormClocks } from './components/FormClocks';
import { Clocks } from './components/Clocks';
import { useRef, useState } from 'react';
import { IForm, IFormDate } from './models/models';

function App() {
  const [form, setForm] = useState<IForm>({
    city: '',
    offset: ''
  });
  const { city, offset } = form;
  const id = useRef(0);
  const [formDate, setFormDate] = useState<IFormDate[]>([]);

  const clearState = () => {
    setForm({city: '', offset: ''});
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    id.current = id.current + 1;

    const updateFormDate = [...formDate];
    updateFormDate.push({id: id.current, ...form});
    setFormDate(updateFormDate);

    clearState();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const deleteClockItem = (id: number) => {
    const items = formDate.filter(item => item.id !== id);
    setFormDate(items);
  };

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
