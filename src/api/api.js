import axios from 'axios';


export async function getImagesFromApi(urlOptions) {
    const response = await axios.get(urlOptions);
    return response.data;
}
