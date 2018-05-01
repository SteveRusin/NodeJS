module.exports = (serverDomain) => {
    $('#upload').change(e => {
        const file = e.target.files[0]
        fetch(`${serverDomain}/files/${file.name}`, {
                method: 'POST',
                body: file
            })
            .then(res => location.reload())
    });



}
