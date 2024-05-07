import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([])
  const [botsArmy, setBotsArmy] = useState([])
  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then(res => res.json())
      .then((data) => {
          setBots(data)
      })
  }, [])

  return (
    <div>
      <YourBotArmy botsArmy={botsArmy} />
      <BotCollection bots={bots} botsArmy={botsArmy} setBotsArmy={setBotsArmy} />
    </div>
  )
}

export default BotsPage;
