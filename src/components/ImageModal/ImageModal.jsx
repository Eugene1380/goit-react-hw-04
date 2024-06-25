// import style from './GridItem.module.css';

// export const GridItem = ({ children }) => {
//   return <li className={style.item}>{children}</li>;
// };

import Modal from 'react-modal';
import css from './ImageModal.module.css';

export default function ImageModal({isOpen, onClose, url, description}) {
    return (
            <Modal
                className={css.modal}
                isOpen={isOpen}
                overlayClassName={css.overlayModal}
                ariaHideApp={false}
                onRequestClose={onClose}
                shouldCloseOnEsc={true}
            >
                <img className={css.imgModal} src={url} alt={description} />          
            </Modal>
  );
}