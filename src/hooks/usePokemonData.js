import axios from 'axios';
import { useQuery } from 'react-query';


export default function usePokemonData() {
    return useQuery('allPokemonData' , async () => {
        const response = await axios.get('/pokemon')
        return response.data
    });
}