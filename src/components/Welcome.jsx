import React, { forwardRef } from "react";
import { FaPlay } from "react-icons/fa6";
import asset_0 from "../assets/asset_0.jpeg";
import styles from './Welcome.module.css'

const Welcome = forwardRef((props, ref) => {
  return (
    <div className="w-3/4 mx-auto flex flex-col lg:flex-row lg:items-center pt-10 mt-5" ref={ref}>
      <div className="lg:w-1/2">
        <img src={asset_0} alt="" className="w-full h-auto" />
      </div>
      <div className="w-full lg:w-1/2 p-4" data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-4 font-custom">Welcome to our website</h1>
        <p className="mb-2 ">
          Far far away, behind the word mountains, far from the countries 
          Vokalia and Consonantia, there live the blind texts. Separated they
          live  in Bookmarksgrove right at the coast of the Semantics, a
          large 
          language ocean.
        </p>
        <p className="mb-4">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>

        <button className={styles.watchButton}>
  <FaPlay className={styles.iconCircle} />
  <label className={styles.buttonLabel} htmlFor="/">WATCH THE VIDEO</label>
</button>

      </div>
    </div>
  );
});

export default Welcome;
