import React from "react";
import { FaTimes } from "react-icons/fa";
import Iframe from "react-iframe";
import video from "../../assets/video/danang.mp4";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

//
import "./Sidebar.scss";

const Sidebar = (props) => {
  const { isOpenSidebar, ToggleSidebar } = props;
  return (
    <div className={`sidebar ${isOpenSidebar === true ? "active" : ""}`}>
      <div className="sidebar__container">
        <div className="sidebar__icon-close" onClick={ToggleSidebar}>
          <FaTimes />
        </div>
        <div className="sidebar__content">
          <h2 className="sidebar__title">TravelCaps</h2>
          <p className="sidebar__slogan">Đến và trải nghiệm cùng mọi người</p>
          <video className="sidebar__video" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
          <p className="sidebar__desc">
            Với vị trí là một trong ba trung tâm du lịch lớn trên bản đồ du lịch
            Việt Nam, Đà Nẵng thành phố biển xinh đẹp hiền hòa và mếm khách, nơi
            mà bạn có thể dễ dàng đến được bằng cả đường bộ, đường hàng không và
            đường thủy. Một dấu ấn địa lý và lịch sử, điểm trung chuyển tiện lợi
            đến các di sản văn hóa thế giới như Huế, Mỹ Sơn, Hội An và khu dự
            trữ sinh quyển thế giới Cù Lao Chàm. Qua năm tháng Đà Nẵng đang càng
            khẳng định là một điểm đến hấp dẫn và lý tưởng đối với bàn bè và du
            khách năm châu...
          </p>
          <Iframe
            width="100%"
            height="300px"
            s
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245368.26104938771!2d107.93803986190555!3d16.07176349276354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0x1df0cb4b86727e06!2zxJDDoCBO4bq1bmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1666766759612!5m2!1svi!2s"
          />

          <div className="sidebar__socials">
            <h2>Follow me</h2>
            <ul>
              <li>
                <a href="/">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
