module.exports = {
    birds : [
        { id: 1, name: 'blackbird', species: 'sparrow', color: 'black' }, 
        { id: 2, name: 'eagle', species: 'bird', color: 'brown' },  
        { id: 3, name: 'seagull', species: 'bird', color: 'white' },
        { id: 4, name: 'robin', species: 'sparrow', color: 'black'}
    ],

    findById: function (x) {
        const input = parseInt(x);

        for (const bird of this.birds) {
            if (bird.id === input){
                return bird;
            } 
        }
        return `Bird not found with id: ${x}`
    },

    findByColor: function (x) {
        const input = String(x);
        const birdColor = [];

        for (const bird of this.birds) {
            if (bird.color === input){
                birdColor.push(bird)
            } 
        }

        if (birdColor.length > 0){
            return birdColor;
        }
        return `Bird not found with color: ${x}` 
    },

    findBySpecies: function (x) {
        const input = String(x);
        const birdSpecies = [];

        for (const bird of this.birds) {
            if (bird.species === input){
                birdSpecies.push(bird)
            } 
        }

        if (birdSpecies.length > 0){
            return birdSpecies;
        }
        return `Species not found: ${x}` 
    }
    
}