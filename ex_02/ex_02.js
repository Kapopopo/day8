
const schools = [
    { name: "Paris", lat: 48.8662979, lng: 2.3737895 },
    { name: "Bordeaux", lat: 44.8744232, lng: -0.5784717 },
    { name: "Lyon", lat: 45.7682601, lng: 4.8329759 },
    { name: "Toulouse", lat: 43.6020745, lng: 1.4292167 },
    { name: "Nantes", lat: 47.2184, lng: -1.5755001 },
];

const map = L.map("map").setView([46.603354, 1.888334], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const epitech_icon = L.icon({
    iconUrl: "https://www.pngkit.com/png/detail/459-4596239_epitech-epitech-logo-transparent.png",
    iconSize: [32, 45],
});

schools.forEach((school) => {
    L.marker([school.lat, school.lng], { icon: epitech_icon })
        .addTo(map)
        .bindPopup(`for instance, ${school.name} rocks!`)
        .openPopup();
});