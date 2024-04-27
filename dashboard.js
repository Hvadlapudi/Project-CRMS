document.addEventListener('DOMContentLoaded', function() {
    const dataViewer = document.getElementById('data-viewer');

    document.getElementById('loadPersons').addEventListener('click', () => loadData('Persons'));
    document.getElementById('loadCrimes').addEventListener('click', () => loadData('Crimes'));
    document.getElementById('loadOfficers').addEventListener('click', () => loadData('Officers'));
    document.getElementById('loadCases').addEventListener('click', () => loadData('Cases'));
    document.getElementById('loadEvidence').addEventListener('click', () => loadData('Evidence'));

    function loadData(table) {
        // Example URL structure: /get-table-data.php?table=Persons
        // Adjust as needed for your actual back-end URL structure and parameters
        fetch(`/get-table-data.php?table=${table}`)
            .then(response => response.json())
            .then(data => {
                displayData(data, table);
            })
            .catch(error => console.error('Error loading data:', error));
    }

    function displayData(data, table) {
        let html = `<h2>${table}</h2>`;
        data.forEach(row => {
            html += '<div class="data-row">';
            for (const [key, value] of Object.entries(row)) {
                html += `<span><b>${key}:</b> ${value}</span><br>`;
            }
            html += '</div><hr>';
        });
        dataViewer.innerHTML = html;
    }
});
