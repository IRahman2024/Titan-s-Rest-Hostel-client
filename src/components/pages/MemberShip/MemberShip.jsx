// import silver from '../../../../public/badge/silver.jpg'
// import gold from '../../../../public/badge/gold.png'
// import platinum from '../../../../public/badge/platinum.png'

import { Link } from 'react-router-dom';
import './memberCard.css'

const MemberShip = () => {
    return (
        <div className='flex gap-4 p-8'>
            {/* <div className="card w-96 bg-base-100 shadow-xl">
                <figure className='h-60'><img src={silver} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">Silver</h2>
                    <p className='text-2xl'>
                        price: $ 200
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Upgrade Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className='h-60'><img src={gold} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">Gold</h2>
                    <p className='text-2xl'>
                        price: $ 500
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Upgrade Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className='h-60'><img src={platinum} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">Platinum</h2>
                    <p className='text-2xl'>
                        price: $ 800
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Upgrade Now</button>
                    </div>
                </div>
            </div> */}

            <div className="pack-container">
                <div className="header">
                    <p className="title">
                        Silver
                    </p>
                    <div className="price-container">
                        <span>$</span>200
                        <span>/mo</span>
                    </div>
                </div>
                <div>
                    <ul className="lists">
                        <li className="list">
                            <span>
                                <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </span>
                            <p>
                                Single Bed with Quality Mattress
                            </p>
                        </li>
                        <li className="list">
                            <span>
                                <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </span>
                            <p>
                                Study Desk and Chair
                            </p>
                        </li>
                        <li className="list">
                            <span>
                                <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </span>
                            <p>
                                Wi-Fi Connectivity
                            </p>
                        </li>
                        <li className="list">
                            <span>
                                <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </span>
                            <p>Dining Area
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="button-container">
                    <Link to={`/dashboard/checkOut/200`}>
                        <button className='btn btn-outline btn-success' type="btn">
                            Upgrade Now
                        </button>
                    </Link>
                </div>
            </div>

            <div className="pack-container">
                <div className="header">
                    <p className="title">
                        Gold
                    </p>
                    <div className="price-container">
                        <span>$</span>500
                        <span>/mo</span>
                    </div>
                </div>
                <div>
                    <ul className="lists">
                        <li className="list">
                            <span>
                                <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </span>
                            <p>
                                Single Bed with Quality Mattress
                            </p>
                        </li>
                        <li className="list">
                            <span>
                                <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </span>
                            <p>
                                Study Desk and Chair
                            </p>
                        </li>
                        <li className="list">
                            <span>
                                <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </span>
                            <p>
                                Wi-Fi Connectivity
                            </p>
                        </li>
                        <li className="list">
                            <span>
                                <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </span>
                            <p>Dining Area
                            </p>
                        </li>
                        <li className="list">
                            <span>
                                <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </span>
                            <p>Semi-Private Rooms with Shared Bathrooms
                            </p>
                        </li>
                        <li className="list">
                            <span>
                                <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </span>
                            <p>In-Room Entertainment
                            </p>
                        </li>
                        <li className="list">
                            <span>
                                <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </span>
                            <p>Fitness Center
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="button-container">
                    <Link to={`/dashboard/checkOut/500`}>
                        <button className='btn btn-outline btn-success' type="btn">
                            Upgrade Now
                        </button>
                    </Link>
                </div>
            </div>

            <div className="pack-container">
                <div className="header">
                    <p className="title">
                        Platinum
                    </p>
                    <div className="price-container">
                        <span>$</span>700
                        <span>/mo</span>
                    </div>
                </div>
                <div>
                    <ul className="lists">
                        <li className="list">
                            <span>
                                <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </span>
                            <p>
                                Single Bed with Quality Mattress
                            </p>
                        </li>
                        <li className="list">
                            <span>
                                <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </span>
                            <p>
                                Study Desk and Chair
                            </p>
                        </li>
                        <li className="list">
                            <span>
                                <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </span>
                            <p>
                                Wi-Fi Connectivity
                            </p>
                        </li>
                        <li className="list">
                            <span>
                                <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </span>
                            <p>Private Rooms with En-suite Bathrooms
                            </p>
                        </li>
                        <li className="list">
                            <span>
                                <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </span>
                            <p>Room Service Options
                            </p>
                        </li>
                        <li className="list">
                            <span>
                                <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </span>
                            <p>Personal Entertainment Systems
                            </p>
                        </li>
                        <li className="list">
                            <span>
                                <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </span>
                            <p>Private Study Rooms and Conference Spaces
                            </p>
                        </li>
                        <li className="list">
                            <span>
                                <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </span>
                            <p>High-Speed Internet and Streaming Services
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="button-container">
                    <Link to={`/dashboard/checkOut/700`}>
                        <button className='btn btn-outline btn-success' type="btn">
                            Upgrade Now
                        </button>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default MemberShip;