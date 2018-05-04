const serverDomain = 'http://localhost:8079';
const buildFilesList = require('./modules/buildFilesList.js');
const toJSON = require('./modules/toJSON');
const handleError = require('./modules/handleError');
const attachDelete = require('./modules/attachDelete');
const attachPost = require('./modules/attachPost');
const attachGet = require('./modules/attachGet');

$(document).ready(() => {
    fetch(`${serverDomain}/files`)
        .then(toJSON)
        .then(files => buildFilesList($('#list'), files))
        .catch(handleError);

    attachGet(serverDomain, $('#list')); 
    attachPost(serverDomain);
    attachDelete(serverDomain, $('#list'));
})
