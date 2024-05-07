import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [botsArmy, setBotsArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then(res => res.json())
      .then((data) => {
          setBots(data)
      })
  }, [])

  console.log( botsArmy )

  function handleDelete(id) {
    fetch(`http://localhost:8002/bots/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
    })

  }

  return (
    <div>
      <YourBotArmy botsArmy={botsArmy} handleDelete={handleDelete} />
      <BotCollection bots={bots} botsArmy={botsArmy} setBotsArmy={setBotsArmy} />
    </div>
  )
}

export default BotsPage;
