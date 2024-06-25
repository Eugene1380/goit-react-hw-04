import css from './SearchBar.module.css'
import toast, { Toaster } from 'react-hot-toast'; 
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar({ onSearch }) {
    const handleSubmit = event => {
        event.preventDefault();
        const query = event.target.elements.searchImage.value;
        query.trim() === '' ? toast.error('Error! Field can not be empty!') : onSearch(query);
        //query.trim() === '' ? 'Error! Field can not be empty!' : onSearch(query);
        event.target.reset();
    };
    
    return (
        <header className={css.header}>
            <Toaster position="top-left" />
            <form  onSubmit={handleSubmit}>
                <input className={css.searchInput}
                    name="searchImage"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                {/* <button type="submit">Search</button> */}
            <button className={css.searchBtn} type="submit">
                <IoSearchOutline className={css.searchIcon} />
            </button>

            </form>
        </header>
    );
}
