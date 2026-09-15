import java.util.Scanner;

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
            System.out.println("Summai jābūt lielākai par 0!");
            return;
        }

        balance += amount;
        transactions.add("Iemaksa: +" + amount + " $");

        System.out.println("Nauda veiksmīgi iemaksāta!");
        System.out.println("Jaunais atlikums: " + balance + " $");
    }

    public void withdraw(double amount) {
        balance -= amount;
        transactions.add("Izmaksa: -" + amount + " $")

        System.out.println("Nauda veiksmīgi izņemta!");
        System.out.println("Jaunais atlikums: " + balance + " $");
    }

    public class Main {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);

            System.out.println("----- BANKA -----");

            System.out.println("Ievadi savu vārdu: ");
            String name = scanner.nextLine();

            System.out.print("Ievadi sākuma atlikumu: ");
            double startingBalance = scanner.nextDouble();

            BankAccount account = new BankAccount(name, startingBalance);

            boolean running = true;

            while (running) {

                System.out.println("\n----- IZVĒLNE -----");
                System.out.println("1. Iemaksāt naudu");
                System.out.println("2. Izņemt naudu");
                System.out.println("3. Apskatīt atlikumu");
                System.out.println("4. Apskatīt transakcijas");
                System.out.println("0. Iziet");
            }
        }
    }

    



}