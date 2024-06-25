import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faLemon } from "@fortawesome/free-regular-svg-icons";
import {
  faBowlRice,
  faCarrot,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import bananas from "../../assets/illustration/bananas.png";
import cherry from "../../assets/illustration/cherry.png";
import orange from "../../assets/illustration/orange.png";
import tomato from "../../assets/illustration/tomato.png";
import straberry from "../../assets/illustration/strawberry.png";
import avocado from "../../assets/illustration/avocado.png";
import dashboard from "../../assets/Dashboard.png"
import { Link } from "react-router-dom";

export default function MainModel() {
  return (
    <div className="relative px-7 sm:px-0 bg-hero-pattern w-full h-max flex flex-col items-center justify-start">
      <img
        className="sm:block opacity-80 hidden absolute top-40 right-72"
        src={avocado}
        alt="Tomato"
        width={30}
      />
      <img
        className="sm:block opacity-80 hidden absolute scale-x-[-1] top-40 left-72"
        src={bananas}
        alt="Bananas"
        width={40}
      />
      <img
        className="sm:block opacity-80 hidden absolute scale-x-[-1] top-16 left-24"
        src={cherry}
        alt="Avocado"
        width={30}
      />
      <img
        className="sm:block opacity-80 hidden absolute top-16 right-32"
        src={orange}
        alt="Orange"
        width={40}
      />
      <div className="bg-white/50 mt-5 flex flex-col justify-between items-center h-[140px] sm:h-[120px] p-5 rounded">
        <h1 className="text-2xl sm:text-4xl h-max bg-gradient-to-r to-stone-500 from-primetext bg-clip-text text-center text-transparent">
          Your ultimate guide to unlocking a healthier life
        </h1>
        <p className="sm:text-lg text-base text-center font-semibold text-primary">
          Nourish your Body, Mind, and Soul with Aahar
          <span className="text-primetext">Veda.</span>
        </p>
      </div>
      <div className="w-96 mt-4 h-max flex items-start justify-between">
        <Link to='./dashboard' className="bg-white rounded-full border-[1px] border-primetext px-6 py-2 font-medium hover:bg-white hover:scale-95 sm:flex sm:items-center shadow-md transform transition duration-100 hover:shadow-inner ease-in-out">
          <FontAwesomeIcon
            className="mr-2 text-xl"
            icon={faSearchengin}
          ></FontAwesomeIcon>
          Guide Me
        </Link>
        <button className="bg-white rounded-full border-[1px] border-primary px-6 py-2 font-medium text-primary hover:scale-95 sm:flex sm:items-center shadow-md transform transition duration-100 hover:shadow-inner ease-in-out">
          <FontAwesomeIcon
            className="mr-2 text-lg"
            icon={faBowlRice}
          ></FontAwesomeIcon>
          Explore More
        </button>
      </div>
      <img className="mt-9 shadow-lg border border-gray-100 rounded-md" width={900} src={dashboard} alt="AaharVeda Dashboard" />
    </div>
  );
}
