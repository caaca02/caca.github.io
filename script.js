// Mendapatkan elemen-elemen HTML yang diperlukan
var konversiBtn = document.getElementById('konversiBtn');
var resetBtn = document.getElementById('resetBtn');
var reverseBtn = document.getElementById('reverseBtn');
var inputSuhu = document.getElementById('inputSuhu');
var hasilKonversi = document.getElementById('hasilKonversi');
var caraKalkulasi = document.getElementById('caraKalkulasi');

// Menambahkan event listener pada button Konversi
konversiBtn.addEventListener('click', function() {
    konversiSuhu();
});

// Menambahkan event listener pada button Reset
resetBtn.addEventListener('click', function() {
    resetForm();
});

// Menambahkan event listener pada button Reverse
reverseBtn.addEventListener('click', function() {
    reverseKonversi();
});

// Fungsi untuk konversi suhu dari Celsius ke Fahrenheit
function konversiSuhu() {
    var suhuCelcius = parseFloat(inputSuhu.value);
    var suhuFahrenheit = (suhuCelcius * 9/5) + 32;

    hasilKonversi.value = "Suhu Fahrenheit = " + suhuFahrenheit + " Derajat Celcius "; // Menampilkan hasil konversi dengan 2 angka di belakang koma
    caraKalkulasi.value = "Cara konversi : F = (C * 9/5) + 32 = (" + suhuCelcius + "* 9/5) + 32 = " + suhuFahrenheit;
}

// Fungsi untuk mengosongkan form
function resetForm() {
    inputSuhu.value = "";
    hasilKonversi.value = "";
    caraKalkulasi.value = "";
}

// Fungsi untuk melakukan reverse konversi
function reverseKonversi() {
    var suhuFahrenheit = parseFloat(inputSuhu.value);
    var suhuCelcius = (suhuFahrenheit - 32) * 5/9;

    hasilKonversi.value = "Suhu Celcius = " + suhuCelcius + " Derajat Celcius "; // Menampilkan hasil reverse konversi dengan 2 angka di belakang koma
    caraKalkulasi.value = "Cara konversi : C = (F - 32) * 5/9 = (" + suhuFahrenheit + " - 32) * 5/9 = " + suhuCelcius;
}
