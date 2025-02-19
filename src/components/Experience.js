import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import LCR_Project from '../images/LCR_DB_1.PNG';
import Notify from '../images/Notify.png';
import Nutrition from '../images/NutritionForm.PNG'
import PeakFlowRate from '../images/PeakFlowRateCalc.png';
import MarketplaceApp from '../images/MarketplaceApp.png';
import Healthflow from '../images/HealthFlow.png';
import DivReinvest from '../images/DivReinvest.png';
import ValinorEnergy from '../images/ValinorEnergy.png';
import TruSponseSolutions from '../images/TruSponse.png';
import CAR_App from '../images/CAR_App.png';
import JonBeer_Tool from '../images/JonBeer_Tool.png';
import LCR_App from '../images/LCR_App.png'
import LCR_Excel from '../images/LCR_Excel.png'
import { CARAppLink, JonBeerToolLink, LCRAppLink, LCRExcelLink, MarketPlaceAppLink, PeakFlowRateCalcLink, HealthFlowLink, ValinorLink, DividendReinvestmentLink, TruSponseSolutionsLink, LCR_ProjectLink, NutritionFormLink } from '../constants'
import {FaChevronDown} from 'react-icons/fa';

function Experience() {
    return(
        <div className='max-w-4xl mt-4 mx-auto p-10'>
            <p className='text-2xl text-slate-600 md:text-4xl font-bold text-center py-4'>
                My experience.
            </p>
            <div className="flex flex-wrap justify-center pt-2">
                <div class="w-78 bg-white shadow rounded m-4 p-14">
                    <h2 className='w-64 text-base md:text-xl text-center text-gray-600 leading-relaxed mt-4 mb-4'>Self-Serve Database Application</h2>
                    <a href={CARAppLink} target="_blank">
                    <img className='w-64 mx-auto shadow-xl drop-shadow-md' src={CAR_App} alt='CAR_App' />
                    </a>
                    <div className="w-64">
                        {/* <p className='text-base md:text-l text-center text-gray-600 leading-relaxed mt-4'>
                        A full stack CRUD style web application using Node/Express/MongoDB
                        </p> */}
                    </div>
                    <div className="mt-4 text-center text-blue-700 hover:underline">
                        <a href={CARAppLink} target="_blank">See More</a>
                    </div>
                </div>
                <div class="w-78 bg-white shadow rounded m-4 p-14">
                    <h2 className='w-64 text-base md:text-xl text-center text-gray-600 leading-relaxed mt-4 mb-4'>CSV Processing Tool (Excel & Google Sheets)</h2>
                    <a href={JonBeerToolLink} target="_blank">
                    <img className='w-64 mx-auto shadow-xl drop-shadow-md' src={JonBeer_Tool} alt='JonBeerTool' />
                    </a>
                    <div className="w-64">
                        {/* <p className='text-base md:text-l text-center text-gray-600 leading-relaxed mt-4'>
                        A full stack CRUD style web application using Node/Express/MongoDB
                        </p> */}
                    </div>
                    <div className="mt-4 text-center text-blue-700 hover:underline">
                        <a href={JonBeerToolLink} target="_blank">See More</a>
                    </div>
                </div>
                <div class="w-78 bg-white shadow rounded m-4 p-14">
                    <h2 className='w-64 text-base md:text-xl text-center text-gray-600 leading-relaxed mt-4 mb-4'>Database Driven Report Web App</h2>
                    <a href={LCRAppLink} target="_blank">
                    <img className='w-64 mx-auto shadow-xl drop-shadow-md' src={LCR_App} alt='LCR_App' />
                    </a>
                    <div className="w-64">
                        {/* <p className='text-base md:text-l text-center text-gray-600 leading-relaxed mt-4'>
                        A full stack CRUD style web application using Node/Express/MongoDB
                        </p> */}
                    </div>
                    <div className="mt-4 text-center text-blue-700 hover:underline">
                        <a href={LCRAppLink} target="_blank">See More</a>
                    </div>
                </div>
                <div class="w-78 bg-white shadow rounded m-4 p-14">
                    <h2 className='w-64 text-base md:text-xl text-center text-gray-600 leading-relaxed mt-4 mb-4'>Desktop Database and Self-Serve Report</h2>
                    <a href={LCRExcelLink} target="_blank">
                    <img className='w-64 mx-auto shadow-xl drop-shadow-md' src={LCR_Excel} alt='LCR_Excel' />
                    </a>
                    <div className="w-64">
                        {/* <p className='text-base md:text-l text-center text-gray-600 leading-relaxed mt-4'>
                        A full stack CRUD style web application using Node/Express/MongoDB
                        </p> */}
                    </div>
                    <div className="mt-4 text-center text-blue-700 hover:underline">
                        <a href={LCRExcelLink} target="_blank">See More</a>
                    </div>
                </div>
                <div class="w-78 bg-white shadow rounded m-4 p-14">
                    <h2 className='w-64 text-base md:text-xl text-center text-gray-600 leading-relaxed mt-4 mb-4'>Marketplace Site</h2>
                    <a href={MarketPlaceAppLink} target="_blank">
                    <img className='w-64 mx-auto shadow-xl drop-shadow-md' src={MarketplaceApp} alt='MarketPlaceApp' />
                    </a>
                    <div className="w-64">
                        {/* <p className='text-base md:text-l text-center text-gray-600 leading-relaxed mt-4'>
                        A full stack CRUD style web application using Node/Express/MongoDB
                        </p> */}
                    </div>
                    <div className="mt-4 text-center text-blue-700 hover:underline">
                        <a href={MarketPlaceAppLink} target="_blank">See More</a>
                    </div>
                </div>
                <div class="w-78 bg-white shadow rounded m-4 p-14">
                    <h2 className='w-64 text-base md:text-xl text-center text-gray-600 leading-relaxed mt-4 mb-4'>Peak Flow Rate Calculator</h2>
                    <a href={PeakFlowRateCalcLink} target="_blank">
                        <img className='w-64 mx-auto shadow-xl drop-shadow-md' src={PeakFlowRate} alt='PeakFlowRateCalculator'/>    
                    </a>
                    
                    <div className="w-64">
                        {/* <p className='text-base md:text-l text-center text-gray-600 leading-relaxed mt-4'>
                        A full stack CRUD style web application using Node/Express/MongoDB
                        </p>   */}
                        <div className="mt-4 text-center text-blue-700 hover:underline">
                            <a href ={PeakFlowRateCalcLink} target="_blank">See More</a>
                        </div>
                    </div>
                </div>
                <div class="w-78 bg-white shadow rounded m-4 p-14">
                    <h2 className='w-64 text-base md:text-xl text-center text-gray-600 leading-relaxed mt-4 mb-4'>HealthFlow</h2>
                    <a href={HealthFlowLink} target="_blank">
                        <img className='w-64 mx-auto shadow-xl drop-shadow-md' src={HealthFlow} alt='HealthFlow'/>
                    </a>  
                    <div className="w-64">
                        {/* <p className='text-base md:text-l text-center text-gray-600 leading-relaxed mt-4'>
                        A full stack CRUD style web application using Node/Express/MongoDB
                        </p> */}
                    </div>
                    <div className="mt-4 text-center text-blue-700 hover:underline">
                        <a href={HealthFlowLink} target="_blank">See More</a>
                    </div>
                </div>
                <div class="w-78 bg-white shadow rounded m-4 p-14">
                    <h2 className='w-64 text-base md:text-xl text-center text-gray-600 leading-relaxed mt-4 mb-4'>Dividend Reinvestment Calculator</h2>
                    <a href={DividendReinvestmentLink} target="_blank">
                        <img className='w-64 mx-auto shadow-xl drop-shadow-md' src={DivReinvest} alt='DividendReinvestment'/>
                    </a>
                    
                    <div className="w-64">
                        {/* <p className='text-base md:text-l text-center text-gray-600 leading-relaxed mt-4'>
                        A full stack CRUD style web application using Node/Express/MongoDB
                        </p>   */}
                        <div className="mt-4 text-center text-blue-700 hover:underline">
                            <a href ={DividendReinvestmentLink} target="_blank">See More</a>
                        </div>
                    </div>
                </div>
                <div class="w-78 bg-white shadow rounded m-4 p-14">
                    <h2 className='w-64 text-base md:text-xl text-center text-gray-600 leading-relaxed mt-4 mb-4'>Valinor Energy Calculator</h2>
                    <a href={ValinorLink} target="_blank">
                        <img className='w-64 mx-auto shadow-xl drop-shadow-md' src={ValinorEnergy} alt='ValinorEnergy'/>
                    </a>
                    
                    <div className="w-64">
                        {/* <p className='text-base md:text-l text-center text-gray-600 leading-relaxed mt-4'>
                        A full stack CRUD style web application using Node/Express/MongoDB
                        </p> */}
                    </div>
                    <div className="mt-4 text-center text-blue-700 hover:underline">
                        <a href={ValinorLink} target="_blank">See More</a>
                    </div>
                </div>
                <div class="w-78 bg-white shadow rounded m-4 p-14">
                    <h2 className='w-64 text-base md:text-xl text-center text-gray-600 leading-relaxed mt-4 mb-4'>TruSponse Solutions</h2>
                    <a href={TruSponseSolutionsLink} target="_blank">
                        <img className='w-64 mx-auto shadow-xl drop-shadow-md' src={TruSponseSolutions} alt='TruSponseSolutions'/>
                    </a>
                    
                    <div className="w-64">
                        {/* <p className='text-base md:text-l text-center text-gray-600 leading-relaxed mt-4'>
                        A full stack CRUD style web application using Node/Express/MongoDB
                        </p>   */}
                        <div className="mt-4 text-center text-blue-700 hover:underline">
                            <a href ={TruSponseSolutionsLink} target="_blank">See More</a>
                        </div>
                    </div>
                </div>
                <div class="w-78 bg-white shadow rounded m-4 p-14">
                    <h2 className='w-64 text-base md:text-xl text-center text-gray-600 leading-relaxed mt-4 mb-4'>Using Python and Power Query to Process Data</h2>
                    <a href={LCR_ProjectLink} target="_blank">
                        <img className='w-64 mx-auto shadow-xl drop-shadow-md' src={LCR_Project} alt='LCRCapital'/>
                    </a>
                    
                    <div className="w-64">
                        {/* <p className='text-base md:text-l text-center text-gray-600 leading-relaxed mt-4'>
                        In this project, I use a Python script to combine Excel workbooks and then Power Query to combine that data into a single table.
                        </p> */}
                        <div className="mt-4 text-center text-blue-700 hover:underline">
                            <a href={LCR_ProjectLink} target="_blank">See More</a>
                        </div>
                    </div>
                    
                </div>
                <div class="w-78 bg-white shadow rounded m-4 p-14">
                    <h2 className='w-64 text-base md:text-xl text-center text-gray-600 leading-relaxed mt-2 mb-4'>Excel Nutrition Form with PDF Export and Email Generation</h2>
                    <a href={NutritionFormLink} target="_blank">
                        <img className='w-64 mx-auto shadow-xl drop-shadow-md' src={Nutrition} alt='ExcelNutritionForm'/>       
                    </a>
                    <div className="w-64">
                        {/* <p className='text-base md:text-l text-center text-gray-600 leading-relaxed mt-4'>
                        In this project, I use a Python script to combine Excel workbooks and then Power Query to combine that data into a single table.
                        </p> */}
                        <div className="mt-4 text-center text-blue-700 hover:underline">
                            <a href={NutritionFormLink} target="_blank">See More</a>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            
            
            {/* <ScrollIntoView selector="">
                <div className='mx-auto p-20'>
                    <FaChevronDown className='animate-bounce mx-auto text-3xl text-blue-500' />
                </div>
            </ScrollIntoView> */}
        </div>
        
    )
}

export default Experience;