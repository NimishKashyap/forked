import React,{useState} from "react";
import Image from "next/image";

function ExploreCampus() {

  const [infrastructure,setInfrastructure]=useState(true);
  const [classrooms,setClassrooms]=useState(false);
  const [library,setLibrary]=useState(false);
  const [campus,setCampus]=useState(false);
  const [hostel,setHostel]=useState(false);
  const [computer,setComputer]=useState(false);
  const [others,setOthers]=useState(false);

  const handleInfraClick = () =>{
    setInfrastructure(true);
    setClassrooms(false);
    setLibrary(false);
    setCampus(false);
    setHostel(false);
    setComputer(false);
    setOthers(false);
  }
  const handleClassClick = () =>{
    setInfrastructure(false);
    setClassrooms(true);
    setLibrary(false);
    setCampus(false);
    setHostel(false);
    setComputer(false);
    setOthers(false);
  }
  const handleLibraryClick = () =>{
    setInfrastructure(false);
    setClassrooms(false);
    setLibrary(true);
    setCampus(false);
    setHostel(false);
    setComputer(false);
    setOthers(false);
  }
  const handleCampusClick = () =>{
    setInfrastructure(false);
    setClassrooms(false);
    setLibrary(false);
    setCampus(true);
    setHostel(false);
    setComputer(false);
    setOthers(false);
  }
  const handleHostelClick = () =>{
    setInfrastructure(false);
    setClassrooms(false);
    setLibrary(false);
    setCampus(false);
    setHostel(true);
    setComputer(false);
    setOthers(false);
  }
  const handleComputerClick = () =>{
    setInfrastructure(false);
    setClassrooms(false);
    setLibrary(false);
    setCampus(false);
    setHostel(false);
    setComputer(true);
    setOthers(false);
  }
  const handleOtherClick = () =>{
    setInfrastructure(false);
    setClassrooms(false);
    setLibrary(false);
    setCampus(false);
    setHostel(false);
    setComputer(false);
    setOthers(true);
  }

  return (
    <div className="mx-4 sm:mx-12 h-3/5">
      <h1 className="text-2xl mb-4 sm:mb-0 text-dark-500">Explore Campus</h1>
      <div className="hidden sm:flex rounded-sm gap-3 my-4 w-fit overflow-x-scroll scrollbar-hide">
        <p onClick={handleInfraClick} className={`text-base ${infrastructure?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>Infrastructure</p>
        <p onClick={handleClassClick} className={`text-base ${classrooms?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>Classrooms</p>
        <p onClick={handleLibraryClick} className={`text-base ${library?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>Library</p>
        <p onClick={handleCampusClick} className={`text-base ${campus?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>Campus</p>
        <p onClick={handleHostelClick} className={`text-base ${hostel?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>Hostel</p>
        <p onClick={handleComputerClick} className={`text-base ${computer?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>Computer</p>
        <p onClick={handleOtherClick} className={`text-base ${others?"border-b-2 border-primary-500 rounded-sm font-bold text-dark-500":"text-dark-200 font-normal"}`}>Others</p>
      </div>
      {/* responsive images */}
      <div className="xl:hidden flex gap-2 flex-row md:flex-col">
        <div className="md:flex-row flex-col flex gap-2">
        <div> <Image
              src="/collegeInfo/explore/one.png"
              alt=""
              width="405px"
              height="206px"
            /></div>
        <div> <Image
              src="/collegeInfo/explore/two.png"
              alt=""
              width="405"
              height="206px"
            /></div>
        <div> <Image
              src="/collegeInfo/explore/four.png"
              alt=""
              width="405px"
              height="206px"
            /></div>
        </div>

        <div className="md:flex-row flex-col flex gap-2">
          <div> <Image
              src="/collegeInfo/explore/five.png"
              alt=""
              width="405px"
              height="206px"
            /></div>
          <div> <Image
              src="/collegeInfo/explore/six.png"
              alt=""
              width="405px"
              height="206px"
            /></div>
          <div> <Image
              src="/collegeInfo/explore/seven.png"
              alt=""
              width="405px"
              height="206px"
            /></div>
        </div>
      </div>
      {/* responsive images */}
      <div className="hidden xl:flex h-full gap-2">
        <div className="flex-initial w-2/5 flex gap-2 flex-col">
          <div className="flex-initial w-full">
            {" "}
            <Image
              src="/collegeInfo/explore/one.png"
              alt=""
              width="800px"
              height="486px"
            />
          </div>
          <div className="flex-initial w-full flex gap-2">
            <div className="flex-1">
              <Image
                src="/collegeInfo/explore/two.png"
                alt=""
                width="500px"
                height="350px"
              />
            </div>
            <div className="flex-1">
              <Image
                src="/collegeInfo/explore/three.png"
                alt=""
                width="259px"
                height="182px"
              />
            </div>
          </div>
        </div>
        <div className="flex-initial w-100">
          <div className="flex-initial w-full flex gap-2">
            <div className="flex-1">
              <Image
                src="/collegeInfo/explore/four.png"
                alt=""
                width="367px"
                height="190px"
              />
            </div>
            <div className="flex-1">
              <Image
                src="/collegeInfo/explore/five.png"
                alt=""
                width="352px"
                height="190px"
              />
            </div>
          </div>
          <div className="flex-initial w-full flex gap-2">
            <div className="flex-initial w-3/5">
              <Image
                src="/collegeInfo/explore/six.png"
                alt=""
                width="492px"
                height="315px"
              />
            </div>
            <div className="flex-initial w-2/5">
              <Image
                src="/collegeInfo/explore/seven.png"
                alt=""
                width="270px"
                height="285px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreCampus;
