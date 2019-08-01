import React  from 'react';

const Search = ({keywords}) =>  {

        return(

            <div className="form-group has-search  search">
                <span className="fa fa-search form-control-feedback"></span>
                <input type="text" className="form-control" placeholder="Search" onChange={ keywords }/>
            </div>

        )

    }

export default Search;