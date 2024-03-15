
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfilePic from "./assets/profile_pic.jpg"

function App() {
 

  return (
    <>
      <nav>
        <span class="dev-name">Robin Mandhotia</span>

        <ul class="links">
            <li><a href="">Projects</a></li>
            <li><a href="">Technologies</a></li>
            <li><a href="">About me</a></li>
        </ul>
        <span>
            <ul class="icons">
                <li><i class="fa-brands fa-square-facebook"></i></li>
                <li><i class="fa-brands fa-linkedin"></i></li>
                <li><i class="fa-brands fa-square-instagram"></i></li>
            </ul>
        </span>
    </nav>
    <div class="container">
        <div class="container-1">
            <div>
                <div class="developer-intro">
                    <div>Hello, I am Robin,</div> <span>flutter developer</span>
                </div>
            </div>
            <div class="paragraph">
                <p>
                <div>
                    Experienced Flutter developer proficient in Dart and cross-platform app development.
                </div>
                <div>
                    development skills with focus on collaboration, communication, and passion
                </div>
                </p>
            </div>
            <input type="button" value="Download CV" class="cv-button"/>

        </div>
        <div class="container-2">
            <div class="circle-1"></div>
            <div class="circle-3"></div>
            <div class="circle-2"><img src= {ProfilePic}/></div>

        </div>
    </div>
    </>
  )
  }

export default App
