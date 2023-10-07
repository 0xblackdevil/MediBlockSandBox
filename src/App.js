import { Component } from "react";
import "./styles.css";
import userContract from "./web3Provider/UserContract";
import Web3 from "web3";

export default class App extends Component {
  async componentWillMount() {
    var provider =
      "https://sepolia.infura.io/v3/3d070c43882d4a7fb66c64ab4a244ada";

    var web3Provider = new Web3.providers.HttpProvider(provider);
    var web3 = new Web3(web3Provider);

    var wallet = web3.eth.accounts.privateKeyToAccount(
      "0x87e727a3940657b6e9e22a91df962d1e9905d5021aff1c35e2edd4276e124ce6"
    );
    console.log(wallet);

    const sendTx = () => {
      userContract
        .createUser(1, "")
        .send({ from: wallet.address })
        .then((msg) => {
          console.log(msg);
        });
    };

    await userContract.methods
      .getUser()
      .call({ from: wallet.address })
      .then((result) => {
        this.setState({
          userStatus:
            result.isRegistered === false ? "Not Registered" : "Verified"
        });
        console.log(result);
        sendTx();
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}
