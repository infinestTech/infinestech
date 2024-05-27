import React, { useState } from 'react';
import { FaTwitter, FaFacebook, FaWhatsapp, FaInstagram, FaLinkedinIn, FaEnvelope, FaCommentDots, FaTimes } from 'react-icons/fa';
import '../css/SocialSidebar.css'; // Assuming you will create a separate CSS file for this

const SocialSidebar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

    return (
        <div id="social-sidebar-wrapper font-poppins" >
            <div id="social-sidebar">
                {isOpen ? (
                    <ul>
                        <li><a href="https://twitter.com/infinestt76891?s=21" target="_blank" rel="noopener noreferrer" className="entypo-twitter"><FaTwitter /><span className='text-white'>Twitter</span></a></li>
                        <li><a href="https://www.facebook.com/InfinestTech" target="_blank" rel="noopener noreferrer" className="entypo-facebook"><FaFacebook /><span className='text-white'>Facebook</span></a></li>
                        <li><a href="https://wa.me/919600925488" target="_blank" rel="noopener noreferrer" className="entypo-whatsapp"><FaWhatsapp /><span className='text-white'>Whatsapp</span></a></li>
                        <li><a href="https://www.instagram.com/infinesh_tech?igsh=MXRyNXFhd2ltdWZ0MQ==" target="_blank" rel="noopener noreferrer" className="entypo-instagram"><FaInstagram /><span className='text-white'>Instagram</span></a></li>
                        <li><a href="https://www.linkedin.com/in/infinest-tech-153132309" target="_blank" rel="noopener noreferrer" className="entypo-linkedin"><FaLinkedinIn /><span className='text-white'>Linkedin</span></a></li>
                        <li><a href="mailto:infinest.tech@gmail.com" target="_blank" rel="noopener noreferrer" className="entypo-gmail"><FaEnvelope /><span className='text-white'>Gmail</span></a></li>
                    </ul>
                ) : null}
                <button onClick={() => setIsOpen(!isOpen)} className={isOpen ? "close-icon" : "chat-icon"}>
                    {isOpen ? <FaTimes /> : <FaCommentDots />}
                    <span className='text-white'>{isOpen ? '' : 'Chat'}</span>
                </button>
            </div>
        </div>
    );
};

export default SocialSidebar;
