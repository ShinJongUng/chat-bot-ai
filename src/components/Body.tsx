import { Button } from "@nextui-org/react";
import { RiLink, RiSendPlane2Fill } from "react-icons/ri";
import useTextarea from "../hooks/useTextarea";
import BlankChat from "./BlankChat";
import Chat from "./Chat";
import { useEffect, useRef, useState } from "react";
const dummyData = [
  {
    role: "user",
    content: "공군 역사에 대해 알려줘",
  },
  {
    role: "assistant",
    content: `대한민국 공군의 역사는 한국 전쟁 이전과 이후로 나눠서 설명할 수 있습니다. 한국 전쟁(1950-1953) 이전에는 대한민국 공군이 조직되지 않았고, 전쟁을 통해 급격하게 발전한 측면이 있습니다. 이후에는 전 세계적으로 주요 공군력 중 하나로 성장하게 됩니다.

### 1. **한국 전쟁 전 대한민국 공군의 설립**
   
#### **일제강점기 (1910-1945)**
   - **일제의 항공기 개발**: 일제 강점기 동안, 일본은 조선에서도 항공기를 사용했으나, 한국인들이 군사 항공에 참여한 사례는 많지 않았습니다.
   - **항일 독립운동**: 일부 독립운동가들은 항공 기술을 배우기 위해 중국이나 러시아로 가기도 했습니다. 그 중 일부는 일제의 항공기 기술을 습득하여 이후 항공 전투에 참여하기도 했습니다.

#### **해방 이후 (1945-1948)**
   - 1945년, 제2차 세계대전이 끝나면서 한반도는 해방되었고, 일본 제국의 군사력이 해체되었습니다. 해방 후에는 공군이 없었고, 미국과 소련의 군정 하에서 각종 군사력을 재편성하게 되었습니다.
   
#### **대한민국 공군 창설 (1949)**
   - 1948년 10월, 대한민국 정부가 수립되면서, 대한민국은 군사력 강화를 위해 공군 창설을 위한 준비를 시작했습니다. 1949년 10월, **대한민국 공군**(ROKAFA, Republic of Korea Air Force)이 공식적으로 창설되었습니다.
   - 초기에 공군은 매우 초기 단계에 있었고, 항공기와 훈련 인프라가 부족했으며, 대부분의 항공기와 장비는 미군에서 지원받았습니다.

### 2. **한국 전쟁 (1950–1953)**
   - **한국 전쟁 발발과 초기 대응**: 1950년 6월 25일 북한의 침략으로 한국 전쟁이 시작되면서, 대한민국 공군은 미군의 지원을 받으며 전쟁에 참가하게 되었습니다. 전쟁 초기 대한민국 공군은 미약한 상태였으나, 전쟁 중에 빠르게 발전했습니다.
   - **미국의 지원**: 미군은 F-51 머스탱(Mustang) 전투기와 같은 항공기를 제공하여 대한민국 공군의 전투력을 높였습니다. 또한 미 공군의 전술 지휘와 지원을 받으며 다양한 공중 작전이 진행되었습니다.
   - **중공군의 개입과 공중전**: 중공군의 개입 이후 공중전이 치열해졌고, 대한민국 공군은 폭격, 정찰, 근접 지원 등 다양한 임무를 수행했습니다. 이 시기 공군의 임무는 전선 지원과 적군의 항공기와의 격돌이 주요한 역할을 했습니다.
   - **전쟁 후의 회복**: 전쟁이 끝난 후, 대한민국 공군은 피해 복구와 함께 공군력을 강화해 나갔습니다.

### 3. **전후 대한민국 공군의 발전**
   - **미국의 지원**: 1950년대 후반부터 1960년대 초반까지 대한민국 공군은 미국으로부터 F-86 세이브(Sever) 제트 전투기, F-4 팬텀(Phantom) 등 다양한 항공기들을 도입받으며 공군력을 확장해 나갔습니다.
   - **국산 항공기 개발**: 1970년대부터는 **국산 항공기 개발**에 착수하였고, 1980년대에는 **T-50** 초음속 훈련기 및 **KF-21 보라매**와 같은 고유의 항공기 개발이 이루어졌습니다.
   - **항공 방위력 강화를 위한 노력**: 또한, 대한민국 공군은 전투기, 공중급유기, 조기경보기(E-2C, E-737 등) 등을 도입하여 공군력을 강화하고, 항공 방위력을 고도화했습니다.

### 4. **현대 대한민국 공군의 역할과 임무**
   - **전국 방위 및 작전**: 대한민국 공군은 국가 방위를 위한 주요 공중 작전 수행 기관으로, 적의 공중 침투를 방지하고 공중 우위를 확보하는 임무를 수행합니다. 다양한 현대적 무기체계와 첨단 기술을 통해 방위력을 강화하고 있습니다.
   - **전투기 및 항공전**: 대한민국 공군은 F-15K, F-35A, KF-16 등 고성능 전투기를 보유하고 있으며, 공중전, 폭격, 정찰, 공중급유, 전자전 등의 다양한 임무를 수행합니다.
   - **국제 평화 유지 활동**: 대한민국 공군은 국제 평화 유지 활동에도 참여하고 있으며, UN 평화유지군과의 협력, 인도적 지원 임무 등을 수행하고 있습니다.
   - **미래형 전투기 및 기술 개발**: 대한민국은 **KF-21 보라매**와 같은 차세대 전투기 개발을 지속하고 있으며, 이를 통해 향후 공중전의 주도적인 역할을 맡을 준비를 하고 있습니다.

### 5. **주요 공군기술 발전**
   - **항공전 기술 발전**: 대한민국 공군은 F-15K, F-35A와 같은 스텔스 기술을 채택한 첨단 전투기를 운용하고 있으며, 정밀 유도 무기와 전자전 장비 등을 갖추고 있습니다.
   - **조기 경보기와 공중급유기**: E-737 조기경보기와 공중급유기(KC-330 등)는 공군의 지휘통제 능력과 작전 범위를 확장시켜줍니다.

### 6. **대한민국 공군의 미래**
   - **KF-21 보라매**: 대한민국의 차세대 전투기인 KF-21 보라매는 독자적으로 개발한 스텔스 전투기로, 공군의 전투력을 크게 향상시킬 것으로 예상됩니다. 이를 통해 대한민국은 더욱 자주적인 공군력을 확보하게 될 것입니다.
   - **첨단 기술 적용**: 대한민국 공군은 AI, 무인 항공기(UAV), 전자전 시스템 등 첨단 기술을 활용하여 미래형 전투기술을 적극적으로 개발하고 있습니다.

### 결론
대한민국 공군은 한국 전쟁을 거쳐 급격히 발전하였으며, 오늘날에는 세계에서 손꼽히는 강력한 공군력으로 자리잡고 있습니다. 미군과의 협력뿐만 아니라, 국산 항공기 개발과 첨단 기술 적용을 통해 독자적인 공군력을 갖추고 있습니다. 미래에는 KF-21과 같은 첨단 전투기를 중심으로 더욱 강력하고 자주적인 공군을 목표로 나아가고 있습니다.`,
  },
  {
    role: "user",
    content: "간단한 테이블 예시 보여줘",
  },
  {
    role: "assistant",
    content: `물론입니다! 아래에 간단한 테이블 예시를 보여드리겠습니다. 예를 들어, 학생들의 이름과 나이, 성적을 나타내는 테이블을 만들 수 있습니다.

| 이름   | 나이 | 성적 |
|--------|------|------|
| 홍길동 | 20   | 95   |
| 김철수 | 22   | 88   |
| 이영희 | 21   | 92   |
| 박준호 | 23   | 85   |

이와 같은 형식으로 데이터를 표로 정리할 수 있습니다. 필요하신 테이블 형식에 맞춰 더 구체적인 예시를 드릴 수도 있습니다. 어떤 종류의 테이블을 원하시나요?`,
  },
];

