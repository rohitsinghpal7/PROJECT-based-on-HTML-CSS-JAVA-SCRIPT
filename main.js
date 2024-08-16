
        let num = 75;
        let history = [];
        let historyIndex = -1;

        function updateDisplay() {
            document.getElementById('numberDisplay').innerText = num;
            document.getElementById('progress').style.width = (num / 150 * 100) + '%';
        }

        function addHistory(action) {
            history = history.slice(0, historyIndex + 1);
            history.push(action);
            historyIndex++;
        }

        document.getElementById('subtractBtn').addEventListener('click', () => {
            if (num > 0) {
                addHistory(num);
                num--;
                updateDisplay();
            }
        });

        document.getElementById('addBtn').addEventListener('click', () => {
            if (num < 150) {
                addHistory(num);
                num++;
                updateDisplay();
            }
        });

        document.getElementById('undoBtn').addEventListener('click', () => {
            if (historyIndex >= 0) {
                num = history[historyIndex];
                historyIndex--;
                updateDisplay();
            }
        });

        document.getElementById('redoBtn').addEventListener('click', () => {
            if (historyIndex < history.length - 1) {
                historyIndex++;
                num = history[historyIndex];
                updateDisplay();
            }
        });

        updateDisplay();
