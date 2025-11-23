// data.js
const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image:"https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image:"https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image:"https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image:"https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image:"https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
  title: "Ancient Highland Manor",
  description:
    "A historical manor surrounded by rolling hills and scenic walking paths.",
  image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800",
  price: 4100,
  location: "Inverness",
  country: "United Kingdom",
},
{
  title: "Desert Glass Villa",
  description:
    "Experience luxury in a modern glass-front villa overlooking the golden desert dunes.",
  image: "https://tse3.mm.bing.net/th/id/OIP.kDVHs91REF27gqY-nSLnwQHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
  price: 5200,
  location: "Abu Dhabi",
  country: "United Arab Emirates",
},
{
  title: "Woodland Log Cabin",
  description:
    "Reconnect with nature in this rustic cabin offering peaceful forest surroundings.",
  image: "https://tse3.mm.bing.net/th/id/OIP.0_9vJgi9SPS7PPb4GTJmmAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  price: 1150,
  location: "Idaho",
  country: "United States",
},
{
  title: "Greek Island Cliff House",
  description:
    "A cliffside home offering turquoise sea views and pure Mediterranean charm.",
  image: "https://th.bing.com/th/id/OIP.C_FR_AF9Cq64zUsdPLQ5UwHaED?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  price: 2300,
  location: "Santorini",
  country: "Greece",
},
{
  title: "Eco Jungle Tree Lodge",
  description:
    "Stay in an eco-friendly tree lodge elevated above the forest canopy for a unique retreat.",
  image: "https://tse2.mm.bing.net/th/id/OIP.iCSNeeR18F3XdAQQgcpnIgHaFD?w=1840&h=1255&rs=1&pid=ImgDetMain&o=7&rm=3",
  price: 900,
  location: "Monteverde",
  country: "Costa Rica",
},
{
  title: "Colonial House Getaway",
  description:
    "A beautifully restored colonial-style house with floral gardens and vintage charm.",
  image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?q=80&w=800",
  price: 1500,
  location: "Savannah",
  country: "United States",
},
{
  title: "Skytower Studio Apartment",
  description:
    "Enjoy city lights from the 28th floor in this modern studio located in the heart of Tokyo.",
  image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=800",
  price: 2100,
  location: "Tokyo",
  country: "Japan",
},  
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image:"https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image:"https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image:"https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image:"https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image:"https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image:"https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
  title: "Clifftop Villa With Ocean Panorama",
  description:
    "Relax in this stunning clifftop villa offering 180-degree ocean views and a serene private deck.",
  image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800",
  price: 3800,
  location: "San Diego",
  country: "United States",
},
{
  title: "Alpine Retreat Chalet",
  description:
    "Stay warm in this cozy alpine retreat surrounded by snow-capped peaks and pristine ski trails.",
  image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800",
  price: 2600,
  location: "Zermatt",
  country: "Switzerland",
},
{
  title: "Wildlife Safari Camp",
  description:
    "Enjoy a luxury wildlife experience with guided safaris and breathtaking savannah sunsets.",
  image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800",
  price: 4200,
  location: "Maasai Mara",
  country: "Kenya",
},
{
  title: "Hidden Jungle Villa",
  description:
    "Unwind in a tranquil jungle villa surrounded by lush greenery and private water streams.",
  image: "https://cdn.tatlerasia.com/asiatatler/i/sg/2021/02/26164202-screenshot-2021-02-26-at-44116-pm_cover_2000x1052.jpg",
  price: 1700,
  location: "Tamarindo",
  country: "Costa Rica",
},
{
  title: "Lakeshore Cottage Retreat",
  description:
    "A peaceful lakeshore escape featuring a wooden deck, canoe access, and scenic mountain views.",
  image: "https://tse4.mm.bing.net/th/id/OIP.GTvr8OZ1t3sCD91I0H_F9QHaEM?w=1000&h=567&rs=1&pid=ImgDetMain&o=7&rm=3",
  price: 1300,
  location: "Lake Placid",
  country: "United States",
},
{
  title: "Overwater Bungalow Escape",
  description:
    "Enjoy crystal-clear ocean waters and unmatched luxury in this modern overwater bungalow.",
  image: "https://img.freepik.com/premium-photo/amazing-villa-with-infinity-pool-stunning-jungle-views-perfect-place-relax-enjoy-beauty-nature_14117-69533.jpg",
  price: 6100,
  location: "Maafushi",
  country: "Maldives",
},
{
  title: "Snow Peak Cabin",
  description:
    "A premium winter cabin perfect for ski lovers, offering a warm fireplace and wooden interiors.",
  image: "https://onenaturehotels.com/mara-river/wp-content/uploads/sites/4/2023/11/1920x1200-Luxury-pool-deck-left.webp",
  price: 3900,
  location: "Vail",
  country: "United States",
},
{
  title: "Rocky Mountain Hideout",
  description:
    "A peaceful hideout with sweeping views of the Rockies and access to hiking trails.",
  image: "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?q=80&w=800",
  price: 1600,
  location: "Jasper",
  country: "Canada",
},
{
  title: "Miami Coastal Loft",
  description:
    "A bright and modern loft steps away from the beach, surrounded by vibrant nightlife.",
  image: "https://www.theungasan.com/wp-content/uploads/2016/09/ungasan_ocean-view-plunge-pool_villa-chintamani_rgb-1.jpg",
  price: 1700,
  location: "Miami",
  country: "United States",
},
{
  title: "Tropical Pool Villa",
  description:
    "Relax in a private tropical villa featuring a sunlit garden and large infinity pool.",
  image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800",
  price: 3100,
  location: "Krabi",
  country: "Thailand",
},
];

module.exports = { data: sampleListings };