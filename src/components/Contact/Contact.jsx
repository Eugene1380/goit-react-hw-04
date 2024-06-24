import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

export default function Contact({ data, onDelete }) {
  return (
    <div className={css.user}>
        <div className={css.info}>
            <p>
                <FaUser />
                {data.name}
            </p>
            <p>
                <FaPhoneAlt />
                {data.number}
            </p>
        </div>
        <button className={css.btn_delete}
              onClick={() => { onDelete(data.id); }}>
              Delete
        </button>
    </div>
  );
}