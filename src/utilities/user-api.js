import sendRequest from './send-request';

const BASE_URL = '/api/users/';

export function signup(userData) {
	return sendRequest(BASE_URL, 'POST', userData);
}
