/**
 * Search - component for search
 * @param placeholder
 * @param onSearchChange
 * @returns JSX for Search input
 */
export function Search ({placeholder, onSearchChange}) {
    return (
        <input
            type="text"
            onChange={({target}) => onSearchChange(target.value)}
            placeholder={placeholder ? placeholder : "Search"}
        ></input>
    );
}
