module.exports = ($selector, filesArr, err) => {
    if (filesArr.length) {
        $selector.append($.map(filesArr, file => `
        <a href="#" class="list-group-item list-group-item-action">
        <span class="file-name align-middle"><strong>${file}</strong></span>
        <button class="btn btn-danger float-right delete">Delete</button>
        </a>
        `));
    } else if(err) {
        $selector.append('<h3 class="alert alert-danger">Connection error</h3>');
    } else {
        $selector.append('<h3 class="alert alert-warning">There are no files yet</h3>');
    }
}
