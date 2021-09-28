# Dungeons and Dreams
A dungeons and dragons tool, at the base to be an initiative tracker but striving towards a more complex DM tool. 

# What is this?
Intending for it to be a web-based dungeons and dragons tool. I envision something that can allow the DM to share specific things with their players, and allow the players to respond (whether this be questions, messages to individual players, puzzles, or maps)

Right now, though, it's just me messing around with websockets and trying to veeeeeery carefully put everything together without messing up. This is a secondary project that I like tinkering with when I don't have any other projects I'm focused on. 

# Who are you? 
Cassia, or Cas, though I also go by Mellow online at times. I'm a 24 year old CS grad that's trying to dip into OSS more fully. I've messed around with stuff privately and for individual projects, but actual big-kid public stuff is new to me. I decided, though, I need to stress myself out less, so I wanted to mess with a project that feels fun for me. 

# What are you doing next?
Well I'm glad you asked!

* For now, since I don't want to put any user authentication in right off the bat, I'd want the DM and players to access a private room a la Jackbox-style
    * The first user is designated as the DM
    * Everyone else are designated as players
* I would like the DM to have access to certain functions
    * The easiest and most basic would be an initiative tracker
        * DM can set players and enemies, put them in order, and then rotate through the list repeatedly
        * This can possibly include things like HP and status ailments
        * Also a possibility; dice rolls included
    * Puzzles - My big goal would be a library of puzzles for DM's to use (or add) as they want
        * Mazes
        * Sliding puzzles
        * Shape puzzles
        * Toggle puzzle
        * etc...
    * Some kind of character info tracker
        * Very basic since, without user profiles, this would be erased after each session
        * HP, attacks, stats, etc
        * For ease of access/rolling
* If I get past that last bullet point, I'd add a user feature, which also expands what features can be offered
    * DM notes for players
    * Rudimentary maps (more complicated maps would be a huge undertaking unto itself most likely)
    * More expanded upon character sheet for the players
    * Pictures (of NPC's, locations, relics, etc)
    * Character inventories

# My notes for the specific things I want right now
* alert for when a new user enters the room that fades after a few seconds
* allow the players to put a character into the list. More than one possible but in the future the DM should be able to edit/restrict this
* all users are shown in a list somewhere
* DM given the ability to "start" the encounter after entering the desired characters/enemies
* DM can edit the list during the encounter
* DM can input the initiatives and they will be ordered based on this, but the DM can also edit the list regardless of the initiative after inputting the number
* iterate forward and back during the encounter as the DM chooses
