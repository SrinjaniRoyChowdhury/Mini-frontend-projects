let calculation = localStorage.getItem('cal') || '';

        function updateCalculation(value) {
            calculation += value;
            displayCalculation();
        }

        localStorage.setItem('cal', (calculation));
        
        function displayCalculation() {
            document.querySelector('.js-showCalculation')
              .innerHTML = `${calculation}`;
        }