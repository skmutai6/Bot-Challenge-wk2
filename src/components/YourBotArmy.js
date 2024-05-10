import React from "react";
import BotCard from "./BotCard";

function YourBotArmy( {botsArmy, addBot, deleteBot }) {
  //your bot army code here...
  function handleClick(bot) {
    addBot(bot)
  }

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          
          {/* Your Bot Army */}
          {botsArmy.map((bot) =>
            <BotCard key={bot.id} bot={bot} deleteBot={deleteBot} handleClick={handleClick} />
          )}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
