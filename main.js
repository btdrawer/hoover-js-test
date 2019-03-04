const main = () => {
    const reader = require('./reader')();

    //room dimensions
    var dimensions = reader[0],
    //coordinates[0] represents the x-axis; coordinates[1] represents the y-axis
    coordinates = [parseInt(reader[1][0]), parseInt(reader[1][1])];
    //directions
    directions = reader[reader.length-1],
    //coordinates of dirty spots
    dirt = reader.slice(2, reader.length-1),
    //counter for number of dirty spots cleaned
    cleaned = 0;

    //Loop through each direction - 'N', 'S', 'E', 'W'
    directions.forEach((d) => {
        switch(d) {
            case 'N':
                coordinates[1] >= dimensions[1] ? coordinates[1] : coordinates[1] += 1;
                break;
            case 'S':
                coordinates[1] <= 0 ? coordinates[1] : coordinates[1] -= 1;
                break;
            case 'E':
                coordinates[0] >= dimensions[0] ? coordinates[0] : coordinates[0] += 1;
                break;
            case 'W':
                coordinates[0] <= 0 ? coordinates[0] : coordinates[0] -= 1;
                break;
            default:
                break;
        }

        //Loop through coordinates of dirty spots
        for (var i = 0; i < dirt.length; i++) {
            //Check if current location needs to be cleaned
            if (parseInt(dirt[i][0]) === coordinates[0] && parseInt(dirt[i][1]) === coordinates[1]) {
                //add to cleaned counter
                cleaned += 1;

                //Replace coordinates of dirt with '-1' indicates that spot has now been cleaned
                dirt[i] = -1;
            }
        }
    });

    console.log(coordinates[0] + ' ' + coordinates[1]);
    console.log(cleaned + '');
}

main();

module.exports = main;