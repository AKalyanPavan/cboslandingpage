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

function Homepage() {
  return (
    <div className="font-inter">
      {/*fold 1*/}
      <div className="bg-[#FED500] py-[50px]">
        <div className="flex justify-center mx-[auto]">
          <div className="w-[400px] min-[1050px]:mr-[50px] max-[1050px]:w-[80%] max-[1050px]:text-center">
            <div className="text-[45px] font-bold leading-[48px] mb-[20px]">
              Go from Apps to Operating System
            </div>
            <div className="text-[17px] leading-[27px]">
              Replace your patchwork of cloud applications, legacy tools, and paper-based processes with one operating system for your entire business.
            </div>
            <button className="bg-[#F0483E] text-[#FFFFFF] font-bold py-[15px] px-[20px] rounded-[5px] mt-[20px] min-[1050px]:hidden">START YOUR FREE TRAIL</button>
          </div>
          <div className="w-[400px] max-[1050px]:hidden">
            <div className="text-[18px] font-bold mb-[30px]">
              30-days free trial. No credit card required.
            </div>
            <div className="mb-[20px]">
              <input placeholder="Full Name *" className="p-[10px] rounded-[5px] border-[#329401] border-2 border-solid w-[100%]"></input>
            </div>
            <div className="flex mb-[20px]">
              <div>
                <input placeholder="Company Name" className="p-[10px] rounded-[5px] border-[#329401] border-2 border-solid w-[100%]"></input>
              </div>
              <div>
                <select id="cars" name="cars" className="text-[#717171] h-[100%] ml-[20px] rounded-[5px] border-[#329401] border-2 border-solid w-[100%]">
                  <option value="No of Employees *">No of Employees *</option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div className="mb-[20px]">
              <input placeholder="Phone Number" className="p-[10px] rounded-[5px] border-[#329401] border-2 border-solid w-[100%]"></input>
            </div>
            <div className="mb-[20px]">
              <input placeholder="Email" className="p-[10px] rounded-[5px] border-[#329401] border-2 border-solid w-[100%]"></input>
            </div>
            <div className="flex items-center mb-[5px]">
              <input type="password" placeholder="Password" className="p-[10px] rounded-[5px] border-[#329401] border-2 border-solid w-[100%]">
              </input>
              {/*<svg className="ml-[-40px] cursor-pointer" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.30147 15.5771C4.77832 14.2684 3.6904 12.7726 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C14.1843 6 16.1261 7.07185 17.6986 8.42294C19.2218 9.73158 20.3097 11.2274 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18C9.81574 18 7.87402 16.9282 6.30147 15.5771ZM12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C2.00757 13.8624 3.23268 15.5772 4.99812 17.0941C6.75717 18.6054 9.14754 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C21.9925 10.1376 20.7674 8.42276 19.002 6.90595C17.2429 5.39462 14.8525 4 12 4ZM10 12C10 10.8954 10.8955 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8955 14 10 13.1046 10 12ZM12 8C9.7909 8 8.00004 9.79086 8.00004 12C8.00004 14.2091 9.7909 16 12 16C14.2092 16 16 14.2091 16 12C16 9.79086 14.2092 8 12 8Z" fill="#717171"/> </g>
              </svg>*/}
              <svg className="ml-[-40px] cursor-pointer" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L14.032 8.55382C13.4365 8.20193 12.7418 8 12 8C9.79086 8 8 9.79086 8 12C8 12.7418 8.20193 13.4365 8.55382 14.032L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L9.96803 15.4462C10.5635 15.7981 11.2582 16 12 16C14.2091 16 16 14.2091 16 12C16 11.2582 15.7981 10.5635 15.4462 9.96803L19.7071 5.70711ZM12.518 10.0677C12.3528 10.0236 12.1792 10 12 10C10.8954 10 10 10.8954 10 12C10 12.1792 10.0236 12.3528 10.0677 12.518L12.518 10.0677ZM11.482 13.9323L13.9323 11.482C13.9764 11.6472 14 11.8208 14 12C14 13.1046 13.1046 14 12 14C11.8208 14 11.6472 13.9764 11.482 13.9323ZM15.7651 4.8207C14.6287 4.32049 13.3675 4 12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C1.92276 13.7326 2.86706 15.0637 4.21194 16.3739L5.62626 14.9596C4.4555 13.8229 3.61144 12.6531 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C12.7719 6 13.5135 6.13385 14.2193 6.36658L15.7651 4.8207ZM12 18C11.2282 18 10.4866 17.8661 9.78083 17.6334L8.23496 19.1793C9.37136 19.6795 10.6326 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C22.0773 10.2674 21.133 8.93627 19.7881 7.62611L18.3738 9.04043C19.5446 10.1771 20.3887 11.3469 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18Z" fill="#717171"/> </g>
              </svg>
            </div>
            <p className="text-[11px]">Your data will be stored in the CANADA data center.</p>
            <div className="flex items-start mt-[15px]">
              <input type="checkbox"></input>
              <p className="text-[11px] mt-[-2px] font-bold">Yes, I would like to receive marketing communication regarding Zoho’s products, services, and events from Zoho and its regional partners.</p>
            </div>
            <div className="flex items-start my-[15px]">
              <input type="checkbox"></input>
              <p className="text-[11px] mt-[-2px] font-bold">I agree to the Terms of Service and Privacy Policy.</p>
            </div>
            <button className="bg-[#F0483E] w-[100%] text-[#FFFFFF] font-bold py-[15px] rounded-[5px]">GET STARTED NOW</button>
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
      <div className="bg-[#FED500] text-center py-[50px] mt-[50px]">
        <div className="text-[40px] font-bold pb-[30px]">Getting Started is Easy</div>
        <button className="bg-[#F0483E] text-[#FFFFFF] font-bold py-[15px] px-[100px] rounded-[5px]">START YOUR FREE TRAIL</button>
      </div>

    </div>
  );
}

export default Homepage;
