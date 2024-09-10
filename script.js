document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('command-input');
    const output = document.getElementById('output');
    const prompt = '$ ';

    function handleCommand(command) {
        switch (command.trim()) {
            case 'help':
                return 'Available commands: help, echo [text], clear';
            case 'clear':
                output.innerHTML = '';
                return '';
            default:
                if (command.startsWith('echo ')) {
                    return command.slice(5);
                }
                return `Command not found: ${command}`;
        }
    }

    function executeCommand() {
        const command = commandInput.value;
        const response = handleCommand(command);

        // Display command and response
        output.innerHTML += `<div>${prompt}${command}</div>`;
        if (response) {
            output.innerHTML += `<div>${response}</div>`;
        }

        // Clear the input
        commandInput.value = '';

        // Scroll to the bottom
        output.scrollTop = output.scrollHeight;
    }

    commandInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            executeCommand();
            event.preventDefault(); // Prevents form submission or other default actions
        }
    });
});
