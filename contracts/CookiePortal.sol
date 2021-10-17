// SPDX-Licence-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract CookiePortal {
  uint256 totalCookies;

  constructor() {
    console.log("Hello web3!");
  }

  function bakeCookies() public {
    totalCookies += 1;
    console.log('Cookie from %s!', msg.sender);
  }

  function getTotalCookies() public view returns (uint256) {
    console.log('We have %d cookies already!', totalCookies);
    return totalCookies;
  }
}