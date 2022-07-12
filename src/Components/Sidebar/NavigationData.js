import { FaBed, FaBriefcaseMedical, FaCapsules, FaClinicMedical, FaEdit, FaFeatherAlt, FaFile, FaFileAlt, FaFileMedical, FaHatCowboySide, FaHome, FaMask, FaRegFile, FaSquare, FaWind, FaWineBottle } from "react-icons/fa";

const navigationData = [
  { title: "Dashboard", path: "/dashboard", icon: <FaClinicMedical /> },
  { title: "OPD Entry", path: "/dashboard/opd", icon: <FaFileMedical /> },
  { title: "IPD Entry", path: "/dashboard/ipd", icon: <FaBed /> },
  { title: "Treatment", path: "/dashboard/treatment", icon: <FaCapsules /> },
  { title: "Therapy", path: "/dashboard/therapy", icon: <FaFeatherAlt /> },
  { title: "Pathology", path: "/dashboard/pathology", icon: <FaBriefcaseMedical /> },
  { title: "Reports", path: "/dashboard/reports", icon: <FaRegFile /> },
];

export default navigationData;
