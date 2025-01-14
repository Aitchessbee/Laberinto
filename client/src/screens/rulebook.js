
import { main } from '@popperjs/core';
import { Carousel } from 'react-bootstrap';
import page1 from '../images/Rulebook1.png';
import page2 from '../images/Rulebook2.png';
import page3 from '../images/Rulebook3.png';

const Rules = () => {
    return ( 
        <div className='rulebook-page'>
       <center>
       <div className="rulebook-main">
           <center>
           <br />
               <h2 className='title'>Rulebook</h2>
               <p className='rulebook-text'>
               <br />
               Laberinto is an online Escape-the-maze type competition where proceeding to each path would require you to solve some CTF, Aptitude or coding questions. <br /> <br />
1.    The participants have a limited time to strive to escape the laberinto maze. <br /> <br />
2.    It’s an Intra college team event and a team should consist of 3 members. <br /> <br />
3.    Each team starts with the points awarded to their NFT. <br /> <br />
4.    Once entered, the maze branches out to different paths, the path to be taken depends on the choice of the team. <br /> <br />
5.    Each choice would require you to solve a problem (answer1) and a location riddle (That location (inside campus) will have a QR code, scanning which, you will get a code(answer2)). The final answer would be answer1#answer2. If solved correctly, you might be able to move to the next level in the maze. Correctly solving a question will also fetch you some points which can later be used to trade hints for any question. <br /> <br />
6.    For trading a hint, click on the hint button. The hint trading portal will open in a new tab. There you can see if any teams have solved the question you are seeking a hint for. If yes, then you can contact them through their contact details, and decide a price for the hint. After clicking on submit, they will automatically get a request from you in the received offers section where they can click on accept. <br /> <br />
7.    Beware! Some paths could also lead to a dead end. But you can always go back and try another path in the room. <br /> <br />
8.    If you are able to solve no questions of a particular room in the maze, you can always come back a level and try some other path. <br /> <br />
9.    Your current score and the points needed to redeem a hint for a given question, will be displayed on the portal, during the competition. <br /> <br />
10.    The answer format is case insensitive. <br /> <br />
11.    Winning criteria: The teams which reaches the end/closest to the end of the maze (In case no team is able to finish) in the least amount of time, wins. The amount of points you have has no relation to winning. Points can only be used to trade hints for questions. <br /> <br />
12.    It is compulsory for the participants to join the Laberinto Whatsapp Group. <br /> <br />
13.    In case of any discrepancy or conflict, the decision of the organizers will be final and binding. <br /> <br />
               </p>
           </center>
       </div>
</center>
        </div>
     );
}
 
export default Rules;