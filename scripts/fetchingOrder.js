let button = document.getElementById("create_order");

button.addEventListener("submit", async (e) => {
    e.preventDefault();

    let order = {
        name: document.querySelector("name").value,
        address: document.querySelector("address").value,
        phone: document.querySelector("phoneNumber").value,
        email: document.querySelector("email").value
    }

    const URL = "https://anuwcpmoi1.execute-api.us-east-1.amazonaws.com/dev/orders";

    const result = await fetch(URL, {
        method: "POST",
        mode: "cors",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json, text/plain",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*"
        },
        body: JSON.stringify(order)
    })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch((error) => {
            console.log("Error", error);
        });

    console.log(result);
})