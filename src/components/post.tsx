const Post = () => {
    return ( <div className="w-full h-fit p-2 flex bg-[#B4B4B4] bg-opacity-50 rounded-md ">
        <div className="w-3/12 h-fit flex justify-between items-center text-white ">
            <ArrowUp/>
            <div className="w-10 h-5 md:w-16 md:h-9 text-xs flex justify-center items-center rounded-md bg-[#6D9886]">Bonds</div>

        </div>
        <div className="w-7/12 pl-2 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, vel voluptates! Recusandae quis eos magni numquam cumque amet sapiente, deleniti asperiores quos perspiciatis repellendus eligendi illo accusantium libero ullam ipsa.</div>
        <div className="w-2/12  ">
            <div className="h-fit w-fit bg-[#807860] px-1 rounded-md">JPM</div>
        </div>

    </div> );
}
 
const ArrowUp=()=>{
    return <svg className="w-10 h-7 md:w-16 md:h-10" width="39" height="27" viewBox="0 0 39 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.73 27L0 23.85L14.43 7.0875L22.23 16.0875L32.37 4.5H27.3V0H39V13.5H35.1V7.65L22.23 22.5L14.43 13.5L2.73 27Z" fill="#00B368" fillOpacity="0.31"/>
    </svg>
    
}

const ArrowDown=()=>{

    return <svg width="38" height="23" viewBox="0 0 38 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.6 23V19.1667H31.54L21.66 9.29583L14.06 16.9625L0 2.68333L2.66 0L14.06 11.5L21.66 3.83333L34.2 16.4833V11.5H38V23H26.6Z" fill="#BE4141" fillOpacity="0.6"/>
    </svg>
    
}
export default Post;