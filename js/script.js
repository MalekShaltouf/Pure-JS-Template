
    
    
    var body = document.body,
        container1 = document.createElement("div"),
        nav = container1.cloneNode(),
        navChild1 = container1.cloneNode(),
        navChild2 = container1.cloneNode(),
        uList = document.createElement("ul"),
        h1  = document.createElement("h1"),
        a   = document.createElement("a"),
        aText = document.createTextNode("Quazzu"),   
        li;

   

        container1.setAttribute("class","container1");
        nav.setAttribute("class","nav");
        container1.appendChild(nav);
        a.setAttribute("href","#");
        a.appendChild(aText);
        h1.appendChild(a);
        navChild1.setAttribute("class","navChild1");
        navChild1.appendChild(h1);
        nav.appendChild(navChild1);

        Object.assign(a.style,
            {
                textDecoration:"none",
                color:"#FFF",
            });

        for(var i = 1; i < 4; i++)
        {
            li = document.createElement("li");
            a  = document.createElement("a");
            a.setAttribute("href","#");
            a.textContent = "link" + i;
            li.appendChild(a);  
            uList.appendChild(li);
            Object.assign(li.style,
                {
                    display:"inline-block",
                    padding:"0",
                    listStyleType:"none",
                    paddingLeft:"30px"
                });
            Object.assign(a.style,
                {
                    display:"inline-block",
                    textDecoration:"none",
                    color:"#FFF",
                    fontSize:"22px",
                });
               
        }

        navChild2.appendChild(uList);
        navChild2.setAttribute("class","navChild2");
        nav.appendChild(navChild2);


        Object.assign(container1.style,
            {
                width:"1349px",
                height:"625px",
                backgroundImage:"url('Images/astronomy-constellation-cosmos-577582.jpg')",
                backgroundSize:"1349px 625px"
                
            });
        Object.assign(nav.style,
            {
                overflow:"hidden",
                backgroundColor:"transparent",
                borderBottom:"1px solid rgb(85, 73, 72)",
                padding:"15px",
                boxShadow:"rgb(0, 0, 0) 0px 0px 3px, rgb(0, 0, 0) 0px 0px 9px, rgb(0, 0, 0) 0px 0px 3px, rgb(0, 0, 0) 0px 0px 8px",
                // boxShadow: "rgb(0, 0, 0) 0px 2px 2px 0px, rgb(0, 0, 0) 0px 1px 5px 0px, rgb(0, 0, 0) 0px 3px 1px -2px",
            });

            Object.assign(navChild1.style,
                {
                    float:"left",
                    margin:"0px 0px 8px 50px",
                });
            Object.assign(navChild2.style,
                {
                    float:"right",
                    margin:"9px 150px 0px 0px",
                });

                
            
        var con1Child     = document.createElement("div"),
            con1h4        = document.createElement("h4"),
            con1h1        = document.createElement("h1"),
            con1h3        = document.createElement("h3"),
            con1span1     = document.createElement("span"),
            con1button1   = document.createElement("button"),
            con1BreakLine = document.createElement("br"),
            con1button2   = con1button1.cloneNode(),  
            con1h4Text    = document.createTextNode("Welcome To Quazzu"),
            con1h1Text    = document.createTextNode("Build For The "),
            con1span1Text = document.createTextNode("Future"),
            con1h3Text    = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur doloremque molestiae aut provident quam! Nisi.")
            con1btn1Text  = document.createTextNode("Learn More"),
            con1btn2Text  = document.createTextNode("Sign Up"),
            con1BtnArr = [con1button1,con1button2],
            con1Harr = [con1h4,con1h1,con1h3];   
        
        con1h4.appendChild(con1h4Text);
        con1span1.appendChild(con1span1Text);
        con1h1.appendChild(con1h1Text);
        con1h1.appendChild(con1span1);
        con1h3.appendChild(con1h3Text);
        con1button1.appendChild(con1btn1Text);
        con1button2.appendChild(con1btn2Text);
        con1Child.appendChild(con1h4);
        con1Child.appendChild(con1h1);
        con1Child.appendChild(con1h3);
        con1Child.appendChild(con1button1);
        con1Child.appendChild(con1BreakLine);
        con1Child.appendChild(con1button2);
        container1.appendChild(con1Child);

        Object.assign(con1Child.style,
            {
                textAlign:"center",
                margin:"80px 0",
                
            });
        for(var i = 0; i < con1Harr.length;i++)
        {
            Object.assign(con1Harr[i].style,
                {
                    color:"#FFF",
                    fontSize:"22px"
                }); 
        }        
        Object.assign(con1h4.style,
            {
                padding:"5px 0",
            });    
        Object.assign(con1h1.style,
            {
                padding:"5px 0",
                fontSize:"62px"
            });
        Object.assign(con1span1.style,
            {
                color:"rgb(55, 235, 183)",
                
            });
        Object.assign(con1h3.style,
            {
                padding:"35px 0 20px 0",
            });
            
            for(var i = 0; i < con1BtnArr.length;i++)
            {
                Object.assign(con1BtnArr[i].style,
                    {
                        width:"170px",
                        height:"60px",
                        textAlign:"center",
                        fontSize:"20px",
                        border:"none",
                        margin: "0 0 10px 0",
                        cursor:"pointer",
                        transition: "background-Color .5s ease-in-out,color .5s ease-in-out"
                    });
            }
            Object.assign(con1button1.style,
                {
                    backgroundColor:"rgb(55, 235, 183)",
                    color:"#FFF",
                });
            
        Object.assign(con1button2.style,
            {
                backgroundColor:"#FFF",
                color:"rgb(31, 210, 158)",
            });
        
        con1button1.onmouseenter = function()
        {
            con1button1.style.backgroundColor = "rgb(53, 210, 165)";
        };
        con1button1.onmouseleave = function()
        {
            con1button1.style.backgroundColor = "rgb(55, 235, 183)";
        };
        
        con1button2.onmouseenter = function()
        {
            con1button2.style.backgroundColor = "rgb(251, 251, 251)";
            con1button2.style.color = "#000";
        };
        con1button2.onmouseleave = function()
        {
            con1button2.style.backgroundColor = "#FFF";
            con1button2.style.color = "rgb(31, 210, 158)";
        };

    body.appendChild(container1);

    var navUl  = document.getElementsByTagName("ul"),
        nava1 = navUl[0].children[0].children[0],    
        nava2 = navUl[0].children[1].children[0],    
        nava3 = navUl[0].children[2].children[0];
        
    nava1.onmouseenter = function()
    {
        nava1.style.transition = "color .5s ease-in-out";
        nava1.style.color = "rgb(31, 210, 158)"; 
    };
    nava1.onmouseleave = function()
    {
        nava1.style.transition = "color .5s ease-in-out";
        nava1.style.color = "#FFF"; 
    };
    
    nava2.onmouseenter = function()
    {
        nava2.style.transition = "color .5s ease-in-out";
        nava2.style.color = "rgb(31, 210, 158)"; 
    };
    nava2.onmouseleave = function()
    {
        nava2.style.transition = "color .5s ease-in-out";
        nava2.style.color = "#FFF"; 
    };
    
    nava3.onmouseenter = function()
    {
        nava3.style.transition = "color .5s ease-in-out";
        nava3.style.color = "rgb(31, 210, 158)"; 
    };
    nava3.onmouseleave = function()
    {
        nava3.style.transition = "color .5s ease-in-out";
        nava3.style.color = "#FFF"; 
    };
    

    var container2    = document.createElement("div"),
        fixedDiv      = container2.cloneNode(),
        con2Child1    = container2.cloneNode(),
        con2Child2    = container2.cloneNode(),
        con2Child3    = container2.cloneNode(),
        con2Child4    = container2.cloneNode(),
        con2Circle1   = container2.cloneNode(),
        con2Circle2   = container2.cloneNode(),
        con2Circle3   = container2.cloneNode(),
        con2Circle4   = container2.cloneNode(),
        cont2img1     = document.createElement("img"),
        cont2img2     = cont2img1.cloneNode(),
        cont2img3     = cont2img1.cloneNode(),
        cont2img4     = cont2img1.cloneNode(),
        cont2img5     = cont2img1.cloneNode(),
        con2h31       = document.createElement("h3"),
        con2h32       = con2h31.cloneNode(),
        con2h33       = con2h31.cloneNode(),
        con2h34       = con2h31.cloneNode(),
        con2p1        = document.createElement("p"),
        con2p2        = con2p1.cloneNode(),
        con2p3        = con2p1.cloneNode(),  
        con2p4        = con2p1.cloneNode(),
        con2p5        = con2p1.cloneNode(),
        con2h31Text   = document.createTextNode("Web Development"),      
        con2h32Text   = document.createTextNode("Graphic Design"),      
        con2h33Text   = document.createTextNode("Social"),      
        con2h34Text   = document.createTextNode("Browser"),
        con2p1Text    = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit."),      
        con2p2Text    = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit."),      
        con2p3Text    = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit."),      
        con2p4Text    = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit."),
        con2p5Text  = document.createTextNode("Up"),
        con2ChildArr  = [con2Child1,con2Child2,con2Child3,con2Child4],
        con2CircleArr = [con2Circle1,con2Circle2,con2Circle3,con2Circle4],
        con2ImageArr  = [cont2img1,cont2img2,cont2img3,cont2img4,cont2img5];     

        cont2img1.setAttribute("src","Images/imac.png");    
        cont2img2.setAttribute("src","Images/icons8-gallery-64.png");      
        cont2img3.setAttribute("src","Images/chat.png");    
        cont2img4.setAttribute("src","Images/icons8-twitter-48.png");    
        cont2img5.setAttribute("src","Images/icons8-open-in-browser-80.png");  

        con2Circle1.appendChild(cont2img1);
        con2Circle2.appendChild(cont2img2);
        con2Circle3.appendChild(cont2img3);
        con2Circle3.appendChild(cont2img4);
        con2Circle4.appendChild(cont2img5);
        con2h31.appendChild(con2h31Text);   
        con2h32.appendChild(con2h32Text);   
        con2h33.appendChild(con2h33Text);   
        con2h34.appendChild(con2h34Text);   
        con2p1.appendChild(con2p1Text);    
        con2p2.appendChild(con2p2Text);    
        con2p3.appendChild(con2p3Text);    
        con2p4.appendChild(con2p4Text);    
            
        con2Child1.appendChild(con2Circle1);
        con2Child1.appendChild(con2h31);
        con2Child1.appendChild(con2p1);

        con2Child2.appendChild(con2Circle2);
        con2Child2.appendChild(con2h32);
        con2Child2.appendChild(con2p2);

        con2Child3.appendChild(con2Circle3);
        con2Child3.appendChild(con2h33);
        con2Child3.appendChild(con2p3);

        con2Child4.appendChild(con2Circle4);
        con2Child4.appendChild(con2h34);
        con2Child4.appendChild(con2p4);

        container2.appendChild(con2Child1);
        container2.appendChild(con2Child2);
        container2.appendChild(con2Child3);
        container2.appendChild(con2Child4);

        con2p5.appendChild(con2p5Text);
        fixedDiv.appendChild(con2p5);
        container2.appendChild(fixedDiv);

        body.appendChild(container2);
        
        Object.assign(container2.style,
            {
                overflow:"hidden",
                padding:"80px 90px",
            });

            
            for(var i = 0; i < con2ChildArr.length;i++)
            {
                Object.assign(con2ChildArr[i].style,
                    {
                        backgroundColor:"#FFF",
                        width:"250px",
                        float:"left",
                        marginLeft:"8px",
                        padding:"15px",
                        textAlign:"center",
                        boxShadow:"rgb(211, 211, 211) 2px 2px 1px,rgb(211, 211, 211) 0px 1px 3px",
                        transition:"all .5s ease-in-out", 
                                  
                    });  
            }
            for(var i = 0; i < con2CircleArr.length;i++)
            {
                Object.assign(con2CircleArr[i].style,
                    {
                        width:"100px",
                        height:"100px",
                        backgroundColor:"rgb(71, 171, 241)",
                        borderRadius:"50%",
                        border:"2px solid black",
                        margin:"0 auto",
                    });
            }
            
            cont2img1.style.transform = "translateY(20px)";
            cont2img2.style.transform = "translateY(15px)";
            cont2img3.style.transform = "translateY(20px)";
            cont2img4.style.transform = "translateY(-46px)";
            cont2img5.style.transform = "translateY(8px)";
                
            // con2Circle1.animate([
            //     // keyframes
            //     { transform: 'Rotate(190deg)' }, 
            //     { transform: 'translate(0px)' }
            //   ], { 
            //     // timing options
            //     duration: 1000,
            //     timingFunction:"ease-in-out",
            //     iterations: 1
            //   });


        con2Circle1.onmouseenter = function()
        {
            con2Circle1.style.transform="Rotate(360deg)";
            con2Circle1.style.transition = "all .8s ease-in-out";
        };
        con2Circle1.onmouseleave = function()
        {
            con2Circle1.style.transform="Rotate(0deg)";
            con2Circle1.style.transition = "all .8s ease-in-out";
        };
        con2Circle2.onmouseenter = function()
        {
            con2Circle2.style.transform="Rotate(360deg)";
            con2Circle2.style.transition = "all .8s ease-in-out";
        };
        con2Circle2.onmouseleave = function()
        {
            con2Circle2.style.transform="Rotate(0deg)";
            con2Circle2.style.transition = "all .8s ease-in-out";
        };
        con2Circle3.onmouseenter = function()
        {
            con2Circle3.style.transform="Rotate(360deg)";
            con2Circle3.style.transition = "all .8s ease-in-out";
        };
        con2Circle3.onmouseleave = function()
        {
            con2Circle3.style.transform="Rotate(0deg)";
            con2Circle3.style.transition = "all .8s ease-in-out";
        };
        con2Circle4.onmouseenter = function()
        {
            con2Circle4.style.transform="Rotate(360deg)";
            con2Circle4.style.transition = "all .8s ease-in-out";
        };
        con2Circle4.onmouseleave = function()
        {
            con2Circle4.style.transform="Rotate(0deg)";
            con2Circle4.style.transition = "all .8s ease-in-out";
        };

        Object.assign(fixedDiv.style,
            {
                width:"30px",
                height:"30px",
                backgroundColor:"rgb(11, 163, 119)",
                borderRadius:"50%",
                position:"fixed",
                top:"585px",
                left:"20px",
                display:"none",
            });
        Object.assign(con2p5.style,
            {
                color:"#FFF",
                textAlign:"center",
                fontSize:"18px",
                margin:"4px auto",
            });
        
        window.onscroll = function()
        {
            if(document.documentElement.scrollTop > 50)
            {
                fixedDiv.style.display = "block";
            }
            else
            {
                fixedDiv.style.display = "none";
            }
        };    

        var container3 = document.createElement("div"),
            con3Child1 = container3.cloneNode(),
            con3Child2 = container3.cloneNode(),
            con3h2     = document.createElement("h2"),
            con3span   = document.createElement("span"),
            con3p1     = document.createElement("p"),
            con3H2Text = document.createTextNode("About "),
            con3SpanText = document.createTextNode("Us"),
            con3P1Text   = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur doloremque molestiae aut provident quam! Nisi.");


            con3span.appendChild(con3SpanText);
            con3h2.appendChild(con3H2Text);
            con3h2.appendChild(con3span);
            con3p1.appendChild(con3P1Text);
            con3Child1.appendChild(con3h2);
            con3Child1.appendChild(con3p1);

            container3.appendChild(con3Child1);
            container3.appendChild(con3Child2);
            body.appendChild(container3);



            Object.assign(container3.style,
                {
                    backgroundColor:"#f7f7f7",
                    overflow:"hidden",
                    padding:"15px",
                });
            Object.assign(con3Child1.style,
                {
                    float:"left",
                    width:"538px",
                    padding:"25px",
                    marginLeft:"75px",
                });
            Object.assign(con3h2.style,
                {
                    fontSize:"58px",
                    color:"rgb(16, 175, 129)",
                    margin:"0 0 25px 0",
                });
            Object.assign(con3span.style,
                {
                    color:"#000",
                });
            Object.assign(con3p1.style,
                {
                    fontSize:"27px",
                    lineHeight:"30px",
                });    
            Object.assign(con3Child2.style,
                {
                    width:"410px",
                    height:"272px",
                    background:"url('Images/tech.jpg')",
                    backgroundSize:"410px 272px",
                    float:"left",
                    margin:"0 0 0 130px",
                    boxShadow:"rgb(211, 211, 211) 1px 1px 3px, rgb(211, 211, 211) 0px 1px 3px",
                });

            var container4 = document.createElement("div"),
                con4Child  = container4.cloneNode(),
                con4h1     = document.createElement("h1"),
                con4h1Text = document.createTextNode("For Developers, By Developers"),
                con4Image  = document.createElement("img");

                con4h1.appendChild(con4h1Text);
                con4Child.appendChild(con4h1);
                container4.appendChild(con4Child);
                body.appendChild(container4);

            Object.assign(container4.style,
                {
                  height:"200px",
                  background:"linear-gradient(to right,rgba(55, 235, 183,0.58),rgba(55, 235, 183,0.58),rgba(55, 235, 183,0.58)),url('Images/pexels-photo-270348.jpeg')  center center / cover no-repeat fixed",
                  textAlign:"center",
                });    
            Object.assign(con4Child.style,
                {
                    transform:"translateY(75px)"
                });
            Object.assign(con4h1.style,
                {
                    color:"#FFF",
                    fontSize:"60px",
                });        

            var container5    = document.createElement("div"),
                con5Child1    = container5.cloneNode(),
                con5Child2    = container5.cloneNode(),
                con5Child2A   = container5.cloneNode(),  
                con5Child2B   = container5.cloneNode(),  
                con5Child2C   = container5.cloneNode(),  
                con5Child2D   = container5.cloneNode(),  
                con5Child2E   = container5.cloneNode(),  
                con5Child2F   = container5.cloneNode(),
                con5H2        = document.createElement("h2"),
                con5Span      = document.createElement("span"),
                con5Img1      = document.createElement("img"),
                con5Img2      = con5Img1.cloneNode(),
                con5Img3      = con5Img1.cloneNode(),
                con5Img4      = con5Img1.cloneNode(),
                con5Img5      = con5Img1.cloneNode(),
                con5Img6      = con5Img1.cloneNode(),
                con5H2Text    = document.createTextNode("Work With "),
                con5SpanText  = document.createTextNode("Any Language"),
                con5Child2Arr = [con5Child2A,con5Child2B,con5Child2C,con5Child2D,con5Child2E,con5Child2F],
                con5ImgArr    = [con5Img1,con5Img2,con5Img3,con5Img4,con5Img5,con5Img6];
                
                
                con5H2.appendChild(con5H2Text);
                con5Span.appendChild(con5SpanText);
                con5H2.appendChild(con5Span);
                con5Child1.appendChild(con5H2);
                con5Child2A.appendChild(con5Img1);
                con5Child2B.appendChild(con5Img2);
                con5Child2C.appendChild(con5Img3);
                con5Child2D.appendChild(con5Img4);
                con5Child2E.appendChild(con5Img5);
                con5Child2F.appendChild(con5Img6);
                con5Child2.appendChild(con5Child2A);
                con5Child2.appendChild(con5Child2B);
                con5Child2.appendChild(con5Child2C);
                con5Child2.appendChild(con5Child2D);
                con5Child2.appendChild(con5Child2E);
                con5Child2.appendChild(con5Child2F);
                container5.appendChild(con5Child1);
                container5.appendChild(con5Child2);
                body.appendChild(container5);


                con5Img1.setAttribute("src","Images/node-logo.png");
                con5Img1.setAttribute("alt","nodeJs Icon");
                con5Img2.setAttribute("src","Images/php-logo.png");
                con5Img2.setAttribute("alt","php Icon");
                con5Img3.setAttribute("src","Images/ruby-logo.png");
                con5Img3.setAttribute("alt","ruby Icon");
                con5Img4.setAttribute("src","Images/python-logo.png");
                con5Img4.setAttribute("alt","python Icon");
                con5Img5.setAttribute("src","Images/c-sharp-logo.png");
                con5Img5.setAttribute("alt","c-sharp Icon");
                con5Img6.setAttribute("src","Images/java-logo.png");
                con5Img6.setAttribute("alt","java Icon");
                
                
                
            Object.assign(container5.style,
                {
                    backgroundColor:"#f7f7f7",
                    padding:"15px",
                   
                });    
            Object.assign(con5Child1.style,
                {
                    width:"420px",
                    textAlign:"center",
                    margin:"10px auto", 
                });
            Object.assign(con5H2.style,
                {
                    fontSize:"36px",
                });
            Object.assign(con5Span.style,
                {
                    color:"rgb(16, 175, 129)",
                });
            Object.assign(con5Child2.style,
                {
                    width:"1257px",
                    height:"170px",
                    overflow:"hidden",
                    margin:"10px auto",
                });
 

            for(var i = 0; i < con5Child2Arr.length;i++)
            {
                Object.assign(con5Child2Arr[i].style,
                    {
                        width:"131px",
                        height:"90px",
                        float:"left",
                        margin:"50px 0 0 70px",
                    });  
            }
            for(var i = 0; i < con5ImgArr.length;i++)
            {
                Object.assign(con5ImgArr[i].style,
                    {
                        width:"131px",
                        height:"90px",
                        transition: "all .5s ease-in-out",
                    });
            }    
                   
            
           con5Child2A.onmouseenter = function()
           {
           
            con5Img1.style.transform = "translateY(-10px)";
           }; 
           con5Child2A.onmouseleave = function()
           {
            
            con5Img1.style.transform = "translateY(0)";
           };
           
           con5Child2B.onmouseenter = function()
           {
            con5Img2.style.transform = "translateY(-10px)";
           }; 
           con5Child2B.onmouseleave = function()
           {
            con5Img2.style.transform = "translateY(0)";
           };

           con5Child2C.onmouseenter = function()
           {
            con5Img3.style.transform = "translateY(-10px)";
           }; 
           con5Child2C.onmouseleave = function()
           {
            con5Img3.style.transform = "translateY(0)";
           };

           con5Child2D.onmouseenter = function()
           {
            con5Img4.style.transform = "translateY(-10px)";
           }; 
           con5Child2D.onmouseleave = function()
           {
            con5Img4.style.transform = "translateY(0)";
           };

           con5Child2E.onmouseenter = function()
           {
            con5Img5.style.transform = "translateY(-10px)";
           }; 
           con5Child2E.onmouseleave = function()
           {
            con5Img5.style.transform = "translateY(0)";
           };
           con5Child2F.onmouseenter = function()
           {
            con5Img6.style.transform = "translateY(-10px)";
           }; 
           con5Child2F.onmouseleave = function()
           {
            con5Img6.style.transform = "translateY(0)";
           };

           var container6  = document.createElement("div"),
               con6Child   = container6.cloneNode(),
               con6H2      = document.createElement("h2"),
               con6P1      = document.createElement("p"),
               con6H3      = document.createElement("h3"),
               con6Button  = document.createElement("button"),
               con6H2Text  = document.createTextNode("Testemonial"),
               con6P1Text  = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur doloremque molestiae aut provident quam! Nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur doloremque molestiae aut provident quam! Nisi."),
               con6H3Text  = document.createTextNode("-John Doe 2018/10/11"),
               con6BtnText = document.createTextNode("Read More");
               
            con6H2.appendChild(con6H2Text);
            con6P1.appendChild(con6P1Text);
            con6H3.appendChild(con6H3Text);
            con6Button.appendChild(con6BtnText);
            con6Child.appendChild(con6H2);   
            con6Child.appendChild(con6P1);   
            con6Child.appendChild(con6H3);   
            con6Child.appendChild(con6Button);
            container6.appendChild(con6Child);
            body.appendChild(container6);
            
            Object.assign(container6.style,
                {
                    textAlign:"center",
                });
            Object.assign(con6Child.style,
                {
                    width:"800px",
                    margin:"30px auto",
                    padding:"20px"
                });
            Object.assign(con6H2.style,
                {
                    fontSize:"25px"
                });    
            Object.assign(con6P1.style,
                {
                    width:"635px",
                    margin:"20px auto",
                    fontSize:"20px",
                });
    
            Object.assign(con6Button.style,
                {
                    display:"inline-block",
                    width:"130px",
                    height:"35px",
                    textAlign:"center",
                    border:"none",
                    backgroundColor:"rgb(76, 61, 61)",
                    color:"#FFF",
                    fontSize:"18px",
                    borderRadius:"3px",
                    margin:"15px 0 0 0",
                    cursor:"pointer",
                    transition:"all .5s ease-in-out"
                });

            con6Button.onmouseenter = function()
            {
                con6Button.style.backgroundColor = "rgb(58, 46, 46)";
            };
            con6Button.onmouseleave = function()
            {
                con6Button.style.backgroundColor = "rgb(76, 61, 61)";
            };
            
            
            var container7 = document.createElement("div"),
                con7Child  = container7.cloneNode(),
                con7p     = document.createElement("p"),
                con7pText = document.createTextNode("Sh.Malek Rights 2018 ©");


            con7p.appendChild(con7pText);
            con7Child.appendChild(con7p);
            container7.appendChild(con7Child);
            body.appendChild(container7);
            
            Object.assign(container7.style,
                {
                    backgroundColor:"rgb(16, 175, 129)",
                });
            Object.assign(con7Child.style,
                {
                    width:"500px",
                    margin:"0 auto",
                    textAlign:"center",
                    padding:"10px"
                });
            Object.assign(con7p.style,
                {
                    color:"#FFF",
                    fontSize:"22px"
                });       


            


                
            
          
    
         
    
    
    