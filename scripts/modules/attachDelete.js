module.exports = (serverDomain, $list) => {
    $list.on('click', '.delete', (e)=>{
        const fileId = $(e.currentTarget).closest('.list-group-item').data('id');
        const fileName = $(e.currentTarget).closest('.list-group-item').find('file-name strong').text();
        fetch(`${serverDomain}/files/${fileName}`, {
            method: 'DELETE',
            headers: {
                'x-fileid': fileId 
            }
        })  
        .then(res => {
            if (res.status === 204) {
                const $container = $(e.target).closest('.row');
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
