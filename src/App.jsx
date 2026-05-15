import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [tugas, setTugas] = useState([])
  const [ketikan, setKetikan] = useState("")

  const tambahTugas = () => {
    if (ketikan.trim() === ""){
      alert("Tugas Tidak Boleh Kosong")
      return;
    }else{
      setTugas([...tugas,ketikan.trim()])
      setKetikan("")
    }
  }

  const hapusTugas = (index) => {
    const tugasTersisa = tugas.filter((item,indexTugas) => {
      return index !== indexTugas;
    })
    setTugas(tugasTersisa)
  }

  const hapusSemuaTugas = () => {
    setTugas([]);
    setKetikan("");
  }

  return (
    <>
    <div className='container'>
      <h2>Todo-List</h2>
    <div className="to-do">

      <input type="text" value={ketikan}  className="in" placeholder='Nama Tugas....' onChange={(event)=> {
        setKetikan(event.target.value);
      }}/>
      <button onClick={tambahTugas} className='btn-tambah'>Tambah Tugas</button>
    </div>

    <ul className='list'>
      {tugas.map((item,index) => {
        return(<li key={index} >
          {item}
           <button className='btn-hapus'
           onClick={() => hapusTugas(index)}>
          Hapus
        </button>
        </li>
       
      )})}
    </ul>

    {tugas.length > 0 && (<button onClick={hapusSemuaTugas} className='btn-hapus-semua'>Hapus Semua</button>)}
      </div>
    </>
  )
}

export default App
