import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

const RecommendedVideos = () => {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          image="https://mediacloud.kiplinger.com/image/private/s--1daXHMGM--/v1580375584/kipimages/pages/19564.jpg"
          title="How My Life Changed For The Better"
          channel="Sanya Lee"
          channelImage="https://i.pinimg.com/originals/d5/c3/0d/d5c30db488c25c7742acb05310d463e4.png"
          views="233M Views"
          timestamp="4 days ago"
        />
        <VideoCard
          image="https://community-cdn-digitalocean-com.global.ssl.fastly.net/variants/fR1fwLvJDeYDMNenxu3XokLs/035575f2985fe451d86e717d73691e533a1a00545d7230900ed786341dc3c882"
          title="An Introduction To Machine Learning"
          channel="AI for a better world"
          channelImage="https://futurithmic-15d58.kxcdn.com/wp-content/uploads/2019/04/12.4.19_MachineLearning.jpg"
          views="2M Views"
          timestamp="2 days ago"
        />
        <VideoCard
          image="https://camertechtrends.com/wp-content/uploads/2017/06/Africa-tech-1.jpg"
          title="African Tech Hubs: Cameroon not featuring in top 9 Country-based Rankings"
          channel="Kmer Tech"
          channelImage="https://umaizi.com/wp-content/uploads/2020/01/Africa-Tech-Business.jpg"
          views="123K Views"
          timestamp="1 month ago"
        />
        <VideoCard
          image="https://weetracker.com/wp-content/uploads/2019/05/Black-Business-Woman-Meeting-990x556.jpg"
          title="Women Tech Entrepreneurs in Africa Pulling The Weight"
          channel="Women Empowered 101"
          channelImage="https://cdn.cnn.com/cnnnext/dam/assets/171018170530-africa-tech-rising-card-super-tease.jpg"
          views="593K Views"
          timestamp="22 days ago"
        />
        <VideoCard
          image="https://www.wellen.com/wp-content/uploads/2018/02/woman-owned-business-672972726-846x525.jpg"
          title="Unique Small Business Loan Alternatives"
          channel="Delayotte Capital"
          channelImage="https://media-exp1.licdn.com/dms/image/C510BAQHNDr4ChhfiaA/company-logo_200_200/0?e=2159024400&v=beta&t=A0edZ4UCQn9EvfkOM7wviFJsAEuXUqGDhl8p4SRLpZA"
          views="23K Views"
          timestamp="2 months ago"
        />
        <VideoCard
          image="https://www.teachermagazine.com.au/files/ce-image/cache/1c03ffc10fd4ef6a/Teachers_bookshelf_-_World_class_education_855_513_60.jpg"
          title="How AI is transforming education"
          channel="Convolution 5D"
          channelImage="https://sustainabledevelopment.un.org/content/sdgsummit/images/E_SDG%20goals_icons-individual-rgb-04.png"
          views="33K Views"
          timestamp="15 hours ago"
        />
        <VideoCard
          image="https://i.ytimg.com/vi/eMFYI11QIh4/maxresdefault.jpg"
          title="7 Steps To Keep Moving Towards Your Goals"
          channel="Motivation Zone"
          channelImage="https://pbs.twimg.com/profile_images/1209137353752743939/GIISUWGE_400x400.png"
          views="1.1M Views"
          timestamp="9 months ago"
        />
        <VideoCard
          image="https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy83MjBhMDZiYmFhYmViYmZlMTQzMDE2OGQzNGYxNzE5Yy5qcGc=.jpg"
          title="How Emerging Markets And Blockchain can Bring An End To Poverty"
          channel="Sanya Lee"
          channelImage="https://i.pinimg.com/originals/d5/c3/0d/d5c30db488c25c7742acb05310d463e4.png"
          views="1M Views"
          timestamp="2 months ago"
        />
        <VideoCard
          image="https://www.iisd.org/sites/default/files/styles/og_image/public/2020-06/RS2085_food-agriculture-topic.jpg?itok=UyHeC84C"
          title="Investment in agriculture has an important poverty-reduction."
          channel="AgroPreneur Inc"
          channelImage="https://www.oecd.org/media/oecdorg/topics/agricultureandfisheries/narratives/agriculture-narrative-1.png"
          views="4M Views"
          timestamp="4 months ago"
        />
        <VideoCard
          image="https://zenventures.co.za/img/slider2.jpg"
          title="Join Us Today, And Unleash Your Full Potential"
          channel="Innovation Hub"
          channelImage="https://yt3.ggpht.com/a/AATXAJwLRIPEy7Tgtp87t2cue2YBCArbvDP8f0RBrZJ6=s900-c-k-c0x00ffffff-no-rj"
          views="21K Views"
          timestamp="4 months ago"
        />
      </div>
    </div>
  );
};

export default RecommendedVideos;
