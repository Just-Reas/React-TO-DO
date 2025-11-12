import AddField from "../field/AddField"

const SearchField = (props) => {
    const{
        searchQuery,
        setSearchQuery,
    } = props
    return(
        <AddField
        className="todo-form__searchtask"
        label="Search task"
        id="search__task"
        type="search"
        onSearchInput
        value={searchQuery}
        onInput ={(event) => setSearchQuery(event.target.value)}
        onChange={(event) => event.preventDefault()}
        />
    )
}

export default SearchField