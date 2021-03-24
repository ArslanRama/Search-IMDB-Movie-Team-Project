import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../styles/footer.css'

const Footer = () => {
  return (
    <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="justify-content-center">
          <MDBCol md="3 mb-4 d-flex flex-column align-items-center">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
            IMDB Movie Search Engine
            </h5>
            <p>
            <a href="https://www.imdb.com/what-to-watch/?ref_=hm_watch_btn" > <img alt="" src= "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/1200px-IMDb_Logo_Square.svg.png" width="50px" /> What to watch</a>
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="4 d-flex flex-column align-items-center mb-4">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Links
            </h5>
            <ul className="list-unstyled">
              <li>
              <a href="https://apps.apple.com/us/app/id342792525?_branch_match_id=902920060981240537&utm_campaign=mdot%20sitewide%20footer%20Branch%20update&utm_medium=marketing&utm_source=IMDb%20Mdot">Get the IMDB APP</a>
              </li>
              <li>
              <a href="https://advertising.amazon.com/resources/ad-specs/imdb/?ref_=a20m_us_spcs_imdb">Advertising</a>
              </li>
              <li>
              <a href="https://www.amazon.jobs/en/teams/imdb?ref_=ft_jb">Jobs</a>
              </li>
              <li>
              <a href="https://www.boxofficemojo.com/">Box Office</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="3 d-flex flex-column align-items-center" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase mb-4 mt-3 font-weight-bold">
              <strong>Contact</strong>
            </h6>
           <div>
            <p>
              <i className="fa fa-home mr-3" /> Leipzig, Saxony 04177, DE
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@example.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 49 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 49 234 567 89
            </p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
   

      
      <div className="text-center">
     {/*  <h3>Contributors</h3> */}
        <ul className="list-unstyled list-inline">
        <li className="list-inline-item">
            <span className="btn-floating btn-sm btn-fb mx-1 font-weight-bold"> Collaborators :
            </span>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-fb mx-1 font-italic" href="https://github.com/Jeremiah1582"> Jeremiah 
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-tw mx-1 font-italic"href="https://github.com/ste66"> Stella 

            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-gplus mx-1 font-italic"href="https://github.com/BrujoH"> Brujo 

            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-li mx-1 font-italic"href="https://github.com/MetalRocks71"> Michael  

            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-dribbble mx-1 font-italic"href="https://github.com/ArslanRama"> Aslan 

            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a className="mr-3" href="https://github.com/ArslanRama/Search-IMDB-Movie-Team-Project"> Team Project </a>
          
          <img className="mr-5" alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
          
          <a className="mx-2 logo" href="https://twitter.com/?lang=de"><i className="fab fa-twitter"/></a>
          <a className="mx-2 logo" href="https://de-de.facebook.com"><i className="fab fa-facebook"/></a>
          <a className="mx-2 logo" href="https://www.instagram.com"><i className="fab fa-instagram"/></a>
          <a className="mx-2 logo" href="https://github.com/"><i className="fab fa-github"/></a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;