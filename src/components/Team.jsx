import React from "react";
import asset_16 from '../assets/asset_16.jpeg';
import asset_17 from '../assets/asset_17.jpeg';
import asset_18 from '../assets/asset_18.jpeg';

function Team() {
  return (
    <div className="">
      <div className="p-5">
        <h1 className="text-center text-4xl font-bold font-custom">Team</h1>
        <p className="w-full md:w-2/5 text-center m-auto text-lg">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
          a large language ocean.
        </p>
      </div>

      <div className="p-6 flex flex-wrap justify-center space-x-0 md:space-x-10">
        {/* Card 1 */}
        <div className="cards1 w-full sm:w-1/2 md:w-1/4 mb-6">
          <div className="img">
            <img src={asset_17} alt="team-member" className="w-full h-auto" />
          </div>
          <div className="pl-3 pt-3">
            <p className="text-md text-gray-400 font-custom">CEO, CO-FOUNDER</p>
            <h1 className="text-2xl font-custom">Vince Richardson</h1>
          </div>
        </div>

        {/* Card 2 */}
        <div className="cards1 w-full sm:w-1/2 md:w-1/4 mb-6">
          <div className="img">
            <img src={asset_18} alt="team-member" className="w-full h-auto" />
          </div>
          <div className="pl-3 pt-3">
            <p className="text-md text-gray-400 font-custom">CEO, CO-FOUNDER</p>
            <h1 className="text-2xl font-custom">Jean Love</h1>
          </div>
        </div>

        {/* Card 3 */}
        <div className="cards1 w-full sm:w-1/2 md:w-1/4 mb-6">
          <div className="img">
            <img src={asset_16} alt="team-member" className="w-full h-auto" />
          </div>
          <div className="pl-3 pt-3">
            <p className="text-md text-gray-400 font-custom">CEO, CO-FOUNDER</p>
            <h1 className="text-2xl font-custom">Jeff Stark</h1>
          </div>
        </div>

        {/* Card 4 */}
        <div className="cards1 w-full sm:w-1/2 md:w-1/4 mb-6">
          <div className="img">
            <img src={asset_16} alt="team-member" className="w-full h-auto" />
          </div>
          <div className="pl-3 pt-3">
            <p className="text-md text-gray-400 font-custom">CEO, CO-FOUNDER</p>
            <h1 className="text-2xl font-custom" >Vince Richardson</h1>
          </div>
        </div>

        {/* Card 5 */}
        <div className="cards1 w-full sm:w-1/2 md:w-1/4 mb-6">
          <div className="img">
            <img src={asset_17} alt="team-member" className="w-full h-auto" />
          </div>
          <div className="pl-3 pt-3">
            <p className="text-md text-gray-400 font-custom">CEO, CO-FOUNDER</p>
            <h1 className="text-2xl font-custom">Jean Love</h1>
          </div>
        </div>

        {/* Card 6 */}
        <div className="cards1 w-full sm:w-1/2 md:w-1/4 mb-6">
          <div className="img">
            <img src={asset_18} alt="team-member" className="w-full h-auto" />
          </div>
          <div className="pl-3 pt-3">
            <p className="text-md text-gray-400 font-custom">CEO, CO-FOUNDER</p>
            <h1 className="text-2xl font-custom">Jeff Stark</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
