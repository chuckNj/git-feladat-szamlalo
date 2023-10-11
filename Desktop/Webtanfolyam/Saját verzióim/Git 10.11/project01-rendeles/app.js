const orders = [
    {
        id: 1,
        pizza: "Hawaii",
        extra: "Kukorica",
        ital: "Pepsi zero",
        ar: 1500,
        kep: "https://images.pexels.com/photos/17907810/pexels-photo-17907810/free-photo-of-elelmiszer-pizza-minta-etkezes.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },

    {
        id: 2,
        pizza: "Magyaros",
        extra: "Jalaeno",
        ital: "Fanta",
        ar: 3500,
        kep: "https://images.pexels.com/photos/9792460/pexels-photo-9792460.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },

    {
        id: 3,
        pizza: "Ranger",
        extra: "Csirkemell",
        ital: "Coca cola",
        ar: 2000,
        kep: "https://images.pexels.com/photos/11111603/pexels-photo-11111603.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },

    {
        id: 4,
        pizza: "XXL Pizza",
        extra: "Szabadon választható",
        ital: "Szabadon választható",
        ar: 5000,
        kep: "https://images.pexels.com/photos/9792476/pexels-photo-9792476.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },

    {
        id: 5,
        pizza: "Családi pizza",
        extra: "Szabadon választható 2 íz",
        ital: "Pepsi",
        ar: 5000,
        kep: "https://images.pexels.com/photos/9552566/pexels-photo-9552566.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },

    {
        id: 6,
        pizza: "Bud Spencer",
        extra: "Hagymásbab",
        ital: "Sör",
        ar: 6500,
        kep: "https://images.pexels.com/photos/6697469/pexels-photo-6697469.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    // További rendelések hozzáadása itt
];

const orderContainer = document.getElementById("orderContainer");

// Rendelések megjelenítése
function displayOrders() {
    orderContainer.innerHTML = ""; // Törölje az eddigi tartalmat

    orders.forEach((order) => {
        const orderDiv = document.createElement("div");
        orderDiv.classList.add("order");

        // Rendelés adatainak megjelenítése
        orderDiv.innerHTML = `
            <h2>Rendelés #${order.id}</h2>
            <img src="${order.kep}" alt="${order.pizza}">
            <p>Pizza: ${order.pizza}</p>
            <p>Extra: ${order.extra}</p>
            <p>Ital: ${order.ital}</p>
            <p>Ár: ${order.ar} Ft</p>
        `;

        orderContainer.appendChild(orderDiv);
    });
}

displayOrders(); // Megjelenítjük az inicializált rendeléseket
