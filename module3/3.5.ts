{
    // access modifiers
    class BankAccount{
        public readonly id: number;
        public name: string;
        protected _balance: number;
        
        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposit(amount: number){
           this._balance = this._balance + amount
        }
        getBalance(){
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount{
        test(){
            this.
        }
    }

    const goribManusherAccount = new BankAccount(111, "mr.gorib", 20);
    // goribManusherAccount.balance = 0;
    goribManusherAccount.addDeposit(0);
    const mybalance = goribManusherAccount.getBalance();
}