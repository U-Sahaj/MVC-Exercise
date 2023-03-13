// Entities: Account, Transaction
// Value Objects: Money
// Aggregates: AccountAggregate
// Repository: AccountRepository
// Services: TransactionService
// Events: TransactionCreated

// A customer creates a new deposit account with the bank by providing their name and other personal details. The account is created as an Account entity and stored in the Account Repository.
// The customer deposits money into their account by specifying the account ID and the amount to be deposited. The Transaction Service retrieves the account entity from the Account Repository and performs a deposit transaction by updating the account balance and creating a new Transaction entity with the relevant details. The TransactionCreated event is raised, and the new transaction is stored in the Account Repository.
// The customer withdraws money from their account in a similar manner, by specifying the account ID and the amount to be withdrawn. The Transaction Service retrieves the account entity from the Account Repository and performs a withdrawal transaction by updating the account balance and creating a new Transaction entity with the relevant details. The TransactionCreated event is raised, and the new transaction is stored in the Account Repository.
// The customer can view their transaction history by providing their account ID. The Transaction Service retrieves the account entity from the Account Repository and returns the last 5 transactions sorted by date, as a list of Transaction entities.
// The bank can retrieve a list of high-value customers by querying the Account Repository for accounts with a balance greater than 5000, sorted in descending order of balance. The result is returned as a list of Account entities.


const bank = new Bank();
bank.createAccount('John');
bank.deposit('John', 1000);
bank.deposit('John', 2000);
bank.withdraw('John', 500);
bank.listTransactions('John');
bank.getBalance('John');
bank.createAccount('Jane');
bank.deposit('Jane', 5000);
bank.listHighValueCustomers();