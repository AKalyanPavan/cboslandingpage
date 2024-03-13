import greenCard from './../images/greenCard.png'
import blueCard from './../images/blueCard.png'
import orangeCard from './../images/orangeCard.png'
import puzzle from './../images/puzzle.png'
import doll from './../images/doll.png'
import tool from './../images/tool.png'
import anyDevice from './../images/anydevice.mp4'
import mobileFrame from './../images/mobileFrame.webp'
import customer from './../images/customer.webp'
import logo from './../images/logo.png'
import grouplogo from './../images/group.png'

function Homepage() {

  function onEurGpbClicked(tag) {

    var eur = document.getElementById("eur");
    var gpb = document.getElementById("gpb");

    var monthly = document.getElementById("monthly");
    var yearly = document.getElementById("yearly");

    var currencySymbol = document.getElementsByClassName("currencySymbol");

    var monthlyPricing = document.getElementById("monthlyPricing");
    var yearlyPricing = document.getElementById("yearlyPricing");

    var billedAnually = document.getElementsByClassName("billedAnually");

    if (tag == "#eur") {

      eur.classList.remove("text-[#bbbbbb]");
      eur.classList.add("font-bold");
      gpb.classList.add("text-[#bbbbbb]");
      gpb.classList.remove("font-bold");
      gpb.classList.remove("text-[#000000]");

      currencySymbol[0].innerHTML = "€";
      currencySymbol[1].innerHTML = "€";

      if (billedAnually[0].classList.contains("hidden")) {
        monthlyPricing.innerHTML = "45";
        yearlyPricing.innerHTML = "105";
      } else {
        monthlyPricing.innerHTML = "37";
        yearlyPricing.innerHTML = "90";
      }

    } else if (tag == "#gpb") {

      gpb.classList.remove("text-[#bbbbbb]");
      gpb.classList.add("font-bold");
      eur.classList.add("text-[#bbbbbb]");
      eur.classList.remove("font-bold");
      eur.classList.remove("text-[#000000]");

      currencySymbol[0].innerHTML = "£";
      currencySymbol[1].innerHTML = "£";

      if (billedAnually[0].classList.contains("hidden")) {
        monthlyPricing.innerHTML = "45";
        yearlyPricing.innerHTML = "100";
      } else {
        monthlyPricing.innerHTML = "37";
        yearlyPricing.innerHTML = "80";
      }

    }

  }

  function onMonthlyYearlyClicked(tag) {

    var eur = document.getElementById("eur");
    var gpb = document.getElementById("gpb");

    var monthly = document.getElementById("monthly");
    var yearly = document.getElementById("yearly");

    var currencySymbol = document.getElementsByClassName("currencySymbol");

    var monthlyPricing = document.getElementById("monthlyPricing");
    var yearlyPricing = document.getElementById("yearlyPricing");

    var billedAnually = document.getElementsByClassName("billedAnually");

    var perUser = document.getElementById("perUser");
    var perEmployee = document.getElementById("perEmployee");

    if (tag == "#monthly") {

      monthly.classList.remove("text-[#bbbbbb]");
      monthly.classList.add("font-bold");
      yearly.classList.add("text-[#bbbbbb]");
      yearly.classList.remove("font-bold");
      yearly.classList.remove("text-[#000000]");

      if(currencySymbol[0].innerHTML == "€") {
        monthlyPricing.innerHTML = "45";
        yearlyPricing.innerHTML = "105";
      } else if(currencySymbol[0].innerHTML == "£") {
        monthlyPricing.innerHTML = "45";
        yearlyPricing.innerHTML = "100";
      }

      billedAnually[0].classList.add("hidden");
      billedAnually[1].classList.add("hidden");

      perUser.innerHTML = "/user";
      perEmployee.innerHTML = "/employee";

    } else if (tag == "#yearly") {

      yearly.classList.remove("text-[#bbbbbb]");
      yearly.classList.add("font-bold");
      monthly.classList.add("text-[#bbbbbb]");
      monthly.classList.remove("font-bold");
      monthly.classList.remove("text-[#000000]");

      if(currencySymbol[0].innerHTML == "€") {
        monthlyPricing.innerHTML = "37";
        yearlyPricing.innerHTML = "90";
      } else if(currencySymbol[0].innerHTML == "£") {
        monthlyPricing.innerHTML = "37";
        yearlyPricing.innerHTML = "80";
      }

      billedAnually[0].classList.remove("hidden");
      billedAnually[1].classList.remove("hidden");

      perUser.innerHTML = "/user/month";
      perEmployee.innerHTML = "/employee/month";

    }

  }

  return (
    <div className="font-inter">
      {/*fold 1*/}
      <div className="bg-[#FED500] pt-[50px] pb-[80px]">
        <div className="mb-[30px] ml-[80px]">
          <img src={grouplogo} />
        </div>
        <div className="flex justify-center mx-[auto] mt-[10px]">
          <div className="w-[1000px] text-center">
            <div className="text-[45px] font-bold leading-[48px] mb-[20px]">
              Go from Apps to Operating System
            </div>
            <div className="text-[17px] leading-[27px]">
              Replace your patchwork of cloud applications, legacy tools, and paper-based processes with one operating system for your entire business.
            </div>
            <a target="_blank" href="https://store.zoho.eu/ResellerCustomerSignUp.do?id=c0bf4dcdc60b1cb866e66e98e788deca">
              <button className="bg-[#F0483E] text-[#FFFFFF] font-bold py-[15px] px-[20px] rounded-[5px] mt-[50px]">START YOUR FREE TRIAL</button>
            </a>
          </div>
        </div>
      </div>

      {/*fold 2*/}
      <div className="lg:flex justify-center py-[30px] px-[20px]">
        <div className="lg:w-[500px] lg:mr-[100px] sm:px-[100px] lg:px-[10px]">
          <div className="text-[#FF9500] font-medium text-[16px]">
            End-to-end software
          </div>
          <div className="font-bold text-[40px] leading-[50px] mt-[30px]">
            Your Business Does So Many Things
          </div>
          <div className="text-[17px] my-[20px]">
            Zoho One gives you one integrated system to transform your business' disparate activities into a more connected and agile organization. Increase productivity across your business, deliver better customer experiences, and much more.
          </div>
          <p className="text-[#F0483E] font-semibold underline underline-offset-8 mb-[20px]">
            TALK TO AN EXPERT FOR FREE
          </p>
          <div className="max-[500px]:w-[300px] w-[400px] lg:ml-[auto] mt-[50px] px-[20px] mx-[auto]">
            <img src={greenCard} alt="Sale to Service" className="max-[500px]:w-[300px]"/>
            <div className="w-[80%] mt-[-30px] bg-[#FFFFFF] z-1 relative">
              <div className="text-[26px] font-bold">
                Sale to Service
              </div>
              <div className="text-[17px] leading-[27px] my-[15px]">
                Close deals, manage contracts and projects, track and bill for time and expenses, and keep on schedule and on budget.
              </div>
            </div>
            <p className="text-[#F0483E] font-semibold underline underline-offset-8 text-[14px] leading-[21px]">
              EXPLORE HOW
            </p>
          </div>
        </div>
        <div className="max-[500px]:w-[300px] w-[400px] px-[20px] max-[1024px]:mx-[auto]">
          <div className="max-[1024px]:mt-[50px]">
            <img src={blueCard} alt="Leads into Cash" className="max-[500px]:w-[300px]"/>
            <div className="w-[80%] mt-[-30px] bg-[#FFFFFF] z-1 relative">
              <div className="text-[26px] font-bold">
                Leads into Cash
              </div>
              <div className="text-[17px] leading-[27px] my-[15px]">
                Collect leads in one place, close deals quickly, create quotes and invoices, sign contracts digitally, get paid, and track every key metric along the way.
              </div>
            </div>
            <p className="text-[#F0483E] font-semibold underline underline-offset-8 text-[14px] leading-[21px]">
              EXPLORE HOW
            </p>
          </div>
          <div className="my-[50px]">
            <img src={orangeCard} alt="Customer into Promoters" className="max-[500px]:w-[300px]"/>
            <div className="w-[80%] mt-[-30px] bg-[#FFFFFF] z-1 relative">
              <div className="text-[26px] font-bold">
                Customer into Promoters
              </div>
              <div className="text-[17px] leading-[27px] my-[15px]">
                Centralize all your customer data, create segments, send targeted campaigns and surveys at the right time, and track performance with executive dashboards.
              </div>
            </div>
            <p className="text-[#F0483E] font-semibold underline underline-offset-8 text-[14px] leading-[21px]">
              EXPLORE HOW
            </p>
          </div>
        </div>
      </div>

      {/*fold 3*/}
      <div className="text-center w-[100%] bg-[#000000] text-[#FFFFFF]">
        <div className="text-[#FF9500] pt-[70px] pb-[50px]">
          Flexible, scalable software
        </div>
        <div className="font-bold text-[40px]">
          Integrated, Smart, Customizable Business Software
        </div>
        <div className="lg:flex justify-center w-fit mx-auto">
          <div className="group 
              text-left
              min-[1400px]:p-[100px] 
              min-[1300px]:p-[80px] 
              min-[1200px]:p-[60px] 
              min-[1100px]:p-[40px] 
              p-[40px]
              hover:bg-[#1e1e1e] 
              cursor-pointer">
            <div>
              <img src={puzzle} alt="Leads into Cash"/>
            </div>
            <div className="text-[26px] font-bold my-[30px]">
              Integrated Applications
            </div>
            <p className="text-[#999999] mb-[20px]">Web and mobile apps for sales, marketing, accounting, and everything else.</p>
            <p className="text-[#FFFFFF] font-semibold underline underline-offset-2 text-[14px] leading-[21px] cursor-pointer group-hover:text-[#e6453c]">
              EXPLORE APPS
            </p>
          </div>
          <div className="
              group 
              text-left
              min-[1400px]:p-[100px] 
              min-[1300px]:p-[80px]
              min-[1200px]:p-[60px]
              min-[1100px]:p-[40px]
              p-[40px]
              hover:bg-[#1e1e1e] 
              cursor-pointer">
            <div>
              <img src={doll} alt="Leads into Cash"/>
            </div>
            <div className="text-[26px] font-bold my-[30px]">
              Smart Services
            </div>
            <p className="text-[#999999] mb-[20px]">Out-of-the-box artificial intelligence, business intelligence, and more.</p>
            <p className="text-[#FFFFFF] font-semibold underline underline-offset-2 text-[14px] leading-[21px] cursor-pointer group-hover:text-[#e6453c]">
              EXPLORE SERVICES
            </p>
          </div>
          <div className="
              group 
              text-left
              min-[1400px]:p-[100px]
              min-[1300px]:p-[80px]
              min-[1200px]:p-[60px]
              min-[1100px]:p-[40px]
              p-[40px]
              hover:bg-[#1e1e1e] 
              cursor-pointer">
            <div>
              <img src={tool} alt="Leads into Cash"/>
            </div>
            <div className="text-[26px] font-bold my-[30px]">
              Customization Tools
            </div>
            <p className="text-[#999999] mb-[20px]">Tools to integrate, extend, and create apps for a perfect fit.</p>
            <p className="text-[#FFFFFF] font-semibold underline underline-offset-2 text-[14px] leading-[21px] cursor-pointer group-hover:text-[#e6453c]">
              EXPLORE TOOLS
            </p>
          </div>
        </div>
      </div>

      {/*fold 4*/}
      <div className="bg-[#F6F3E8] text-center w-[100%] h-[auto] pb-[50px] pt-[50px]">
        <div className="text-[#FF9606] text-[16px] font-medium">Mobile Ready</div>
        <div className="text-[40px] font-bold mb-[30px]">For Every Employee On Any Device</div>
        <div className="lg:w-[1000px] mx-[auto] relative px-[20px] max-[500px]:hidden">
          <img src={mobileFrame} alt="Mobile Frame"/>
          <video 
            preload="auto" 
            autoPlay 
            data-lazy 
            muted 
            className="absolute 
              top-[35px] 
              left-[55px] 
              max-[900px]:top-[30px] 
              max-[800px]:top-[25px] 
              max-[700px]:top-[20px] 
              max-[600px]:top-[15px] 
              max-[550px]:top-[10px] 
              max-[550px]:left-[35px] 
              max-[700px]:left-[45px] 
              w-[85%] px-auto">
            <source src={anyDevice} type="video/mp4"/>
          </video>
        </div>
      </div>

      {/*fold 5*/}
      <div className="text-center px-[20px] mx-auto">
        <div className="text-[#FF9606] text-[16px] font-medium mt-[50px]">Trusted around the world</div>
        <div className="text-[40px] font-bold my-[50px]">Why Businesses Love Zoho One</div>
        <div className="min-[800px]:flex justify-center mx-auto">
          <img src={customer} alt="review" className="w-[300px] h-[300px] bg-[#C6F1DF] pt-[20px] pr-[20px] mr-[30px] max-[800px]:mx-auto"/>
          <div className="min-[800px]:w-[500px] min-[800px]:text-left my-auto max-[800px]:mx-auto">
            <img src={logo} alt="logo" className="w-[100px] h-[50px] max-[800px]:mx-auto max-[800px]:mt-[30px]"/>
            <div className="font-[Roboto] font-medium text-[24px] my-[30px]">"We were losing so much time being on two or three platforms. Being on Zoho One helped us scale way, way faster."</div>
            <div className="text-[18px] font-bold">Francis Jobidon</div>
            <div className="text-[18px]">Co-founder - key account manager</div>
          </div>
        </div>
      </div>

      {/*fold 6*/}
      <div className="text-center mt-[50px] bg-[#F6F3E8] py-[30px]">
        <div className="w-fit mx-auto">

        <div className="text-[25px] font-semibold mb-[30px]">Pinch yourself</div>

        <div className="mb-[30px] flex justify-between">
          <div className="text-left">
            <span id="eur" className="underline underline-offset-8 decoration-[3px] font-bold text-[#000000] cursor-pointer" onClick={() => onEurGpbClicked('#eur')}>EUR &nbsp;</span>
            <span id="gpb" className="underline underline-offset-8 decoration-[3px] text-[#bbbbbb] cursor-pointer" onClick={() => onEurGpbClicked('#gpb')}>&nbsp; GPB</span>
          </div>
          <div className="text-right">
            <span id="monthly" className="underline underline-offset-8 decoration-[3px] text-[#bbbbbb] cursor-pointer" onClick={() => onMonthlyYearlyClicked('#monthly')}>Monthly &nbsp;</span>
            <span id="yearly" className="underline underline-offset-8 decoration-[3px] font-bold text-[#000000] cursor-pointer" onClick={() => onMonthlyYearlyClicked('#yearly')}>&nbsp; Yearly</span>
          </div>
        </div>

        <div className="min-[800px]:flex justify-center">
          <div className="h-[350px] min-[400px]:w-[360px] w-[300px] bg-[#fed703] max-[800px]:mx-auto py-[40px] px-[20px]">
            <div className="font-semibold text-[17px]">ALL EMPLOYEE PRICING</div>
            <div className="flex items-center justify-center">
              <span class="currencySymbol" className="currencySymbol text-[28px] font-semibold mb-[18px]">€</span>
              <span id="monthlyPricing" className="text-[52px] font-semibold">37</span>
            </div>
            <div id="perEmployee">/employee/month</div>
            <div className="billedAnually">billed annually</div>
            <div className="font-semibold my-[20px]">Must purchase license for ALL employees*</div>
            <a target="_blank" href="https://store.zoho.eu/ResellerCustomerSignUp.do?id=c0bf4dcdc60b1cb866e66e98e788deca">
              <button className="bg-[#F0483E] text-[#FFFFFF] font-bold py-[10px] px-[30px]">TRY NOW</button>
            </a>
          </div>
          <div className="h-[350px] min-[400px]:w-[360px] w-[300px] bg-[#fed703] max-[800px]:mx-auto py-[40px] px-[20px] max-[799px]:mt-[30px] min-[800px]:ml-[30px]">
            <div className="font-semibold text-[17px]">FLEXIBLE USER PRICING</div>
            <div className="flex items-center justify-center">
              <span class="currencySymbol" className="currencySymbol text-[28px] font-semibold mb-[18px]">€</span>
              <span id="yearlyPricing" className="text-[52px] font-semibold">90</span>
            </div>
            <div id="perUser">/user/month</div>
            <div className="billedAnually">billed annually</div>
            <div className="font-semibold my-[20px]">Purchase license for any no. of users</div>
            <a target="_blank" href="https://store.zoho.eu/ResellerCustomerSignUp.do?id=c0bf4dcdc60b1cb866e66e98e788deca">
              <button className="bg-[#F0483E] text-[#FFFFFF] font-bold py-[10px] px-[30px]">TRY NOW</button>
            </a>
          </div>
        </div>
        <div className="min-[400px]:w-[360px] w-[300px] mx-auto text-[13px] mt-[20px]">Local taxes (VAT, GST, etc.) will be charged in addition to the prices mentioned.</div>
        </div>
      </div>

      {/*fold 7*/}
      <div className="bg-[#FED500] text-center py-[50px]">
        <div className="text-[40px] font-bold pb-[30px]">Getting Started is Easy</div>
        <a target="_blank" href="https://store.zoho.eu/ResellerCustomerSignUp.do?id=c0bf4dcdc60b1cb866e66e98e788deca">
          <button className="bg-[#F0483E] text-[#FFFFFF] font-bold py-[15px] px-[100px] rounded-[5px]">START YOUR FREE TRIAL</button>
        </a>
      </div>

    </div>
  );
}

export default Homepage;
