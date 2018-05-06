module.exports = (serverDomain, $list) => {
    $list.on('click', '.music', (e)=>{
        const $watch = $(e.currentTarget);
        const $audioPlayer = $('#audioPlayer');
        const $videoPlayer = $('#videoPlayer');
        const fileName = $watch.closest('.list-group-item').find('.file-name strong').text();
        const src = serverDomain + '/files/' + fileName;

        $('#modal').modal({
            fadeDuration: 100
        });
        $audioPlayer.removeClass('hidden');
        $videoPlayer.addClass('hidden');
        $audioPlayer.attr('src', src);
    })
}
