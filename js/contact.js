$('#sendEmail').click(event => {
    window.open(`mailto:fullersolomon5@gmail.com?subject=${$('#emailName').val()} is reaching out to you!&body=${$('#emailBody').val()}`);
});