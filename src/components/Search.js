import React from "react";

function Search({handleSearch, searchTerm}) {

  function handleChange(event){
    handleSearch(event.target.value)
  }


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange} value={searchTerm}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
