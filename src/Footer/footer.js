import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              IMDB Movie Search Engine
            </h6>
            <p>
              <a href="https://www.imdb.com/what-to-watch/?ref_=hm_watch_btn" > <img alt="" src= "" size="10px" />What to watch</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Useful Links</h6>
            <p>
              <a href="https://apps.apple.com/us/app/id342792525?_branch_match_id=902920060981240537&utm_campaign=mdot%20sitewide%20footer%20Branch%20update&utm_medium=marketing&utm_source=IMDb%20Mdot">Get the IMDB APP</a>
            </p>
            <p>
              <a href="https://advertising.amazon.com/resources/ad-specs/imdb/?ref_=a20m_us_spcs_imdb">Advertising</a>
            </p>
            <p>
              <a href="https://www.amazon.jobs/en/teams/imdb?ref_=ft_jb">Jobs</a>
            </p>
            <p>
              <a href="https://www.boxofficemojo.com/">Box Office</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
            Contributors
            </h6>
            <ul>
              <li className="https://github.com/Jeremiah1582">
                <a href="Jeremiah">Jeremiah <img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/></a>
              </li>
              <br/>
              <li className="https://github.com/ste66">
                <a href="Stella">Stella <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/></a>
              </li>
              <br/>
              <li className="https://github.com/BrujoH">
                <a href="Brujo">Brujo <img alt="SASS" src="https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white"/></a>
              </li>
              <br/>
              <li className="https://github.com/MetalRocks71">
                <a href="Michael">Michael  <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/></a>
              </li>
              <br/>
              <li className="https://github.com/ArslanRama">
                <a href="Aslan">Aslan <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/></a>
              </li>
            </ul>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-home mr-3" /> Leipzig, 04177 DE
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 49 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 49 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
            &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/ArslanRama/Search-IMDB-Movie-Team-Project"> Team Project </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-google-plus" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPage;
