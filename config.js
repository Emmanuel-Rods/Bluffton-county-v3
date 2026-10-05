const base = "https://townofblufftonsc-energovweb.tylerhost.net/apps"; // No trailing slash

const dateOffset = 2; // 1 = yesterday

// statuses that need to pulled using daily.js
const requiredStatuses = ["Issued","CO","Final"];

// permit types
const requiredSecondaryData = [
  // "New Single Family Residence",
  // "New Modular Home",
  // "New Multi-Family Apartment Building",
  // "New Multi-Family Condominium",
  // "Res New - Contributing Resource",
  // "Res Remodel - Contributing Resource",
  // "Res Addition - Contributing Resource",
  // "Addition to Accessory Structure - Residential",
  // "New Commercial Building",
  // "Modular Business Office",
  // "New Accessory Structure - Commercial",
  // "New Assisted Living Facility",
  // "New Senior Housing Building",
  // "Com New - Contributing Resource",
  // "Remodel Commercial Building",
  // "Com Remodel - Contributing Resource",
  // "Addition to Commercial Building",
  // "Addition to Apartment Building",
  // "Addition to Condominium Building",
  // "Addition to Assisted Living Facility",
  // "Addition to Senior Housing",
  // "Addition to Modular Office",
  
  // "New Multi-Family Apartment Building",
  
  // "New Multi-Family Condominium",





  "New Single Family Residence",
  "New Modular Home",
  "New Multi-Family Apartment Building",
  "New Multi-Family Condominium",
  "Res New - Contributing Resource",
  "Residential NEW - DO NOT USE - New Assisted Living",
  "Residential NEW - DO NOT USE - New Duplex",
  "Residential NEW - DO NOT USE - New Modular Home",
  "Residential NEW - DO NOT USE - New Multi-Family-Apt",
  "Residential NEW - DO NOT USE - New Multi-Family-Condo",
  "Residential NEW - DO NOT USE - New Senior Housing",
  "Residential NEW - DO NOT USE - New Single Family/Duplex",
  "Residential NEW - DO NOT USE - New Townhouse",
  "Res Remodel - Contributing Resource",
  "Residential ADDITION/REMODEL - Add/Rem Assisted Living",
  "Residential ADDITION/REMODEL - Add/Rem Duplex",
  "Residential ADDITION/REMODEL - Add/Rem Multi-Family-Apt",
  "Residential ADDITION/REMODEL - Add/Rem Multi-Family-Condo",
  "Residential ADDITION/REMODEL - Add/Rem Senior Housing",
  "Residential ADDITION/REMODEL - Add/Rem Single Family/Duplex",
  "Residential ADDITION/REMODEL - Add/Rem Townhouse",
  "Res Addition - Contributing Resource",
  "Addition to Accessory Structure - Residential",
  "New Commercial Building",
  "Shell",
  "Modular Business Office",
  "New Accessory Structure - Commercial",
  "New Assisted Living Facility",
  "New Senior Housing Building",
  "Com New - Contributing Resource",
  "Commercial NEW - New Commercial Building",
  "Commercial NEW - Shell",
  "Commercial NEW - Modular Business Office",
  "Commercial NEW - Accessory Structure",
  "Remodel Commercial Building",
  "Com Remodel - Contributing Resource",
  "Commercial Addition/Remodel - Commercial Addition/Remodel",
  "Commercial Addition/Remodel - Shell Upfit",
  "Commercial Addition/Remodel - Accessory Structure",
  "Addition to Commercial Building",
  "Addition to Apartment Building",
  "Addition to Condominium Building",
  "Addition to Assisted Living Facility",
  "Addition to Senior Housing",
  "Addition to Modular Office",
  "Addition to Accessory Structure - Commercial",
  "Com Addition - Contributing Resource"

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
