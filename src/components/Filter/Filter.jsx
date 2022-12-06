import Proptypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ onChange }) => {
  return (
    <label>
      Filter contacts by name
      <input className={css.input} type="text" onChange={onChange} />
    </label>
  );
};

Filter.prototype = {
  onChange: Proptypes.func.isRequired,
};
