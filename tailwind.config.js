// tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme'); // Mengimpor tema default Tailwind
const colors = require('tailwindcss/colors'); // Opsional: Jika Anda ingin menggunakan palet warna Tailwind yang lebih luas

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Konfigurasi mode Just-In-Time (JIT) sudah menjadi default di Tailwind CSS v3+
  // mode: 'jit', // Tidak perlu lagi di v3+

  // Path ke semua file template Anda yang mengandung kelas Tailwind CSS
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php', // Paginasi Laravel
    './vendor/laravel/jetstream/**/*.blade.php', // Jika menggunakan Jetstream
    './storage/framework/views/*.php',           // View yang di-cache Laravel
    './resources/views/**/*.blade.php',          // Blade template Anda
    './resources/js/components/**/*.vue',        // Komponen Vue.js Anda
    './resources/js/components/sections/**/*.vue',        // Komponen Vue.js Anda
    './resources/js/components/layouts/**/*.vue',        // Komponen Vue.js Anda
    './resources/js/**/*.js',                    // File JavaScript Anda
    './resources/js/**/*.ts',                    // File TypeScript Anda (jika ada yang terpisah dari .vue)
    // Tambahkan path lain jika diperlukan, misalnya untuk komponen dari library pihak ketiga
    // './node_modules/your-ui-library/**/*.js',
  ],

  // Konfigurasi tema
  theme: {
    // Di sini Anda bisa mengganti seluruh skala tema jika diperlukan (misal, breakpoints, colors, spacing)
    // screens: { ... },
    // colors: { ... },
    // spacing: { ... },

    // 'extend' digunakan untuk menambahkan atau memperluas tema default, bukan menimpanya sepenuhnya
    extend: {
      // Menambahkan Poppins sebagai font sans-serif default
      fontFamily: {
        // Mengatur Poppins sebagai font utama untuk kelas 'font-sans'
        // Font sans-serif default Tailwind akan menjadi fallback
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],

        // Anda juga bisa menambahkan nama kustom lain jika mau, misalnya:
        // poppins: ['Poppins', 'sans-serif'], // lalu gunakan dengan kelas `font-poppins`
        // serif: ['NamaFontSerifLain', ...defaultTheme.fontFamily.serif], // Jika Anda butuh font serif kustom
      },

      // Contoh memperluas palet warna
      colors: {
        primary: colors.blue, // Menggunakan warna biru dari Tailwind sebagai 'primary'
        secondary: colors.gray, // Menggunakan warna abu-abu sebagai 'secondary'
        // Anda juga bisa mendefinisikan warna kustom:
        // 'custom-color': '#RRGGBB',
      },

      // Contoh memperluas spacing atau properti lainnya
      // spacing: {
      //   '128': '32rem',
      // },
      // borderRadius: {
      //   '4xl': '2rem',
      // },
    },
  },

  // Plugin yang digunakan
  plugins: [
    require('@tailwindcss/forms'), // Plugin untuk styling form default yang lebih baik
    require('@tailwindcss/typography'), // Plugin untuk styling teks dari konten (misal, artikel dari CMS)
    require('@tailwindcss/aspect-ratio'), // Plugin untuk rasio aspek
    // Tambahkan plugin lain yang Anda butuhkan di sini
    // require('some-other-tailwind-plugin'),
  ],

  // Opsi varian (jarang perlu diubah secara manual di Tailwind v3+ karena JIT)
  // variants: {
  //   extend: {
  //     opacity: ['disabled'], // Contoh: mengaktifkan varian 'disabled' untuk 'opacity'
  //   },
  // },
};