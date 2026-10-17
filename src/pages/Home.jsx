import {FaArrowRight} from "react-icons/fa";

function Home() {
  return (
    <section id="Home" className="home-section">
      <div className="home-content">
       <span className="home-tag">YOUR  CAMPUS, YOUR EVENTS</span>  
         <h1>
          Discover Events.
          <br/>
          <br/>
          <span>Create Memories</span>
          </h1>
          <p>Plan and manage your events with EventTask Explore college comptitions,participate in exciting activities and make lasting memories.</p>
          <a href="Events" className="home-btn">
            Explore Events <FaArrowRight />
          </a>
          <div className="home-note">
            <br />
            Discover.Participate.Celebrate
            </div>
    
      </div>
      <div className="home-image">
        <img
        src ="https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        alt="Students enjoying college events"
        />
      </div>
      
    </section>
  );
}

export default Home;
