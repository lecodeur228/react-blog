import "../styles/Header.scss";
import images from "../utils/images";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header flex flex-col" style = {{
      background: `url(${images.hd_base}) center/cover no-repeat`
    }}>
      <Navbar />

      <div className="container flex-1 w-full flex items-center justify-center">
        <div className="hd-content flex flex-col justify-center items-center text-center">
          <h1 className="hd-title text-white"></h1>
          <div className="hd-search">
            <form>
              <div className="form-group flex items-stretch bg-white">
                <span className="form-gp-icon items-center justify-center">
                  <i className="bi bi-search"></i>
                </span>
                <input type="text" className="form-gp-input" placeholder="Search article" />
                <button type="button" className="form-gp-btn text-white bg-primary btn">
                  Rechercher
                </button>
              </div>
            </form>
          </div>

          <div className="hd-tags text-white flex items-center">
            <h3 className="hd-tags-title nowrap text-base">
              Recherche populaire:
            </h3>

            <ul className="tags-list flex flex-wrap items-center">
              <li className="tags-item text-sm">Hotel 2F</li>
              <li className="tags-item text-sm">Plage</li>
              <li className="tags-item text-sm">Onomo Plage</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
