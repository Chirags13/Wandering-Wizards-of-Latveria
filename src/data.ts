import { Business } from './types';

export const businesses: Business[] = [
  // CAFES
  {
    id: '1',
    name: "Rusted Spoon Cafe",
    category: 'cafe',
    description: "A rustic cafe known for its artisanal coffee blends and farm-to-table breakfast options. Features exposed brick walls and vintage decor.",
    rating: 4.6,
    address: "Ground floor, Siri laharika enclave, Arehalli Main Rd, Arehalli, Uttarahalli Hobli, Bengaluru, Karnataka 560061",
    phone: "99003 16750",
    email: "rscafekn61@gmail.com",
    website: "https://rustedcafe.in/",
    imageUrl: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    coordinates: { lat: 12.980128, lng: 77.539380 }
  },
  {
    id: '2',
    name: "Le-Celebration",
    category: 'cafe',
    description: "French-inspired patisserie and cafe serving authentic croissants, macarons, and specialty coffee in an elegant Parisian atmosphere.",
    rating: 4.8,
    address: "SHOP NUMBER 28, Bengaluru, Karnataka 560076",
    phone: "7024410505",
    email: "bonjour@le-celebration.com",
    website: "https://www.instagram.com/le_celebration_cafe?igsh=Z3N1MDlqcGNzdG51",
    imageUrl: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    coordinates: { lat: 12.875332, lng: 77.609687 }
  },
  {
    id: '3',
    name: "Café Hut-Tea",
    category: 'cafe',
    description: "Cozy tea house offering a vast selection of global teas, bubble tea variations, and light snacks in a zen-inspired setting.",
    rating: 4.5,
    address: "3B, 11th Block, Near JSSATE, Dr.Vishnuvardhan Rd, Banashankari 6th Stage, Srinivaspura, Bengaluru, Karnataka 560060",
    phone: "09036229747",
    email: "info@cafehuttea.com",
    imageUrl: "https://images.unsplash.com/photo-1526424382096-74a93e105682?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    coordinates: { lat: 12.875332, lng: 77.609687 }
  },
  {
    id: '4',
    name: "Big Bean Cafe",
    category: 'cafe',
    description: "Modern coffee shop specializing in single-origin beans, pour-overs, and creative espresso drinks, with a minimalist industrial design.",
    rating: 4.7,
    address: "3B, 11th Block, Near JSSATE, Dr.Vishnuvardhan Rd, Banashankari 6th Stage, Srinivaspura, Bengaluru, Karnataka 560060",
    phone: "09036229747",
    email: "beans@bigbean.coffee",
    website: "https://bigbean.coffee",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    coordinates: { lat: 40.7170, lng: -74.0072 }
  },
  
  // BOOKSTORES
  {
    id: '5',
    name: "Sapna Book House",
    category: 'bookstore',
    description: "Vast collection of academic, fiction, and regional literature with multiple floors of carefully curated books and study materials.",
    rating: 4.6,
    address: "5th Stage, Bus Depot, J.N Road, above SBI, near BMTC, Channasandra, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098",
    phone: "080-24499999",
    email: "read@sapnabooks.com",
    website: "https://sapnabooks.com",
    imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    coordinates: { lat: 12.803377, lng: 77.520885 }
  },
  {
    id: '6',
    name: "Blossom Book House",
    category: 'bookstore',
    description: "Charming bookstore known for its rare finds, second-hand treasures, and peaceful reading corners with comfortable seating.",
    rating: 4.9,
    address: "2, 3rd Floor, Prestige Commercial Complex, Church St, above Matteo Coffea, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
    phone: "9449373202",
    email: "hello@blossombooks.com",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    coordinates: { lat: 12.973316, lng: 77.606886 }
  },
  
  // CRAFTS
  {
    id: '7',
    name: "Itsy Bitsy",
    category: 'crafts',
    description: "Creative haven offering art supplies, craft materials, and DIY workshops. Perfect for both beginners and experienced crafters.",
    rating: 4.7,
    address: "SITE NO : 834,BASEMENT, Jawaharlal Nehru Rd, BEML Layout 3rd Stage, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098",
    phone: "9611005083",
    email: "create@itsybitsy.com",
    website: "https://itsybitsy.craft",
    imageUrl: "https://images.unsplash.com/photo-1515446134809-993c501ca304?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    coordinates: { lat: 12.818141, lng: 77.520603 }
  },
  {
    id: '8',
    name: "Craft Genie",
    category: 'crafts',
    description: "One-stop shop for all crafting needs, featuring unique supplies, regular workshops, and a community space for crafting enthusiasts.",
    rating: 4.5,
    address: "25, ground floor, 50 Feet Main Rd, opp. to PB Bake House, Ganapathi Nagar, Banashankari 1st Stage, Banashankari, Bengaluru, Karnataka 560026",
    phone: "9019529113",
    email: "magic@craftgenie.com",
    imageUrl: "https://images.unsplash.com/photo-1462927114214-6956d2fddd4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    coordinates: { lat: 12.943338, lng: 77.540147 }
  },
  
  // RESTAURANTS
  {
    id: '9',
    name: "Ambrosia",
    category: 'restaurant',
    description: "Fine dining establishment serving contemporary fusion cuisine with a focus on local ingredients and artistic presentation.",
    rating: 4.8,
    address: "Noojibail Nursery Compound, 15/3A, Dr.Vishnuvardhan Rd, Srinivaspura, Ganakal Village, Bengaluru, Karnataka 560060",
    phone: "09964818888",
    email: "dine@ambrosia.restaurant",
    website: "http://www.ambrosiablr.com/",
    imageUrl: "https://images.app.goo.gl/qMCxo",
    coordinates: { lat: 12.904285, lng: 77.509709 }
  },
  {
    id: '10',
    name: "Big Barrel",
    category: 'restaurant',
    description: "Casual dining spot famous for its generous portions of comfort food and family-friendly atmosphere.",
    rating: 4.4,
    address: "199/20/1/A 2nd & 4th Floor, Dr.Vishnuvardhan Rd, Rajarajeshwari Nagar, Bengaluru, Karnataka 560060",
    phone: "6366466444",
    email: "eat@bigbarrel.com",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    coordinates: { lat: 12.904010, lng: 77.507823 }
  },
  {
    id: '11',
    name: "Platform 65",
    category: 'restaurant',
    description: "Unique themed restaurant with model train delivery system, serving a mix of global cuisine in an entertaining atmosphere.",
    rating: 4.6,
    address: "2nd floor, YGR Signature Mall, Double Road Rajarajeshwari Nagar, Kenchena Halli Rd, opp. Rashtrothana Hospital, Village, Kengeri Hobli, Bengaluru, Karnataka 560098",
    phone: "9035005999",
    email: "dine@platform65.com",
    website: "https://rrnagar.platform65.in/",
    imageUrl: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    coordinates: { lat: 12.909854, lng: 77.512981 }
  },
  
  
  // RETAIL
  {
    id: '12',
    name: "Top-N-Town",
    category: 'retail',
    description: "Multi-level fashion destination featuring trending styles, accessories, and lifestyle products for the modern consumer.",
    rating: 4.4,
    address: "Navami Varsha, #20/1A, Uttarahalli Kengeri Road, Channasandra, Srinivaspura, RR Nagar, 21/1, near Top In Town Hypermarket, Srinivaspura, Bengaluru, Karnataka 560060",
    phone: "080-28611899",
    email: "shop@topntown.com",
    website: "https://topntown.fashion",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    coordinates: { lat: 12.918116, lng: 77.614417 }
  },
  {
    id: '13',
    name: "Croma",
    category: 'retail',
    description: "Leading electronics retailer offering the latest gadgets, home appliances, and tech accessories with expert customer service.",
    rating: 4.6,
    address: "YGR Mall, Kenchena Halli Rd, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098",
    phone: "06366222532",
    email: "info@croma.tech",
    website: "https://store.croma.com/croma-ygr-mall-electronics-retail-and-repair-shop-rr-nagar-bengaluru-284238/Home?utm_source=locator&utm_medium=googleplaces",
    imageUrl: "https://images.unsplash.com/photo-1440558805255-4b9cca0164c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    coordinates: { lat: 12.909294, lng: 77.512895 }
  },
];