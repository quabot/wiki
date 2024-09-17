# 🤖 Automation

Automatically execute actions based on various triggers and conditions, creating your own custom modules.

-----------

### Create an automation sequence

**Follow the steps below to learn more about creating a new automation sequence:**

1. **Select trigger**  
   Select a trigger to get started:<br/>
   _This is what will trigger this automation sequence. Each trigger has corresponding if's and actions that it can take._

      - When someone sends a message
      - When someone deletes a message
      - When someone edits a message
      - When someone adds a reaction to a message
      - When someone removes a reaction from a message
      - When someone receives a role
      - When someone loses a role
      - When someone joins a voice channel
      - When someone leaves a voice channel
      - When a thread is created
      - When a channel is created
      - When someone joins the server
      - When someone leaves the server
      - When someone clicks on a button 

   ![starboard](./img/Suggestion-EnableDisable.png)

2. **Support Threads**  
   Create a thread when a user sends a message that indicates they need help from a staff member.  
   ![Support threads](./img/Suggestion-SelectChannel.png)

3. **Edited Message Indicator**  
   When someone edits their message, the bot will add a pencil reaction to show that the message has been edited.  
   ![Edited Message Indicator](./img/Suggestion-EmojiSelect.png)

4. **Thread Joiner**  
   When a thread is created, add staff members and send a message to the thread.  
   ![Thread Joiner](./img/Suggestion-EnableDisableLogs.png)

5. **When a thread is created, add staff members and send a message to the thread.**  
   Choose the channel where the suggestion logs will be sent.  
   ![Select logs channel](./img/Suggestion-SelectChannelLogs.png)

6. **Require Reason for Approving/Denying Suggestions (Staff Only)**  
   Decide if staff must provide a reason before approving or denying suggestions. The reason will be displayed with the suggestion.  
   ![Require reason for approving or denying suggestions](./img/Suggestion-StaffReasonApproveDeny.png)

----------
### Create Suggestions from a Designated Channel

You can set up a message with a button in a channel that users can click to create suggestions, without needing to use a command.

Edit the Embed Message to your liking, and send it to a selected channel:  
![Suggestion creation button embed](./img/Suggestion-ButtonEmbed.png)

---------
### Embed Messages

1. **Suggestions Message**  
   Edit the message that will be sent in the suggestions channel for users to vote on.  
   ![Edit suggestions embed message](./img/Suggestion-EmbedMessage.png)

2. **DM Messages**  
   Customize the confirmation messages users receive after their suggestion is approved or denied.  
   ![Edit DM messages](./img/Suggestion-DMMessage.png)

:::note
Don't forget to save your changes!
:::

Congratulations! You now have a basic understanding of how to use the Suggestions Module.

### Automation Presets

**Here is a list of available Automation Presets**

1. **Simple Starboard**  
   Automatically repost a message to another channel when it receives 5 star emojis.  
   ![starboard](./img/Suggestion-EnableDisable.png)

2. **Support Threads**  
   Create a thread when a user sends a message that indicates they need help from a staff member.  
   ![Support threads](./img/Suggestion-SelectChannel.png)

3. **Edited Message Indicator**  
   When someone edits their message, the bot will add a pencil reaction to show that the message has been edited.  
   ![Edited Message Indicator](./img/Suggestion-EmojiSelect.png)

4. **Thread Joiner**  
   When a thread is created, add staff members and send a message to the thread.  
   ![Thread Joiner](./img/Suggestion-EnableDisableLogs.png)
