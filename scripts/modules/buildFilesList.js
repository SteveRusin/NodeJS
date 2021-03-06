module.exports = ($selector, filesArr) => {
    if (filesArr.length) {
        $selector.append($.map(filesArr, file => `
        <div class="row">
            <a href="#" data-id="${file._id}" class="list-group-item list-group-item-action">
            <div style="display: inline-block">
                    <div class="file-name align-middle">Name:<strong>${file.filename}</strong></div>
                    <div class="file-size align-middle">Size:<strong>${(file.length/1000000).toFixed(1)} Mb</strong></div>
            </div>
                <div class="float-right">
                ${(file.contentType === 'video/mkv' ||
                   file.contentType === 'video/avi')
                ? `<button class="btn btn-success watch">Watch</button>`
                : ''}
                ${file.contentType === 'audio/mp3'
                ? `<button class="btn btn-dark music">Play</button>`
                : ''}
                    <button class="btn btn-primary download">Download</button>
                    <button class="btn btn-danger delete">Delete</button>
                </div>
            </a>
            <progress class="progress progress-file hidden" value="0" max="100"></progress>
        </div>
        `));
    } else {
        $selector.append('<h3 class="alert alert-warning">There are no files yet</h3>');
    }
}
