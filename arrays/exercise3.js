let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.splice(0, 1);
energy[energy.length] = 'geothermal';

console.log(energy);