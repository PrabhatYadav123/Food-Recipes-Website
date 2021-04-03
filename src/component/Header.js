import React from 'react'

const Header = (props) => {
    const {search,onInputChange,onSearchClick}=props;
    return (
        <div className="bg-light p-4">

            <h1> Food Recipes App</h1>
            <div className="input-group mb-3 w-25 mx-auto">
                <input type="text" class="form-control" placeholder="Search Your Recipes" value={search} onChange={onInputChange}/>
                <button className="btn btn-dark" onClick={onSearchClick}>Search</button>
            </div>


        </div>
    )
}

export default Header;
