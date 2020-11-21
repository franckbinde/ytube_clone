import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://cdn.cnn.com/cnnnext/dam/assets/171018170530-africa-tech-rising-card-large-tease.jpg"
        channel="Africa Tech Rising"
        verified
        subs="940K"
        noOfVideos={382}
        description="Africa Tech Rising meets the innovators and inventors who are driving Africa's tech revolution."
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Founded in 2008 by the Meltwater Foundation, MEST Africa is a Pan-African training program, seed fund and incubator, with a goal of equipping the continent's ..."
        channel="MEST Africa"
        timestamp="10 minutes ago"
        title="3 Months Tech By Her Accelerated Program"
        image="https://karatoupostbac.com/wp-content/uploads/2020/03/img_8419.png"
      />
      <VideoRow
        views="394K"
        subs="33K"
        description="Machine learning forms the basis of all things AI. While many people primarily associate AI with robotics, AI in its most basic form uses algorithms to make..."
        channel="Clever Programmer"
        timestamp="59 seconds ago"
        title="Which African Startups Are Really Deploying Artificial Intelligence..."
        image="https://weetracker.com/wp-content/uploads/2020/01/The-Microsoft-AppFactory-develops-the-digital-skills-coding-capabilities-and-workplace-readiness-of-young-graduates_Microsoft-720x375.jpg"
      />
      <VideoRow
        views="84K"
        subs="129K"
        description="Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text..."
        channel="Dev for Dev"
        timestamp="3 days ago"
        title="Web Design And Development"
        image="https://sochmaxafrica.com/wp-content/uploads/2020/08/Sochmax-Africa-Website-Design-and-Development-Nairobi-3-1-1024x599.jpg"
      />
      <VideoRow
        views="74K"
        subs="11K"
        description="Whether you are an experienced programmer or not, this channel is intended for everyone who wishes to learn the Python programming language. You are ..."
        channel="Pythoneer Club"
        timestamp="1 month ago"
        title="How To Get Started With Python Programming"
        image="https://i.ytimg.com/vi/B7G5B8P8k9s/maxresdefault.jpg"
      />
    </div>
  );
};

export default SearchPage;
