(() => {
        const pop_up = document.querySelector('#pop-up');
        
        function open_popup() {
                pop_up.classList.add('show-popup');
        }

        function close_popup() {
                pop_up.classList.remove('show-popup');
        }

        document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('open_popup')) {
                        open_popup();
                }
                if (el.classList.contains('close_popup')) {
                        close_popup();
                }
                if (el.classList.contains('img')) {
                        close_popup();
                } 
        });
})()