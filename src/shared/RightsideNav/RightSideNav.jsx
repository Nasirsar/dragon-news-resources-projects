
import { FaGooglePlusG, FaGithubSquare, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div >
            <div className='p-4 space-y-3'>
                <h2 className='text-3xl'>Login with</h2>
                <button className="btn btn-outline w-full"><FaGooglePlusG></FaGooglePlusG>Google</button>
                <button className="btn btn-outline w-full"><FaGithubSquare></FaGithubSquare>Github</button>
            </div>

            <div className='p-4'>
                <h2 className='text-3xl mb-4'>Find Us on</h2>
                <a className='p-4 flex md:text-lg items-center border rounded-t-lg' href=""> <FaFacebook></FaFacebook> <span className='ml-2'> Facebook</span></a>
                <a className='p-4 flex  text-lg items-center border-x ' href=""> <FaTwitter></FaTwitter> <span className='ml-2'> Facebook</span></a>
                <a className='p-4 flex  text-lg items-center border rounded-b-lg' href=""> <FaInstagram></FaInstagram> <span className='ml-2'> Facebook</span></a>

            </div>

            <div className='p-4'>
                <h2 className='text-3xl mb-4'>Q-zone</h2>
               <img src= {qZone1} alt="" />
               <img src= {qZone2} alt="" />
               <img src= {qZone3} alt="" />
            </div>

        </div>

    );
};

export default RightSideNav;