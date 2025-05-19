function tambah(a, b) {
    return a + b;
  }
  
  // Untuk test
  if (typeof module !== 'undefined') {
    module.exports = { tambah };
  }