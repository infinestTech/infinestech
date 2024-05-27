import React from 'react';
import '../css/styles.scss';
import { FaAngular, FaHtml5, FaCss3Alt, FaReact, FaNode, FaPython, FaPhp, FaJava } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiMariadb } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
const Icon = () => {
    return (
        <div className="container-iconstyle   font-poppins">
            <div className="card-iconstyle">
                <div className="front-iconstyle">
                    <h2>Front End</h2>
                    <div className="icon-container">
                        {/* Each icon with its name */}
                        <div className="icon-label">
                            <FaHtml5 className='icon' />
                            <div className="icon-name">HTML5</div>
                        </div>
                        <div className="icon-label">
                            <FaCss3Alt className='icon' />
                            <div className="icon-name">CSS3</div>
                        </div>
                        <div className="icon-label">
                            <IoLogoJavascript className='icon' />
                            <div className="icon-name">Node.js</div>
                        </div>
                        <div className="icon-label">
                            <FaReact className='icon' />
                            <div className="icon-name">React</div>
                        </div>
                        <div className="icon-label">
                            <FaAngular className='icon' />
                            <div className="icon-name">Angular</div>
                        </div>


                    </div>
                </div>
                <div className="back-iconstyle">
                    <h2>Back End</h2>
                    <div className="icon-container">
                        {/* Each icon with its name */}
                        <div className="icon-label">
                            <IoLogoJavascript className='icon' />
                            <div className="icon-name">JavaScript</div>
                        </div>
                        <div className="icon-label">
                            <IoLogoFirebase className='icon' />
                            <div className="icon-name">Firebase</div>
                        </div>
                        <div className="icon-label">
                            <SiExpress className='icon' />
                            <div className="icon-name">Express</div>
                        </div>
                        <div className="icon-label">
                            <SiMariadb className='icon' />
                            <div className="icon-name">MariaDB</div>
                        </div>
                        <div className="icon-label">
                            <DiMongodb className='icon' />
                            <div className="icon-name">MongoDB</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-iconstyle">
                <div className="front-iconstyle">
                    <h2>Front End</h2>
                    <div className="icon-container">
                        {/* Each icon with its name */}
                        <div className="icon-label">
                            <IoLogoJavascript className='icon' />
                            <div className="icon-name">JavaScript</div>
                        </div>
                        <div className="icon-label">
                            <IoLogoFirebase className='icon' />
                            <div className="icon-name">Firebase</div>
                        </div>
                        <div className="icon-label">
                            <SiExpress className='icon' />
                            <div className="icon-name">Express</div>
                        </div>
                        <div className="icon-label">
                            <SiMariadb className='icon' />
                            <div className="icon-name">MariaDB</div>
                        </div>
                        <div className="icon-label">
                            <DiMongodb className='icon' />
                            <div className="icon-name">MongoDB</div>
                        </div>
                    </div>
                </div>
                <div className="back-iconstyle">
                    <h2>Back End</h2>
                    <div className="icon-container">
                        {/* Each icon with its name */}
                        <div className="icon-label">
                            <FaNode className='icon' />
                            <div className="icon-name">HTML5</div>
                        </div>
                        <div className="icon-label">
                            <SiExpress className='icon' />
                            <div className="icon-name">CSS3</div>
                        </div>
                        <div className="icon-label">
                            <FaPython className='icon' />
                            <div className="icon-name">React</div>
                        </div>
                        <div className="icon-label">
                            <FaJava className='icon' />
                            <div className="icon-name">Angular</div>
                        </div>
                        <div className="icon-label">
                            <FaPhp className='icon' />
                            <div className="icon-name">Node.js</div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="card-iconstyle">
                <div className="front-iconstyle">
                    <h2>Front End</h2>
                    <div className="icon-container">
                        {/* Each icon with its name */}
                        <div className="icon-label">
                            <DiMongodb className='icon' />
                            <div className="icon-name">HTML5</div>
                        </div>
                        <div className="icon-label">
                            <SiMariadb className='icon' />
                            <div className="icon-name">CSS3</div>
                        </div>
                        <div className="icon-label">
                            <IoLogoFirebase className='icon' />
                            <div className="icon-name">React</div>
                        </div>
                        <div className="icon-label">
                            <BiLogoPostgresql className='icon' />
                            <div className="icon-name">Node.js</div>
                        </div>
                        <div className="icon-label">
                            <SiMysql className='icon' />
                            <div className="icon-name">Angular</div>
                        </div>


                    </div>
                </div>
                <div className="back-iconstyle">
                    <h2>Back End</h2>
                    <div className="icon-container">
                        {/* Each icon with its name */}
                        <div className="icon-label">
                            <DiMongodb className='icon' />
                            <div className="icon-name">HTML5</div>
                        </div>
                        <div className="icon-label">
                            <SiMariadb className='icon' />
                            <div className="icon-name">CSS3</div>
                        </div>
                        <div className="icon-label">
                            <IoLogoFirebase className='icon' />
                            <div className="icon-name">React</div>
                        </div>
                        <div className="icon-label">
                            <BiLogoPostgresql className='icon' />
                            <div className="icon-name">Node.js</div>
                        </div>
                        <div className="icon-label">
                            <SiMysql className='icon' />
                            <div className="icon-name">Angular</div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Icon;