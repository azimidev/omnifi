import axios from 'axios';

export default axios.create({
	baseURL: 'https://s3-eu-west-1.amazonaws.com/',
});
