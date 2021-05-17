import React from 'react';
import DesktopHomePage from './containers/DesktopHome';
import MobileHomePage from './containers/MobileHomepage';
import { useMediaQuery } from 'react-responsive';
import { mediaQueries } from './responsive';

function App() {
  const isMobile = useMediaQuery({ query: mediaQueries.mobileQuery });
  const isDesktop = useMediaQuery({ query: mediaQueries.desktopQuery });

  if (isMobile) {
    return (
      <MobileHomePage />
    )
  } else {
    return (
      <DesktopHomePage />
    )
  }
}

export default App;







































function Click1(props) {
  const { vector2, vector3, className } = props;

  return (
    <div className={`click-1 ${className || ""}`}>
      <div className="overlap-group4-3">
        <img
          className="vector-10"
          src="https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/vector-16@2x.svg"
        />
        <div className="group">
          <div className="overlap-group2-5">
            <img className="vector-8" src={vector2} />
            <img className="vector-9" src={vector3} />
          </div>
        </div>
      </div>
    </div>
  );
}

const icons32LikeData = {
  overlapGroup4: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/vector-6@2x.svg",
  transparentRectangle: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/-transparent-rectangle-@2x.png",
};

const stringData = {
  string: "0",
  string2: "Label",
};

const string2Data = {
  string: "0",
  string2: "Label",
};

const organizmDashboardDefaultData = {
  vector2: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/vector-8@2x.svg",
  transparentRectangle: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/-transparent-rectangle-@2x.png",
  stringProps: string2Data,
};

const string3Data = {
  string: "0",
  string2: "Label",
};

const organizmDashboardDefault2Data = {
  vector2: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/vector-8@2x.svg",
  transparentRectangle: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/-transparent-rectangle-@2x.png",
  stringProps: string3Data,
};

const string4Data = {
  string: "0",
  string2: "Label",
};

const organizmDashboardDefault3Data = {
  vector2: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/vector-8@2x.svg",
  transparentRectangle: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/-transparent-rectangle-@2x.png",
  stringProps: string4Data,
};

const icons32TicketData = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/union@2x.svg",
};

const icons24ArrowData = {
  transparentRectangle: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/transparent-rectangle-2@2x.png",
};

const buttonData = {
  moreInfo: "More Info",
  icons24ArrowProps: icons24ArrowData,
};

const labelData = {
  children: "Folk",
};

const organizmElementsCardsEventDefaultData = {
  border: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/border-2@2x.svg",
  title: "Benny Dayal",
  img: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/img-3@2x.png",
  icons32TicketProps: icons32TicketData,
  buttonProps: buttonData,
  labelProps: labelData,
};

const icons32Ticket2Data = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/union@2x.svg",
};

const icons24Arrow2Data = {
  transparentRectangle: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/transparent-rectangle-3@2x.png",
};

const label2Data = {
  children: "Bollywood",
};

const icons32Ticket3Data = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/union@2x.svg",
};

const icons24Arrow3Data = {
  transparentRectangle: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/transparent-rectangle-4@2x.png",
};

const button2Data = {
  moreInfo: "More Info",
  icons24ArrowProps: icons24Arrow3Data,
};

const label3Data = {
  children: "Folk",
};

const organizmElementsCardsEventDefault2Data = {
  border: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/border-2@2x.svg",
  title: "Andrea Jeremiah",
  img: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/img-5@2x.png",
  icons32TicketProps: icons32Ticket3Data,
  buttonProps: button2Data,
  labelProps: label3Data,
};

const icons32Ticket4Data = {
  src: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/subtract@2x.svg",
};

const icons24Arrow4Data = {
  transparentRectangle: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/transparent-rectangle-5@2x.png",
};

const button3Data = {
  moreInfo: "More Info",
  icons24ArrowProps: icons24Arrow4Data,
};

const label4Data = {
  children: "Folk",
};

const organizmElementsCardsEventDefault3Data = {
  border: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/border-2@2x.svg",
  title: "Shilpa Rao",
  img: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/img-6@2x.png",
  icons32TicketProps: icons32Ticket4Data,
  buttonProps: button3Data,
  labelProps: label4Data,
};

const button22Data = {
  text4: "🇺🇸",
  paloAltoCa: "PALO ALTO, CA",
};

const headerData = {
  img: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/img-2@2x.png",
  title: "Hellen Jummy",
  button2Props: button22Data,
};

const button32Data = {
  text2: "🇮🇹",
  paloAltoCa: "PALO ALTO, CA",
};

const button33Data = {
  text2: "🇺🇸",
  paloAltoCa: "PALO ALTO, CA",
};

const header2Data = {
  title: "Hellen Jummy",
  button3Props: button33Data,
};

const click1Data = {
  vector2: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/vector-17@2x.svg",
  vector3: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/vector-18@2x.svg",
};

const click12Data = {
  vector2: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/vector-17@2x.svg",
  vector3: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/vector-18@2x.svg",
};

const dHomeData = {
  rectangle157: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/rectangle-157@1x.png",
  overlay: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/overlay@1x.svg",
  title: "Cari Cari",
  text5: "Live from their sofa to yours. Get closer to your favorite artists, and never miss out.",
  subtract: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/subtract-1@2x.svg",
  image52: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/image-52@2x.png",
  account: "Account",
  vectorStroke: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/vector--stroke-@2x.svg",
  help: "Help",
  vector2: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/vector-14@2x.svg",
  vector3: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/vector-15@2x.svg",
  search: "Search",
  title2: "Upcoming Shows",
  viewAll: "View All",
  border: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/border-2@2x.svg",
  moreInfo: "More Info",
  title3: "Vijay Yesudas",
  img: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/img-4@2x.png",
  title4: "Reviews",
  number: "1",
  text1: "/",
  number2: "12",
  transparentRectangle: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/transparent-rectangle@2x.png",
  vector4: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/vector-1@2x.svg",
  transparentRectangle2: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/transparent-rectangle@2x.png",
  vector5: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/vector@2x.svg",
  bg: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/bg@2x.svg",
  body: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget <br />laoreet adipiscing.</>,
  border2: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/border@2x.svg",
  img2: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/img@2x.png",
  title5: "Isaac Oluwatemilorun",
  body2: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget <br />laoreet adipiscing.</>,
  border3: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/border-1@2x.svg",
  img3: "https://anima-uploads.s3.amazonaws.com/projects/609b7ef008bbf1aecdf4b5da/releases/609b7f8808bbf1aecdf4b5db/img/img-1@2x.png",
  body3: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget <br />laoreet adipiscing.</>,
  icons32LikeProps: icons32LikeData,
  stringProps: stringData,
  organizmDashboardDefaultProps: organizmDashboardDefaultData,
  organizmDashboardDefault2Props: organizmDashboardDefault2Data,
  organizmDashboardDefault3Props: organizmDashboardDefault3Data,
  organizmElementsCardsEventDefaultPr: organizmElementsCardsEventDefaultData,
  icons32TicketProps: icons32Ticket2Data,
  icons24ArrowProps: icons24Arrow2Data,
  label2Props: label2Data,
  organizmElementsCardsEventDefault2P: organizmElementsCardsEventDefault2Data,
  organizmElementsCardsEventDefault3P: organizmElementsCardsEventDefault3Data,
  headerProps: headerData,
  button3Props: button32Data,
  header2Props: header2Data,
  click1Props: click1Data,
  click12Props: click12Data,
};

