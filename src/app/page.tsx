import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div id="header" style={{display: 'flex', flexDirection: 'column', marginTop: '30px', justifyContent: 'center', alignItems: 'center'}}>
        {/* CHANGE: Added a logo for light mode and used dark:hidden/dark:block to toggle visibility */}
        <Image src="/logo_transparent_background.png" width={200} height={200} style={{paddingBottom: "1.0rem"}} alt="Fetz.dev Logo" className="block dark:hidden" />
        <Image src="/white_logo_transparent_background.png" width={200} height={200} style={{paddingBottom: "1.0rem"}} alt="Fetz.dev Logo" className="hidden dark:block" />
        <span className="font-bold underline text-4xl">Fetzer Solutions Group</span>
      </div>
      
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <br/>
        <br/>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ paddingBottom: '2em' }}>
          {/* CHANGE: Replaced inline background color with Tailwind classes for light/dark mode */}
          <div
            className="shadow-md p-1 pt-0 mb-8 rounded-lg flex flex-col items-center text-center bg-gray-100 dark:bg-[#1f1f1f]"
            style={{ paddingBottom:'1rem' }}
          >
            <div
              className="h-8 flex items-center justify-center bg-primary/10 rounded-full mb-6"
              style={{ marginBottom: '0.5em'}}
            >
              <i className="ri-verified-badge-line ri-xl text-primary"></i>
            </div>
            <h3 className="heading text-l font-semibold mb-3">
              <span style={{fontSize: "xx-large"}}>🚚 </span><a href="https://fetzfleet.com">FetzFleet.com</a> <span> - Field management software & support</span>
            </h3>
            <p className="">
              As an authorized reseller for Jobber, Fetzer&apos;s Fleet Management helps businesses like yours streamline operations and boost efficiency. We handle everything from setup to ongoing support, ensuring you get the most out of your investment.
            </p>
          </div>
          {/* CHANGE: Replaced inline background color with Tailwind classes for light/dark mode */}
          <div
            className="shadow-md p-1 pt-0 mb-8 rounded-lg flex flex-col items-center text-center bg-gray-100 dark:bg-[#1f1f1f]"
            style={{ paddingBottom:'1rem' }}
          >
            <div
              className="h-8 flex items-center justify-center bg-primary/10 rounded-full mb-6"
              style={{ marginBottom: '0.5em'}}
            >
              <i className="ri-verified-badge-line ri-xl text-primary"></i>
            </div>
            <h3 className="heading text-l font-semibold mb-3">
              <span style={{fontSize: "xx-large"}}>📷 </span><a href="https://fetzfleet.com">Secured by Fetz</a> <span> - Custom security camera solutions</span>
            </h3>
            <p className="">
              Go beyond off-the-shelf cameras. We design and install professional-grade security solutions tailored to your unique needs. From initial consultation to a clean, seamless installation, we provide the clarity and peace of mind you deserve. 
            </p>
          </div>

          {/* CHANGE: Replaced inline background color with Tailwind classes for light/dark mode */}
          <div
            className="shadow-md p-1 pt-0 mb-8 rounded-lg flex flex-col items-center text-center md:col-span-2 md:max-w-2xl md:mx-auto bg-gray-100 dark:bg-[#1f1f1f]"
            style={{ paddingBottom:'1rem' }}
          >
            <div
              className="h-8 flex items-center justify-center bg-primary/10 rounded-full mb-6"
              style={{ marginBottom: '0.5em'}}
            >
              <i className="ri-verified-badge-line ri-xl text-primary"></i>
            </div>
            <h3 className="heading text-l font-semibold mb-3">
              <span style={{fontSize: "xx-large"}}>🌎 </span><a href="https://fetzfleet.com">Hosting By Fetz</a> <span> - Full spectrum hosting solutions</span>
            </h3>
            <p className="">
              Are you looking to get online? Hosting by Fetz is your one stop solution. Websites, email, and ultra fast virtual servers, we have you covered. Boasting servers in 3 locations - cPanel, Proxmox, DirectAdmin, SolusVM, and more.
            </p>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Fetzer Solutions Group LLC
      </footer>
    </div>
  );
}