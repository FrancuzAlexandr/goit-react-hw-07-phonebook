import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);

  const onChange = e => {
    const item = e.target.value.trim().toLocaleLowerCase();
    dispatch(updateFilter(item));
  };

  return (
    <>
      Find contacts by name:
      <label className={css.container}>
        <input
          className={css.filter__input}
          type="text"
          onChange={onChange}
          value={filter}
        ></input>
      </label>
    </>
  );
};
