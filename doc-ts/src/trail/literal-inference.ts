let method: 'GET' | 'POST';

// let txt = 'GET';
// method = txt as 'GET';


let txt = 'GET' as const;
method = txt;