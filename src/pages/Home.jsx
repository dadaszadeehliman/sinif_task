import axios from 'axios'
import { useState, useEffect } from 'react'

function Home() {
    const [gethome, setgethome] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/restoran/')
            .then(res => setgethome(res.data))
    }, [])
    return (
        <div>
            <div className='Home_section_1'>
                <div className='container Home_section_1_1 '>
                    <div className='Home_section_1_esas pt-5' >
                        <div>
                            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, quia!</h2>
                            <div className='Home_section_1_link'>
                                <a href="#" >Book a Table</a>
                            </div>
                        </div>
                    </div>
                    <div className='Home_section_form_esas  container'>
                        <div className='Home_section_1_2_esas mt-5'>
                            <div className='row Home_section_1_2 '>
                                <div className='col-lg-2'><input type="text" placeholder='Name' /></div>
                                <div className='col-lg-2'><input type="tel" placeholder='Phone' /></div>
                                <div className='col-lg-2'><input type="date" /></div>
                                <div className='col-lg-2'><input type="time" /></div>
                                <div className='col-lg-2'>
                                    <select>
                                        <option>Person</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4+</option>
                                    </select>
                                </div>
                                <div className='col-lg-2'>
                                    <input type="button" value='Book a Table' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className='Home_section_2'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg" alt="person" />
                        </div>
                        <div className='col-lg-6 Home_section_2_yazi'>
                            <div>
                                <h3>ABOUT TASTY</h3>
                                <h2>Our chef cooks the most delicious food for you</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='Home_section_3 mt-5'>
                    <div className='container'>
                        <div>
                            <h5 className='text-center'>OUR MENU</h5>
                            <h2 className='text-center'>Discover Our Exclusive Menu</h2>
                            <div className='row'>
                                {gethome.map(elemen => {
                                    return (
                                        <div className='col-lg-6 col-md-12 mt-3 row homeget_esas'>
                                            <div className='col homeget_esas_img'>
                                                <img src={elemen.img} alt="ffdsf" />
                                            </div>
                                            <div className=' col p-4 homeget_esas_yazi'>
                                                <h3>{elemen.name}</h3>
                                                <h5>{elemen.about}</h5>
                                            </div>
                                            <div className='col h homeget_money'>
                                                <p>${elemen.money}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <p className='text-center mt-5'>Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
                            <div className="d-flex justify-content-center">
                                <button className='home_section_3_btn'>Make a Reservation</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='Home_section_4 mt-5'>
                    <div className='Home_section_4_yazi'>
                        <h2>Our Specialties</h2>
                    </div>
                </div>

                <div className='Home_section_5'>
                    <div className='container'>
                        <div className='Section_Home_esas row d-flex no-gutters mt-5'>
                            <div className='row col-lg-6'>
                                <div className='block-3 d-md-flex ftco-animate fadeInUp ftco-animated qutu'>
                                    <div className='col text-center'>
                                        <h3>Beef Steak</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                                        <p>FROM $10.00</p>
                                    </div>
                                    <div className='col'>
                                        <img src="https://preview.colorlib.com/theme/tasty/images/dish-4.jpg" alt="kdkdg"/>
                                    </div>
                                </div>
                                <div className='block-3 d-md-flex ftco-animate fadeInUp ftco-animated qutu'>
                                    <div className='col'>
                                        <img src="https://preview.colorlib.com/theme/tasty/images/dish-4.jpg" alt="kdkdg" />
                                    </div>
                                    <div className='col text-center'>
                                        <h3>Beef Steak</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                                        <p >FROM $10.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row col-lg-6'>
                                <div className='block-3 d-md-flex ftco-animate fadeInUp ftco-animated'>
                                    <div className='col text-center'>
                                        <h3>Beef Steak</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                                        <p >FROM $10.00</p>
                                    </div>
                                    <div className='col'>
                                        <img src="https://preview.colorlib.com/theme/tasty/images/dish-4.jpg" alt="kdkdg" />
                                    </div>
                                </div>
                                <div className='block-3 d-md-flex ftco-animate fadeInUp ftco-animated' >
                                    <div className='col'>
                                        <img src="https://preview.colorlib.com/theme/tasty/images/dish-4.jpg" alt="kdkdg" />
                                    </div>
                                    <div className='col text-center'>
                                        <h3>Beef Steak</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                                        <p >FROM $10.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home