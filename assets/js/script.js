function hitungNilai() {
    var nilaiInput = document.getElementById('nilai').value;
    var hasilDiv = document.getElementById('hasil');

    if (nilaiInput != '' && nilaiInput >= 0 && nilaiInput <= 100) {
        var nilaiHuruf;
        if (nilaiInput >= 85) {
            nilaiHuruf = 'A';
        } else if (nilaiInput >= 75) {
            nilaiHuruf = 'B';
        } else if (nilaiInput >= 60) {
            nilaiHuruf = 'C';
        } else {
            nilaiHuruf = 'D';
        }


        var bil = (nilaiInput % 2 === 0) ? 'Genap' : 'Ganjil';

        document.getElementById("angka").innerText = nilaiInput;
        document.getElementById("huruf").innerText = nilaiHuruf;
        document.getElementById("gg").innerText = bil;
        hasilDiv.style.display = 'block';
    } else {
        hasilDiv.style.display = 'block';
        hasilDiv.innerHTML = '<p>Masukkan nilai yang benar (0-100).</p>';
    }
}