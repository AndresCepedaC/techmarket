/**
 * ╔══════════════════════════════════════════╗
 * ║     TECH MARKET – Datos de Productos    ║
 * ╠══════════════════════════════════════════╣
 * ║  Edita este archivo para agregar,       ║
 * ║  modificar o eliminar productos.        ║
 * ╚══════════════════════════════════════════╝
 */
window.PRODUCTS = [
    {
        id: 1,
        name: "NVIDIA GeForce RTX 4090",
        price: 1599.99,
        category: "Tarjetas Gráficas",
        mainImage: "https://m.media-amazon.com/images/I/61WnMmFP+KL._AC_SL1000_.jpg",
        gallery: [
            "https://m.media-amazon.com/images/I/61WnMmFP+KL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71RFJmR8y1L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71GBb5fwp4L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61P1FQHB3iL._AC_SL1200_.jpg"
        ],
        shortDesc: "La GPU más potente del mundo para gaming y creación de contenido. Arquitectura Ada Lovelace con trazado de rayos de última generación.",
        specs: {
            "VRAM": "24 GB GDDR6X",
            "Boost Clock": "2.52 GHz",
            "CUDA Cores": "16,384",
            "RT Cores": "3ra Generación",
            "TDP": "450W",
            "Interfaz": "PCIe 4.0 x16"
        }
    },
    {
        id: 2,
        name: "Sony WH-1000XM5",
        price: 349.99,
        category: "Audio",
        mainImage: "https://m.media-amazon.com/images/I/61+btxzpfDL._AC_SL1500_.jpg",
        gallery: [
            "https://m.media-amazon.com/images/I/61+btxzpfDL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/51aXvjzcukL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/5140MV+BQTL._AC_SL1500_.jpg"
        ],
        shortDesc: "Audífonos premium con cancelación de ruido líder en la industria. Sonido Hi-Res y hasta 30 horas de batería.",
        specs: {
            "Driver": "30 mm",
            "ANC": "Sí, adaptativo",
            "Bluetooth": "5.3",
            "Batería": "30 horas",
            "Peso": "250 g",
            "Códecs": "LDAC / AAC / SBC"
        }
    },
    {
        id: 3,
        name: "Samsung 990 PRO 2TB",
        price: 179.99,
        category: "Almacenamiento",
        mainImage: "https://m.media-amazon.com/images/I/51B7BzJ+GPL._AC_SL1000_.jpg",
        gallery: [
            "https://m.media-amazon.com/images/I/51B7BzJ+GPL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/41Nmz-OGjuL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71IV1z5cLSL._AC_SL1500_.jpg"
        ],
        shortDesc: "SSD NVMe de alto rendimiento con velocidades de lectura de hasta 7,450 MB/s. Ideal para gaming y estaciones de trabajo.",
        specs: {
            "Capacidad": "2 TB",
            "Lectura": "7,450 MB/s",
            "Escritura": "6,900 MB/s",
            "Interfaz": "PCIe 4.0 x4 NVMe",
            "TBW": "1,200 TB",
            "Factor": "M.2 2280"
        }
    },
    {
        id: 4,
        name: "ASUS ROG Swift PG27AQDM",
        price: 799.99,
        category: "Monitores",
        mainImage: "https://m.media-amazon.com/images/I/71S1fcSmURL._AC_SL1500_.jpg",
        gallery: [
            "https://m.media-amazon.com/images/I/71S1fcSmURL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71xA8cJr3ML._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81Grf7LHPGL._AC_SL1500_.jpg"
        ],
        shortDesc: "Monitor gaming OLED de 27\" con 240Hz y 0.03ms. Colores perfectos y negros absolutos para la mejor experiencia visual.",
        specs: {
            "Panel": "OLED",
            "Tamaño": "27 pulgadas",
            "Resolución": "2560 x 1440 (QHD)",
            "Refresh Rate": "240 Hz",
            "Respuesta": "0.03 ms (GTG)",
            "HDR": "True Black 400"
        }
    }
];
