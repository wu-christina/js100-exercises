let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let i = 0; i < fish.length; i += 1) {
   if (fish[i] === 'Nemo') break;
   console.log(fish[i]);
}