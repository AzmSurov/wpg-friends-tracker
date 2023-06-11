/* eslint-disable react/jsx-no-undef */

import './App.css';
import Header from './components/Header';
import toast, { Toaster } from 'react-hot-toast';
import avatar1 from "./images/avatar-1.png"
import avatar2 from "./images/avatar-2.png"
import avatar3 from "./images/avatar-3.png"
import avatar4 from "./images/avatar-4.png"
import avatar5 from "./images/avatar-5.png"
import avatar6 from "./images/avatar-6.png"
import {AiOutlineFilter} from 'react-icons/ai'
const Highest = () => toast('Winner Winner Chicken Dinner!', {
  icon: '👏',
});

const second = () => toast("Second place is just the first place loser...but hey, at least you're the best at not being the best!", {
  icon: '👏',
});
const poop = () => toast("I poop 💩💩💩💩 💩💩💩💩", {
  icon: '💩',
});
const last = () => toast("Last place is just the universe's way of reminding us that the journey matters more than the destination", {
  icon: '👏',
});



function App() {

  const wins = [
    {
        id:1,
      avatar: avatar2,
      name: "Tizzi",
      total: 4,
      status: "Top G",
      toasty: Highest
    },
    {
        id:2,
      avatar: avatar1,
      name: "KingKar",
      total: 4,
      status: "Top G",
      toasty: Highest
    },
    {
        id:3,
      avatar: avatar6,
      name: "Kabbo",
      total: 1,
      status: "Bottom G",
      toasty : last
    },
    {
        id:4,
      avatar: avatar4,
      name: "Nishi",
      total: 2,
      status: "Second",
      toasty: second
    },
    {
        id:5,
      avatar: avatar6,
      name: "Imtiaz",
      total: 1,
      status: "Bottom G",
      toasty: poop
    },
    {
      id:6,
    avatar: avatar3,
    name: "Swrov",
    total: 2,
    status: "Last",
    toasty : last
  },
  {
    id:7,
    avatar: avatar5,
    name: "Neon",
    total: 3,
    status: "Second",
    toasty: second
    
  },
  {
    id:8,
    avatar: avatar5,
    name: "Bodo",
    total: 1,
    status: "Bottom G",
    toasty: second
    
  }
    
  ];

  wins.sort((a, b) => b.total - a.total);

  return (
    <div className="App bg-black min-h-screen">
     <Header />
     <div>
        <div class="p-6 bg-gray-900 rounded-lg">
    <div class="flex justify-between items-center pb-4">
      <div>
      <h2 class="text-xl font-semibold leading-loose text-white">Game Stats <span className='text-sm text-gray-500'>- Recorded since June 10th 2023</span></h2>
      <p class="text-xs font-semibold leading-loose text-gray-600">Last Update: June 10th 2023</p>
      </div>
      <button class="flex py-3 px-4 rounded-lg border border-gray-700 gap-x-2.5 text-white">
        <AiOutlineFilter className='' size={20}/>
        <span class="text-sm">UNO</span>
      </button>
    </div>
    <table class="w-full">
      <thead>
        <tr class="text-sm font-semibold text-white">
          <td class="py-4 border-b border-gray-700">Name</td>
          <td class="py-4 border-b border-gray-700 text-right">Total Wins</td>
          <td class="py-4 border-b border-gray-700 text-center">Status</td>
        </tr>
      </thead>
      <tbody className=''>

          {wins.map(({id, avatar, name, total, status, toasty}) => (
        <tr key={id}  class="text-sm text-gray-400">

              <td class="py-4">
                <div class="flex gap-4 items-center">
                  <img onClick={toasty} className='rounded-full cursor-pointer h-10 w-10' width="32" src={avatar} alt="" />
                  <span > {name} </span>
                </div>
              </td>
              <td class="py-4 tabular-nums text-center">{total}</td>
              <td class="py-4 flex justify-center pl-2">
                <span
                  class={"flex justify-center py-1 w-24 font-medium capitalize rounded-full " + (status === "Top G" ? "bg-[#50D1AA]/20 text-[#50D1AA]" : "") + (status === "Second" ? "bg-[#9290FE]/20 text-[#9290FE]" : "") + (status === "Bottom G" ? "bg-[#ff7b72]/20 text-[#ff7b72]" : "") + (status === "💩💩💩💩" ? "bg-[#964B00]/20 text-[#964B00]" : "")}
                >
                  {status}
                </span>
              </td>

              </tr> 
          ))}

      </tbody>
    </table>
  </div>
    </div> <Toaster />
    
    </div>
    
  );
}

export default App;
