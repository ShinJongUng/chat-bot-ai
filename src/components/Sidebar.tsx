import { motion } from "framer-motion";
import { Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import { RiChat1Line } from "react-icons/ri";

function Sidebar({ open }: { open: boolean }) {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: open ? "16rem" : "0px" }}
      transition={{ type: "keyframes", stiffness: 100 }}
      className="h-full bg-white shadow-lg overflow-hidden relative"
    >
      <div className="p-2 mt-4">
        <Listbox aria-label="Actions" className="relative w-full">
          <ListboxSection title="오늘">
            <ListboxItem
              key="new"
              className="truncate"
              startContent={<RiChat1Line size={14} className="min-w-4" />}
            >
              최용덕 장군님에 대해 알려주고 레드우드
            </ListboxItem>
            <ListboxItem
              key="search"
              className="truncate"
              startContent={<RiChat1Line size={14} className="min-w-4" />}
            >
              BHC 운영시간 알려줘
            </ListboxItem>
          </ListboxSection>
          <ListboxSection title="10월">
            <ListboxItem
              key="new2"
              className="truncate"
              startContent={<RiChat1Line size={14} className="min-w-4" />}
            >
              미용실 예약 도와줘
            </ListboxItem>
            <ListboxItem
              key="search2"
              className="truncate"
              startContent={<RiChat1Line size={14} className="min-w-4" />}
            >
              꽁꾼AI가 뭐야?
            </ListboxItem>
          </ListboxSection>
        </Listbox>
      </div>
    </motion.div>
  );
}

export default Sidebar;
