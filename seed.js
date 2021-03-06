const db = require("./models");

const admin = [
  {
    
    username: "Customer",
    password: "$2b$10$Sf6Q6/yiWZWPFwAVCubzgetciKBwaTMU/Y4QdTfMqy8gsQMMWF2o2",
    email: "Customer@gmail.com",
    admin: false
  },
  {
    
    username: "Admin",
    password: "$2b$10$0usmRNv2WAnuybFG0akrIO4q5tQOpUEQt0yqstYt/9c99./Sxr8nK",
    email: "Admin@gmail.com",
    admin: true
  },
];

const product = [
  {
    id: 840,
    title: `Lenovo ThinkPad T530 15.6"`,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61xkhBw%2Bk3L._AC_SL1100_.jpg",
    description: `
    Lenovo ThinkPad T530 15.6" LED Notebook with Intel Core i5 i5-3210M 2.5GHz and a 1366 x 768 HD Display preinstalled 4 GB RAM  and a  500 GB HDD and DVD-Writer included. Features Intel HD 4000 Graphics Card,Webcam and Genuine Windows 7 Professional. Estimated Battery life is 9.10 Hour Battery and uses DisplayPort for external connection`,
    category: "Computer",
    subCategory: "Laptop",
    price: 450.98,
    quantity: 50,
    tier: "two",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
    InventoryItem: true,
  },
  {
    id: 005,
    title: `Dell Latitude 7480 14"`,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlECCJ5LW4Jk2Br7J0r0WhnYPRZdqJvJR_MA&usqp=CAU",
    description: `14-inch Full HD Anti-Glare (1920x1080) 720p HD Webcam with Microphone
    60Whr 4-Cell Battery up to 13 Hours with Express Charge, Windows 10 Pro 64-bit
    Intel 7th Gen Core i7-7600U (4MB Cache, 2.80GHz up to 3.80GHz Turbo Boost)
    Intel 8265 Dual-Band AC Wireless, Bluetooth 4.2, WiGig, USB-Type-C Display Port
    Intel HD Graphics 620, 16GB-2133MHz DDR4 Memory, 256GB M.2 Solid State Drive`,
    category: "Computer",
    subCategory: "Laptop",
    price: 600.09,
    quantity: 50,
    tier: "two",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
    InventoryItem: true,
  },
  {
    id: 006,
    title: `ASUS Laptop L410 Ultra Thin 14"`,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTbtle2hC1ErfwXMsw7_qBZuCH8Wi1g2P78A&usqp=CAU",
    description: `Efficient Intel Celeron N4020 Processor (4M Cache, up to 2.8 GHz)
    14” Full HD (1920x1080) Display
    64GB eMMC Flash Storage and 4GB DDR4 RAM
    Windows 10 in S mode with One Year Microsoft 365 Personal included
    Slim and Portable: 0.72” thin and weighs only 2.87 lbs (battery included)`,
    category: "Computer",
    subCategory: "Laptop",
    price: 300.89,
    quantity: 50,
    tier: "two",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
    InventoryItem: true,
  },
  {
    id: 834,
    title: `Lenovo ThinkCentre M72e`,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtihCIRQbh4Fi-3UgFykbOLgg4h5GQ7aB3qg&usqp=CAU",
    description: `
    Lenovo ThinkCentre M72e Desktop Computer with Intel Core i3 i3-3220 3.3GHz with a Small Form Factor and preinstalled 4 GB RAM and a 500 GB HDD and DVD-Writer. Features Intel HD 2500 Graphics Card and Genuine Windows 7 Professional uses DVI and comes with a 3-Year Warranty *monitor NOT INCLUDED`,
    category: "Computer",
    subCategory: "Desktop",
    price: 450.75,
    quantity: 50,
    tier: "two",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
    InventoryItem: true,
  },
  {
    id: 748,
    title: `Litzia Workstation Special`,
    image:
      "https://www.emerson.com/resource/image/169668/portrait_ratio1x1/345/345/82c34ece8b70e340b36f5482452d3ee7/CW/pdp-deltav-workstation-hardware.jpg",
    description: `Network Certified Workstation Intel 1.8 GHZ Pentium 4 Processor with 512k cache High Speed Motherboard 400/533mhz bus 32 Bit PCI Bus Mastering Architecture Intel ChipSet Shared AGP Videot / 4 USB 2.0 Ports 1 Mouse / 1 Parallel / 2 Serial Ports 10/100 Ethernet LAN Adapter Audio/Sound Adapter 1200 Megabytes of High Speed DDR SDRAM Memory 300 Watt Power Supply 40 Gigabyte Hard Drive Ultra Enhanced IDE Interface 9.5 Millisecond Access Time CD-ROM Player Internal 52x Speed Enhanced IDE Interface 1.44 Megabyte Floppy Drive 3.5" 104 Key Windows Enhanced Keyboard Optical Three Button Mouse with Scroll Wheel - PS2/USB Windows XP Professional with CD`,
    category: "Computer",
    subCategory: "Desktop",
    price: 250.77,
    quantity: 50,
    tier: "two",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
    InventoryItem: true,
  },
  {
    id: 776,
    title: `Dell PowerEdge T410`,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjYpU1CGkHPS43GIQI7YongWsLa7HC4AZVmA&usqp=CAU",
    description: `Dell PowerEdge T410 tower server with Intel Xeon E-2224G 3.5GHz Processor included tower case with 8GB RAM and a 1TB HDD and an optical drive. OS not installed`,
    category: "Computer",
    subCategory: "Server",
    price: 250.77,
    quantity: 50,
    tier: "two",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
    InventoryItem: true,
  },
  {
    id: 779,
    title: `Dell PowerEdge T310`,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjYpU1CGkHPS43GIQI7YongWsLa7HC4AZVmA&usqp=CAU",
    description: `Dell PowerEdge T40 tower server with Intel Xeon x4340 2.4GHz Processor included tower case with 16GB RAM and 2 Dell 146GB SAS Drives, SAS 6i Raid Controller,OS not installed`,
    category: "Computer",
    subCategory: "Server",
    price: 250.00,
    quantity: 50,
    tier: "two",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
    InventoryItem: true,
  },
  {
    id: 813,
    title: `Lenovo ThinkServer RD630`,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVrFMw0X4gphW-uKydiWTutbB23X7HKpbf_A&usqp=CAU",
    description: `Lenovo ThinkServer RD630 Rack Server w/ (2) Intel Xeon E5-2620 6 Core Processors for 12 cores total, 48GB RAM, 3 GB Usable disk Space with (6) 1TB 7.2K 6Gbps SCSI 3.5" Hot Plug Hard Drives for RAID 10, Raid 700 adaptor; 800W Dual Hot-Plug Redundant Power Supply; QuadPort Network Adaptor; Premium Management adaptor; 5-Yr Hardware Warranty NBD Onsite Hardware Repair Service
    `,
    category: "Computer",
    subCategory: "Server",
    price: 250.00,
    quantity: 50,
    tier: "two",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
    InventoryItem: true,
  },
  {
    id: 001,
    title: "Xerox PrimeLink",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUT904uYNWlwcNopMl6MI7R9oW8W0YRvVc9Q&usqp=CAU",
    description: ` Xerox PrimeLink with color MFP and support for 330 x 660mm banner printing. Reliable service you come to know with xerox.`,
    category: "Xerox",
    subCategory: "Color",
    price: 100.00,
    quantity: 2000,
    tier: "one",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
    InventoryItem: true,
  },
  {
    id: 002,
    title: "Xerox WorkCentre 5300",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_Q-GvZaK-iqB35QhIA3Wk_4SkInk-55UbA&usqp=CAU",
    description: ` Black and white copier only or MFP with support for tabloid/A3. Copy, print, scan, fax, email on a small foot print - integrated office finisher saves space without losing features and functionality. Reliable service you come to know with Xerox.`,
    category: "Xerox",
    subCategory: "Station",
    price: 100.00,
    quantity: 2000,
    tier: "one",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
    InventoryItem: true,
  },
  {
    id: 003,
    title: "Xerox B215 Multifunction Printer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1sJEiaJjYZlLBcIj6m6bHQEL0i6ko_jigxg&usqp=CAU",
    description: ` Black and White MFP with support for Letter/Legal. Copy, print, scan, fax, email on a small foot print - Built-in Wi-Fi, Compact foot print. 3.5" capacitive color touch screen user interface, and fast printing with crisp, clear text & graphics and the full array of mobile platforms. All with the Reliable service you come to know with Xerox.`,
    category: "Xerox",
    subCategory: "Printer",
    price: 100.00,
    quantity: 2000,
    tier: "one",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
    InventoryItem: true,
  },
  {
    id: 004,
    title: "Office365",
    image:
      "https://lh3.googleusercontent.com/proxy/YGJnnfGCNAiF23YCtvj6BBQRDaEpM6PkqTPeZcB6rEssndZ8wlRPKu5uY9GROhmSmXyrVjAM7omFkD09mJx94fsPtKbcw_GEwVIlhuN7",
    description: ` Work from anywhere on all your devices with all your familiar Microsoft 365 applications, backed by Dell’s Cloud Concierge Service.
    License Validation Period 1 year.`,
    category: "Software",
    subCategory: "Microsoft",
    price: 100.00,
    quantity: 2000,
    tier: "one",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
    InventoryItem: true,
  },
  {
    id: 1014,
    title: "Managed Offsite Back-Up",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafBi8B4txkwitxFDgyLvGagn9YomzbyDh6w&usqp=CAU",
    description: ` Managed Offsite Back-Up description here .`,
    category: "Security",
    subCategory: "Offsite",
    price: 109.10,
    quantity: 2000,
    tier: "one",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
    InventoryItem: true,
  },
  {
    id: 759,
    title: "TakeCharge BDR Advance",
    image:
      "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg",
    description: `Software security description here.`,
    category: "Security",
    subCategory: "Unique",
    price: 109.10,
    quantity: 2000,
    tier: "one",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
    InventoryItem: true,
  },
  {
    id: 802,
    title: "Litzia Hosted Exchange Good",
    image: "https://www.dcsny.com/dimages/559.png",
    description: ` Litzia Hosted Exchange description here.`,
    category: "Service",
    subCategory: "Unique",
    price: 107.34,
    quantity: 2000,
    tier: "one",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
    InventoryItem: true,
  },
  {
    id: 803,
    title: "Litzia Hosted Exchange Better",
    image: "https://www.dcsny.com/dimages/559.png",
    description: ` Litzia Hosted Exchange description here.`,
    category: "Service",
    subCategory: "Unique",
    price: 108.00,
    quantity: 2000,
    tier: "one",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
    InventoryItem: true,
  },
  {
    id: 804,
    title: "Litzia Hosted Exchange Best",
    image: "https://www.dcsny.com/dimages/559.png",
    description: ` Litzia Hosted Exchange description here.`,
    category: "Service",
    subCategory: "Unique",
    price: 100.23,
    quantity: 2000,
    tier: "one",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
    InventoryItem: true,
  },
  {
    id: 805,
    title: "ServerWatch Gold",
    image: "http://www.mostshareware.com/wp-content/uploads/serverwatch.jpg",
    description: ` Server Watch GOld description here.`,
    category: "Service",
    subCategory: "Unique",
    price: 100.00,
    quantity: 2000,
    tier: "one",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
    InventoryItem: true,
  },
];

const seed = () => {
  db.Admin.bulkCreate(admin)
    .then(() => db.Product.bulkCreate(product))
    .catch((err) => {
      console.error(err);
    });
};

module.exports = admin
module.exports = product
seed();
