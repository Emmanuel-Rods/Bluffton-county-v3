const base = "https://townofblufftonsc-energovweb.tylerhost.net/apps"; // No trailing slash

const dateOffset = 365; // 1 = yesterday

// statuses that need to pulled using daily.js
const requiredStatuses = ["Issued"];

// permit types
const requiredSecondaryData = [
  "Addition to Apartment Building",
  "Addition to Commercial Building",
  "New Accessory Structure - Commercial",
  "New Commercial Building",
  "New Multi-Family Apartment Building",
  "New Single Family Residence",
  "New Multi-Family Condominium",
];

//status that need be updated
const updateStatuses = ["Issued"];

// exports
module.exports = {
  base,
  dateOffset,
  requiredStatuses,
  requiredSecondaryData,
  updateStatuses,
};
