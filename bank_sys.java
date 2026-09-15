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

    public class Main {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);

            System.out.println("----- BANKA -----");

            System.out.println("Ievadi savu vārdu: ");
            String name = scanner.nextLine();

            System.out.print("Ievadi sākuma atlikumu: ");
            double startingBalance = scanner.nextDouble();

            BankAccount account = new BankAccount(name, startingBalance);
        }
    }

    



}