function Body() {
  // 커스텀 훅 사용
  const { value, setValue, textareaRef, handleChange } = useTextarea();
  const [chatData, setChatData] = useState<
    {
      role: string;
      content: string;
      id: string;
    }[]
  >([]);
  const [count, setCount] = useState(0);

  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      const { scrollHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatData]);

  const handleSendClick = () => {
    if (value.trim()) {
      const newMessage = dummyData[count % dummyData.length];
      setChatData((prevData) => [
        ...prevData,
        { ...newMessage, id: `message-${Date.now()}` }, // 고유 id 추가
      ]);
      setCount(count + 1);
      setValue(""); // 메시지 전송 후 인풋 비우기
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // shift + enter 키는 무시하고 엔터 키만 처리
    if (e.key === "Enter" && e.shiftKey) {
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault(); // 엔터 키 기본 동작 막기
      handleSendClick();
    }
  };

  return (
    <div className="flex-1 mx-auto w-full h-full overflow-clip flex flex-col justify-center items-center">
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto w-full flex flex-col"
      >
        <BlankChat />
        <Chat chatData={chatData} />
      </div>

      <div className="relative chat-bar flex justify-between gap-2 items-center max-w-4xl w-full pb-8">
        <Button
          isIconOnly
          variant="faded"
          size="lg"
          className="flex items-center justify-center rounded-full"
        >
          <RiLink className="text-indigo-400" size={24} />
        </Button>

        <div className="flex flex-1 items-center h-auto max-h-40 border-2 border-indigo-300 rounded-3xl shadow-lg focus-within:border-indigo-500 pr-2">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="무엇이든 물어보세요"
            className="w-full p-4 text-lg rounded-l-3xl focus:outline-none resize-none max-h-32 overflow-y-auto box-border custom-scrollbar"
            rows={1} // 최소 높이 (1줄)
          />
          <Button onClick={handleSendClick} isIconOnly variant="light">
            <RiSendPlane2Fill className="text-indigo-400" size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Body;
