import Map from "../common/Map";

const UserLocation = () => {
    return (
        <div className="user_profile_location">
            <h4 className="title">User Location</h4>
            <div className="property_sp_map mb40">
                <div className="h400 bdrs8 map_in">
                    <Map />
                </div>
            </div>
            {/* End property_sp_map  */}
            <div className="upl_content d-block d-md-flex">
                <p className="float-start fn-sm mb20-sm">
                    <span className="fas fa-map-marker-alt pr10 vam" />
                    3891 Ranchview Dr. Richardson, California 62639
                </p>
                <button className="btn location_btn">Get Direction</button>
            </div>
        </div>
    );
};

export default UserLocation;
