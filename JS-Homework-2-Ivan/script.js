let year;

while (isNaN(year)) {
    year = Number(prompt("Enter a year to determine the Chinese Zodiac: "));
}

const zodiac = (year - 4) % 12;


if (zodiac === 0) {
    alert(`The Chinese Zodiac for ${year} is Rat.`);
} else if (zodiac === 1) {
    alert(`The Chinese Zodiac for ${year} is Ox.`);
} else if (zodiac === 2) {
    alert(`The Chinese Zodiac for ${year} is Tiger.`);
} else if (zodiac === 3) {
    alert(`The Chinese Zodiac for ${year} is Rabbit.`);
} else if (zodiac === 4) {
    alert(`The Chinese Zodiac for ${year} is Dragon.`);
} else if (zodiac === 5) {
    alert(`The Chinese Zodiac for ${year} is Snake.`);
} else if (zodiac === 6) {
    alert(`The Chinese Zodiac for ${year} is Horse.`);
} else if (zodiac === 7) {
    alert(`The Chinese Zodiac for ${year} is Goat.`);
} else if (zodiac === 8) {
    alert(`The Chinese Zodiac for ${year} is Monkey.`);
} else if (zodiac === 9) {
    alert(`The Chinese Zodiac for ${year} is Rooster.`);
} else if (zodiac === 10) {
    alert(`The Chinese Zodiac for ${year} is Dog.`);
} else if (zodiac === 11) {
    alert(`The Chinese Zodiac for ${year} is Pig.`);
}

