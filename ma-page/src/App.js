import './index.css';
import linkedinIcon from './imgs/linkedin_icon.png';
import kaggleIcon from './imgs/kaggle_icon.png';
import githubIcon from './imgs/github_icon.png';
import resumeIcon from './imgs/resume_icon.png';

function App() {

  return (
      <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-gradientStart via-gradientMid via-gradientMid2 to-gradientEnd animate-gradient bg-fixed bg-cover bg-[400%_400%] flex items-center justify-center">
        {/* Waves */}
        <div className="absolute bottom-0 left-0 w-[200%] h-48 bg-white opacity-5 rounded-[1000%_1000%_0_0] animate-wave"></div>
        <div className="absolute bottom-0 left-0 w-[200%] bg-white h-48 opacity-10 rounded-[1000%_1000%_0_0] animate-waveAlt"></div>
        <div className="absolute bottom-0 left-0 w-[200%] bg-white h-48 opacity-15 rounded-[1000%_1000%_0_0] animate-waveAlt2"></div>

        {/* Center Block */}
        <div className="z-10 bg-white rounded-lg p-8 shadow-lg text-center w-full max-w-lg">
          <h1 className="text-l font-bold">Rémi Bizet</h1>
          <p className="text-sm my-2">Engineer specialized in AI/Data Science and Software Engineering</p>
          <a href="mailto:bzt.remi@gmail.com" className="text-sm my-2 hover:underline">bzt.remi@gmail.com</a>

          {/* Links */}
          <div className="flex justify-between items-center mt-10">
            <a href="https://www.linkedin.com/in/rbizet/">
              <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 transition-transform duration-200 ease-in-out hover:translate-x-[-2px] hover:translate-y-[-2px]" />
            </a>
            <a href="https://www.kaggle.com/rmibizet/code">
              <img src= {kaggleIcon} alt="Kaggle" className="w-8 h-8 transition-transform duration-200 ease-in-out hover:translate-x-[-2px] hover:translate-y-[-2px]" />
            </a>
            <a href="https://github.com/RemiBizet">
              <img src={githubIcon} alt="GitHub" className="w-8 h-8 transition-transform duration-200 ease-in-out hover:translate-x-[-2px] hover:translate-y-[-2px]" />
            </a>
            <a href="/cv_eng.pdf">
              <img src={resumeIcon} alt="Resume" className="w-8 h-8 transition-transform duration-200 ease-in-out hover:translate-x-[-2px] hover:translate-y-[-2px]" />
            </a>
          </div>

        </div>

      </div>
  );
}

export default App;
