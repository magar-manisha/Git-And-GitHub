function buttonClick() {
    const button = document.getElementById('submitButton');
    console.log("hii")
    button.outerHTML= '<p id="submitButton" aeria-live="polite">Successfully Submited!</p>';
    }

    document.querySelectorAll('.toggleButton').forEach((button) => {
        button.addEventListener('click', function () {
            const panel = document.getElementById(this.getAttribute('aria-controls'));
    
            // Toggle the display of the panel
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            panel.style.display = isExpanded ? 'none' : 'block';
        });
    });
    