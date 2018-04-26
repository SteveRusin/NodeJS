const serverDomain = 'http://localhost:8079';
const buildFilesList = require('./modules/buildFilesList.js');
const toJSON = require('./modules/toJSON');

$(document).ready(() => {
    fetch(`${serverDomain}/files`)
        .then(toJSON)
        .then(files => buildFilesList($('#list'), files))






})
