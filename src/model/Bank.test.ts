import { Bank } from "./Bank"

describe('Bank', () => {
    let bank: Bank

    beforeEach(() => {
        bank = new Bank()
    })

    describe('createAccount', () => {
        it('should create a new account', () => {
            bank.createAccount('John')
            const account = bank.getAccount('John')
            expect(account).toBeDefined()
            expect(account!.owner).toBe('John')
            expect(account!.balance).toBe(0)
            expect(account!.transactions).toHaveLength(0)
        })

    })

    describe('deposit', () => {
        it('should deposit money to an account', () => {
            bank.createAccount('John')
            bank.deposit('John', 100)
            const account = bank.getAccount('John')
            expect(account!.balance).toBe(100)
            expect(account!.transactions).toHaveLength(1)
            expect(account!.transactions[0]).toEqual(
                {"amount":100, date:expect.any(Date), "description":'Deposit'})
        })
    })

    describe('withdraw', () => {
        it('should withdraw money from an account', () => {
            bank.createAccount('John')
            bank.deposit('John', 100)
            bank.withdraw('John', 50)
            const account = bank.getAccount('John')
            expect(account!.balance).toBe(50)
            expect(account!.transactions).toHaveLength(2)
            expect(account!.transactions[1]).toEqual(
                {"amount":-50, date:expect.any(Date), "description":'Withdrawal'})
        })
    })

    describe('listTransactions', () => {
        it('should list the last 5 transactions for a customer', () => {
            bank.createAccount('John')
            bank.deposit('John', 100)
            bank.withdraw('John', 50)
            bank.deposit('John', 200)
            bank.withdraw('John', 150)
            bank.deposit('John', 300)
            const transactions = bank.listTransactions('John')
            expect(transactions).toEqual([
                {"description":'Deposit', date:expect.any(Date), "amount":100},
                {"description":'Withdrawal', date:expect.any(Date), "amount":-50},
                {"description":'Deposit', date:expect.any(Date), "amount":200},
                {"description":'Withdrawal', date:expect.any(Date), "amount":-150},
                {"description":'Deposit', date:expect.any(Date), "amount":300},
            ])
            expect(transactions).toHaveLength(5)
            console.log(`Transactions length is ${transactions.length}`)
        })
    })

    describe('getBalance', () => {
        it('should get the balance of an account', () => {
            bank.createAccount('John')
            bank.deposit('John', 100)
            const balance = bank.getBalance('John')
            expect(balance).toBe(100)
        })
    })

    describe('listHighValueCustomers', () => {
        it('should list high value customers in descending order', () => {
            bank.createAccount('John')
            bank.deposit('John', 1000)
            bank.createAccount('Jane')
            bank.deposit('Jane', 5000)
            bank.createAccount('Bob')
            bank.deposit('Bob', 2000)
            bank.createAccount('Alice')
            bank.deposit('Alice', 3000)
            bank.createAccount('Charlie')
            bank.deposit('Charlie', 6000)

            const highValueCustomers = bank.listHighValueCustomers()
            expect(highValueCustomers).toHaveLength(1)
            expect(highValueCustomers[0].owner).toBe('Charlie')
        })

        it('should return an empty array if no high value customers exist', () => {
            bank.createAccount('John')
            bank.deposit('John', 1000)

            const highValueCustomers = bank.listHighValueCustomers()
            expect(highValueCustomers).toHaveLength(0)
        })
    })
})