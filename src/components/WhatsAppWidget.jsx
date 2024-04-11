const WhatsAppWidget = () => {
  
  const communityUrl = "https://guidify-me-git-main-pranavvishwakarmas-projects.vercel.app/";

 
  const joinCommunity = () => {
    window.open(communityUrl, "_blank");
  };

  return (
    <div className="flex justify-end mx-9">
      <div className="fixed z-50 bottom-28">
        {/* Button for joining the community */}
        <button
          onClick={joinCommunity}
          className="w-40 h-13 cursor-pointer bg-[#815aca] text-white rounded-full p-1" style={{width:'14rem',height:'50px'}}
        >
          Join Community
        </button>
      </div>
    </div>
  );
};

export default WhatsAppWidget;
