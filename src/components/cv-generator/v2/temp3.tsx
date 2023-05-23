import WaveBg from "../../../components/WaveBg";
import CVImage from "../CVImage";
import DragEditDiv from "../../../components/DEDiv";
import ProgressBar from "../../../components/ProgressBar";
import WaveBgBottom from "../../../components/WaveBgBottom";

interface Props {
    themeColor: string;
}

function Template3({themeColor}:Props) {

    return (
    <>
        <div className="bg-white w-[600px] shadow border outline-none relative font-lora page resize-x overflow-auto" id="cv_template">
            <WaveBg themeColor={themeColor}/>            
            <div className="grid gap-3 grid-cols-12 relative z-10">
                <div className="col-span-5 pl-4">
                    <div className="pt-12">
                        <CVImage className="mx-auto" borderRadius={100} width={200}/>
                    </div>
                    <DragEditDiv fontSize={35} className="font-bold text-center"> Jhon Doe </DragEditDiv>
                    <DragEditDiv fontSize={20} className="text-center"> Product manager </DragEditDiv>

                    <DragEditDiv fontSize={14} className="text-justify py-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel enim tempora, dignissimos similique doloribus mollitia aut soluta rerum natus ipsam repudiandae, obcaecati consequuntur laborum dolorem quis inventore maiores accusantium corporis.
                    </DragEditDiv>

                    <DragEditDiv style={{background: themeColor}} className="text-white py-2 px-2 mt-2 font-bold rounded-br-xl rounded-tl-xl text-center" > SKILLS </DragEditDiv>
                    <ProgressBar themeColor={themeColor} text="Content Writing" percentage={80}/>
                    <ProgressBar themeColor={themeColor} text="Product Design" percentage={90}/>
                    <ProgressBar themeColor={themeColor} text="UI Design" percentage={70}/>

                    <DragEditDiv style={{background: themeColor}} className="z-1 text-white py-2 px-2 my-2 font-bold rounded-br-xl rounded-tl-xl text-center" > CONTACT </DragEditDiv>
                    <div>
                        <DragEditDiv className="font-semibold" fontSize={14}> Uttara Dhaka, Bangladesh </DragEditDiv>
                        <DragEditDiv className="pb-1 text-gray-800" fontSize={12}> Lorem, ipsum dolor sit amet consectetur adipisicing elit.</DragEditDiv>
                    </div>
                    <div>
                        <DragEditDiv className="font-semibold" fontSize={14}> johndoe@gmail.com </DragEditDiv>
                        <DragEditDiv className="pb-1 text-gray-800" fontSize={12}> Lorem, ipsum dolor sit amet consectetur adipisicing elit.</DragEditDiv>
                    </div>
                    <div>
                        <DragEditDiv className="font-semibold" fontSize={14}> +9117728420 </DragEditDiv>
                        <DragEditDiv className="pb-1 text-gray-800" fontSize={12}> Lorem, ipsum dolor sit amet consectetur adipisicing elit.</DragEditDiv>
                    </div>
                </div>
                <div className="col-span-7 pr-4 pt-24">
                    <DragEditDiv style={{background: themeColor}} className="z-1 text-white py-2 px-2 mt-4 mb-2 font-bold rounded-br-xl rounded-tl-xl text-center" > Experience </DragEditDiv>
                    
                    <DragEditDiv className="font-semibold" fontSize={15}> Company Name </DragEditDiv>
                    <DragEditDiv className="border-b pb-1 mb-1 rounded-md" fontSize={14}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium reiciendis sint molestiae sed? </DragEditDiv>
                    
                    <DragEditDiv className="font-semibold" fontSize={15}> Company Name </DragEditDiv>
                    <DragEditDiv className="border-b pb-1 mb-1 rounded-md" fontSize={14}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium reiciendis sint molestiae sed? </DragEditDiv>

                    <DragEditDiv className="font-semibold" fontSize={15}> Company Name </DragEditDiv>
                    <DragEditDiv className="border-b pb-1 mb-1 rounded-md" fontSize={14}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium reiciendis sint molestiae sed? </DragEditDiv>
                    
                    <DragEditDiv style={{background: themeColor}} className="z-1 text-white py-2 px-2 mt-4 mb-2 font-bold rounded-br-xl rounded-tl-xl text-center" > Education </DragEditDiv>
                    
                    <DragEditDiv className="font-semibold" fontSize={15}> School Name </DragEditDiv>
                    <DragEditDiv className="border-b pb-1 mb-1 rounded-md" fontSize={14}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium reiciendis sint molestiae sed? </DragEditDiv>
                    
                    <DragEditDiv className="font-semibold" fontSize={15}> College Name </DragEditDiv>
                    <DragEditDiv className="border-b pb-1 mb-1 rounded-md" fontSize={14}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium reiciendis sint molestiae sed? </DragEditDiv>
                    
                    <DragEditDiv className="font-semibold" fontSize={15}> University Name </DragEditDiv>
                    <DragEditDiv className="border-b pb-1 mb-1 rounded-md" fontSize={14}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium reiciendis sint molestiae sed? </DragEditDiv>
                    
                </div>
            </div>
            <div className="relative py-9 z-0">
                <WaveBgBottom themeColor={themeColor}/>
            </div>
        </div>
    </>
  )
}

export default Template3