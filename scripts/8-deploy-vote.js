import sdk from "./1-initialize-sdk.js";

// Grab the app module address.
const appModule = sdk.getAppModule(
  "0x0E941cfF9281782EfD15d12Fe85975Dfb9943A84",
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      name: "SauceDAO's Delicious Proposals",

      // This is the location of our governance token, our ERC-20 contract!
      votingTokenAddress: "0x5f04dB8f8F2C41bDD7345C80739F57D2A0a37dd5",

      // the time members can start voting after proposal is created.
      proposalStartWaitTimeInSeconds: 0,

      // how long the proposal will last
      proposalVotingTimeInSeconds: 24 * 30 * 60 * 60,

      // Will explain more below.
      votingQuorumFraction: 0,

      // What's the minimum # of tokens a user needs to be allowed to create a proposal?
      // I set it to 0. Meaning no tokens are required for a user to be allowed to
      // create a proposal.
      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (err) {
    console.error("Failed to deploy vote module", err);
  }
})();