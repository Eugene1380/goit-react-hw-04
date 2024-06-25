import { useState, useRef, useEffect } from 'react';
import css from './App.module.css';

import getImages from '../unsplash-api';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const modalInitialParams = {
  isOpen: false,
  url: '',
  description: '',
};

export default function App() {
    const [searchImage, setSearchImage] = useState('');
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);
    const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
    const [modalParams, setModalParams] = useState(modalInitialParams);

    const appRef = useRef();

    useEffect(() => {
        if (searchImage === '') {
            return;
        }
    
        async function getData() {
            try {
                setIsLoading(true);
                setIsError(false);
                const { results, total_pages } = await getImages(searchImage, page);
                setImages(prevImages => {
                return [...prevImages, ...results];
                });
                setShowLoadMoreBtn(total_pages && total_pages !== page);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        getData();
    }, [searchImage, page]
    );
          
    const handleSearch = newImage => {
        setSearchImage(newImage);
        setPage(1);
        setImages([]);
    };
    
    const handleLoadMoreClick = () => {
        setPage(page + 1);
    };

    const handleImageClick = (url, description) => {
        setModalParams({ isOpen: true, url, description });
    };

    const handleModalClose = () => {
        setModalParams(modalInitialParams);
  };

    useEffect(() => {
        if (page === 1) return;

    appRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, [images, page]);

    return (
        <div ref={appRef}>
            <h1 className={css.title}>Search Image Service</h1>
            <SearchBar onSearch={handleSearch} />

            {isError && <ErrorMessage />}
            
            {images.length > 0 && (
                <ImageGallery cards={images} onImageClick={handleImageClick} />
            )}

            {images.length > 0 && !isLoading && showLoadMoreBtn && (
                <LoadMoreBtn onClick={handleLoadMoreClick} />
            )}
            
            {isLoading && <Loader />}
                {modalParams && (
                    <ImageModal
                        url={modalParams.url}
                        description={modalParams.description}
                        isOpen={modalParams.isOpen}
                        onClose={handleModalClose}
                    />
                )}
        </div>
    );
}