import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phoneBookSlice';

import css from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.contactList__item}>
            <p>
              {name}: {number}
            </p>
            <button
              className={css.contactList__button}
              type="button"
              onClick={() => dispatch(deleteContact({ id }))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
