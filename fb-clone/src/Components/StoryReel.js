import React from 'react'
import Story from "./Story.js"
import "./StoryReel.css"

export default function StoryReel() {
  return (
    <div className="storyReel">

        <Story image = "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg" profileSrc = "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg" title = "HO 1" />
        <Story image = "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg" profileSrc = "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg" title = "HO 2" />
        <Story image = "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg" profileSrc = "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg" title = "HO 3" />
        <Story image = "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg" profileSrc = "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg" title = "HO 4" />

    </div>
  )
}
