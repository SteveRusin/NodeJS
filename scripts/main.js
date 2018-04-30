const serverDomain = 'http://localhost:8079';
const buildFilesList = require('./modules/buildFilesList.js');
const toJSON = require('./modules/toJSON');
const attachDelete = require('./modules/attachDelete');

$(document).ready(() => {
    fetch(`${serverDomain}/files`)
        .then(toJSON)
        .then(files => buildFilesList($('#list'), files))
        .then(()=>attachDelete($('#list'), serverDomain))
        .catch(err=>buildFilesList($('#list'), [], err))


    $('#upload').change(e => {
        const data = new FormData();
        data.append('file', e.target.files[0])
        fetch(`${serverDomain}/files`, {
                method: 'POST',
                headers: {
                    "Content-Type": "image/*; text/plain"
                },
                body: data
            })
            .then(res => console.log('my response', res))
    });

})
