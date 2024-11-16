import { Avatar, Button } from "@nextui-org/react";
import { RiAlarmWarningLine, RiFileCopyLine } from "react-icons/ri";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Chat({
  chatData,
}: {
  chatData: { role: string; content: string; id: string }[];
}) {
  return (
    <div className="w-full py-8 gap-16 px-8 flex justify-center items-center">
      <div className="max-w-4xl w-full ">
        {chatData.map((data, index) =>
          data.role === "user" ? (
            <div
              key={index}
              id={data.id}
              className="user-message flex ml-6 items-center gap-4 font-extrabold text-xl mt-16"
            >
              <Avatar />
              <div className="">{data.content}</div>
            </div>
          ) : (
            <div
              key={index}
              className="bg-slate-100 px-8 pt-4 pb-8 mt-10 rounded-3xl flex flex-col gap-4"
            >
              <div className="flex justify-between">
                <div className="pap text-slate-800">
                  꽁군<span className="text-indigo-500">AI</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    className="text-indigo-400"
                  >
                    <RiFileCopyLine size="16" />
                  </Button>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    className="text-indigo-400"
                  >
                    <RiAlarmWarningLine size="16" />
                  </Button>
                </div>
              </div>

              <Markdown remarkPlugins={[remarkGfm]}>{data.content}</Markdown>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Chat;
