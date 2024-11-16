import { Card } from "@nextui-org/react";
import {
  RiCalendarCheckLine,
  RiCandleLine,
  RiFireLine,
  RiImage2Line,
  RiSearch2Line,
  RiShoppingBag3Line,
} from "react-icons/ri";
import { motion } from "framer-motion";

function BlankChat() {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full justify-center items-center flex"
    >
      <div className="w-full justify-center items-center flex">
        <div className="max-w-4xl flex flex-col py-8 gap-16 px-4">
          <div className="flex justify-center items-center flex-col gap-6 mt-8">
            <p className="text-3xl font-semibold text-slate-800 text-center pap">
              공군을 바꾸는 AI 검색
            </p>
            {/* <Image src={logo} width={240} /> */}
            <p className="text-center text-gray-500 text-md">
              꽁꾼AI는 대화를 통해 답변을 찾아주는 공군 AI 검색입니다.
              <br /> 떠오르는 생각을 대화하듯 입력하고, 필요한 정보를 한눈에
              파악하는 새로운 경험을 시작하세요.
            </p>
          </div>
          <div className="justify-center items-center flex w-full">
            <div className="max-w-[900px] gap-4 grid grid-cols-12 grid-rows-2 w-full">
              <Card className="w-full col-span-7 px-4 pt-4 pb-10 gap-2 ring-2 ring-slate-300 hover:bg-slate-200 hover:cursor-pointer">
                <div className="flex gap-1 text-indigo-800 opacity-80">
                  <RiFireLine />
                  <p className="text-tiny font-bold">인기 질문</p>
                </div>

                <h4 className="text-black font-semibold text-xl">
                  최용덕 장군에 대해 알려주고 레드우드 비행학교와의 연관성에
                  대해 설명해줘
                </h4>
              </Card>
              <Card className="w-full col-span-5 px-4 pt-4 pb-10 gap-2 ring-2 ring-slate-300 hover:bg-slate-200 hover:cursor-pointer">
                <div className="flex gap-1 text-indigo-800 opacity-80">
                  <RiSearch2Line />
                  <p className="text-tiny font-bold">어제 많이 검색된 질문</p>
                </div>
                <h4 className="text-black font-semibold text-xl">
                  공군의 역사에 대해 알려줘
                </h4>
              </Card>
              <Card className="w-full col-span-4 px-4 pt-4 pb-10 gap-2 ring-2 ring-slate-300 hover:bg-slate-200 hover:cursor-pointer">
                <div className="flex gap-1 text-indigo-800 opacity-80">
                  <RiShoppingBag3Line />
                  <p className="text-tiny font-bold">복지시설</p>
                </div>

                <h4 className="text-black font-semibold text-xl">
                  BHC 운영시간 알려줘
                </h4>
              </Card>
              <Card className="w-full col-span-8  px-4 pt-4 pb-10 gap-2 ring-2 ring-slate-300 hover:bg-slate-200 hover:cursor-pointer">
                <div className="flex gap-1 text-indigo-800 opacity-80">
                  <RiCalendarCheckLine />
                  <p className="text-tiny font-bold">복지시설 예약</p>
                </div>
                <h4 className="text-black font-semibold text-xl">
                  계룡대 미용실 오늘 오후 4시에 열어? 열면 무궁화회관에 있는
                  예약 미용실 도와줘
                </h4>
              </Card>
              <Card className="w-full col-span-6 px-4 pt-4 pb-10 gap-2 ring-2 ring-slate-300 hover:bg-slate-200 hover:cursor-pointer">
                <div className="flex gap-1 text-indigo-800 opacity-80">
                  <RiCandleLine />
                  <p className="text-tiny font-bold">경조사</p>
                </div>

                <h4 className="text-black font-semibold text-xl">
                  내가 가야할만한 경조사 알려줄래?
                </h4>
              </Card>
              <Card className="w-full col-span-6  px-4 pt-4 pb-10 gap-2 ring-2 ring-slate-300 hover:bg-slate-200 hover:cursor-pointer">
                <div className="flex gap-1 text-indigo-800 opacity-80">
                  <RiImage2Line />
                  <p className="text-tiny font-bold">사진 검색</p>
                </div>
                <h4 className="text-black font-semibold text-xl">
                  1990년대 공군 복장 사진 찾아줘
                </h4>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default BlankChat;
