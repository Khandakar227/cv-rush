import DragEditDiv from "../../../components/DEDiv";
import CVImage from "../CVImage";
import EditDiv from "../../../components/EditDiv";
import { CVTemplateProps } from "../../../utils/types";


const Template2 = ({ themeColor }: CVTemplateProps) => {

    return (
        <>
            <div className="bg-white w-[600px] shadow border outline-none relative font-lora page resize-x overflow-auto pr-4" id="cv_template">
                <div className="grid grid-cols-12 justify-start items-start gap-4">
                    <div className="h-full col-span-5 p-4 max-w-[15.5rem]" style={{ backgroundColor: themeColor }}>
                        <div className="pt-8 pb-12">
                            <CVImage className="w-40 shadow mx-auto" />
                        </div>
                        <DragEditDiv fontSize={24} className="pt-4 text-white font-semibold"> About me </DragEditDiv>
                        <DragEditDiv className="text-white py-2"> Date of birth: May 26, 1978</DragEditDiv>
                        <DragEditDiv className="text-white py-2"> Nationality: Bangladeshi</DragEditDiv>
                        <DragEditDiv className="text-white py-2 pb-4"> Address: Dhaka, Bangladesh </DragEditDiv>

                        <DragEditDiv fontSize={24} className="pt-4 text-white font-semibold"> Contact </DragEditDiv>
                        <div>
                            <div className="grid grid-flow-col gap-3 py-2 justify-start items-center">
                                <DragEditDiv contentEditable={false}>
                                    <img src="/icons/Map.png" alt="icon" />
                                </DragEditDiv>
                                <DragEditDiv className="text-white pb-2"> House no. 3, Sector 4, Uttara, Dhaka, Bangladesh </DragEditDiv>
                            </div>

                            <div className="grid grid-flow-col gap-3 py-2 justify-start items-center">
                                <DragEditDiv contentEditable={false}>
                                    <img src="/icons/Mail.png" alt="icon" />
                                </DragEditDiv>
                                <DragEditDiv className="text-white pb-2"> johndoe@gmail.com </DragEditDiv>
                            </div>

                            <div className="grid grid-flow-col gap-3 py-2 justify-start items-center">
                                <DragEditDiv contentEditable={false}>
                                    <img src="/icons/Phone.png" alt="icon" />
                                </DragEditDiv>
                                <DragEditDiv className="text-white py-1"> +949596778251 </DragEditDiv>
                            </div>
                        </div>

                        <DragEditDiv fontSize={24} className="pt-4 text-white font-semibold"> Interests </DragEditDiv>
                        <DragEditDiv className="text-white">
                            <EditDiv contentEditable className="whitespace-pre-wrap pb-2">
                                Football{'\n'}

                                Online gaming{'\n'}

                                Problem Solving{'\n'}

                                Music
                            </EditDiv>
                        </DragEditDiv>
                    </div>

                    <div className="col-span-7">
                        <DragEditDiv fontSize={48} className="font-bold pt-14"> Jhon Doe </DragEditDiv>
                        <DragEditDiv fontSize={25} className="font-bold pt-3"> Graphic Designer </DragEditDiv>
                        
                        <DragEditDiv fontSize={20} className="font-bold pt-6"> CAREER OBJECTIVE </DragEditDiv>
                        <DragEditDiv fontSize={15} className="pt-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum adipisci culpa nobis quam, libero exercitationem, veniam natus consectetur facere corporis veritatis maiores nostrum optio repellat praesentium. Architecto sapiente veniam repellendus. </DragEditDiv>
                        
                        <DragEditDiv fontSize={20} className="font-bold pt-6"> EDUCATION </DragEditDiv>
                        <DragEditDiv fontSize={15} className="pt-3 whitespace-pre-wrap">
                        HSC {"            "} Science {"            "} 2021 {"            "} 5.00
                        HSC {"            "} Science {"            "} 2021 {"            "} 5.00
                        </DragEditDiv>
                        
                        <DragEditDiv fontSize={20} className="font-bold pt-6"> EXPERIENCE </DragEditDiv>
                        <DragEditDiv fontSize={15} className="pt-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum adipisci culpa nobis quam, libero exercitationem. </DragEditDiv>
                        
                        <DragEditDiv fontSize={20} className="font-bold pt-6"> EXPERTISE SKILLS </DragEditDiv>
                        <DragEditDiv fontSize={15} className="pt-3 whitespace-pre-wrap">
                        SEO Works{"                                  "}Bussiness Card Design 
                        Presentations(PPT){"              "}Logo Design
                        Writing Documentation{"                 "}Data Collection
                        </DragEditDiv>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Template2;