const licenseInfo = [
  {
    name: 'Apache License 2.0',
    badge: `Apache_2.0-blue.svg`,
    url: 'opensource.org/licenses/Apache-2.0'
  }, 
  {
    name: 'GNU General Public License v3.0',
    badge: `GPLv3-blue.svg`,
    url: 'www.gnu.org/licenses/gpl-3.0'
  },
  {
    name: 'MIT License',
    badge: `MIT-yellow.svg`,
    url: 'opensource.org/licenses/MIT'
  },
  {
    name: 'BSD 2-Clause "Simplified" License',
    badge: `BSD_2--Clause-orange.svg`,
    url: 'opensource.org/licenses/BSD-2-Clause'
  },
  {
    name: 'BSD 3-Clause "New or "Revised" License',
    badge: `BSD_3--Clause-blue.svg`,
    url: 'opensource.org/licenses/BSD-3-Clause'
  },
  {
    name: 'Boost Software License 1.0',
    badge: `Boost_1.0-lightblue.svg`,
    url: 'www.boost.org/LICENSE_1_0.txt'
  },
  {
    name: 'Creative Commons Zero v1.0 Universal',
    badge: `CC0_1.0-lightgrey.svg`,
    url: 'creativecommons.org/publicdomain/zero/1.0/'
  },
  {
    name: 'Eclipse Public License 2.0',
    badge: `EPL_1.0-red.svg`,
    url: 'opensource.org/licenses/EPL-1.0'
  },
  {
    name: 'GNU Affero General Public License v3.0',
    badge: `AGPL_v3-blue.svg`,
    url: 'www.gnu.org/licenses/agpl-3.0'
  },
  {
    name: 'GUN Lesser General Public License v2.1',
    badge: `LGPL_v3-blue.svg`,
    url: 'www.gnu.org/licenses/lgpl-3.0'
  },
  {
    name: 'Mozilla Public License 2.0',
    badge: `MPL_2.0-brightgreen.svg`,
    url: 'opensource.org/licenses/MPL-2.0'
  },
  {
    name: 'The Unlicense',
    badge: `Unlicense-blue.svg`,
    url: 'unlicense.org/'
  }
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeBaseUrl = 'https://img.shields.io/badge/';
  let badge = '';

  licenseInfo.forEach(item => {
    if (item.name.includes(license)) {
      badge = item.badge;
    }
  })

  return `![License: ${license}](${badgeBaseUrl}License-${badge})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let url = '';  

  licenseInfo.forEach(item => {
    if (item.name.includes(license)) {
      url = item.url;
    }
  })  

 return url;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const linkBaseUrl = 'https://';
  const link = renderLicenseLink(license);
  
  return `[${license}](${linkBaseUrl}${link})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseSection(data.license)

  return `# ${data.title}     ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution Guidelines](#contributing)
  - [Test](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.instructions}

  ## Usage

  

  ## License
  
  This app is covered by the ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.guidelines}
 
  
  ## Tests

  ${data.tests}

  ## Questions

  Link to my github profile: [${data.github}](https://github.com/${data.github})
  
  If you have any further questions you can email me at: [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
