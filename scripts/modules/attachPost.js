module.exports = (serverDomain) => {
    $('#upload').change(e => {
        const file = e.target.files[0]
        if (!file) return;
        $.ajax({
            type: "POST",
            url: `${serverDomain}/files/${file.name}`,
            data: file,
            success: (data, textStatus, xhr) => {
                if (xhr.status === 200) {
                    location.reload()
                }
            },
            processData: false,
            contentType: 'audio/mp3',
            xhr: function () {
                const xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        const percentComplete = evt.loaded / evt.total;
                        $('.progress').attr('value', percentComplete * 100);

                        if(percentComplete === 1) {
                            $('.progress').attr('value', 0);
                        }
                    }
                }, false);
                xhr.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        const percentComplete = evt.loaded / evt.total;
                        $('.progress').attr('value', percentComplete * 100);
                    }
                }, false);
                return xhr;
            }
        });

    });



}
