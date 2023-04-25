import Image from 'next/image'
import { Inter } from 'next/font/google'
import {HiInformationCircle} from "react-icons/hi"
import { useEffect, useRef, useState } from 'react'
import Document from './components/Document'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })
export default function Home() {

  const compRef = useRef();
  const graphRef = useRef();

  const [isDocument, setIsDocument] = useState(false)

  const [companyName, setCompanyName] = useState("tcs")
  const [graphName, setGraphName] = useState("heatmap")
  const [showImg, setShowImg] = useState("/tcsheatmap.png")
  
  const handleCompany = (e)=>{
    setCompanyName(e.target.value);
    const temp = "/"+compRef.current.value+graphName+".png";
    setIsDocument(false);
    setShowImg(temp);
  }

  const handleGraph = (e)=>{
    setGraphName(e.target.value);
    const temp = "/" + companyName + graphRef.current.value + ".png";
    setIsDocument(false);
    setShowImg(temp);
  }

  useEffect(() => {
    
  }, [handleGraph, handleCompany])
  

  return (
    <>
      <Head><title>Stock Prediction</title></Head>
      <main className="main-div">
        <div className="header flex flex-col items-center justify-center flex-wrap">
          {" "}
          <div className="text-6xl font-extrabold m-2">
            Stock Market Price Prediction
          </div>
          <div className="text-lg border-b-2 border-slate-600 description text-slate-300 p-2">
            Price prediction of different companies trained and tested using
            linear regression
          </div>
        </div>

        <div className="buttons flex flex-wrap items-center justify-around mx-4">
          <div className="font-size w-80 m-2 flex flex-col justify-center items-center">
            <label>Companies:</label>
            <select
              id="company"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={companyName}
              onChange={handleCompany}
              ref={compRef}
            >
              <option value="tcs">TCS</option>
              <option value="sbin">SBIN</option>
              <option value="britania">Britannia</option>
              <option value="adani">Adani</option>
            </select>
          </div>
          <div className="text-4xl cursor-pointer hover:text-blue-200">
            <HiInformationCircle onClick={() => setIsDocument(!isDocument)} />
          </div>
          <div className="font-size w-80 m-2 flex flex-col justify-center items-center">
            <label>Graph:</label>
            <select
              id="company"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={graphName}
              onChange={handleGraph}
              ref={graphRef}
            >
              <option value="heatmap">Heatmap</option>
              <option value="boxplot">Box Plot</option>
              <option value="histogram">Histogram</option>
              <option value="scatter">Scatter Plot</option>
              <option value="predictedvsactual">
                Predicted vs Actual Values
              </option>
            </select>
          </div>
        </div>

        <div className="content w-screen flex items-center justify-center">
          {isDocument ? (
            <div className="documents overflow-y-scroll text-bg text-area">
              <p className="text-gray-700">
                <Document />
              </p>
            </div>
          ) : (
            <div className="images m-10">
              <Image src={showImg} width={900} height={900} />
            </div>
          )}
        </div>
      </main>
    </>
  );
}
