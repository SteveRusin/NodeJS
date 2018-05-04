module.exports = ($selector, filesArr) => {
    if (filesArr.length) {
        $selector.append($.map(filesArr, file => `
        <a href="#" class="list-group-item list-group-item-action">
        <span class="file-name align-middle"><strong>${file}</strong></span>
        <div class="float-right">
        <button class="btn btn-primary download">Download</button>
        <button class="btn btn-danger delete">Delete</button>
        </div>
        </a>
        `));
    } else {
        $selector.append('<h3 class="alert alert-warning">There are no files yet</h3>');
    }
}
