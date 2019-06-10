const warn = confirm("Beware: Henceforth erroneous suppositions shall be tallied in regards to thy hanging by the neck.  Should thy tally reach five, you shall be hanged!  Doest thou wish to proceed?");

if (warn) {
    const name = prompt("T'is thy name?");
    
    // Function to add name to body of HTML after prompted
    function userName() {
        const writeName = document.getElementById('name').innerText;
        if (name === '' || !name){
            document.getElementById('name').innerText = 'Deaf Mute';
        }
        else {
            document.getElementById('name').innerText = name;
        }
        alert('Depress an alpahbetic key to progress through the game!');
        console.log(writeName);
    }
    
    // Executes yourName function after document is loaded
    window.addEventListener('DOMContentLoaded', userName)
}

// If user chooses not to play they will be given this message and forced to play with less chance to guess wrong
else if (!warn){
    alert("Thou hast chosen to be but a coward.  For thine treachery, ye shall be play anyway!");
    const coward = prompt("T'is thy name, coward?");

        // Function to add name to body of HTML after prompted
        function cowardName() {
            const writeCoward = document.getElementById('name').innerText;
            console.log(writeCoward);
            if (coward === '' || !coward){
                console.log(writeCoward);
                document.getElementById('name').innerText = 'Coward';
            }
            else {
                document.getElementById('name').innerText = coward;
            }        
            alert('Depress an alpahbetic key to progress through the game!');
        // Executes coward function after document is loaded
    }
    window.addEventListener('DOMContentLoaded', cowardName);
}