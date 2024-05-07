import React from "react";
import BotCard from "./BotCard";

function YourBotArmy( { botsArmy, removeBot }) {
  //your bot army code here...

  function handleClick(bot) {
    removeBot(bot)
  }

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          
          {/* Your Bot Army */}
          {botsArmy.map((bot) =>
            <BotCard key={bot.id} bot={bot} removeBot={removeBot} handleClick={handleClick} />
          )}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
