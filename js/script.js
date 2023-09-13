document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculateButton');
    const resetButton = document.getElementById('resetButton');
    const inputField = document.getElementById('inputField');
    const luasValue = document.getElementById('luasValue');
    const kelilingValue = document.getElementById('kelilingValue');

    function calculateLuasKeliling() {
        const sisi = parseFloat(inputField.value);
        if (!isNaN(sisi)) {
            const luas = sisi * sisi;
            const keliling = 4 * sisi;
            luasValue.textContent = luas;
            kelilingValue.textContent = keliling;
        } else {
            alert('Masukkan nilai sisi yang valid.');
        }
    }

    calculateButton.addEventListener('click', calculateLuasKeliling);

    resetButton.addEventListener('click', function () {
        inputField.value = '';
        luasValue.textContent = '-';
        kelilingValue.textContent = '-';
    });
});
