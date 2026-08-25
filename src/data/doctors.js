import dhananjay from "../assets/doctors/Dhananjay.jpg";
import prerna from "../assets/doctors/Prerna.jpg";
import neeraj from "../assets/doctors/neeraj.jpg";
import tuhina from "../assets/doctors/Tuhina.jpg";
import suman from "../assets/doctors/Suman.jpg";
import nabam from "../assets/doctors/Nabam.jpg";
import anjali from "../assets/doctors/Anjali.jpg";
import shivani from "../assets/doctors/shivani.jpg";
import archana from "../assets/doctors/Archana.jpg";
import bushra from "../assets/doctors/Bushra.jpg";

export const doctors = [
  {
    name: "Dr. Dhananjay",
    role: "MD Dermatologist",
    branch: "Noida Branch",
    slug: "noida",
    photo: dhananjay,
  },
  {
    name: "Dr. Prerna",
    role: "Cosmetologist",
    branch: "Lucknow Branch",
    slug: "lucknow",
    photo: prerna,
  },
  {
    name: "Dr. Neeraj",
    role: "Specialist",
    branch: "Lajpat Nagar Branch",
    slug: "lajpat-nagar",
    photo: neeraj,
  },
  {
    name: "Dr. Tuhina",
    role: "MD Dermatologist",
    branch: "Indirapuram Branch",
    slug: "indirapuram",
    photo: tuhina,
  },
  {
    name: "Dr. Suman",
    role: "Specialist",
    branch: "",
    slug: null,
    photo: suman,
  },
  {
    name: "Dr. Sadia Sadaf",
    role: "BUMS, MD Dermatologist",
    branch: "Lucknow Branch (On Call)",
    slug: "lucknow",
    photo: null,
  },
  {
    name: "Dr. Nabam Nunia",
    role: "MBBS, Cosmetologist & Trichologist",
    branch: "Agra Branch",
    slug: "agra",
    photo: nabam,
  },
  {
    name: "Dr. Anjali",
    role: "BDS, Cosmetologist",
    branch: "Kanpur Branch",
    slug: "kanpur",
    photo: anjali,
  },
  {
    name: "Dr. Shivani",
    role: "BDS, Cosmetologist",
    branch: "Kanpur Branch",
    slug: "kanpur",
    photo: shivani,
  },
  {
    name: "Dr. Archana Singh",
    role: "MBBS, MD Dermatologist",
    branch: "Lajpat Nagar Branch",
    slug: "lajpat-nagar",
    photo: archana,
  },
  {
    name: "Dr. Bushra Shahid",
    role: "MBBS, MD Dermatologist",
    branch: "Noida Branch",
    slug: "noida",
    photo: bushra,
  },
];

// Doctors grouped by clinic slug (see data/locations.js) — used on the Clinics page
// to show who's stationed where. Doctors with no fixed branch (slug: null) are omitted.
export function doctorsAtClinic(slug) {
  return doctors.filter((d) => d.slug === slug);
}
