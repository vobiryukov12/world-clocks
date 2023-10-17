import './formClocks.scss';

interface IFormClocksProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  city: string,
  offset: string
}

export function FormClocks({ handleSubmit, handleChange, city,  offset}: IFormClocksProps) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__field">
        <label className="form__label" htmlFor="city">Название</label>
        <input 
          className="form__input" 
          id="city" 
          type="text" 
          name="city"
          placeholder="Название"
          value={city} 
          onChange={handleChange}
          required={true} 
        />
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="offset">Временная зона</label>
        <input 
          className="form__input" 
          id="offset"
          name="offset" 
          type="number" 
          placeholder="Временная зона"
          value={offset}
          onChange={handleChange}
          required={true}
        />
      </div>
      
      <button className="form__button" type="submit">Добавить</button>
    </form>
  );
}
