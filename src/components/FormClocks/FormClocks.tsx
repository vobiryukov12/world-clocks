import './formClocks.scss';

export function FormClocks({ handleSubmit, handleChange, city,  offset}) {
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
        />
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="offset">Временная зона</label>
        <input 
          className="form__input" 
          id="offset"
          name="offset" 
          type="text" 
          placeholder="Временная зона"
          value={offset}
          onChange={handleChange}
        />
      </div>
      
      <button className="form__button" type="submit">Добавить</button>
    </form>
  );
}
