
const SearchForm = ({onSubmit}) => {

    const submitHandler = (event) => {
        event.preventDefault();
        const value = event.target.query.value.trim().toLowerCase();
        if (value === '') return;
        onSubmit(value);
        event.target.query.value = '';
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                className="search-input"
                type="text"
                autoComplete="off"
                name="query"
            />
            <button className="back-btn" type="submit">Search</button>
        </form>
    );
};

export default SearchForm;
