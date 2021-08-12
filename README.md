# Dungeons and Dreams
Some kind of dungeons and dragons tool, potentially. I'm not completely sure what this is or what it will be but with any luck it'll be something nice. 

# What is this?
Hopefully it will be a web-based dungeons and dragons tool. I envision something that can allow the DM to share specific things with their players, and allow the players to respond (whether this be questions, messages to individual players, puzzles, or maps)

Right now, though, it's just me messing around with websockets and trying to veeeeeery carefully put everything together without messing up (it's very likely I'll still mess up)

# You aren't using/doing this Gihub feature right
Probably not. I have very little experience with Github outside of private repositories for little projects or school-related tasks and a hundred articles or videos on the subject as well as tons of lurking along the edges of other repos. A lot of things here seem to come just from experience, and, like how it's hard to explain to someone playing a multiplayer game for the first time all the shorthand used or taboo tactics, I simply am not there yet. I'm trying, and any suggestions would be much appreciated. 

# You aren't using/doing this other thing right
If you mean tech-wise, also probably not. I have a lot of schooling experience but my practical experience is a bit lacking in a free-range sense. I try to keep on top of doing things right but undoubtedly I'll do it wrong from time to time. Feel free to correct me (nicely, if you can manage)

# Who are you? 
Cas, though I also go by Mellow online at times. I'm a 24 year old CS grad that's trying to dip into OSS more fully. Like I said, I've messed around with stuff privately and for individual projects, but actual big-kid stuff is new to me. I decided, though, I need to take this less seriously if I want to get anywhere, so I wanted to start a project that feels fun for me. 

# What are you doing next?
Well I'm glad you asked!

* Wanna set up actual working websockets and do it correctly so I don't want to cry later over this
* For now, since I don't want to put any user authentication in right off the bat, I'd want the DM and players to access a private room a la Jackbox-style
    * Someone would designate themselves DM
    * Everyone else, as players, inputs their names (probably character names but they can do as they like)
    * I need to better understand how this was probably done in Jackbox...
* I would like the DM to have access to certain functions
    * The easiest and most basic would be an initiative tracker
        * DM can set players and enemies, put them in order, and then rotate through the list repeatedly
        * This can possibly include things like HP and statuses
        * Also a possibility; dice rolls included
    * Puzzles - My big goal would be a library of puzzles for DM's to use (or add) as they want
        * Mazes
        * Sliding puzzles
        * Shape puzzles
        * Toggle puzzle
        * etc...
    * Some kind of character info tracker
        * Very basic since, without user profiles, this would be erased
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
* allow the players to put in a character into the list. More than one possible but in the future the DM should be able to edit/restrict this
* all users are shown in a list somewhere
* DM given the ability to "start" the encounter after entering the desired characters/enemies
* DM can edit the list during the encounter
* DM can input the initiatives and they will be ordered based on this, but the DM can also edit the list regardless of the initiative after inputting the number
* iterate forward and back during the encounter as the DM chooses
