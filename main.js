let Blockchain= require("./Blockchain");
//import {Blockchain}
let hash = require('object-hash');
let blockchain= new Blockchain.Blockchain();
let PROOF = 1560;

    let validproof=(proof) =>
    {
        let guessHash=hash(proof);
        console.log("hashng : " , guessHash);
        return guessHash= hash(PROOF);
     };

        let proofofwork=()=>{
            let proof = 0;
            while(true)
            {
        if(!validproof(proof))
        {
            proof++;
        }
        else{break;}
            }

            return proof;
        }

        if(proofofwork()== PROOF)
        {
        let prevHash= blockchain.lastblock().hash ? blockchain.lastblock().hash : null;
        blockchain.addnewblock(prevHash)
        } 
        console.log("chain : ", blockchain.chain);

    


