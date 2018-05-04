module.exports = (serverDomain, $list) => {
    $list.on('click', '.download', (e)=>{
        const fileName = $(e.currentTarget).closest('.list-group-item').find('.file-name').text();
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
            },
            xhrFields: {
                responseType: 'blob'
            },
            xhr: function () {
                const xhr = new window.XMLHttpRequest();
                xhr.onprogress = (evt)=>{
                    if (evt.lengthComputable) {
                        const complete = evt.loaded / evt.total;
                        const percentComplete = (complete * 100).toFixed(1)
                        $('.progress').attr('value',  percentComplete);
                        $('progress').css('color',  `hsl(${percentComplete*3.6}, 100%, 50%)`);
                    }
                }
                return xhr;
            }
        });

    })
}
