import Mercury from '@postlight/mercury-parser';

var url = 'https://www.6park.com/gb.shtml';
Mercury.parse(url).then(result => console.log(result));

