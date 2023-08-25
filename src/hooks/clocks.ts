import { useState, useRef } from "react";
import { IForm, IFormDate } from "../models/models";

export function useClocks() {
  const [form, setForm] = useState<IForm>({
    city: '',
    offset: ''
  });
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

  return { form, handleSubmit, handleChange, formDate, deleteClockItem };
}
