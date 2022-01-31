import { useState } from "react";
import Logo from "./undraw_file_searching_re_3evy.svg";

const RestaurantsPage = () => {

    const Distances = [
        { id: '1 KM', Restaurants: [{ id: 'Kents Cafe', restaurant: [{ id: 'Module1 ', name: 'Kents Cafe', owner: 'Shikhar', description: 'It is a long established fact that a reader will be distracted by the readable content of the page.' }, { id: 'Module1 ', name: 'Kents Cafe', owner: 'Shikhar', description: 'It is a long established fact that a reader will be distracted by the readable content of the page.' }, { id: 'Module1 ', name: 'Kents Cafe', owner: 'Shikhar', description: 'It is a long established fact that a reader will be distracted by the readable content of the page.' }, { id: 'Module1 ', name: 'Kents Cafe', owner: 'Shikhar', description: 'It is a long established fact that a reader will be distracted by the readable content of the page.' }, { id: 'Module1 ', name: 'Kents Cafe', owner: 'Shikhar', description: 'It is a long established fact that a reader will be distracted by the readable content of the page.' }, { id: 'Module1 ', name: 'Kents Cafe', owner: 'Shikhar', description: 'It is a long established fact that a reader will be distracted by the readable content of the page.' }] }] },
        { id: '5 KM', Restaurants: [{ id: 'Kents Cafe', restaurant: [{ id: 'Kents Cafe', name: 'Kents Cafe', owner: 'Shikhar', description: 'It is a long established fact that a reader will be distracted by the readable content of the page.' }, { id: 'Kents Cafe', name: 'Kents Cafe', owner: 'Shikhar', description: 'It is a long established fact that a reader will be distracted by the readable content of the page.' }, { id: 'Kents Cafe', name: 'Kents Cafe', owner: 'Shikhar', description: 'It is a long established fact that a reader will be distracted by the readable content of the page.' }, { id: 'Kents Cafe', name: 'Kents Cafe', owner: 'Shikhar', description: 'It is a long established fact that a reader will be distracted by the readable content of the page.' }] }] },
        { id: '10 KM', Restaurants: [{ id: 'Kents Cafe', restaurant: [{ id: 'Kents Cafe', name: 'Kents Cafe', owner: 'Shikhar', description: 'It is a long established fact that a reader will be distracted by the readable content of the page.' }] }] }, 
        { id: 'Anywhere', Restaurants: [{ id: 'Kents Cafe', restaurant: [{ id: 'Kents Cafe', name: 'Kents Cafe', owner: 'Shikhar', description: 'It is a long established fact that a reader will be distracted by the readable content of the page.' }] }] },
    ];    

    const [showdata, setShowData] = useState(false);
    const [restaurant1, setSubject] = useState('');
    const [distance1, setSemester] = useState('');

    const showData = () => (
        setShowData(true)
    )

    const onChangeDistance = () => {
        var select2 = document.getElementById('distances');
        var optionSem = select2.options[select2.selectedIndex].value;
        setSemester(optionSem)
    }

    const onChangeRestaurant = () => {
        var select = document.getElementById('restaurants');
        var optionSub = select.options[select.selectedIndex].value;
        setSubject(optionSub);
    }

    const DisplayData = () => (<div className="container">{
        Distances.filter(distance => distance.id === distance1)
            .map(distance => (
                distance.Restaurants.filter(restaurant => restaurant.id === restaurant1)
                    .map(restaurant => (
                        restaurant.restaurant.map(restaurant =>
                        (
                            <div className="card">
                                <h1>{restaurant.name}</h1>
                                <p>{restaurant.owner}</p>
                                <p2>{restaurant.description}</p2>
                            </div>
                        )))))

            )
    }</div>
    );

    return (
        <div className="restaurantsPage">

            <div className="text">
                <h1 className="restaurant">RESTAURANTS</h1>
            </div>

            <div className="searchBar">
                <form method="get">

                    <label htmlFor="header-search">
                        <span className="visually-hidden">Search Restaurants</span>
                    </label>

                    <select name="restaurants" id="restaurants" className="dropdown searchDrop" onChange={onChangeRestaurant}>
                        <option value="" hidden selected>Search Restaurants</option>
                        <option value="Kents Cafe" className="displaytext">Kents Cafe</option>
                    </select>

                    <select name="distances" id="distances" className="dropdown" onChange={onChangeDistance}>
                        <option value="" hidden selected>Distance</option>
                        <option value="1 KM" className="displaytext">1 KM</option>
                        <option value="5 KM" className="displaytext">5 KM</option>
                        <option value="10 KM" className="displaytext">10 KM</option>
                        <option value="Anywhere" className="displaytext">Anywhere</option>
                    </select>

                    <button type="button" value="Search" className="search" onClick={showData}>Search</button>
                </form>
            </div>

            <div className="container">
                {showdata ? <DisplayData /> : 
                <div className="logo">
                    <img src={Logo} alt="Searching" className="logo"/>
                </div>}
            </div>
        </div>

    );
};

export default RestaurantsPage;
