console.log('***** Music Collection *****')

let Collection = [];

let arrayofRecords = [
    {
    
        title: 'Lateralus',
        artist: 'Tool',
        yearPublished: 2001
    },
    {
        title: 'The Essential Billy Joel',
        artist: 'Billy Joel',
        yearPublished: 2001
    },
    {
        title: 'Peace Is The Mission',
        artist: 'Major Lazer',
        yearPublished: 2015
    },
    {
        title: 'Freedom of Choice',
        artist: 'Devo',
        yearPublished: 1980
    },
    {
        title: 'Jack In The Box',
        artist: 'Meanhead',
        yearPublished: 2012
    },
    {
        title: 'Here',
        artist: 'The Twisters',
        yearPublished:1979
    },
    {
        title: 'Absolute',
        artist: 'Pink Doughnuts',
        yearPublished: 1994
    }
];



function addToCollection(title, artist, yearPublished) {
    let record = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };

    Collection.push(record);
    return record;
}
//test addtocollection
console.log(addToCollection('Absolute', 'Pink Doughnuts', 1994));

for (let record of arrayofRecords) {
   console.log('Adding Record', addToCollection(record.title, record.artist, record.yearPublished));
}

console.log(Collection);


function showCollection(arrayParameter) {
    console.log('Number of items in the array: ' + arrayParameter.length);

    for (let loopedArray of arrayParameter) {
        console.log(`${loopedArray.title} by ${loopedArray.artist}, published in ${loopedArray.yearPublished}. `);
    }
}

showCollection(Collection);

function findbyArtist(artist) {
    let newArray = [];
    for (let pulledArtist of Collection) {
        if (artist === pulledArtist.artist) {
            newArray.push(pulledArtist);
        }         
    }
    return newArray;
}

let artist = 'Billy Joel';



console.log(`Search for albums by ${artist}:` , findbyArtist(artist));


