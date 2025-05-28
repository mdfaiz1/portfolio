export const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Md_Faiz.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };