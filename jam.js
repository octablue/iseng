function updateClock() {
    const now = new Date();
    const jam = String(now.getHours()).padStart(2, "0");
    const menit = String(now.getMinutes()).padStart(2, "0");
    const detik = String(now.getSeconds()).padStart(2, "0");
    const tanggal = String(now.getDate()).padStart(2, "0");
    const bulan = String(now.getMonth() + 1).padStart(2, "0");
    const tahun = String(now.getFullYear());
    document.getElementById("jamDigital").textContent = `${jam}:${menit}:${detik}`;
    document.getElementById("tanggal").textContent = `${tanggal}:${bulan}:${tahun}`;
}
setInterval(updateClock, 1000);
updateClock();