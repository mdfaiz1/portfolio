import React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import TiltedCard from "../ui/TiltedCard";

const SkillsModel = () => {
  const items = [
    { icon: "<FiFileText />", color: "blue", label: "Files" },
    { icon: "<FiBook />", color: "purple", label: "Books" },
    { icon: "<FiHeart />", color: "red", label: "Health" },
    { icon: "<FiCloud />", color: "indigo", label: "Weather" },
    { icon: "<FiEdit />", color: "orange", label: "Notes" },
    { icon: "<FiBarChart2 />", color: "green", label: "Stats" },
  ];
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button
        className="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-12 w-35 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700"
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
      >
        <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
        <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
        <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
        <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
        <p className="z-10 text-xl absolute bottom-2 left-2 font-bold">
          SKILLS
        </p>
      </button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Sheet
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
            backgroundColor: "#333446",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 0.5 }} />
          <div className="px-5 grid gap-[2em] grid-cols-2 md:grid-cols-3 mx-auto py-[3em] overflow-visible">
            {/* <GlassIcons items={items} className="custom-class" /> */}
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Kendrick Lamar - GNX"
              containerHeight="100px"
              containerWidth="100px"
              imageHeight="100px"
              imageWidth="100px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
              }
            />
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Kendrick Lamar - GNX"
              containerHeight="100px"
              containerWidth="100px"
              imageHeight="100px"
              imageWidth="100px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
              }
            />
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Kendrick Lamar - GNX"
              containerHeight="100px"
              containerWidth="100px"
              imageHeight="100px"
              imageWidth="100px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
              }
            />
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Kendrick Lamar - GNX"
              containerHeight="100px"
              containerWidth="100px"
              imageHeight="100px"
              imageWidth="100px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
              }
            />
          </div>
        </Sheet>
      </Modal>
    </>
  );
};

export default SkillsModel;
