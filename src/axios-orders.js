import axios from 'axios';

const instnace = axios.create({
    baseURL: 'https://react-my-burger-a9022.firebaseio.com/',
});

export default instnace;