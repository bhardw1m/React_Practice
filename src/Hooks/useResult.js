import {useState, useEffect} from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errMessage, seterrMessage] = useState('');
    const searchApi = async (searchTerm) => {
       
        try {
            seterrMessage('')
            //console.log({errMessage})
            const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }

        });
        
       
        setResults(response.data.businesses);
            } catch (err) {
                seterrMessage('Something went wron')
                {results.length = 0}
        } 

     }
    
    useEffect (() => {
        searchApi('pasta')
      }, [])

      return [searchApi, results, errMessage];
}