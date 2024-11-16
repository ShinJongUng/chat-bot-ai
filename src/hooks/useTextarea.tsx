import { useState, useEffect, useRef } from "react";

function useTextarea(initialValue: string = "") {
  const [value, setValue] = useState(initialValue);
  const [height, _] = useState("auto");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // 텍스트가 변경될 때마다 textarea의 높이를 조정하는 효과
  useEffect(() => {
    if (textareaRef.current) {
      // 텍스트가 늘어나거나 줄어들 때마다 높이를 자동으로 조정
      textareaRef.current.style.height = "auto"; // 내용이 줄어들 때 높이를 초기화
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // 내용에 맞게 높이 설정
    }
  }, [value]); // `value`가 변경될 때마다 실행

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };


  return {
    value,
    setValue,
    height,
    textareaRef,
    handleChange,
  };
}

export default useTextarea;
