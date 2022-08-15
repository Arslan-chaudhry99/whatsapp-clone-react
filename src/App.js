import './style.css';

function App() {
  return (
   <>
      <div id="app">
      <div class="container d-grid hidden">
        <section class="aside " id="aside">
          <header class="aside__tools">
            <section class="aside__top flex">
              <strong>Available for chat</strong>
              <div class="material-icons material-symbols-rounded" id="close" style={{cursor:"pointer;"}}>close</div>
            </section>
          </header>
       
          <main class="aside__messages">
          
            <section class="aside__message-box flex transition">
              <div class="profile-block flex">
                <div class="hidden">
                  <img src="./assets/images/Avatar/16.jpg" alt="" />
                </div>
                
              </div>
              
              <div class="aside__details">
                <h3 class="aside__details-name">
                  <strong>Roy Knapp</strong>
                </h3>
                <strong id="typing" style={{color: "#25d366;"}}>Typing...</strong>
              </div>
              <strong style={{fontSize:"12px;", color: "#25d366;"}}>online</strong>
            </section>
            
          </main>
        </section>
        <section class="message d-flex">
          <header class="title-bar">
            <section class="flex">
              <div class="title-bar__user flex">
                <div class="profile-block">
                  <div class="hidden">
                    <img src="./assets/images/Avatar/chaudhry.jpg" alt="" />
                  </div>
                </div>
                <div class="title-bar__user-info">
                  <h3 class="title-bar__name">
                    <strong>Arslan chaudhry(admin)</strong>
                   
                  </h3>
                  <span style={{color: "#25d366;"}}>online</span>
                </div>
                
              </div>
              <div class="material-icons material-symbols-rounded" id="open-user" style={{cursor: "pointer;"}}>
                expand_more
              </div>
            </section>
          </header>
          <main class="message-list ">
            <section class="scroll-down" style={{width: "100%;" ,height: "450px" ,overflowY:"scroll", position:"sticky" }}>
              <div class="message-list__declaration--date">yesterday</div>
              <div class="message-list__declaration--lock chat-shadow">
                <span
                  class="material-icons material-symbols-rounded"
                  style={{verticalAlign: "-1px"}}
                >
                  lock
                </span>
                Messages are end-to-end encrypted. No one outside of this chat,
                not even WhatsApp, can read or listen to them. Click to learn
                more.
              </div>   
              <section class="message-list__chat-box">
               <div class="message-join-now">yesterday</div>
                <section class="chat-box right">
                 <div class="chat-box__container chat-shadow">
                   <p class="chat-box__text" style={{width: "auto;"}}>
                    Hello Nina, I hope you are fine. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum impedit dolor voluptatum quas omnis! Placeat eum, dicta nulla voluptatibus commodi fugit ipsum nam repellendus, exercitationem accusamus aliquid voluptas dolorum illum!
                    lore
                   </p>
                   <i class="material-icons material-symbols-rounded seen" style={{fontSize: "15px;", float: "right;", color: "#53bdeb;" }}>
                    done_all
                   </i>
                  </div>
                </section>
              </section>
             
             
          
      
          
            
         
              <section class="chat-box left">
                <div class="chat-box__container chat-shadow">
                  <p class="chat-box__text">
                    you're welcome ,Good luck Sajjad.
                  </p>
                  <i class="material-icons material-symbols-rounded seen" style={{fontSize: "15px;" ,float: "right;",color: "#53bdeb;"}}>
                    done_all
                  </i>
                </div>
              
              </section>
            </section>
        
           
          
          </main>
          <footer class="message-content">
            <section class="flex">
              <div class="message-content__input-container">
                <input
                  class="message-content__input"
                  type="text"
                  placeholder="Type a message"
               
                  
                />
              </div>
              <div class="message-content__voice-icon" >
                <div class="material-icons material-symbols-rounded">send</div>
              </div>
            </section>
          </footer>
        </section>
      </div>
    </div>
   </>
  );
}

export default App;
