import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
    return (
        <div>
            <p className={css.error}>
                Error HTTP-query. Reload the page, please!
            </p>
        </div>
    )
}