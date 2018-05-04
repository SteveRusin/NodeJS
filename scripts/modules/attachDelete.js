module.exports = (serverDomain, $list) => {
    $list.on('click', '.delete', (e)=>{
        const fileName = $(e.currentTarget).closest('.list-group-item').find('.file-name').text();
        fetch(`${serverDomain}/files/${fileName}`, {
            method: 'DELETE'
        })  
        .then(res => {
            if (res.status === 204) {
                const $container = $(e.target).closest('.list-group-item');
                $container.slideUp(400, () => {
                    $container.remove();

                    if (!$list.children().length) {
                        $list.append('<h3 class="alert alert-warning hidden">There are no files yet</h3>');
                        $list.find('h3').slideDown(400);
                    }
                });
            }
        })
    })
}
