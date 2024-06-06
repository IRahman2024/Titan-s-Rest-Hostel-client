import silver from '../../../../public/badge/silver.jpg'
import gold from '../../../../public/badge/gold.png'
import platinum from '../../../../public/badge/platinum.png'
const MemberShip = () => {
    return (
        <div className='flex gap-4 p-8'>
            <div className="card w-96 bg-base-100 shadow-xl">
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
            </div>
        </div>
    );
};

export default MemberShip;