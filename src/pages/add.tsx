import { trpc } from '@/utils/trpc';
import React, { CSSProperties, useState } from 'react';

import { useCSVReader } from 'react-papaparse';
import { z } from 'zod';





const post =z.array(z.object({date: z.string(),
  code: z.string(),
  view: z.string(),
  category: z.string(),
  label: z.string(),
  sentiment: z.string(),}))

  export type Post = z.infer<typeof post>;




const styles = {
  csvReader: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  } as CSSProperties,
  browseFile: {
    width: '100%',
  } as CSSProperties,
  acceptedFile: {
    border: '1px solid #ccc',
    height: 45,
    lineHeight: 2.5,
    paddingLeft: 10,
    width: '100%',
  } as CSSProperties,
  remove: {
    borderRadius: 0,
    padding: '0 20px',
  } as CSSProperties,
  progressBarBackgroundColor: {
    backgroundColor: 'red',
  } as CSSProperties,
};

export default function CSVReader() {
  const { CSVReader } = useCSVReader();
  const add =trpc.add.useMutation()

  const [data,setData]=useState<Post>([])
  const handelUpload=()=>{
    if(!data)return
    const d=data[2]
    let newObject:Post=[]
    data.map((item,index)=>{
  //    const newobj.push({data:item.category})
    })
    console.log(data)

    //console.log(newObject)
   // add.mutate({date:data[1].date,code:data[1].code,view:data[1].view,categoty:data[1].category,label:data[1].label,sentiment:data[1].sentiment,})
    
  }
  return (
    <div className='bg-black h-screen text-white flex flex-col justify-center'>
      <div className='w-60 m-auto '>


    <CSVReader
   
      onUploadAccepted={(results:{data:Post,errors:[] ,meta:[]}) => {
        setData(results.data)
        
      }}
      configOptions={{header: true /* Header row support */ }}
    >
      {({
        getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
      }: any) => (
        <>
          <div style={styles.csvReader} className='m-auto'>
            <button type='button' {...getRootProps()} style={styles.browseFile} className='border w-fit'>
              Browse file
            </button>
            <div style={styles.acceptedFile} className='max-w-40 w-full h-5  bg-[#7E7E7E]'>
              {acceptedFile && acceptedFile.name}
            </div>
           
          </div>
        </>
      )}
    </CSVReader>
        </div>
        <button onClick={handelUpload} className='mb-auto w-fit mx-auto text-xl p-2 border rounded-xl'>Save to database</button>
        </div>
  );
}