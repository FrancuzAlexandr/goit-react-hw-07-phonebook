// import Proptypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.list__item}>
            <p>
              {name}: {number}
            </p>
            <button
              className={css.list__button}
              type="button"
              onClick={e => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: Proptypes.arrayOf(
//     Proptypes.shape({
//       id: Proptypes.string.isRequired,
//       name: Proptypes.string.isRequired,
//       number: Proptypes.string.isRequired,
//     })
//   ).isRequired,
//   deleteContact: Proptypes.func.isRequired,
// };
