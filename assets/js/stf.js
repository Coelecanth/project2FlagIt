let lineBreak = "<br>"

console.log("connected")
const btnStudy = document.getElementById("study-btn");
let studyContainer = document.getElementById("study-container");
studyContainer.innerHTML = lineBreak
const countryArray = [
    {
      "locale": "Afghanistan",
      "flagName": "AF-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Albania",
      "flagName": "AL-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Algeria",
      "flagName": "AG-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "American Samoa",
      "flagName": "AQ-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Andorra",
      "flagName": "AN-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Angola",
      "flagName": "AO-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Anguilla",
      "flagName": "AV-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Antartica",
      "flagName": "AY-flag.jpg",
      "territory": "Rest of world"
    },
    {
      "locale": "Antigua and Barbuda",
      "flagName": "AC-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Argentina",
      "flagName": "AR-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Armenia",
      "flagName": "AM-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Aruba",
      "flagName": "AA-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Australia",
      "flagName": "AS-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Austria",
      "flagName": "AU-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Azerbaijan",
      "flagName": "AJ-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Bahamas",
      "flagName": "BF-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Bahrain",
      "flagName": "BA-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Bangladesh",
      "flagName": "BG-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Barbados",
      "flagName": "BB-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Belarus",
      "flagName": "BO-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Belgium",
      "flagName": "BE-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Belize",
      "flagName": "BH-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Benin",
      "flagName": "BN-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Bermuda",
      "flagName": "BD-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Bhutan",
      "flagName": "BT-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Boliivia",
      "flagName": "BL-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Bosnia and Herzegovina",
      "flagName": "BK-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Botswana",
      "flagName": "BC-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Brazil",
      "flagName": "BR-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "British Indian Ocean Territory",
      "flagName": "IO-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "British Virgin Islands",
      "flagName": "VI-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Brunei",
      "flagName": "BX-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Bulgaria",
      "flagName": "BU-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Burkina Faso",
      "flagName": "UV-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Burma",
      "flagName": "BM-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Burundi",
      "flagName": "BY-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Cabo Verde",
      "flagName": "CV-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Cambodia",
      "flagName": "CB-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Camaroon",
      "flagName": "CM-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Canada",
      "flagName": "CA-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Cayman islands",
      "flagName": "CJ-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Central African Republic",
      "flagName": "CT-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Chad",
      "flagName": "CD-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Chile",
      "flagName": "CI-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "China",
      "flagName": "CH-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Christmas Island",
      "flagName": "KT-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Colombia",
      "flagName": "CO-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Comoros",
      "flagName": "CN-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Congo, Democratic Republic of the",
      "flagName": "CG-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Congo, Republic of the",
      "flagName": "CF-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Cook Islands",
      "flagName": "CW-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Costa Rica",
      "flagName": "CS-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Cote d'Ivoire",
      "flagName": "IV-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Croatia",
      "flagName": "HR-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Cuba",
      "flagName": "CU-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Curacao",
      "flagName": "UC-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Cyprus",
      "flagName": "CY-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Czechia",
      "flagName": "EZ-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Denmark",
      "flagName": "DA-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Djibouti",
      "flagName": "DJ-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Dominica",
      "flagName": "DO-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Dominican Republic",
      "flagName": "DR-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Ecuador",
      "flagName": "EC-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Egypt",
      "flagName": "EG-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "El Salvador",
      "flagName": "ES-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Equatorial Guinea",
      "flagName": "EK-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Eritrea",
      "flagName": "ER-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Estonia",
      "flagName": "EN-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Eswatini",
      "flagName": "WZ-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Ethiopia",
      "flagName": "ET-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "European Union",
      "flagName": "EE-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Falkland Islands",
      "flagName": "FK-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Faroe Islands",
      "flagName": "FO-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Fiji",
      "flagName": "FJ-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Finland",
      "flagName": "FI-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "France",
      "flagName": "FR-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "French Polynesia",
      "flagName": "FP-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Gabon",
      "flagName": "GB-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Gambia, The",
      "flagName": "GA-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Georgia",
      "flagName": "GG-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Germany",
      "flagName": "GM-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Ghana",
      "flagName": "GH-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Gibraltar",
      "flagName": "GI-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Greece",
      "flagName": "GR-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Greenland",
      "flagName": "GL-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Grenada",
      "flagName": "GJ-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Guam",
      "flagName": "GQ-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Guatemala",
      "flagName": "GT-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Guernsey",
      "flagName": "GK-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Guinea",
      "flagName": "GV-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Guinea-Bissau",
      "flagName": "PU-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Guyana",
      "flagName": "GY-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Haiti",
      "flagName": "HA-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Holy See (Vatican City)",
      "flagName": "VT-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Honduras",
      "flagName": "HO-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Hong Kong",
      "flagName": "HK-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Hungary",
      "flagName": "HU-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Iceland",
      "flagName": "IC-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "India",
      "flagName": "IN-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Indonesia",
      "flagName": "ID-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "iran",
      "flagName": "IR-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "iraq",
      "flagName": "IZ-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Ireland",
      "flagName": "EI-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Isle of Man",
      "flagName": "IM-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Israel",
      "flagName": "IS-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Italy",
      "flagName": "IT-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Jamaica",
      "flagName": "JM-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "japan",
      "flagName": "JA-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Jersey",
      "flagName": "JE-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Jordan",
      "flagName": "JO-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Kazakhstan",
      "flagName": "KZ-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Kenya",
      "flagName": "KE-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Kiribati",
      "flagName": "KR-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "North Korea",
      "flagName": "KN-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "South Korea",
      "flagName": "KS-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Kosovo",
      "flagName": "KV-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Kuwait",
      "flagName": "KU-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Kyrgyzstan",
      "flagName": "KG-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Laos",
      "flagName": "LA-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Latvia",
      "flagName": "LG-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Lebanon",
      "flagName": "LE-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Lesotho",
      "flagName": "LT-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Liberia",
      "flagName": "LI-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Libya",
      "flagName": "LY-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Liechtenstein",
      "flagName": "LS-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Lithuania",
      "flagName": "LH-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Luxembourg",
      "flagName": "LU-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Macau",
      "flagName": "MC-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Madagascar",
      "flagName": "MA-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Malawi",
      "flagName": "MI-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Malaysia",
      "flagName": "MY-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Maldives",
      "flagName": "MV-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Mali",
      "flagName": "ML-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Malta",
      "flagName": "MT-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Marshall Islands",
      "flagName": "RM-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Mauritania",
      "flagName": "MR-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Mauritius",
      "flagName": "MP-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Mexico",
      "flagName": "MX-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Federated States of Micronesia",
      "flagName": "FM-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Moldova",
      "flagName": "MD-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Monaco",
      "flagName": "MN-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Mongolia",
      "flagName": "MG-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Montenegro",
      "flagName": "MJ-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Montserrat",
      "flagName": "MH-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Morocco",
      "flagName": "MO-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Mozambique",
      "flagName": "MZ-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Namibia",
      "flagName": "WA-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Nauru",
      "flagName": "NR-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Nepal",
      "flagName": "NP-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Netherlands",
      "flagName": "NL-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "New Zealand",
      "flagName": "NZ-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Nicaragua",
      "flagName": "NU-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Niger",
      "flagName": "NG-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Nigeria",
      "flagName": "NI-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Niue",
      "flagName": "NE-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Norfolk Island",
      "flagName": "NF-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "North Macedonia",
      "flagName": "MK-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Northern Mariana Islands",
      "flagName": "CQ-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Norway",
      "flagName": "NO-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Oman",
      "flagName": "MU-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Pakistan",
      "flagName": "PK-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Palau",
      "flagName": "PS-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Panama",
      "flagName": "PM-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Papua New Guinea",
      "flagName": "PP-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Paraguay",
      "flagName": "PA-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Peru",
      "flagName": "PE-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Philippines",
      "flagName": "RP-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Pitcairn Islands",
      "flagName": "PC-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Poland",
      "flagName": "PL-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Portugal",
      "flagName": "PO-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Puerto Rico",
      "flagName": "RQ-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Qatar",
      "flagName": "QA-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Romania",
      "flagName": "RO-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Russia",
      "flagName": "RS-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Rwanda",
      "flagName": "RW-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Saint Helena, Ascension, and Tristan da Cunha",
      "flagName": "SH-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Saint Kitts and Nevis",
      "flagName": "SC-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Saint Lucia",
      "flagName": "ST-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Saint Pierre and Miquelon",
      "flagName": "SB-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Saint Vincent and the Grenadines",
      "flagName": "VC-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Samoa",
      "flagName": "WS-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "San Marino",
      "flagName": "SM-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Sao Tome and Principe",
      "flagName": "TP-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Saudi Arabia",
      "flagName": "SA-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Senegal",
      "flagName": "SG-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Serbia",
      "flagName": "RI-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Seychelles",
      "flagName": "SE-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Sierra Leone",
      "flagName": "SL-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Singapore",
      "flagName": "SN-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Sint Maarten",
      "flagName": "NN-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Slovakia",
      "flagName": "LO-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Slovenia",
      "flagName": "SI-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Solomon Islands",
      "flagName": "BP-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Somalia",
      "flagName": "SO-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "South Africa",
      "flagName": "SF-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "South Georgia and South Sandwich Islands",
      "flagName": "SX-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "South Sudan",
      "flagName": "OD-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Spain",
      "flagName": "SP-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Sri Lanka",
      "flagName": "CE-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Sudan",
      "flagName": "SU-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Suriname",
      "flagName": "NS-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Sweden",
      "flagName": "SW-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Switzerland",
      "flagName": "SZ-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "Syria",
      "flagName": "SY-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Taiwan",
      "flagName": "TW-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Tajikistan",
      "flagName": "TI-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Tanzania",
      "flagName": "TZ-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Thailand",
      "flagName": "TH-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Timor-Leste",
      "flagName": "TT-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Togo",
      "flagName": "TO-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Tokelau",
      "flagName": "TL-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Tonga",
      "flagName": "TN-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Trinidad and Tobago",
      "flagName": "TD-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Tunisia",
      "flagName": "TS-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Turkey",
      "flagName": "TU-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Turkmenistan",
      "flagName": "TX-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Turks and Caicos Islands",
      "flagName": "TK-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Tuvalu",
      "flagName": "TV-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Uganda",
      "flagName": "UG-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Ukraine",
      "flagName": "UP-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "United Arab Emirates",
      "flagName": "AE-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "United Kingdom",
      "flagName": "UK-flag.jpg",
      "territory": "Europe"
    },
    {
      "locale": "United States",
      "flagName": "US-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Uruguay",
      "flagName": "UY-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Uzbekistan",
      "flagName": "UZ-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Vanuatu",
      "flagName": "NH-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Venezuela",
      "flagName": "VE-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Vietnam",
      "flagName": "VM-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Virgin Islands",
      "flagName": "VQ-flag.jpg",
      "territory": "Americas"
    },
    {
      "locale": "Wallis and Futuna",
      "flagName": "WF-flag.jpg",
      "territory": "Oceania"
    },
    {
      "locale": "Yemen",
      "flagName": "YM-flag.jpg",
      "territory": "Asia"
    },
    {
      "locale": "Zambia",
      "flagName": "ZA-flag.jpg",
      "territory": "Africa"
    },
    {
      "locale": "Zimbabwe",
      "flagName": "ZI-flag.jpg",
      "territory": "Africa"
    }
  ]
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

generateStudy();

function generateStudy() {
    // generate a dynamic list of all countries on page load
    countryArray.forEach(countryArray => {
        studyContainer.innerHTML += `<div class="txt-powederblue" ><a class="txt-powederblue" href=assets/css/img/>"${countryArray.flagName}"</a></div>`;
    });
}

