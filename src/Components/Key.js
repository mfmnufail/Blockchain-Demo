import React, { useState } from "react";
import { Container, Button, Form } from "semantic-ui-react";

const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

var keypair = ec.genKeyPair();

const Key = () => {
  const [privateKey, setPrivateKey] = useState("");
  const [publicKey, setPublicKey] = useState("");

  const update = () => {
    var privateKey = keypair.getPrivate("hex");
    setPrivateKey(privateKey.toString());
    var publicKey = keypair.getPublic("hex");
    setPublicKey(publicKey.toString());
  };

  const Generate = () => {
    keypair = ec.genKeyPair();
    update();
  };

  return (
    <div>
      <Container>
        <Form>
          <h5>Private Key</h5>
          <Form.Field style={{ display: "flex" }}>
            <input placeholder="First Name" value={privateKey} />
            <Button type="submit" onClick={Generate}>
              Generate
            </Button>
          </Form.Field>
          <h5>Public Key</h5>
          <Form.Field>
            <input placeholder="Last Name" value={publicKey} />
          </Form.Field>
        </Form>
      </Container>
    </div>
  );
};

export default Key;
