module.exports = (serverDomain, $list) => {
    $list.on('click', '.watch', (e)=>{
        const $watch = $(e.currentTarget);
        const $audioPlayer = $('#audioPlayer');
        const $videoPlayer = $('#videoPlayer');
        const fileName = $watch.closest('.list-group-item').find('.file-name strong').text();
        const src = serverDomain + '/files/' + fileName;

        $('#modal').modal({
            fadeDuration: 100
        });
        $videoPlayer.removeClass('hidden');
        $audioPlayer.addClass('hidden');
        $videoPlayer.attr('src', src);
    })
}
