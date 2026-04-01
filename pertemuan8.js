// Error Handling

try {
    const hasil = 10;
    const hasil2 = hasil.toUpperCase();
    console.log(hasil2);
} catch (error) {
    console.error(error.message)
} finally {
    console.log("Selalu tereksekusi")
}