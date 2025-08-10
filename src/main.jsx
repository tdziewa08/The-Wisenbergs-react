import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//Pseudo Code for App
/*
  Home, Members, Stickers, About pages

  HOME PAGE
    - team picture DONE
    - team anecdote
    - countdown clock until next trivia event
    - other images
    - tony links?

  MEMBERS PAGE
    - actual pictures of members DONE
    - member authored / aapproved descriptions
    - less deliberate / rectangular layout DONE
  
  STICKERS PAGE
    - image grid of all stickers received over the years DONE
    - descriptions of the stickers on the back when hovered over DONE
    - description of the page DONE
  
  ABOUT PAGE
    - fun facts about the team
    - description of the team
    - team statistics
    - testimonials
    - extra images

  SCHEDULE PAGE???
    - implement google calendar or other API to display the list of events we plan to attend
    - good styling
    - make sure the calendar has permissions allowed and is always visible and accessible to the user

  
  - Stickers scanned and stored in google firestore database
  - set it up to allow easy additions of new stickers for me

  - improve styling through-out the app
  - better fonts
*/