import Web3 from "web3";
import UserContractData from "../ContractMetaData/UserContractData.json";

var provider = "https://sepolia.infura.io/v3/3d070c43882d4a7fb66c64ab4a244ada";

var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);

const userContract = new web3.eth.Contract(
  UserContractData.abi,
  UserContractData.address
);

export default userContract;
