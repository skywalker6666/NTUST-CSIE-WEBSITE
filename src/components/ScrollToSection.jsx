const ScrollToSection = ({ sectionId }) => {
    const handleClick = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block:"center");
      }
    };
  
    return (
      <button onClick={handleClick}>
         {sectionId}
      </button>
    );
  };
  
  export default ScrollToSection;