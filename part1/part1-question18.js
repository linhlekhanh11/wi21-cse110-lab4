let statistics = {
    redCars: 21, 
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
for (let i in statistics) {
    if (statistics[i] % 2 == 1 || i[0] == 'r')
        console.log("Property: " + i + "  value: " + statistics[i]);
}