
const Location = () => {
  return (
    <>   
    <div className="container mt-5">
            <h2 className="text-center fw-bold" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
       Our Location
      </h2>
      
      <div
        style={{
          width: '80px',
          height: '4px',
          backgroundColor: '#3b58e6',
          margin: '8px auto 24px',
          borderRadius: '2px',
        }}
      />
      <iframe 
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0525019752668!2d77.3664079!3d28.538141599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8c9b8e32e2d%3A0xa57b5b9ef07acb7a!2sSG%20sofa%20center!5e0!3m2!1sen!2sin!4v1756289290318!5m2!1sen!2sin"
      width="100%" 
      height="450" 
      style={{ border: 0 }}
       allowfullscreen="" 
       loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade">
       </iframe>
    </div>
    </>

  );
};

export default Location