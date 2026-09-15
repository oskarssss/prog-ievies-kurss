import java.util.Scanner;

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

                System.out.println("Izvēlies darbību: ");

                int choice = scanner.nextInt();

                switch (choice) {
                    case 1:
                        System.out.print("Ievadi iemaksas summu: ");
                        double depositAmount = scanner.nextDouble();

                        account.deposit(depositAmount);
                        break;

                    case 2:
                        System.out.print("Ievadi izmaksas summu: ");
                        double withdrawAmount = scanner.nextDouble();

                        account.withdraw(withdrawAmount);
                        break;

                    case 3:
                        account.showBalance();
                        break;

                    case 4:
                        account.showTransactions();
                        break;

                    case 0:
                        running = false;
                        System.out.println("Paldies par programmas izmantošanu!");
                        break;

                    default:
                        System.out.println("Nepareiza izvēle!");
                }
            }

            scanner.close();
        }
    }