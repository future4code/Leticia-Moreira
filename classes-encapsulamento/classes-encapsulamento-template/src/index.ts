//Exercício 1
//a)São valores padrão para nossos objetos, pela palavra constructor.

//b)
class UserAccount {
   private cpf: string;
   private name: string;
   private age: number;
   private balance: number = 0;
   private transactions: Transaction[] = [];
 
   constructor(
      cpf: string,
      name: string,
      age: number,
   ) {
      console.log("Chamando o construtor da classe UserAccount")
      this.cpf = cpf;
      this.name = name;
      this.age = age;
   }

    
 }
  const newUser: UserAccount = new UserAccount ("123.453.789-01", "Flávia", 24)
  console.log(newUser)
  
 //Exercício 2

 type Transaction = {
   description: string,
   value: number,
   date: string
 }

 //Exercício 3

 class Bank {
   private accounts: UserAccount[];
 
   constructor(accounts: UserAccount[]) {
     this.accounts = accounts;
   }
 
 }