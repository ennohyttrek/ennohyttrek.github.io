        function moveMe() {
            var x = document.getElementById('square');
            if (x.className === 'start') {
                x.className = 'end';
            } else {
                x.className = 'start';
            }
        }