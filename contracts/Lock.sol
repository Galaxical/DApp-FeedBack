// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Feedback {
  struct FeedbackEntry {
    address from;
    string message;
    uint256 timestamp;
  }

  FeedbackEntry[] public entries;

  function submitFeedback(string memory _message) public {
    entries.push(FeedbackEntry(msg.sender, _message, block.timestamp));
  }

  function getAllFeedback() public view returns (FeedbackEntry[] memory) {
    return entries;
  }
}
