export const places = [
    {
        name: "Bir",
        img: "/images/places/bir.jpeg",
        webp: "/images/places/webp/place1.webp",
        stats: 1200,
        latitude: "32.0441412",
        longitude: "76.7191923",
        route: "/locations/birhp",
        locked:false
    },
    {
        name: "place2",
        img: "/images/places/place2.jpg",
        webp: "/images/places/webp/place2.webp",
        stats: 1100,
        route: "/locations/place2",
        locked:true,
    },
    {
        name: "place3",
        img: "/images/places/place3.jpg",
        webp: "/images/places/webp/place3.webp",
        stats: 12800,
        route: "/locations/place3",
        locked: true
    }
]


export const vendorData = [
    {
        place: "birhp",
        vendors: [
            {
                name: "Winged up paragliding",
                img: "/images/places/birhp/winged.jpg",
                webp: "/images/places/webp/place1.webp",
                stats: 12100,
                vendor: "Phone",
                price: "Rs.1200",
                vendorPhone: "080912 94140",
                route: "/locations/birhp/wingedpara?latitude=32.0377764&longitude=76.7130436",
                address:"Near Zhim Zhim guest house, Bir Colony, Bir, Himachal Pradesh 176077"
            },
            {
                name: "Mills peak adventures",
                img: "/images/places/birhp/mills.jpg",
                webp: "/images/places/webp/place2.webp",
                stats: 11800,
                vendor: "Phone",
                price: "Rs.11100",
                vendorPhone: "082195 24810",
                route: "/locations/birhp/mills?latitude=32.0435676&longitude=76.7062634",
                address:"Adv Landing Site, Satish Kumar Mills Peak, Road, Bir Colony, Suja, Himachal Pradesh 176077"
            },
            {
                name: "Paragliding Landing Zone",
                img: "/images/places/birhp/paraland.jpg",
                webp: "/images/places/webp/place3.webp",
                stats: 15080,
                vendor: "Phone",
                price: "Rs.1300",
                vendorPhone: "08544794593",
                route: "/locations/birhp/paraland?latitude=32.0421254&longitude=76.7082904",
                address : "Chaugan - Sansal Rd, Bir Colony, Suja, Himachal Pradesh 176077"
            },
            {
                name: "ParaBooking",
                img: "/images/places/birhp/parabook.jpg",
                webp: "/images/places/webp/place3.webp",
                stats: 15080,
                vendor: "Phone",
                price: "Rs.1300",
                vendorPhone: "08544794593",
                route: "/locations/birhp/parabook?latitude=32.0332761&longitude=76.7187079",
                address : "The HANGAR, VPO, Bir - Matru Rd, opposite Garden Cafe, near Chowgan, Chowk, Bir, Himachal Pradesh 176077"
            }
        ]
    },
    {
        place: "place2",
        vendors: [
            {
                name: "vendor1",
                img: "/images/places/place1.jpg",
                webp: "/images/places/webp/place1.webp",
                stats: 16100,
                vendor: "Aman",
                price: "Rs.1200",
                vendorPhone: "1234567890",
                latitude: "32.0441412",
                longitude: "76.7191923",
                route: "/locations/place1"
            },
            {
                name: "vendor2",
                img: "/images/places/place2.jpg",
                webp: "/images/places/webp/place2.webp",
                stats: 31800,
                vendor: "Hagrim",
                price: "Rs.11100",
                vendorPhone: "1234567890",
                route: "/locations/place2/vendor2"
            },
            {
                name: "vendor3",
                img: "/images/places/place3.jpg",
                webp: "/images/places/webp/place3.webp",
                stats: 55080,
                vendor: "Pandu",
                price: "Rs.1300",
                vendorPhone: "1234567890",
                route: "/locations/place3"
            }
        ]
    }
]

export const teamData = [
    {
        name: "Agrim Kaundal",
        linkedIn: "https://www.linkedin.com/in/agrim-kaundal/",
        github: "https://github.com/WhiteWalker07/",
        img: "/images/team/agrim.jpg",
        webp: "/images/team/webp/agrim.webp",
    },
    {
        name: "Aman Jagotra",
        linkedIn: "https://www.linkedin.com/in/aman-jagotra-26bb38207/",
        github: "https://github.com/DragnEmperor",
        img: "/images/team/aman.jpg",
        webp: "/images/team/webp/aman.webp",
    },
    {
        name: "Aastha Berry",
        linkedIn: "https://www.linkedin.com/in/aastha-berry-582160203/",
        github: "https://github.com/Aastha1902",
        img: "/images/team/astha.jpg",
        webp: "/images/team/webp/astha.webp",
    },
    {
        name: "Suyash Sachdeva",
        linkedIn: "https://www.linkedin.com/in/pandu-baletra-5b1b3b1b3/",
        github: "https://www.github.com/pandubaletra",
        img: "/images/team/sachdeva.jpg",
        webp: "/images/team/webp/sachdeva.webp",
    },
]