const URL_BACKEND = window.location.hostname.includes('localhost')
? 'http://localhost:8081'
: 'https://aulasflix.herokuapp.com';

export default {
    URL_BACKEND,
};