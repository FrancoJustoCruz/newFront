import googleIcon from '../../public/icon-google.svg';
import facebookIcon from '../../public/icon-facebook.svg'
import twitterIcon from '../../public/icon-twitter.svg'
import githubIcon from '../../public/icon-github.svg'

function Redes() {
  return (
    <>
      <div className="container max-w-screen-lg mx-auto">
        <div>
          

          <div className="flex flex-wrap justify-center gap-2">
          <button className="bg-white p-2 font-semibold text-gray-500 border-2 inline-flex items-center space-x-2 rounded-full">
              <img src={googleIcon} alt="Google Icon" className="w-5 h-5 opacity-50" />
            </button>

            <button className="bg-white p-2 font-semibold text-gray-500 border-2 inline-flex items-center space-x-2 rounded-full">
              <img src={facebookIcon} alt='Facebook Icon'  className='w-5 h-5 opacity-50'/>  
            </button>
            <button className="bg-white p-2 font-semibold text-gray-500 border-2 inline-flex items-center space-x-2 rounded-full">
              <img src={twitterIcon} alt='Twitter Icon' className='w-5 h-5 opacity-50'/>
            </button>
            <button className="bg-white p-2 font-semibold text-gray-500 border-2 inline-flex items-center space-x-2 rounded-full">
              <img src={githubIcon} alt='Github Icon' className='w-5 h-5 opacity-50'/>
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Redes