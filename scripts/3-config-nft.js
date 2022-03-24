import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xfd8bB96330481E6cd969c186Ce829b8E755DB3dC",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Signature Egg-Sauce",
        description: "This NFT will give you access to SauceDAO!",
        image: readFileSync("scripts/assets/egg-sauce.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()