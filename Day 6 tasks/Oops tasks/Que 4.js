class Uber {
  constructor(distance, time) {
      this.distance = distance;
      this.time = time;
  }

  getPrice() {
      const baseFare = 2.0;
      const costPerKm = 1.5;
      const costPerMinute = 0.5;

      const distanceCost = this.distance * costPerKm;
      const timeCost = this.time * costPerMinute;

      return baseFare + distanceCost + timeCost;
  }
}

const ride = new Uber(10, 30); // 10 km, 30 minutes
const price = ride.getPrice();

console.log("Price: " + price.toFixed(2)+" Rupees!"); // output the price to the console
