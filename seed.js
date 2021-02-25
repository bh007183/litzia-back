const db = require("./models");

const admin = [
  {
    username: "FluffyWalrus",
    password: "yohanShmit11",
    email: "jeffry@gmail.com",
  },
  {
    username: "test",
    password: "test",
    email: "test@test.com",
  },
];

const product = [
  {
    id: 840,
    title: `Lenovo ThinkPad T530 15.6"`,
    image: "utils/images/LenovoThinkPadT530.jpeg",
    description: `
    Lenovo ThinkPad T530 15.6" LED Notebook with Intel Core i5 i5-3210M 2.5GHz and a 1366 x 768 HD Display preinstalled 4 GB RAM  and a  500 GB HDD and DVD-Writer included. Features Intel HD 4000 Graphics Card,Webcam and Genuine Windows 7 Professional. Estimated Battery life is 9.10 Hour Battery and uses DisplayPort for external connection`,
    category: "hardware",
    price: "450",
    quantity: 50,
    tier: "two",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
  },
  {
    id: 834,
    title: `Lenovo ThinkCentre M72e`,
    image: "utils/images/ThinkCenter.jpg",
    description: `
    Lenovo ThinkCentre M72e Desktop Computer with Intel Core i3 i3-3220 3.3GHz with a Small Form Factor and preinstalled 4 GB RAM and a 500 GB HDD and DVD-Writer. Features Intel HD 2500 Graphics Card and Genuine Windows 7 Professional uses DVI and comes with a 3-Year Warranty *monitor NOT INCLUDED`,
    category: "hardware",
    price: "450",
    quantity: 50,
    tier: "two",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
  },
  {
    id: 748,
    title: `Litzia Workstation Special`,
    image: "utils/images/workstation.jpg",
    description: `Network Certified Workstation Intel 1.8 GHZ Pentium 4 Processor with 512k cache High Speed Motherboard 400/533mhz bus 32 Bit PCI Bus Mastering Architecture Intel ChipSet Shared AGP Videot / 4 USB 2.0 Ports 1 Mouse / 1 Parallel / 2 Serial Ports 10/100 Ethernet LAN Adapter Audio/Sound Adapter 1200 Megabytes of High Speed DDR SDRAM Memory 300 Watt Power Supply 40 Gigabyte Hard Drive Ultra Enhanced IDE Interface 9.5 Millisecond Access Time CD-ROM Player Internal 52x Speed Enhanced IDE Interface 1.44 Megabyte Floppy Drive 3.5" 104 Key Windows Enhanced Keyboard Optical Three Button Mouse with Scroll Wheel - PS2/USB Windows XP Professional with CD`,
    category: "hardware",
    price: "250",
    quantity: 50,
    tier: "two",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
  },
  {
    id: 776,
    title: `Dell PowerEdge T410`,
    image: "utils/images/PowerEdgeT410.jpg",
    description: `Dell PowerEdge T410 tower server with Intel Xeon E-2224G 3.5GHz Processor included tower case with 8GB RAM and a 1TB HDD and an optical drive. OS not installed`,
    category: "hardware",
    price: "250",
    quantity: 50,
    tier: "two",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
  },
  {
    id: 779,
    title: `Dell PowerEdge T310`,
    image: "utils/images/workstation.jpg",
    description: `Dell PowerEdge T40 tower server with Intel Xeon x4340 2.4GHz Processor included tower case with 16GB RAM and 2 Dell 146GB SAS Drives, SAS 6i Raid Controller,OS not installed`,
    category: "hardware",
    price: "250",
    quantity: 50,
    tier: "two",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
  },
  {
    id: 813,
    title: `LEnovo ThinkServer RD630`,
    image: "utils/images/workstation.jpg",
    description: `Lenovo ThinkServer RD630 Rack Server w/ (2) Intel Xeon E5-2620 6 Core Processors for 12 cores total, 48GB RAM, 3 GB Usable disk Space with (6) 1TB 7.2K 6Gbps SCSI 3.5" Hot Plug Hard Drives for RAID 10, Raid 700 adaptor; 800W Dual Hot-Plug Redundant Power Supply; QuadPort Network Adaptor; Premium Management adaptor; 5-Yr Hardware Warranty NBD Onsite Hardware Repair Service
    `,
    category: "hardware",
    price: "250",
    quantity: 50,
    tier: "two",
    featured: true,
    updatedBy: "KEVIN L",
    tax: "Taxes not included",
    shipping: "Shipping not included",
  },
  {
    title: "coolComp",
    image: "http://placekitten.com/g/200/300",
    description: `
      \US plane manufacturer Boeing has recommended grounding all of the 777-model aircraft which have the same type of engine that suffered failure and shed debris over Denver on Saturday
       It said 128 jets should be suspended until inspections are carried out
      United Airlines and Japans two main operators have already stopped using 56 planes with the same engine.
      Flight 328, carrying 231 passengers, was forced to make an emergency landing at Denver airport. No-one was injured.
      While an investigation is ongoing, we recommended suspending operations of the 69 in-service and 59 in-storage 777 aircraft powered by Pratt & Whitney 4000-112 engines, the company said in a statement
      Pratt & Whitney said it had dispatched a team to work with investigators.
      According to the Federal Aviation Administration FAA, United is the only US airline flying this model of 777, with the others being in Japan and South Korea
      Korean Air, which has six planes in operation and 10 in storage, said it was awaiting instruction from South Korean regulators regarding any measures for its 777 jets
      United Flight 328, bound for Honolulu, suffered a failure in its right-hand engine. Debris from the jet was found scattered over a nearby residential area after it returned to Denver airport`,
    category: "hardware",
    price: 100.0,
    quantity: 2000,
    tier: "one",
    featured: true,
  },
];

const seed = () => {
  db.Admin.bulkCreate(admin).then(() => db.Product.bulkCreate(product));
};

seed();
