module.exports = (serverDomain) => {
    $('#upload').change(e => {
        const file = e.target.files[0];
        const $progress = $('.post-progress');
        if (!file) return;
        // AJAX
         $.ajax({
            type: "POST",
            url: `${serverDomain}/files/${file.name}`,
            data: file,
            headers: {
                'x-filename': file.name
            },
            success: (data, textStatus, xhr) => {
                if (xhr.status === 200) {
                    setTimeout(()=>{
                        location.reload()
                    }, 500)
                }
            },
            processData: false,
            xhr: function () {
                const xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        const complete = evt.loaded / evt.total;
                        const percentComplete = (complete * 100).toFixed(1)
                        $progress.attr('value',  percentComplete);
                        $progress.css('color',  `hsl(${percentComplete*3.6}, 100%, 50%)`);
                    }
                }, false);
                xhr.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        const percentComplete = evt.loaded / evt.total;
                        $progress.attr('value', percentComplete);
                        $progress.css('color',  `hsl(${percentComplete*3.6}, 100%, 50%)`);
                    }
                }, false);
                return xhr;
            }
        });

    });

    // Fetch but for big file doesn't show propper percentage

    /*             const fileSize = file.size;
            fetch(`${serverDomain}/files/${file.name}`, {
                    method: 'POST',
                    body: file,
    
                })
                .then(response => {
                    // response.body is a readable stream.
                    // Calling getReader() gives us exclusive access to
                    // the stream's content
                    const reader = response.body.getReader();
                    let bytesReceived = 0;
    
                    // read() returns a promise that resolves
                    // when a value has been received
                    return reader.read().then(function processResult(result) {
                        // Result objects contain two properties:
                        // done  - true if the stream has already given
                        //         you all its data.
                        // value - some data. Always undefined when
                        //         done is true.
                        if (result.done) {
                            return response;
                        }
                        // result.value for fetch streams is a Uint8Array
                        bytesReceived += result.value.length;
                        console.log(result)
                        const progress = fileSize / bytesReceived * 100;
                        $('.progress').attr('value', progress);
                        // Read some more, and call this function again
                        return reader.read().then(processResult);
                    });
                }).then(res => {
                    if(res.status===200){
                        setTimeout(()=>{
                            location.reload();
                        }, 500)
                    }
                })  */



}
