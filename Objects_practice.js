function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
}

var houseKeeper1 = new HouseKeeper (12, "jane", ["kitchen", "bathroom"]);
var houseKeeper2 = new HouseKeeper (3, "Mike", ["livingroom", "bedroom"]);
