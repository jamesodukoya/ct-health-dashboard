"use client"
import { useEffect, useState } from "react";

const username = process.env.NEXT_PUBLIC_USERNAME;
  const password = process.env.NEXT_PUBLIC_PASSWORD;
  const auth = btoa(`${username}:${password}`);


  const [patientsData,setData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const result = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
	headers: {
		'Authorization': `Basic ${auth}`
	}
});
      const patientsData = await result.json();
      setData(patientsData);
      console.log(JSON.stringify(patientsData))
    }
    fetchData();
  }, []);

export const PatientsData = JSON.stringify(patientsData)