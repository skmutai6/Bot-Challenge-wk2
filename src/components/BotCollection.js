import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, botsArmy, setBotsArmy }) {
  // Your code here
  
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {
          bots && bots.map((bot) => (
            <BotCard key={bot.id} bot={bot} botsArmy={botsArmy} setBotsArmy={setBotsArmy} />
          ))
          }
      </div>
    </div>
  );
}

export default BotCollection;
