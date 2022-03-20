let hash = require('object-hash');

class Blockchain
{
    constructor()
    {
        this.chain=[];
        this.curr_transaction=[];

    }
    addnewblock(prevHash)
    {
    let block = {
    index: this.chain.length+1,
    timestamp: Date.now(),
    transaction: this.curr_transaction,
    prevHash: prevHash,
   };
   this.hash=has(block);
    this.chain.push(block);
    this.curr_transaction = [];
    return block;
    }
 addnewtranscation(sender,receiver,amount)
    {
   this.curr_transaction.push(sender,receiver,amount)
    };
  lastblock()
  {
      return this.chain.length.slice(-1)[0];
  }
  isempty()
  {
      return this.chain.length==0;
  }

}
module.exports=Blockchain;
