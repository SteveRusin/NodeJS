module.exports = (serverDomain) => {
    $('#upload').change(e => {
        fetch(`${serverDomain}/files`, {
                method: 'POST',
                headers: {
                    "Content-Type": "image/*; text/plain"
                },
                body: e.target.files[0]
            })
            .then(res => console.log('my response', res))
    });
}
