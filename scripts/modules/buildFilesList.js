module.exports = ($selector, filesArr) => {
    if (filesArr.length) {
        $selector.append($.map(filesArr, file => `
        <li class="list-group-item">
        <span class="file-name align-middle"><strong>${file}</strong></span>
        <button class="btn btn-danger float-right delete">Delete</button>
        </li>
        `));
    } else {
        $selector.append('<h3 class="alert alert-warning">There are no filess yet</h3>');
    }
}
