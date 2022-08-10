<script>
  import "../app.css";
</script>
<form action="">
    <div class="relative flex  w-full text-gray-700">
        <select class="h-10 pl-3 pr-6 text-base placeholder-gray-600 border appearance-none rounded-l-lg focus:shadow-outline">
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
        </select>
        <input class="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border focus:shadow-outline" type="text" placeholder="URL"/>
        <button class="flex h-10 items-center px-4 font-bold text-white bg-indigo-600 rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700">Send</button>
    </div>
</form>
