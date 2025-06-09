import './App.css';
import Card from './components/Card';
import pokemonPicross from './assets/pokemonPicross.jpg';
import pokemonPinball from "./assets/pokemonPinball.png"
import pokemonSnap from "./assets/pokemonSnap.jpg";
import detectivePikachu from "./assets/detectivePikachu.jpg"
import puzzleLeague from "./assets/puzzleLeague.jpg"
import pokemonTrozei from "./assets/pokemonTrozei.jpg"
import mysteryDungeon from "./assets/mysteryDungeon.jpeg"
import pokemonRanger from "./assets/pokemonRanger.jpg"
import pokemonRumble from "./assets/pokemonRumble.jpg"
import pokePark from "./assets/pokePark.jpg"

const App = () => {
  return (
    <>
    <div className="main">
      <h1>Pokémon Spin-offs!</h1>
      <p>Many people don't know that the Pokémon series has a lot of spin off series! Here is a collection of some of the most popular spin off games.</p>
      <div className="card-container">
        <Card name="Pokémon Picross" desc="Pokémon Picross is a free 3DS game where you play nonograms that make images relating to Pokémon." image={pokemonPicross} link="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Picross"/>
        <Card name="New Pokémon Snap" desc="A sequel to Pokémon Snap, where you explore different areas and take pictures of different Pokémon." image={pokemonSnap} link="https://bulbapedia.bulbagarden.net/wiki/New_Pok%C3%A9mon_Snap" />
        <Card name="Pokémon Pinball" desc="Released for the Game Boy Color, Pokémon Pinball is a pinpall-based game with a unique spin." image={pokemonPinball} link="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Pinball" />
        <Card name="Pokémon Puzzle League" desc="Pokémon Puzzle League is a Pokémon version of the game Tetris Attack, for the Nintendo 64." image={puzzleLeague} link="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Puzzle_League" />
        <Card name="Pokémon Trozei!" desc="This game is a match 4 game, who's gameplay is a mix of Tetris and Yoshi's Cookie." image={pokemonTrozei} link="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Trozei!" />
        <Card name="Pokémon Mystery Dungeon" desc="One of the most well known Pokémon spin-offs, which features roguelike gameplay, where you explore different dungeons with a team of Pokémon." image={mysteryDungeon} link="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Mystery_Dungeon:_Red_Rescue_Team_and_Blue_Rescue_Team" />
        <Card name="Pokémon Ranger" desc="Pokémon Ranger is a Nintendo DS game where you capture Pokémon using the system's touch screen." image={pokemonRanger} link="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Ranger_(video_game)" />
        <Card name="Pokémon Rumble" desc="Originally released for the Nintendo Wii, in this game you control a Pokémon to explore and battle in different arenas." image={pokemonRumble} link="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Rumble" />
        <Card name="PokéPark Wii: Pikachu's Adventure" desc="In this game you take control of Pikachu and explore PokéPark." image={pokePark} link="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9Park_Wii:_Pikachu%27s_Adventure" />
        <Card name="Detective Pikachu" desc="An interesting spin-off where you work with a talking Pikachu to solve mysteries." image={detectivePikachu} link="https://bulbapedia.bulbagarden.net/wiki/Detective_Pikachu_(video_game)" />
    </div>
    </div>
    <footer>
      <p>Created by <a href="https://github.com/zacheratk">@zacheratk</a> on GitHub. Created as part of the CodePath WEB 102 curriculum.</p>
    </footer>
    </>
  );
};

export default App;