let restaurant = {
  name: 'ABC',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: partySize => {
    const seatsLeft = restaurant.guestCapacity - restaurant.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: partySize => {
    if (restaurant.checkAvailability(partySize)) {
      return (restaurant.guestCount += partySize);
    } else {
      return `you have to wait`;
    }
  },
  removeParty: partySize => (restaurant.guestCount -= partySize)
};
console.log(restaurant.seatParty(72));
console.log(restaurant.checkAvailability(1));
console.log(restaurant.seatParty(72));
console.log(restaurant.removeParty(17));
console.log(restaurant.guestCount);
console.log(restaurant.checkAvailability(12));
