"use client"
import { useEffect, useState } from "react";
import PatientsList from "./_components/PatientsList";
import PatientSummary from "./_components/PatientSummary";
import LabResults from "./_components/LabResults";
import DiagnosticList from "./_components/DiagnosticList";
import DiagnosisHistory from "./_components/DiagnosisHistory";

export const runtime = 'edge';

type propertyType = {
  name: string;
}

export default function Home() {
  
  const username = process.env.NEXT_PUBLIC_USERNAME;
  const password = process.env.NEXT_PUBLIC_PASSWORD;
  const auth = btoa(`${username}:${password}`);

  const [patientsData, setData] = useState([]);
  const [jessicasData, setJessicasData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
	headers: {
		'Authorization': `Basic ${auth}`
	  }
  }).catch(function(error){
  console.log(error)
        });
      let patientsData = await result?.json();
      setData(patientsData);
      let jessicasData = await patientsData?.find(({ name }:propertyType) => name === "Jessica Taylor");
      setJessicasData(jessicasData);
    }
    fetchData();
  }, []);

  return (
    <div className="px-[18px] pb-[19px] w-full flex gap-8 min-w-[1400px]">
      
      <div className="card w-1/4  bg-card_bg py-5 mt-8 min-w-[293.6px]">
          <PatientsList patientsData={patientsData} />
      </div>
      <div className="flex flex-col w-1/2 gap-8 mt-8 min-w-[612.8px]">
        <div className="card h-[673px] bg-card_bg p-5">
          <DiagnosisHistory patientsData={jessicasData} />
        </div>
        <div className="card h-[349px] bg-card_bg p-5">
        <DiagnosticList patientsData={jessicasData}/>
        </div>
      </div>  
      <div className="flex flex-col w-1/4 gap-8 mt-[18px] min-w-[293.6px]">
        <div className="card h-[740px] bg-card_bg">
        <PatientSummary patientsData={jessicasData} />
        </div>
        <div className="card h-[296px] bg-card_bg p-5">
        <LabResults patientsData={jessicasData} />
        </div>
      </div>
      
    </div>
  );
}