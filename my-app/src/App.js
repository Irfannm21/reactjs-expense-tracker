import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Transaction from './components/Transaction';
import SaldoBox from './components/SaldoBox';
import AddTransaction from './components/AddTransaction';


const initTansactions = [
  {
    "id": "619941539079",
    "tanggal": new Date("01 Nov 2021 9:30").getTime(),
    "keterangan": "Gaji bulanan",
    "nominal": 2500000,
  },
  {
    "id": "749179155708",
    "tanggal": new Date("23 Nov 2021 10:00").getTime(),
    "keterangan": "Uang lembur ",
    "nominal": 750000,
  },
  {
    "id": "568004092688",
    "tanggal": new Date("24 Sept 2021 10:30").getTime(),
    "keterangan": "Beli sepatu",
    "nominal": -150000,
  }
];

const App = () => {
  const [transactions, setTransaction] = useState(initTansactions);

  const handleFormTambahTransaction = (data) => {
    let newTransaction = [
      ...transactions,data
    ];
    // atur ulang urutan transacti agar tanggal terkecil di bagian atas
    newTransaction.sort((a,b) => a.tanggal - b.tanggal);

    setTransaction(newTransaction);
  }

  const handleHapusTransaction = (e) => {
    //cari index transaction yang akan dihapus
    const result = transactions.findIndex(transaction => (transaction.id === e.target.id));

    // copy transction karena fungsi splice akan mengubah array asal
    const newTransactions = transactions;
    newTransactions.splice(result,1);
    setTransaction([...newTransactions]);
  }

  return (
    <React.Fragment>
      <Header />
      <SaldoBox transactions={transactions} />
      <Transaction 
      transactions={transactions}
      onHapusTransaction={handleHapusTransaction}
      />
      <AddTransaction onTambahTransaction={handleFormTambahTransaction} />
      <Footer />
    </React.Fragment>
  )
}

export default App;