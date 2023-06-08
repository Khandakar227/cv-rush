import DragEditDiv from "../../../components/DEDiv";
import { CVTemplateProps } from "../../../utils/types";
import CVImage from "../CVImage";


const Template1 = ({themeColor}:CVTemplateProps) => {
    return (
        <>
            <div className="bg-white w-[600px] shadow border outline-none relative font-lora page resize overflow-auto" id="cv_template">
                <div style={{backgroundColor: themeColor}} className="flex gap-4 justify-start items-center text-white p-4">
                    <CVImage/>
                    <div className="w-full">
                        <DragEditDiv fontSize={30} className="font-bold py-4 w-full h-full" spellCheck={false}>John Doe</DragEditDiv>
                        <DragEditDiv fontSize={20} className="py-4 font-semibold w-full h-full"> Web developer </DragEditDiv>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-end col-span-1">
                        <DragEditDiv fontSize={20} className="font-bold mt-4 mb-2 pb-1"> Profile </DragEditDiv>
                        <div className="py-2 text-sm">
                            <DragEditDiv className="font-semibold"> Name </DragEditDiv>
                            <DragEditDiv spellCheck={false}> John Doe </DragEditDiv>
                        </div>

                        <div className="py-2 text-sm">
                            <DragEditDiv className="font-semibold"> Date of birth </DragEditDiv>
                            <DragEditDiv> 1 January 2000 </DragEditDiv>
                        </div>

                        <div className="py-2 text-sm">
                            <DragEditDiv className="font-semibold"> Address </DragEditDiv>
                            <DragEditDiv> Nasirabad Housing society {"\n"} Chittagong, Bangladesh </DragEditDiv>
                        </div>
                        <div className="py-2 text-sm">
                            <DragEditDiv fontSize={20} className="mt-4 mb-2 pb-1 font-semibold"> Awards </DragEditDiv>
                            <DragEditDiv className="font-bold"> Lorem ipsum dolor sit amet </DragEditDiv>
                            <DragEditDiv> 27 December 2002 </DragEditDiv>
                        </div>

                        <div className="py-2 text-sm">
                            <DragEditDiv className="font-bold"> Lorem ipsum dolor sit ametjh jbhv </DragEditDiv>
                            <DragEditDiv> 20 March 2023 </DragEditDiv>
                        </div>

                        <div className="py-2 text-sm">
                            <DragEditDiv fontSize={20} className="font-semibold mt-4 mb-2 pb-1"> Contacts </DragEditDiv>
                            <DragEditDiv> 01831234567 </DragEditDiv>
                            <DragEditDiv> johndoe@gmail.com </DragEditDiv>
                        </div>
                    </div>

                    <div className="col-span-2 text-sm pr-2">
                        <DragEditDiv disableContextMenu className="shadow bg-gray-200 pl-1 my-2">
                            <DragEditDiv disabledrag={true} isUnderTransform={true} fontSize={20} className="font-semibold pt-2 mb-2 pb-1"> Skills </DragEditDiv>
                            <DragEditDiv disabledrag={true} isUnderTransform={true} className="whitespace-pre-wrap pb-2">
                                1. React js{'\n'}
                                2. Node js{'\n'}
                                3. Express js{'\n'}
                                4. SQL{'\n'}
                                5. Python
                            </DragEditDiv>
                        </DragEditDiv>

                        <DragEditDiv disableContextMenu className="relative shadow bg-gray-200 pt-2 pl-1 pb-1 my-2">
                            <DragEditDiv disabledrag={true} isUnderTransform={true} fontSize={20} className="font-semibold pt-2 mb-2 pb-1"> Work Experience </DragEditDiv>
                            <DragEditDiv disabledrag={true} isUnderTransform={true} className="whitespace-pre-wrap pb-2">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia commodi tempore nostrum et eum impedit iure, ducimus facere unde numquam quas nesciunt natus quia, quisquam quasi est! In, fuga quam?
                            </DragEditDiv>
                        </DragEditDiv>

                        <DragEditDiv disableContextMenu className="shadow bg-gray-200 pt-2 pl-1 pb-1 my-2">
                            <DragEditDiv disabledrag={true} isUnderTransform={true} fontSize={20} className="font-semibold pt-2 mb-2 pb-1"> Education </DragEditDiv>
                            <DragEditDiv disabledrag={true} isUnderTransform={true} className="whitespace-pre-wrap pb-2">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia commodi tempore nostrum et eum impedit iure, ducimus facere unde numquam quas nesciunt natus quia, quisquam quasi est! In, fuga quam?
                            </DragEditDiv>
                        </DragEditDiv>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Template1;
