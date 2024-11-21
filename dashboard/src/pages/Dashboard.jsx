import React from "react";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GrCompliance } from "react-icons/gr";
import { MdOutlinePendingActions } from "react-icons/md";

import Requeatchart from "../components/Requeatchart";
import Table from "../components/table";

const Dashboard = () => {
  return (
    <div className="mt-6 mb-20 ">
      <div>
        <h2 className="text-2xl font-bold ">Active Repair Requests</h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {/* this is card1 */}
        <div className=" h-[34vh] w-[70vw] hover:h-[35vh] hover:w-[71vw]  md:h-[30vh] md:w-[25vw] hover:md:h-[31vh] hover:md:w-[26vw] border-[1px] shadow-2xl shadow-gray-600  mt-4 rounded-lg">
          <div className="md:text-xl text-lg font-medium  p-4 md:flex md:items-center gap-4  text-gray-600 ">
            <h2 className="text-center">Total Repair Request this month</h2>
            <div className="text-4xl flex items-center justify-center mt-4 ">
              <VscGitPullRequestGoToChanges />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-4xl font-bold leading-4  p-4  text-gray-800">
              200
            </p>
          </div>
        </div>
        {/* this is card2 */}
        <div className=" h-[34vh] w-[70vw] hover:h-[35vh] hover:w-[71vw]  md:h-[30vh] md:w-[25vw] hover:md:h-[31vh] hover:md:w-[26vw] border-[1px] shadow-2xl shadow-gray-600  mt-4 rounded-lg">
          <div className="md:text-xl text-lg font-medium  p-4 md:flex md:items-center gap-4  text-gray-600 ">
            <h2 className="text-center">Total income this month</h2>
            <div className="text-4xl flex items-center justify-center mt-4 ">
              <FaMoneyBillTrendUp />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-4xl font-bold leading-4  p-4  text-gray-800">
              $14,500
            </p>
          </div>
        </div>
        {/* this is card3 */}
        <div className=" bg-gradient-to-b from-slate-900 to-slate-500  h-[34vh] w-[70vw] hover:h-[35vh] hover:w-[71vw]  md:h-[30vh] md:w-[25vw] hover:md:h-[31vh] hover:md:w-[26vw] border-[1px] shadow-2xl shadow-gray-600  mt-4 rounded-lg">
          <div className="md:text-xl text-lg font-medium  p-4 md:flex md:items-center gap-4  text-white ">
            <h2 className="text-center">Total Repair complit this month</h2>
            <div className="text-4xl flex items-center justify-center mt-4 ">
              <GrCompliance />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-4xl font-bold leading-4  p-4  text-gray-800">
              160
            </p>
          </div>
        </div>
        {/* this is card4 */}
        <div className=" h-[34vh] w-[70vw] hover:h-[35vh] hover:w-[71vw]  md:h-[30vh] md:w-[25vw] hover:md:h-[31vh] hover:md:w-[26vw] border-[1px] shadow-2xl shadow-gray-600  mt-4 rounded-lg">
          <div className="md:text-xl text-lg font-medium  p-4 md:flex md:items-center gap-4  text-gray-600 ">
            <h2 className="text-center">Total pending Repaie this month</h2>
            <div className="text-4xl flex items-center justify-center mt-4 ">
              <MdOutlinePendingActions />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-4xl font-bold leading-4  p-4  text-gray-800">
              40
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className=" mt-8 w-[50%] ">
          <h2 className="text-4xl font-bold leading-4  p-4 ">Total request</h2>
          <Requeatchart />
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold leading-4  p-4 ">Costumer details</h2>
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
