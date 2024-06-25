import css from './ImageCard.module.css'

export default function ImageCard({ card, onImageClick }) {
    return (
        <div className={css.divCard}>
            <img className={css.imgCard}
                src={card.urls.small}
                alt={card.alt_description}
                onClick={onImageClick}
            />
            <ul className={css.descriptionUl}>
                <li>
                    <p>Photo by {card.user.name}</p>
                </li>
                <li>
                    <p>Likes: { }card.likes</p>
                </li>
            </ul>
        </div>
    );
}

/* ТЗ onImageClick
<div>
  <img src="" alt="" />
</div> */


// import style from './GridItem.module.css';

// export const GridItem = ({ children }) => {
//   return <li className={style.item}>{children}</li>;
// };