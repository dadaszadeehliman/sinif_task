import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer_esas p-5 mt-4'>
            <div className='container'>
                <div className='row '>
                    <div className='col-lg-3 col-md-6 mt-3'>
                        <h2 className='mb-5'>Tasty</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div>
                            <FaTwitter />
                            <FaFacebook />
                            <FaInstagramSquare />
                        </div>
                    </div>
                    <div className='footer_ul_style col-lg-3 col-md-6 mt-3'>
                        <h2 className='mb-5'>Opening Hours</h2>
                        <ul>
                            <li>Monday: 08: - 22:00</li>
                            <li>Tuesday: 08: - 22:00</li>
                            <li>Wednesday: 08: - 22:00</li>
                            <li>trusday: 08: - 22:00</li>
                            <li>friday: 08: - 22:00</li>
                            <li>saturday: 08: - 22:00</li>
                            <li>sunday: 08: - 22:00</li>
                        </ul>
                    </div>
                    <div className='footer_ul_style col-lg-3 col-md-6 mt-3'>
                        <h2 className='mb-5'>Contact Information</h2>
                        <ul>
                            <li>198 West 21th Street, Suite 721 New York NY 10016</li>
                            <li>+ 1235 2355 98</li>
                            <li>info@yoursite.com</li>
                            <li>email@email.com</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 mt-3'>
                        <h2 className='mb-5'>Newsletter</h2>
                        <p>Far far away, behind the word mountains, far from the countries.</p>
                        <div className='footer_subsrcbe_position'>
                            <span><FaRegPaperPlane /></span>
                            <input type="text" placeholder='Subscribe' />
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer