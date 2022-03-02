// Given a text, removes the timestamps from the text and returns it.
// Timestamps are assumed to occur in either [0-9]+:[0-9]+ OR [0-9]+:[0-9]+:[0-9]+ format.
function removeTimestamps(input) {
    if (input.value.trim() === "") {
        return input
    }

    // Remove all numbers from the script.
    let res = input;
    const shortRegex = /[0-9]+:[0-9]+\n/g;
    const longRegex  = /[0-9]+:[0-9]+:[0-9]+\n/g;

    // We have to search for the long timestamps first because otherwise we will remove
    // a portion of them by searching for the short timestamps.
    res = res.replaceAll(longRegex, '');
    res = res.replaceAll(shortRegex, '');

    // Remove extra newlines and replace them with a space.
    res = res.replaceAll(/\n+/g, ' ');

    return res
}

crypto.randomUUID()

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    pom.style.display = 'none';
    document.body.appendChild(pom);

    pom.click();

    document.body.removeChild(pom);
}

function createPseudoUUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

const form = document.getElementById('textparser');

form.addEventListener('submit', (event) => {
    let filename = 'parsed_'+createPseudoUUID()+'.txt'

    let parsedText = removeTimestamps(form.elements["note-box"]);
    download(filename, parsedText);
});