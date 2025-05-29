<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register - Beresindong</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body class="min-h-screen flex items-center justify-center bg-[#344C36]">
    <div class="min-h-screen flex items-center justify-center bg-[#344C36]">
    <div class="w-full max-w-4xl bg-white shadow-xl flex md:flex-row flex-col overflow-hidden">

    <!-- Kiri: Gambar -->
    <div class="md:w-1/2 relative h-full">
        <img src="/images/pictregist.png" alt="Register picture" class="w-full h-full object-cover md:aspect-[335/376]">
    </div>

    <!-- Kanan: Header + Form -->
    <div class="md:w-1/2 p-8 flex flex-col justify-center bg-white" style="font-family: 'Poppins', sans-serif;">
    
        <!-- Tulisan Pindah ke Atas Form -->
        <div class="mb-5 flex justify-center ">
        <h1 class="text-3xl font-bold text-[#344C36]">Beresin<span class="text-yellow-400">Dong</span></h1>
        </div>

        <!-- Form -->
        <form class="space-y-5">
        <div>
            <label class="block text-sm font-light text-[#344C36]">Username</label>
            <input type="text" class="w-full px-3 py-2 border rounded-2xl shadow-sm" placeholder="Enter your username" required>
        </div>
        <div>
            <label class="block text-sm font-light text-[#344C36]">Email</label>
            <input type="email" class="w-full px-3 py-2 border rounded-2xl shadow-sm" placeholder="you@example.com" required>
        </div>
        <div>
            <label class="block text-sm font-light text-[#344C36]">Password</label>
            <input type="password" class="w-full px-3 py-2 border rounded-2xl shadow-sm" placeholder="Minimum 8 characters" required>
        </div>
        <button type="submit" class="w-full py-2 px-4 text-sm font-bold bg-green-800 text-white rounded-2xl hover:bg-green-700 transition duration-300">Daftar</button>
        </form>
    </div>

</div>
</div>

</body>
</html>