document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('input');
    const output = document.getElementById('output');

    const heartArt = `
       ***   ***
     *       *
    *         *
    *         *
     *       *
       *   *
         *
    `;

    function displayHeartAnimation() {
        let index = 0;
        const heartLines = heartArt.split('\n');
        function animateHeart() {
            if (index < heartLines.length) {
                output.textContent += heartLines[index] + '\n';
                index++;
                setTimeout(animateHeart, 500);
            } else {
                output.textContent += 'Heart animation complete!\n';
                input.focus();
            }
        }
        animateHeart();
    }

    function handleCommand(event) {
        if (event.key === 'Enter') {
            const command = input.value;
            output.textContent += `> ${command}\n`;

            if (command.trim() === 'animate heart') {
                displayHeartAnimation();
            } else {
                output.textContent += 'Unknown command.\n';
            }

            input.value = '';
            event.preventDefault();
        }
    }

    input.addEventListener('keydown', handleCommand);
    output.textContent = 'Welcome to the ASCII art command line. Type "animate heart" to see the animation.\n';
});
