/*
  guard.js
  Tempel <script src="guard.js"></script> di paling atas <body>
  HANYA pada halaman menu Dokumen Akreditasi:
    - dokumen.html
    - d3tme.html
    - d3tab.html
    - d4rpm.html
    - d4tma.html
  Halaman lain (instrumen.html, status.html, tim.html, kegiatan.html, dll)
  TIDAK perlu dipasangi script ini karena tetap bisa diakses bebas.

  Jika user belum login lewat portal.html, otomatis diarahkan ke portal.html.
*/
(function () {
  const STORAGE_KEY = "pnp_jtm_access";
  try {
    if (localStorage.getItem(STORAGE_KEY) !== "granted") {
      window.location.href = "portal.html";
    }
  } catch (e) {
    // Jika localStorage diblokir browser, arahkan tetap ke portal untuk keamanan
    window.location.href = "portal.html";
  }
})();
