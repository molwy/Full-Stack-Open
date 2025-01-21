const Filter = ({filterState, updateFilterState}) => {
return (
    <form>
    <div>
        Search:
        <input value={filterState} onChange={updateFilterState}></input>
    </div>
    </form>
    )}

export default Filter