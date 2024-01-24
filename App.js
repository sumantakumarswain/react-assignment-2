
import React from "react";
import axios from "axios"
import "./App.css"
import TabWrapper from "./tabWrapper"
import Header from "./header"
import LatestPost from "./latestPost"



class App extends React.Component {
    hoverEffect = (e, index) => {
        var tabWrapper = document.getElementsByClassName("tab-wrapper");
        var hoverEffect = document.getElementsByClassName("hover-effect")
        if (e.type == "mouseenter") {
            hoverEffect[index].style.backgroundImage = " radial-gradient(circle,red,yellow,blue)"
            tabWrapper[index].style.border = "2px solid blue"
        } else {
            tabWrapper[index].style.borderStyle = "none"
            hoverEffect[index].style.backgroundImage = "none"
        }
    }


    hoverEffectOnLatestPost = (e) => {
        var prevActiveClass = document.getElementsByClassName("active-class")[0];
      
            prevActiveClass.classList.remove("active-class");
            prevActiveClass.className = "post-button"
            e.target.className ="active-class"
        
    }



    tabDetails = [{
        img: "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
        title: "Fresh Graduate or IT professional Looking for a job ? - 7 reasons to learn Python NOW!",
        authorName: "Arman Ahmad",
        launchDate: '05 jul 2019',
        description: "If you are a fresh graduate - or new to IT - looking for the next job, you need to read this.The last couple of years zekeLabs gave me a unique opportunity to assess technology demand in the industry and also to evaluate available talent pool for the demand."
    },
    {
        img: "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg",
        title: "Introducing you all to EdYoda - www.edyoda.com",
        authorName: "Arman Ahmad",
        launchDate: '05 jul 2019',
        description: "Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of.Introducing you all to EdYoda - Open platform to learn cutting edge emerging technologies from contributors across the globe."
    },
    {
        img: "https://edyoda.s3.amazonaws.com/media/blog-images/devops_tJSKVcn.jpg",
        title: "From identity crisis to the Success Story - The DevOps revolution!",
        authorName: "Kalyan Mahalingam",
        launchDate: '05 jul 2019',
        description: "DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the de-facto component in Software Development Lifecycle (SDLC) process in most of the organizations."
    },
    {
        img: "https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_900_350_ZaahyyI.jpg",
        title: "Typical day of Data Scientist - An insider story!",
        authorName: "Saurav Ghosh",
        launchDate: '05 jul 2019',
        description: "To me Data Science can be encapsulated in a simple statement, it helps organizations and individuals to solve complex problems while minimizing human effort. There are several different aspects to this, which we shall go into later."
    },
    {
        img: "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_big_Kv4d7yt.jpg",
        title: "Amazon Web Services (AWS) Cloud Day - Bangalore",
        authorName: "Kalyan Mahalingam",
        launchDate: '05 jul 2019',
        description: "It was indeed a hectic day with back to back session sandwiched by good food and tea (on a lighter note, need to investigate the tactics behind the 5-star hotels keeping the plates so heavy. :D)"
    },
    {
        img: "https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-large_xJDPPZO.jpg",
        title: "edYoda Meetup #01 : A Date with Cloud",
        authorName: "Ashish Pandey",
        launchDate: '05 jul 2019',
        description: "As a trainer on Cloud and DevOps technologies when I enumerate the features of the cloud to someone from non-cloud background there seems to be a conflict of interest and bias."
    }
    ]
    render() {
        return (
            <>
                <header>
                    <Header />
                </header>
                <div id="latest-post-section">
                    <h3 id="latest-para">Latest Posts</h3>
                    <LatestPost hoverEffect={this.hoverEffectOnLatestPost} />
                </div>
                <div id="tab-section">
                    {this.tabDetails.map((data, i) => {
                        return <TabWrapper details={data} index={i} hover={this.hoverEffect} />
                    })}
                </div>
            </>
        )
    }

}


export default App;

