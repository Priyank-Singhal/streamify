import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { useParams } from 'react-router-dom';
import SearchVideoCard from './SearchVideoCard';

const SearchResults = () => {
    const query = useParams();
    console.log("query",query)
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        getSearchResults();
    }, [])

    const getSearchResults = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + '&q=' + query.Query);
        const json = await data.json();
        setSearchResults(json.items);
    }
    return (
        <div className='flex flex-col content-center flex-wrap'>
            {/* {searchResults[0] &&
                // <h1>{console.log(searchResults[0])}</h1>
                <SearchVideoCard className='' info={searchResults[0]} />} */}
            {searchResults && searchResults.map(video => <SearchVideoCard info={video} />)}
        </div>
    )
}

export default SearchResults