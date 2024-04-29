const countryArray = [
    {
      "country": "Afghanistan",
      "flag-name": "AF-flag.jpg",
      "territory": "Asia",
      "lookelike": 4
    },
    {
      "country": "Albania",
      "flag-name": "AL-flag.jpg",
      "territory": "Europe",
      "lookelike": 33
    },
    {
      "country": "Algeria",
      "flag-name": "AG-flag.jpg",
      "territory": "Africa",
      "lookelike": 18
    },
    {
      "country": "American Samoa",
      "flag-name": "AQ-flag.jpg",
      "territory": "Oceania",
      "lookelike": 27
    },
    {
      "country": "Andorra",
      "flag-name": "AN-flag.jpg",
      "territory": "Europe",
      "lookelike": 2
    },
    {
      "country": "Angola",
      "flag-name": "AO-flag.jpg",
      "territory": "Africa",
      "lookelike": 22
    },
    {
      "country": "Anguilla",
      "flag-name": "AV-flag.jpg",
      "territory": "Americas",
      "lookelike": 36
    },
    {
      "country": "Antartica",
      "flag-name": "AY-flag.jpg",
      "territory": "Americas",
      "lookelike": 21
    },
    {
      "country": "Antigua and Barbuda",
      "flag-name": "AC-flag.jpg",
      "territory": "Americas",
      "lookelike": 27
    },
    {
      "country": "Argentina",
      "flag-name": "AR-flag.jpg",
      "territory": "Americas",
      "lookelike": 40
    },
    {
      "country": "Armenia",
      "flag-name": "AM-flag.jpg",
      "territory": "Asia",
      "lookelike": 38
    },
    {
      "country": "Aruba",
      "flag-name": "AA-flag.jpg",
      "territory": "Americas",
      "lookelike": 20
    },
    {
      "country": "Australia",
      "flag-name": "AS-flag.jpg",
      "territory": "Oceania",
      "lookelike": 36
    },
    {
      "country": "Austria",
      "flag-name": "AU-flag.jpg",
      "territory": "Europe",
      "lookelike": 6
    },
    {
      "country": "Azerbaijan",
      "flag-name": "AJ-flag.jpg",
      "territory": "Asia",
      "lookelike": 34
    },
    {
      "country": "Bahamas",
      "flag-name": "BF-flag.jpg",
      "territory": "Americas",
      "lookelike": 31
    },
    {
      "country": "Bahrain",
      "flag-name": "BA-flag.jpg",
      "territory": "Asia",
      "lookelike": 37
    },
    {
      "country": "Bangladesh",
      "flag-name": "BG-flag.jpg",
      "territory": "Asia",
      "lookelike": 7
    },
    {
      "country": "Barbados",
      "flag-name": "BB-flag.jpg",
      "territory": "Americas",
      "lookelike": 31
    },
    {
      "country": "Belarus",
      "flag-name": "BO-flag.jpg",
      "territory": "Europe",
      "lookelike": 23
    },
    {
      "country": "Belgium",
      "flag-name": "BE-flag.jpg",
      "territory": "Europe",
      "lookelike": 22
    },
    {
      "country": "Belize",
      "flag-name": "BH-flag.jpg",
      "territory": "Americas",
      "lookelike": 35
    },
    {
      "country": "Benin",
      "flag-name": "BN-flag.jpg",
      "territory": "Africa",
      "lookelike": 14
    },
    {
      "country": "Bermuda",
      "flag-name": "BD-flag.jpg",
      "territory": "Americas",
      "lookelike": 36
    },
    {
      "country": "Bhutan",
      "flag-name": "BT-flag.jpg",
      "territory": "Asia",
      "lookelike": 5
    },
    {
      "country": "Boliivia",
      "flag-name": "BL-flag.jpg",
      "territory": "Americas",
      "lookelike": 14
    },
    {
      "country": "Bosnia and Herzegovina",
      "flag-name": "BK-flag.jpg",
      "territory": "Europe",
      "lookelike": 31
    },
    {
      "country": "Botswana",
      "flag-name": "BC-flag.jpg",
      "territory": "Europe",
      "lookelike": 40
    },
    {
      "country": "Brazil",
      "flag-name": "BR-flag.jpg",
      "territory": "Americas",
      "lookelike": 30
    },
    {
      "country": "British Indian Ocean Territory",
      "flag-name": "IO-flag.jpg",
      "territory": "Asia",
      "lookelike": 36
    },
    {
      "country": "British Virgin Islands",
      "flag-name": "VI-flag.jpg",
      "territory": "Americas",
      "lookelike": 36
    },
    {
      "country": "Brunei",
      "flag-name": "BX-flag.jpg",
      "territory": "Asia",
      "lookelike": 19
    },
    {
      "country": "Bulgaria",
      "flag-name": "BU-flag.jpg",
      "territory": "Europe",
      "lookelike": 13
    },
    {
      "country": "Burkina Faso",
      "flag-name": "UV-flag.jpg",
      "territory": "Africa",
      "lookelike": 23
    },
    {
      "country": "Myanmar",
      "flag-name": "BM-flag.jpg",
      "territory": "Asia",
      "lookelike": 14
    },
    {
      "country": "Burundi",
      "flag-name": "BY-flag.jpg",
      "territory": "Africa",
      "lookelike": 25
    },
    {
      "country": "Cabo Verde",
      "flag-name": "CV-flag.jpg",
      "territory": "Africa",
      "lookelike": 20
    },
    {
      "country": "Cambodia",
      "flag-name": "CB-flag.jpg",
      "territory": "Asia",
      "lookelike": 35
    },
    {
      "country": "Camaroon",
      "flag-name": "CM-flag.jpg",
      "territory": "Africa",
      "lookelike": 14
    },
    {
      "country": "Canada",
      "flag-name": "CA-flag.jpg",
      "territory": "Americas",
      "lookelike": 6
    },
    {
      "country": "Cayman islands",
      "flag-name": "CJ-flag.jpg",
      "territory": "Americas",
      "lookelike": 36
    },
    {
      "country": "Central African Republic",
      "flag-name": "CT-flag.jpg",
      "territory": "Africa",
      "lookelike": 28
    },
    {
      "country": "Chad",
      "flag-name": "CD-flag.jpg",
      "territory": "Africa",
      "lookelike": 2
    },
    {
      "country": "Chile",
      "flag-name": "CI-flag.jpg",
      "territory": "Americas",
      "lookelike": 26
    },
    {
      "country": "China",
      "flag-name": "CH-flag.jpg",
      "territory": "Asia",
      "lookelike": 33
    },
    {
      "country": "Christmas Island",
      "flag-name": "KT-flag.jpg",
      "territory": "Oceania",
      "lookelike": 19
    },
    {
      "country": "Colombia",
      "flag-name": "CO-flag.jpg",
      "territory": "Americas",
      "lookelike": 38
    },
    {
      "country": "Comoros",
      "flag-name": "CN-flag.jpg",
      "territory": "Africa",
      "lookelike": 16
    },
    {
      "country": "Congo, Democratic Republic of the",
      "flag-name": "CG-flag.jpg",
      "territory": "Africa",
      "lookelike": 19
    },
    {
      "country": "Congo, Republic of the",
      "flag-name": "CF-flag.jpg",
      "territory": "Africa",
      "lookelike": 19
    },
    {
      "country": "Cook Islands",
      "flag-name": "CW-flag.jpg",
      "territory": "Oceania",
      "lookelike": 36
    },
    {
      "country": "Costa Rica",
      "flag-name": "CS-flag.jpg",
      "territory": "Americas",
      "lookelike": 11
    },
    {
      "country": "Cote d'Ivoire",
      "flag-name": "IV-flag.jpg",
      "territory": "Africa",
      "lookelike": 12
    },
    {
      "country": "Croatia",
      "flag-name": "HR-flag.jpg",
      "territory": "Europe",
      "lookelike": 9
    },
    {
      "country": "Cuba",
      "flag-name": "CU-flag.jpg",
      "territory": "Americas",
      "lookelike": 10
    },
    {
      "country": "Curacao",
      "flag-name": "UC-flag.jpg",
      "territory": "Americas",
      "lookelike": 20
    },
    {
      "country": "Cyprus",
      "flag-name": "CY-flag.jpg",
      "territory": "Europe",
      "lookelike": 5
    },
    {
      "country": "Czechia",
      "flag-name": "EZ-flag.jpg",
      "territory": "Europe",
      "lookelike": 10
    },
    {
      "country": "Denmark",
      "flag-name": "DA-flag.jpg",
      "territory": "Europe",
      "lookelike": 29
    },
    {
      "country": "Djibouti",
      "flag-name": "DJ-flag.jpg",
      "territory": "Africa",
      "lookelike": 16
    },
    {
      "country": "Dominica",
      "flag-name": "DO-flag.jpg",
      "territory": "Americas",
      "lookelike": 30
    },
    {
      "country": "Dominican Republic",
      "flag-name": "DR-flag.jpg",
      "territory": "Americas",
      "lookelike": 26
    },
    {
      "country": "Ecuador",
      "flag-name": "EC-flag.jpg",
      "territory": "Americas",
      "lookelike": 38
    },
    {
      "country": "Egypt",
      "flag-name": "EG-flag.jpg",
      "territory": "Africa",
      "lookelike": 3
    },
    {
      "country": "El Salvador",
      "flag-name": "ES-flag.jpg",
      "territory": "Americas",
      "lookelike": 32
    },
    {
      "country": "Equatorial Guinea",
      "flag-name": "EK-flag.jpg",
      "territory": "Africa",
      "lookelike": 16
    },
    {
      "country": "Eritrea",
      "flag-name": "ER-flag.jpg",
      "territory": "Africa",
      "lookelike": 16
    },
    {
      "country": "Estonia",
      "flag-name": "EN-flag.jpg",
      "territory": "Europe",
      "lookelike": 40
    },
    {
      "country": "Eswatini",
      "flag-name": "WZ-flag.jpg",
      "territory": "Africa",
      "lookelike": 35
    },
    {
      "country": "Ethiopia",
      "flag-name": "ET-flag.jpg",
      "territory": "Africa",
      "lookelike": 14
    },
    {
      "country": "European Union",
      "flag-name": "EE-flag.jpg",
      "territory": "Europe",
      "lookelike": 5
    },
    {
      "country": "Falkland Islands",
      "flag-name": "FK-flag.jpg",
      "territory": "Americas",
      "lookelike": 36
    },
    {
      "country": "Faroe Islands",
      "flag-name": "FO-flag.jpg",
      "territory": "Europe",
      "lookelike": 29
    },
    {
      "country": "Fiji",
      "flag-name": "FJ-flag.jpg",
      "territory": "Oceania",
      "lookelike": 36
    },
    {
      "country": "Finland",
      "flag-name": "FI-flag.jpg",
      "territory": "Europe",
      "lookelike": 29
    },
    {
      "country": "France",
      "flag-name": "FR-flag.jpg",
      "territory": "Europe",
      "lookelike": 30
    },
    {
      "country": "French Polynesia",
      "flag-name": "FP-flag.jpg",
      "territory": "Oceania",
      "lookelike": 6
    },
    {
      "country": "Gabon",
      "flag-name": "GB-flag.jpg",
      "territory": "Africa",
      "lookelike": 43
    },
    {
      "country": "Gambia, The",
      "flag-name": "GA-flag.jpg",
      "territory": "Africa",
      "lookelike": 28
    },
    {
      "country": "Georgia",
      "flag-name": "GG-flag.jpg",
      "territory": "Asia",
      "lookelike": 30
    },
    {
      "country": "Germany",
      "flag-name": "GM-flag.jpg",
      "territory": "Europe",
      "lookelike": 22
    },
    {
      "country": "Ghana",
      "flag-name": "GH-flag.jpg",
      "territory": "Africa",
      "lookelike": 14
    },
    {
      "country": "Gibraltar",
      "flag-name": "GI-flag.jpg",
      "territory": "Europe",
      "lookelike": 5
    },
    {
      "country": "Greece",
      "flag-name": "GR-flag.jpg",
      "territory": "Europe",
      "lookelike": 40
    },
    {
      "country": "Greenland",
      "flag-name": "GL-flag.jpg",
      "territory": "Europe",
      "lookelike": 7
    },
    {
      "country": "Grenada",
      "flag-name": "GJ-flag.jpg",
      "territory": "Americas",
      "lookelike": 25
    },
    {
      "country": "Guam",
      "flag-name": "GQ-flag.jpg",
      "territory": "Oceania",
      "lookelike": 35
    },
    {
      "country": "Guatemala",
      "flag-name": "GT-flag.jpg",
      "territory": "Americas",
      "lookelike": 32
    },
    {
      "country": "Guernsey",
      "flag-name": "GK-flag.jpg",
      "territory": "Europe",
      "lookelike": 30
    },
    {
      "country": "Guinea",
      "flag-name": "GV-flag.jpg",
      "territory": "Africa",
      "lookelike": 14
    },
    {
      "country": "Guinea-Bissau",
      "flag-name": "PU-flag.jpg",
      "territory": "Africa",
      "lookelike": 14
    },
    {
      "country": "Guyana",
      "flag-name": "GY-flag.jpg",
      "territory": "Americas",
      "lookelike": 16
    },
    {
      "country": "Haiti",
      "flag-name": "HA-flag.jpg",
      "territory": "Americas",
      "lookelike": 35
    },
    {
      "country": "Holy See (Vatican City)",
      "flag-name": "VT-flag.jpg",
      "territory": "Europe",
      "lookelike": 39
    },
    {
      "country": "Honduras",
      "flag-name": "HO-flag.jpg",
      "territory": "Americas",
      "lookelike": 32
    },
    {
      "country": "Hong Kong",
      "flag-name": "HK-flag.jpg",
      "territory": "Asia",
      "lookelike": 33
    },
    {
      "country": "Hungary",
      "flag-name": "HU-flag.jpg",
      "territory": "Europe",
      "lookelike": 13
    },
    {
      "country": "Iceland",
      "flag-name": "IC-flag.jpg",
      "territory": "Europe",
      "lookelike": 29
    },
    {
      "country": "India",
      "flag-name": "IN-flag.jpg",
      "territory": "Asia",
      "lookelike": 12
    },
    {
      "country": "Indonesia",
      "flag-name": "ID-flag.jpg",
      "territory": "Asia",
      "lookelike": 44
    },
    {
      "country": "iran",
      "flag-name": "IR-flag.jpg",
      "territory": "Asia",
      "lookelike": 13
    },
    {
      "country": "iraq",
      "flag-name": "IZ-flag.jpg",
      "territory": "Asia",
      "lookelike": 3
    },
    {
      "country": "Ireland",
      "flag-name": "EI-flag.jpg",
      "territory": "Europe",
      "lookelike": 12
    },
    {
      "country": "Isle of Man",
      "flag-name": "IM-flag.jpg",
      "territory": "Europe",
      "lookelike": 33
    },
    {
      "country": "Israel",
      "flag-name": "IS-flag.jpg",
      "territory": "Asia",
      "lookelike": 40
    },
    {
      "country": "Italy",
      "flag-name": "IT-flag.jpg",
      "territory": "Europe",
      "lookelike": 12
    },
    {
      "country": "Jamaica",
      "flag-name": "JM-flag.jpg",
      "territory": "Americas",
      "lookelike": 25
    },
    {
      "country": "japan",
      "flag-name": "JA-flag.jpg",
      "territory": "Asia",
      "lookelike": 7
    },
    {
      "country": "Jersey",
      "flag-name": "JE-flag.jpg",
      "territory": "Europe",
      "lookelike": 30
    },
    {
      "country": "Jordan",
      "flag-name": "JO-flag.jpg",
      "territory": "Asia",
      "lookelike": 1
    },
    {
      "country": "Kazakhstan",
      "flag-name": "KZ-flag.jpg",
      "territory": "Asia",
      "lookelike": 21
    },
    {
      "country": "Kenya",
      "flag-name": "KE-flag.jpg",
      "territory": "Africa",
      "lookelike": 34
    },
    {
      "country": "Kiribati",
      "flag-name": "KR-flag.jpg",
      "territory": "Oceania",
      "lookelike": 26
    },
    {
      "country": "North Korea",
      "flag-name": "KN-flag.jpg",
      "territory": "Asia",
      "lookelike": 11
    },
    {
      "country": "South Korea",
      "flag-name": "KS-flag.jpg",
      "territory": "Asia",
      "lookelike": 7
    },
    {
      "country": "Kosovo",
      "flag-name": "KV-flag.jpg",
      "territory": "Europe",
      "lookelike": 21
    },
    {
      "country": "Kuwait",
      "flag-name": "KU-flag.jpg",
      "territory": "Asia",
      "lookelike": 1
    },
    {
      "country": "Kyrgyzstan",
      "flag-name": "KG-flag.jpg",
      "territory": "Asia",
      "lookelike": 33
    },
    {
      "country": "Laos",
      "flag-name": "LA-flag.jpg",
      "territory": "Asia",
      "lookelike": 11
    },
    {
      "country": "Latvia",
      "flag-name": "LG-flag.jpg",
      "territory": "Europe",
      "lookelike": 6
    },
    {
      "country": "Lebanon",
      "flag-name": "LE-flag.jpg",
      "territory": "Asia",
      "lookelike": 6
    },
    {
      "country": "Lesotho",
      "flag-name": "LT-flag.jpg",
      "territory": "Africa",
      "lookelike": 41
    },
    {
      "country": "Liberia",
      "flag-name": "LI-flag.jpg",
      "territory": "Africa",
      "lookelike": 15
    },
    {
      "country": "Libya",
      "flag-name": "LY-flag.jpg",
      "territory": "Africa",
      "lookelike": 34
    },
    {
      "country": "Liechtenstein",
      "flag-name": "LS-flag.jpg",
      "territory": "Europe",
      "lookelike": 35
    },
    {
      "country": "Lithuania",
      "flag-name": "LH-flag.jpg",
      "territory": "Europe",
      "lookelike": 14
    },
    {
      "country": "Luxembourg",
      "flag-name": "LU-flag.jpg",
      "territory": "Europe",
      "lookelike": 9
    },
    {
      "country": "Macau",
      "flag-name": "MC-flag.jpg",
      "territory": "Asia",
      "lookelike": 24
    },
    {
      "country": "Madagascar",
      "flag-name": "MA-flag.jpg",
      "territory": "Africa",
      "lookelike": 13
    },
    {
      "country": "Malawi",
      "flag-name": "MI-flag.jpg",
      "territory": "Africa",
      "lookelike": 4
    },
    {
      "country": "Malaysia",
      "flag-name": "MY-flag.jpg",
      "territory": "Asia",
      "lookelike": 15
    },
    {
      "country": "Maldives",
      "flag-name": "MV-flag.jpg",
      "territory": "Asia",
      "lookelike": 23
    },
    {
      "country": "Mali",
      "flag-name": "ML-flag.jpg",
      "territory": "Europe",
      "lookelike": 14
    },
    {
      "country": "Malta",
      "flag-name": "MT-flag.jpg",
      "territory": "Europe",
      "lookelike": 37
    },
    {
      "country": "Marshall Islands",
      "flag-name": "RM-flag.jpg",
      "territory": "Oceania",
      "lookelike": 19
    },
    {
      "country": "Mauritania",
      "flag-name": "MR-flag.jpg",
      "territory": "Africa",
      "lookelike": 24
    },
    {
      "country": "Mauritius",
      "flag-name": "MP-flag.jpg",
      "territory": "Asia",
      "lookelike": 28
    },
    {
      "country": "Mexico",
      "flag-name": "MX-flag.jpg",
      "territory": "Americas",
      "lookelike": 12
    },
    {
      "country": "Federated States of Micronesia",
      "flag-name": "FM-flag.jpg",
      "territory": "Oceania",
      "lookelike": 21
    },
    {
      "country": "Moldova",
      "flag-name": "MD-flag.jpg",
      "territory": "Europe",
      "lookelike": 2
    },
    {
      "country": "Monaco",
      "flag-name": "MN-flag.jpg",
      "territory": "Europe",
      "lookelike": 44
    },
    {
      "country": "Mongolia",
      "flag-name": "MG-flag.jpg",
      "territory": "Asia",
      "lookelike": 6
    },
    {
      "country": "Montenegro",
      "flag-name": "MJ-flag.jpg",
      "territory": "Europe",
      "lookelike": 33
    },
    {
      "country": "Montserrat",
      "flag-name": "MH-flag.jpg",
      "territory": "Americas",
      "lookelike": 36
    },
    {
      "country": "Morocco",
      "flag-name": "MO-flag.jpg",
      "territory": "Africa",
      "lookelike": 33
    },
    {
      "country": "Mozambique",
      "flag-name": "MZ-flag.jpg",
      "territory": "Africa",
      "lookelike": 16
    },
    {
      "country": "Namibia",
      "flag-name": "WA-flag.jpg",
      "territory": "Africa",
      "lookelike": 19
    },
    {
      "country": "Nauru",
      "flag-name": "NR-flag.jpg",
      "territory": "Oceania",
      "lookelike": 20
    },
    {
      "country": "Nepal",
      "flag-name": "NP-flag.jpg",
      "territory": "Asia",
      "lookelike": 5
    },
    {
      "country": "Netherlands",
      "flag-name": "NL-flag.jpg",
      "territory": "Europe",
      "lookelike": 9
    },
    {
      "country": "New Zealand",
      "flag-name": "NZ-flag.jpg",
      "territory": "Oceania",
      "lookelike": 36
    },
    {
      "country": "Nicaragua",
      "flag-name": "NU-flag.jpg",
      "territory": "Americas",
      "lookelike": 32
    },
    {
      "country": "Niger",
      "flag-name": "NG-flag.jpg",
      "territory": "Africa",
      "lookelike": 12
    },
    {
      "country": "Nigeria",
      "flag-name": "NI-flag.jpg",
      "territory": "Africa",
      "lookelike": 18
    },
    {
      "country": "Niue",
      "flag-name": "NE-flag.jpg",
      "territory": "Oceania",
      "lookelike": 36
    },
    {
      "country": "Norfolk Island",
      "flag-name": "NF-flag.jpg",
      "territory": "Oceania",
      "lookelike": 18
    },
    {
      "country": "North Macedonia",
      "flag-name": "MK-flag.jpg",
      "territory": "Europe",
      "lookelike": 25
    },
    {
      "country": "Northern Mariana Islands",
      "flag-name": "CQ-flag.jpg",
      "territory": "Oceania",
      "lookelike": 20
    },
    {
      "country": "Norway",
      "flag-name": "NO-flag.jpg",
      "territory": "Europe",
      "lookelike": 29
    },
    {
      "country": "Oman",
      "flag-name": "MU-flag.jpg",
      "territory": "Asia",
      "lookelike": 13
    },
    {
      "country": "Pakistan",
      "flag-name": "PK-flag.jpg",
      "territory": "Asia",
      "lookelike": 24
    },
    {
      "country": "Palau",
      "flag-name": "PS-flag.jpg",
      "territory": "Oceania",
      "lookelike": 7
    },
    {
      "country": "Panama",
      "flag-name": "PM-flag.jpg",
      "territory": "Americas",
      "lookelike": 26
    },
    {
      "country": "Papua New Guinea",
      "flag-name": "PP-flag.jpg",
      "territory": "Oceania",
      "lookelike": 19
    },
    {
      "country": "Paraguay",
      "flag-name": "PA-flag.jpg",
      "territory": "Americas",
      "lookelike": 9
    },
    {
      "country": "Peru",
      "flag-name": "PE-flag.jpg",
      "territory": "Americas",
      "lookelike": 6
    },
    {
      "country": "Philippines",
      "flag-name": "RP-flag.jpg",
      "territory": "Asia",
      "lookelike": 10
    },
    {
      "country": "Pitcairn Islands",
      "flag-name": "PC-flag.jpg",
      "territory": "Oceania",
      "lookelike": 36
    },
    {
      "country": "Poland",
      "flag-name": "PL-flag.jpg",
      "territory": "Europe",
      "lookelike": 44
    },
    {
      "country": "Portugal",
      "flag-name": "PO-flag.jpg",
      "territory": "Europe",
      "lookelike": 23
    },
    {
      "country": "Puerto Rico",
      "flag-name": "RQ-flag.jpg",
      "territory": "Americas",
      "lookelike": 10
    },
    {
      "country": "Qatar",
      "flag-name": "QA-flag.jpg",
      "territory": "Asia",
      "lookelike": 37
    },
    {
      "country": "Romania",
      "flag-name": "RO-flag.jpg",
      "territory": "Europe",
      "lookelike": 2
    },
    {
      "country": "Russia",
      "flag-name": "RS-flag.jpg",
      "territory": "Asia",
      "lookelike": 8
    },
    {
      "country": "Rwanda",
      "flag-name": "RW-flag.jpg",
      "territory": "Africa",
      "lookelike": 43
    },
    {
      "country": "Saint Helena, Ascension, and Tristan da Cunha",
      "flag-name": "SH-flag.jpg",
      "territory": "Africa",
      "lookelike": 36
    },
    {
      "country": "Saint Kitts and Nevis",
      "flag-name": "SC-flag.jpg",
      "territory": "Americas",
      "lookelike": 19
    },
    {
      "country": "Saint Lucia",
      "flag-name": "ST-flag.jpg",
      "territory": "Americas",
      "lookelike": 21
    },
    {
      "country": "Saint Pierre and Miquelon",
      "flag-name": "SB-flag.jpg",
      "territory": "Americas",
      "lookelike": 27
    },
    {
      "country": "Saint Vincent and the Grenadines",
      "flag-name": "VC-flag.jpg",
      "territory": "Americas",
      "lookelike": 39
    },
    {
      "country": "Samoa",
      "flag-name": "WS-flag.jpg",
      "territory": "Oceania",
      "lookelike": 17
    },
    {
      "country": "San Marino",
      "flag-name": "SM-flag.jpg",
      "territory": "Europe",
      "lookelike": 40
    },
    {
      "country": "Sao Tome and Principe",
      "flag-name": "TP-flag.jpg",
      "territory": "Africa",
      "lookelike": 16
    },
    {
      "country": "Saudi Arabia",
      "flag-name": "SA-flag.jpg",
      "territory": "Asia",
      "lookelike": 24
    },
    {
      "country": "Senegal",
      "flag-name": "SG-flag.jpg",
      "territory": "Africa",
      "lookelike": 14
    },
    {
      "country": "Serbia",
      "flag-name": "RI-flag.jpg",
      "territory": "Europe",
      "lookelike": 8
    },
    {
      "country": "Seychelles",
      "flag-name": "SE-flag.jpg",
      "territory": "Asia",
      "lookelike": 19
    },
    {
      "country": "Sierra Leone",
      "flag-name": "SL-flag.jpg",
      "territory": "Africa",
      "lookelike": 41
    },
    {
      "country": "Singapore",
      "flag-name": "SN-flag.jpg",
      "territory": "Asia",
      "lookelike": 44
    },
    {
      "country": "Sint Maarten",
      "flag-name": "NN-flag.jpg",
      "territory": "Americas",
      "lookelike": 10
    },
    {
      "country": "Slovakia",
      "flag-name": "LO-flag.jpg",
      "territory": "Europe",
      "lookelike": 8
    },
    {
      "country": "Slovenia",
      "flag-name": "SI-flag.jpg",
      "territory": "Europe",
      "lookelike": 8
    },
    {
      "country": "Solomon Islands",
      "flag-name": "BP-flag.jpg",
      "territory": "Oceania",
      "lookelike": 19
    },
    {
      "country": "Somalia",
      "flag-name": "SO-flag.jpg",
      "territory": "Africa",
      "lookelike": 21
    },
    {
      "country": "South Africa",
      "flag-name": "SF-flag.jpg",
      "territory": "Africa",
      "lookelike": 42
    },
    {
      "country": "South Georgia and South Sandwich Islands",
      "flag-name": "SX-flag.jpg",
      "territory": "Americas",
      "lookelike": 36
    },
    {
      "country": "South Sudan",
      "flag-name": "OD-flag.jpg",
      "territory": "Africa",
      "lookelike": 1
    },
    {
      "country": "Spain",
      "flag-name": "SP-flag.jpg",
      "territory": "Europe",
      "lookelike": 38
    },
    {
      "country": "Sri Lanka",
      "flag-name": "CE-flag.jpg",
      "territory": "Asia",
      "lookelike": 19
    },
    {
      "country": "Sudan",
      "flag-name": "SU-flag.jpg",
      "territory": "Africa",
      "lookelike": 1
    },
    {
      "country": "Suriname",
      "flag-name": "NS-flag.jpg",
      "territory": "Africa",
      "lookelike": 13
    },
    {
      "country": "Sweden",
      "flag-name": "SW-flag.jpg",
      "territory": "Europe",
      "lookelike": 29
    },
    {
      "country": "Switzerland",
      "flag-name": "SZ-flag.jpg",
      "territory": "Europe",
      "lookelike": 33
    },
    {
      "country": "Syria",
      "flag-name": "SY-flag.jpg",
      "territory": "Asia",
      "lookelike": 3
    },
    {
      "country": "Taiwan",
      "flag-name": "TW-flag.jpg",
      "territory": "Asia",
      "lookelike": 17
    },
    {
      "country": "Tajikistan",
      "flag-name": "TI-flag.jpg",
      "territory": "Asia",
      "lookelike": 13
    },
    {
      "country": "Tanzania",
      "flag-name": "TZ-flag.jpg",
      "territory": "Africa",
      "lookelike": 19
    },
    {
      "country": "Thailand",
      "flag-name": "TH-flag.jpg",
      "territory": "Asia",
      "lookelike": 11
    },
    {
      "country": "Timor-Leste",
      "flag-name": "TT-flag.jpg",
      "territory": "Asia",
      "lookelike": 16
    },
    {
      "country": "Togo",
      "flag-name": "TO-flag.jpg",
      "territory": "Africa",
      "lookelike": 14
    },
    {
      "country": "Tokelau",
      "flag-name": "TL-flag.jpg",
      "territory": "Oceania",
      "lookelike": 31
    },
    {
      "country": "Tonga",
      "flag-name": "TN-flag.jpg",
      "territory": "Oceania",
      "lookelike": 37
    },
    {
      "country": "Trinidad and Tobago",
      "flag-name": "TD-flag.jpg",
      "territory": "Americas",
      "lookelike": 19
    },
    {
      "country": "Tunisia",
      "flag-name": "TS-flag.jpg",
      "territory": "Africa",
      "lookelike": 33
    },
    {
      "country": "Turkey",
      "flag-name": "TU-flag.jpg",
      "territory": "Asia",
      "lookelike": 33
    },
    {
      "country": "Turkmenistan",
      "flag-name": "TX-flag.jpg",
      "territory": "Asia",
      "lookelike": 24
    },
    {
      "country": "Turks and Caicos Islands",
      "flag-name": "TK-flag.jpg",
      "territory": "Americas",
      "lookelike": 36
    },
    {
      "country": "Tuvalu",
      "flag-name": "TV-flag.jpg",
      "territory": "Oceania",
      "lookelike": 36
    },
    {
      "country": "Uganda",
      "flag-name": "UG-flag.jpg",
      "territory": "Africa",
      "lookelike": 22
    },
    {
      "country": "Ukraine",
      "flag-name": "UP-flag.jpg",
      "territory": "Europe",
      "lookelike": 39
    },
    {
      "country": "United Arab Emirates",
      "flag-name": "AE-flag.jpg",
      "territory": "Asia",
      "lookelike": 1
    },
    {
      "country": "United Kingdom",
      "flag-name": "UK-flag.jpg",
      "territory": "Europe",
      "lookelike": 36
    },
    {
      "country": "United States",
      "flag-name": "US-flag.jpg",
      "territory": "Americas",
      "lookelike": 15
    },
    {
      "country": "Uruguay",
      "flag-name": "UY-flag.jpg",
      "territory": "Americas",
      "lookelike": 40
    },
    {
      "country": "Uzbekistan",
      "flag-name": "UZ-flag.jpg",
      "territory": "Asia",
      "lookelike": 39
    },
    {
      "country": "Vanuatu",
      "flag-name": "NH-flag.jpg",
      "territory": "Oceania",
      "lookelike": 42
    },
    {
      "country": "Venezuela",
      "flag-name": "VE-flag.jpg",
      "territory": "Americas",
      "lookelike": 38
    },
    {
      "country": "Vietnam",
      "flag-name": "VM-flag.jpg",
      "territory": "Asia",
      "lookelike": 33
    },
    {
      "country": "US Virgin Islands",
      "flag-name": "VQ-flag.jpg",
      "territory": "Americas",
      "lookelike": 5
    },
    {
      "country": "Wallis and Futuna",
      "flag-name": "WF-flag.jpg",
      "territory": "Oceania",
      "lookelike": 27
    },
    {
      "country": "Yemen",
      "flag-name": "YM-flag.jpg",
      "territory": "Asia",
      "lookelike": 3
    },
    {
      "country": "Zambia",
      "flag-name": "ZA-flag.jpg",
      "territory": "Africa",
      "lookelike": 24
    },
    {
      "country": "Zimbabwe",
      "flag-name": "ZI-flag.jpg",
      "territory": "Africa",
      "lookelike": 16
    }
  ]