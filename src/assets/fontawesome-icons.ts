import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import {
  faBars,
  faSearch,
  faBell,
  faPowerOff,
  faUser,
  faCogs,
  faTh,
  faShareAlt,
  faStar,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBars,
  faSearch,
  faBell,
  faPowerOff,
  faUser,
  faCogs,
  faTh,
  faShareAlt,
  faStar,
  faComment
);
library.add(faPhone);
library.add(faUser);
library.add(faFlag);

export default FontAwesomeIcon;
