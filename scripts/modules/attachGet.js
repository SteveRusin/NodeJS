module.exports = (serverDomain, $list) => {
    $list.on('click', '.download', (e)=>{
        const $download = $(e.currentTarget);
        const fileName = $download.closest('.list-group-item').find('.file-name strong').text();
        const $progress = $download.closest('.row').find('.progress-file');
         $.ajax({
            type: "GET",
            url: `${serverDomain}/files/${fileName}`,
            processData: false,
            success: (data, textStatus, xhr) => {
                if(xhr.status===200){
                    const a = document.createElement('a');
                    const url = window.URL.createObjectURL(data);
                    a.href = url;
                    a.download = fileName;
                    a.click();
                    window.URL.revokeObjectURL(url);
                }
                $download.prop('disabled', false);
            },
            xhrFields: {
                responseType: 'blob'
            },
            xhr: function () {
                const xhr = new window.XMLHttpRequest();
                $progress.show(0);
                $download.prop('disabled', true);
                xhr.onprogress = (evt)=>{
                    if (evt.lengthComputable) {
                        const complete = evt.loaded / evt.total;
                        const percentComplete = (complete * 100).toFixed(1)
                        $progress.attr('value',  percentComplete);
                        $progress.css('color',  `hsl(${percentComplete*3.6}, 100%, 50%)`);
                    }
                }

                xhr.onloadend = (evt) => {
                    $progress.attr('value',  100);
                    setTimeout(()=>{
                        $progress.fadeOut(1000, ()=>{
                            $progress.hide(0);
                            $progress.attr('value',  0);
                        })
                    }, 1000)
                }
                return xhr;
            }
        });

    })
}
