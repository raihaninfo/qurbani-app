import dataone from './dataone';
import datatwo from './datatwo';

const allData = [...dataone, ...datatwo];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(allData);

export default allData;