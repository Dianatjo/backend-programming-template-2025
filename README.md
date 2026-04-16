# Backend Programming Template (2025)

## Development Setup

1. Fork and clone this repository to your local computer.
2. Open the project using VS Code.
3. Install the recommended VS Code extensions: `ESLint` and `Prettier`.
4. Copy and rename `.env.example` to `.env`. Open `.env` and change the database connection string.
5. Run `npm install` to install the project dependencies.
6. Run `npm run dev` to start the dev server.
7. Test the endpoints in the API client app.

## Add New API Endpoints

1. Create a new database schema in `./src/models`.
2. Create a new folder in `./src/api/components` (if needed). Remember to separate your codes to repositories, services, controllers, and routes.
3. Add the new route in `./src/api/routes.js`.
4. Test your new endpoints in the API client app.


## Penjelasan Endpoint Kuis
     Pada tugas kuis backend ini, saya membuat sebuah endpoint utama untuk menjalankan sistem gacha. Endpoint tersebut bisa diakses menggunakan method POST pada rute /api/gacha/play. Untuk mengakses dan mencoba endpoint ini, client perlu mengirimkan data melalui body request dalam format JSON. Parameter input yang dibutuhkan hanya satu, yaitu userId untuk mengenali identitas pemain, contoh formatnya adalah {"userId":"user001"}.

     Alur kerja dari endpoint ini dimulai dengan melakukan validasi batas harian pemain. Begitu ada request yang masuk, sistem akan langsung mengecek data di database MongoDB untuk memastikan apakah user tersebut sudah bermain lebih dari 5 kali pada hari yang sama. Kalau kuota hariannya sudah habis, sistem akan langsung mengembalikan respons error yang menginformasikan bahwa limit harian sudahh tercapai.

     Sebaliknya, kalau user masih memiliki sisa kuota bermain, program akan langsung melakukan proses pengacakan untuk menentukan hasilnya. Jika user beruntung dan kuota hadiah yang ditarik masih tersedia, sistem akan mengirimkan respons sukses berstatus 200 beserta keterangan hadiah apa yang dimenangkan. Namun jika sedang tidak beruntung (kurang beruntung), respons akan menampilkan pesan zonk atau coba lagi besok. Sebagai langkah terakhir, semua percobaan gacha baik yang menang maupun yang zonk akan otomatis dicatat dan disimpan kedalam database MongoDB sebagai log riwayat permainan.
