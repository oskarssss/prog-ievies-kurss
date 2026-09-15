import java.util.ArrayList;

class BankAccount {
    private String owner;
    private double balance;
    private ArrayList<String> transactions;

    public BankAccount(String owner, double balance) {
        this.owner = owner;
        this.balance = balance;
        this.transactions = new ArrayList<>();

        transactions.add("Konts izveidots ar atlikumu: " + balance + " $");
    }

    public void deposit(double amount) {
        if (amount <= 0) {
            System.out.println("Summai jabut lielakai par 0!");
            return;
        }

        balance += amount;
        transactions.add("Iemaksa: +" + amount + " $");

        System.out.println("Nauda veiksmigi iemaksata!");
        System.out.println("Jaunais atlikums: " + balance + " $");
    }

    public void withdraw(double amount) {
        if (amount <= 0) {
            System.out.println("Summai jabut lielakai par 0!");
            return;
        }

        if (amount > balance) {
            System.out.println("Nepietiek lidzeklu!");
            return;
        }

        balance -= amount;
        transactions.add("Izmaksa: -" + amount + " $");

        System.out.println("Nauda veiksmigi iznemta!");
        System.out.println("Jaunais atlikums: " + balance + " $");
    }

    public void showBalance(){
        System.out.println("Konta ipasnieks: " + owner);
        System.out.println("Konta atlikums: " + balance + " $");
    }

    public void showTransactions(){
        System.out.println("\n----- TRANSAKCIJAS -----");

        for (String transaction : transactions){
            System.out.println(transaction);
        }

        System.out.println("\nAtlikums: " + balance + " $");
    }
}