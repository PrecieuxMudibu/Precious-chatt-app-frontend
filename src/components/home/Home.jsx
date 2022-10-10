import './home.css';
import { AiFillMessage } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { GrLogout } from 'react-icons/gr';
import { FiMoreVertical } from 'react-icons/fi';
import profilePicture from '../../images/profile.jpg';

export default function Home() {
    return (
        <div className="home">
            <div className="left-section">
                <img
                    src={profilePicture}
                    alt="photo de profil"
                    className="left-section__profile-picture"
                />
                <nav className="left-section__navigation">
                    <ul>
                        <li className="left-section__link">
                            <AiFillMessage />
                        </li>
                    </ul>
                </nav>
                <div className="left-section__logout">
                    <GrLogout />
                </div>
            </div>

            <div className="middle-section">
                <div className="middle-section__search-bar">
                    <div className="middle-section__magnifying-glass">
                        <BsSearch />
                    </div>
                    <input type="text" placeholder="Search" />
                    <div className="middle-section__more">
                        <FiMoreVertical />
                    </div>
                </div>
                <div>
                    <div className="middle-section__recent">
                        <h2 className="middle-section__second-title">Recent</h2>
                        <ul>
                            <li className="middle-section__contact">
                                <img
                                    src={profilePicture}
                                    alt="photo de profil du contact"
                                    className="middle-section__profile-picture"
                                />
                                <div>
                                    <h3 className="middle-section__third-title">
                                        Raghav
                                    </h3>
                                    <p className="middle-section__paragraph">
                                        Dinner ?
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <div className="right-section__header">
                    <h1>Swathi</h1>
                    <div>Online</div>
                </div>
                <div className="right-section__messages">
                    <div className="right-section__message">
                        <p>Hey There !</p>
                        <div>Today, 2:02pm</div>
                    </div>
                </div>
                <div className="right-section__footer">
                    <div>
                        <input type="text" />
                    </div>
                    <button>icone</button>
                </div>
            </div>
        </div>
    );
}
