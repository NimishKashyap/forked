import Head from "next/head";
import Banner from "../components/Admission/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollView from "../components/ScrollView";
import styles from "../styles/Home.module.css";

function contact() {
  return (
    <>
      <Head>
        <title>Contact Details</title>
      </Head>
      <Navbar />
      <main className={styles.container}>
        <div className="mt-[2rem] md:mt-[4rem]">
          <Banner />
        </div>
        <p className="mt-5 text-sm ml-2">
          Home {">"} College {">"} MBA {">"} IIMA {">"} Contact
        </p>
        <ScrollView />
        <section>
          <h1 className="text-dark-500 my-5 font-medium text-2xl md:text-3xl">
            Contact Details
          </h1>
          <h3 className="text-dark-500 text-lg md:text-xl">Postal Address</h3>
          <div className="flex flex-col md:flex-row justify-between w-full mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14687.12663229635!2d72.52530033014688!3d23.031787759172666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84c648e6c4fb%3A0x722f493a0372748d!2sI%20I%20M%2C%20Vastrapur%2C%20Ahmedabad%2C%20Gujarat%20380015!5e0!3m2!1sen!2sin!4v1643544615206!5m2!1sen!2sin"
              className="border-2 md:min-w-[70%] min-h-[200px]"
              //   width="984"
              //   height="240"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="flex flex-col mt-5 md:mt-0 mx-1 md:mx-auto text-sm md:text-base">
              <p className="flex md:mx-5 justify-between text-dark-500">
                <span className="min-w-[100px] md:min-w-auto md:w-[120px] text-dark-200 font-medium">
                  Postal Add:{" "}
                </span>
                <span>
                  Indian Institute of Management Sargam Marg, Vastrapur,
                  Ahmedabad, Gujrat India - 380015
                </span>
              </p>
              <br />
              <br />
              <p className="my-3 flex md:mx-5 text-dark-500">
                <span className="min-w-[100px] md:min-w-auto md:w-[90px] text-dark-200 font-medium">
                  Fax:{" "}
                </span>
                <span>+91-8574875930</span>
              </p>
              <br />
              <br />
              <p className="mb-3 flex md:mx-5 text-dark-500">
                <span className="min-w-[100px] md:w-[90px] text-dark-200 font-medium">
                  Tel. :
                </span>
                <span>+91-8574875930 / 26308357</span>
              </p>
              <p className="flex md:mx-5 text-dark-500">
                <span className="min-w-[100px] md:w-[90px] text-dark-200 font-medium">
                  Email:{" "}
                </span>
                <span>admission@iima.ac.in</span>
              </p>
            </div>
          </div>
        </section>
        <section className="my-10 md:my-[5rem]">
          <div className="grid gap-10 grid-cols-1 md:grid-cols-3 text-[rgb(84,85,97)] text-sm md:text-base">
            <div className="flex flex-col">
              <h1 className="text-dark-500 text-2xl mb-3">Campus Visit</h1>
              <p>
                In view of the coronavirus threat, IIMA campus visits have been
                suspended temporarily. We will resume the campus visits as soon
                as the threat passes.
                <br />
                <br />
                Please address any communication regarding campus visits to
                Communication Manager at:
              </p>
              <span className="my-5 text-dark-500 underline font-medium">
                communication@iima.ac.in
              </span>
            </div>
            <div>
              <h1 className="text-dark-500 text-2xl mb-3">Admissions</h1>
              <p>
                Office (Admission)
                <br />
                Indian Institute of Management Vastrapur,
                <br />
                Ahmedabad 380015, Gujarat, India.
              </p>
              <br />
              <span className="my-2 text-dark-500 underline font-medium">
                communication@iima.ac.in
              </span>
            </div>
            <div className="mb-5">
              <h1 className="text-dark-500 text-2xl mt-5 md:mt-0 mb-5">RTI - Details</h1>
              <p>
                Contact details of Information Officer appointed under Right to
                Information Act, 2005.
              </p>
              <br />
              <span className="underline text-dark-500 font-medium">
                View Details
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default contact;
