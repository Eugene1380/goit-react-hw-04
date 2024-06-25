import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ cards, onImageClick }) {
    return (
        <ul className={css.gallery}>
            {cards.map(card => (
                <li key={card.id}>
                    <ImageCard
                        card={card}
                        onImageClick={() =>
                            onImageClick(card.urls.regular, card.alt_description)
                        }
                    />
                </li>
            ))}
        </ul>
    );
}

// onImageClick={onImageClick} 
//назву полів див в unsplash-api.js - console.log('response >> ', response);