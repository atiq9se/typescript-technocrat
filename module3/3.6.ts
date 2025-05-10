{
    // Getter and Setter
    class BankAccount{
        public readonly id: number;
        public name: string;
        protected _balance: number;
        
        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        set deposit(amount: number){
            this._balance = this.balance + amount;
        }
        // addDeposit(amount: number){
        //    this._balance = this._balance + amount
        // }

        //getter
        get balance(){
            return this._balance;
        }
        // getBalance(){
        //     return this._balance;
        // }
    }

    class StudentAccount extends BankAccount{
        test(){
            this.
        }
    }

    const goribManusherAccount = new BankAccount(111, "mr.gorib", 20);
    // goribManusherAccount.balance = 0;
    // goribManusherAccount.addDeposit(20);
    goribManusherAccount.deposit = 50;

    //const mybalance = goribManusherAccount.getBalance();

    const mybalance = goribManusherAccount.balance; // property er mto kore
    console.log(mybalance);
}