import Footer from "@/app/components/common/Footer";
import DefaultHeader from "@/app/components/common/DefaultHeader";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import HeaderTop from "@/app/components/common/HeaderTop";
import MobileMenu from "@/app/components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import AdvanceFilter from "@/app/components/listing/advance-filter";
import Pagination from "@/app/components/common/Pagination";
import ListGridFilter from "@/app/components/listing/ListGridFilter";
import CarItems from "@/app/components/listing/listing-styles/listing-v1/CarItems";

export const metadata = {
    title: "Listing V1 || Voiture - Automotive & Car Dealer NextJS Template",
};

const ListingV1 = () => {
    return (
        <div className="wrapper">
            <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >
                <HeaderSidebar />
            </div>
            {/* Sidebar Panel End */}

            {/* header top */}
            <HeaderTop />
            {/* End header top */}

            {/* Main Header Nav */}
            <DefaultHeader />
            {/* End Main Header Nav */}

            {/* Main Header Nav For Mobile */}
            <MobileMenu />
            {/* End Main Header Nav For Mobile */}

            {/* Advance_search_menu_sectn*/}
            <section className="advance_search_menu_sectn bgc-thm2 pt20 pb0 mt70-992 filter-style_two">
                <div className="container">
                    <AdvanceFilter />
                </div>
            </section>
            {/* End Advance_search_menu_sectn*/}

            {/* Inner Page Breadcrumb */}
            <section className="inner_page_breadcrumb style2 inner_page_section_spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="breadcrumb_content style2">
                                <h2 className="breadcrumb_title">
                                    Used Vehicles For Sale
                                </h2>
                                <p className="subtitle">Listing-v1</p>
                                <ol className="breadcrumb fn-sm mt15-sm">
                                    <li className="breadcrumb-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page"
                                    >
                                        Listing-v1
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Inner Page Breadcrumb */}

            {/* Listing Grid View */}
            <section className="our-listing pt0 bgc-f9 pb30-991">
                <div className="container">
                    <div className="row">
                        <ListGridFilter />
                    </div>
                    {/* End .row */}

                    <div className="row">
                        <CarItems />
                    </div>
                    {/* End .row */}

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mbp_pagination mt10">
                                <Pagination />
                            </div>
                        </div>
                    </div>
                    {/* End .row */}
                </div>
            </section>
            {/* Listing Grid View */}

            {/* Our Footer */}
            <Footer />
            {/* End Our Footer */}

            {/* Modal */}
            <div
                className="sign_up_modal modal fade"
                id="logInModal"
                data-backdrop="static"
                data-keyboard=""
                tabIndex={-1}
                aria-hidden="true"
            >
                <LoginSignupModal />
            </div>
            {/* End Modal */}
        </div>
        // End wrapper
    );
};

export default ListingV1;
