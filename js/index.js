// items
const menu = [
    {
        id: 1,
        title:"jolloff"
        category: "Dinner",
        price: 15.99,
        img: "../",
        desc:``,

    },
    {
        id: 2,
        title:"jolloff"
        category: "Dinner",
        price: 15.99,
        img: "../",
        desc:``,

    },
    {
        id: 3,
        title:"jolloff"
        category: "Dinner",
        price: 15.99,
        img: "../",
        desc:``,

    },
    {
        id: 4,
        title:"jolloff"
        category: "Dinner",
        price: 15.99,
        img: "../",
        desc:``,

    },
    {
        id: 5,
        title:"jolloff"
        category: "Dinner",
        price: 15.99,
        img: "../",
        desc:``,

    },
    {
        id: 6,
        title:"jolloff"
        category: "Dinner",
        price: 15.99,
        img: "../",
        desc:``,

    },
]



const sectionCenter = document.querySelector("section-center");

window.addEventListener("DOMContentLoaded", function () {
    let displayMenu = menu.map(function(item){
        console.log(item);

        return item;

    });
    console.log(displayMenu);
});











