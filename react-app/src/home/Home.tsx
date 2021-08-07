import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import anime from "animejs";

import havana from "../img/havana.png";
import shape from "../img/shape.png";
import attention from "../img/attention.png";
import artist1 from "../img/shawn-mendes.jpg";

import { TopTen } from "../types";
import responsive from "../carouselConfig";
import Card from "../layouts/Card";

gsap.registerPlugin(ScrollTrigger);

const Home = ({ auth: { authToken } }: any) => {
  const history = useHistory();

  const typoHead = useRef<HTMLHeadingElement>(null);
  const svgCard = useRef<SVGGElement>(null);

  // Creating group of refs
  const songProgress = useRef<any>([]);
  songProgress.current = [];

  const [topTenSongs] = useState<TopTen[]>([
    {
      id: 1,
      songImg: havana,
      songName: "Havana",
      singer: "Camillo Caballo",
      likes: 599,
      trend: 4.5,
      trendPercent: 75,
    },
    {
      id: 2,
      songImg: attention,
      songName: "Attention",
      singer: "Charlie Puth",
      likes: 1599,
      trend: 5.0,
      trendPercent: 95,
    },
    {
      id: 3,
      songImg: shape,
      songName: "Shape of you",
      singer: "Ed Sheeren",
      likes: 899,
      trend: 4.0,
      trendPercent: 85,
    },
    {
      id: 4,
      songImg: havana,
      songName: "Havana",
      singer: "Camillo Caballo",
      likes: 599,
      trend: 4.5,
      trendPercent: 75,
    },
    {
      id: 5,
      songImg: attention,
      songName: "Attention",
      singer: "Charlie Puth",
      likes: 1599,
      trend: 5.0,
      trendPercent: 95,
    },
    {
      id: 6,
      songImg: shape,
      songName: "Shape of you",
      singer: "Ed Sheeren",
      likes: 899,
      trend: 4.0,
      trendPercent: 85,
    },
    {
      id: 7,
      songImg: shape,
      songName: "Shape of you",
      singer: "Ed Sheeren",
      likes: 899,
      trend: 4.0,
      trendPercent: 85,
    },
    {
      id: 8,
      songImg: havana,
      songName: "Havana",
      singer: "Camillo Caballo",
      likes: 599,
      trend: 4.5,
      trendPercent: 75,
    },
    {
      id: 9,
      songImg: attention,
      songName: "Attention",
      singer: "Charlie Puth",
      likes: 1599,
      trend: 5.0,
      trendPercent: 95,
    },
    {
      id: 10,
      songImg: shape,
      songName: "Shape of you",
      singer: "Ed Sheeren",
      likes: 899,
      trend: 4.0,
      trendPercent: 85,
    },
  ]);

  // Function to add elements to progress ref
  const appendToRefs = (el: any, trendOffset: number, id: number) => {
    if (el) {
      const progressLine = { id, el, trendOffset };
      songProgress.current.push(progressLine);
    }
  };

  // Function to trigger SVG animation
  const triggerSVG = () => {
    const equalizerTime = anime.timeline({
      easing: "linear",
      duration: 250,
    });

    equalizerTime
      .add({
        targets: "#ctrl-range-1",
        translateY: 50,
      })
      .add({
        targets: "#ctrl-range-1",
        translateY: 25,
      })
      .add(
        {
          targets: "#ctrl-range-2",
          translateY: -25,
        },
        "-=200"
      )
      .add(
        {
          targets: "#ctrl-range-3",
          translateY: 55,
        },
        "-=100"
      )
      .add({
        targets: "#ctrl-range-3",
        translateY: -15,
      })
      .add(
        {
          targets: "#ctrl-range-4",
          translateY: -35,
        },
        "-=100"
      )

      .add(
        {
          targets: "#ctrl-range-3",
          translateY: 35,
        },
        "-=150"
      )
      .add({
        targets: "#status-1",
        width: 157,
      })
      .add({
        targets: "#status-2",
        width: 126,
      })
      .add({
        targets: "#status-3",
        width: 115,
      })
      .add({
        targets: "#status-3_2",
        width: 143,
      });
  };

  // Function to animate stuffs when page loads
  const animateStuffs = () => {
    const t1 = gsap.timeline({ defaults: { duration: 1 } });
    t1.fromTo(
      typoHead.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0 }
    ).fromTo(
      ".svg-card",
      { y: 0 },
      {
        y: -20,
        stagger: {
          amount: 1.5,
        },
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 2,
      }
    );
  };

  // Function to control scroll animations
  const ctrlScrollAnim = () => {
    songProgress.current.forEach((progress: any) => {
      gsap.fromTo(
        progress.el,
        {
          strokeDashoffset: 440,
        },
        {
          duration: 300,
          strokeDashoffset: progress.trendOffset,
          scrollTrigger: {
            trigger: ".top-ten-songs .music-contain",
            scrub: true,
            // start: "top bottom",
          },
        }
      );
    });
  };

  useEffect(() => {
    triggerSVG();
    animateStuffs();
    ctrlScrollAnim();
    // Redirect back to sign in when user not loggedin
    !authToken && history.push("/sign_in");
  }, [authToken, history]);

  return (
    <div className="container">
      <main className="home-page py-2">
        <section className="section landing-section mb-4">
          <div className="typo-contain">
            <h1 ref={typoHead} className="head-1 typo pb-1">
              When words fail music speaks
            </h1>
            <p className="lead-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sapien in turpis eu non tempus, sed.
            </p>
            <a href="#top-ten-section" className="btn btn-secondary">
              <i className="material-icons pr-0">play_circle_filled</i>
              Explore
            </a>
          </div>
          <div className="landing-showcase">
            <svg
              className="landing-art"
              viewBox="0 0 830 647"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Frame 1">
                <g id="equalizer card" className="svg-card svg-card-1">
                  <rect
                    id="Rectangle 6"
                    x="4"
                    width="241"
                    height="214"
                    rx="12"
                    fill="#3E2782"
                    fillOpacity="0.73"
                  />
                  <g id="Equalizer bar">
                    <g id="Group 2">
                      <line
                        id="Line 1"
                        x1="64"
                        y1="41"
                        x2="64"
                        y2="173"
                        stroke="#6B58C2"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        id="ctrl-range-1"
                        x1="64"
                        y1="63"
                        x2="64"
                        y2="95"
                        stroke="#FFA665"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                    </g>
                    <g id="Group 3">
                      <line
                        id="Line 1_2"
                        x1="106"
                        y1="41"
                        x2="106"
                        y2="173"
                        stroke="#6B58C2"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        id="ctrl-range-2"
                        x1="106"
                        y1="103"
                        x2="106"
                        y2="135"
                        stroke="#FFA665"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                    </g>
                    <g id="Group 4">
                      <line
                        id="Line 1_3"
                        x1="148"
                        y1="41"
                        x2="148"
                        y2="173"
                        stroke="#6B58C2"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        id="ctrl-range-3"
                        x1="148"
                        y1="78"
                        x2="148"
                        y2="110"
                        stroke="#FFA665"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                    </g>
                    <g id="Group 5">
                      <line
                        id="Line 1_4"
                        x1="190"
                        y1="41"
                        x2="190"
                        y2="173"
                        stroke="#6B58C2"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        id="ctrl-range-4"
                        x1="190"
                        y1="132"
                        x2="190"
                        y2="164"
                        stroke="#FFA665"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                    </g>
                  </g>
                </g>
                <g
                  ref={svgCard}
                  id="music player"
                  className="svg-card svg-card-2"
                >
                  <path
                    id="Rectangle 4"
                    d="M54 276C54 269.373 59.3726 264 66 264H514C520.627 264 526 269.373 526 276V602C526 608.627 520.627 614 514 614H66C59.3726 614 54 608.627 54 602V276Z"
                    fill="#3E2782"
                    fillOpacity="0.73"
                  />
                  <g id="lyrics">
                    <line
                      id="wave-line-1"
                      x1="124.868"
                      y1="356.677"
                      x2="124.868"
                      y2="387.313"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-2"
                      x1="136.291"
                      y1="351.781"
                      x2="136.291"
                      y2="392.209"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-3"
                      x1="147.422"
                      y1="360.315"
                      x2="147.422"
                      y2="383.689"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-4"
                      x1="158.7"
                      y1="357.496"
                      x2="158.7"
                      y2="386.508"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-5"
                      x1="169.977"
                      y1="353.267"
                      x2="169.977"
                      y2="390.737"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-6"
                      x1="181.983"
                      y1="343.622"
                      x2="181.983"
                      y2="400.368"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-7"
                      x1="193.94"
                      y1="351.858"
                      x2="193.94"
                      y2="392.147"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-8"
                      x1="205.217"
                      y1="358.906"
                      x2="205.217"
                      y2="385.098"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-9"
                      x1="216.494"
                      y1="353.267"
                      x2="216.494"
                      y2="390.737"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-10"
                      x1="227.674"
                      y1="356.677"
                      x2="227.674"
                      y2="387.313"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-11"
                      x1="239.048"
                      y1="353.267"
                      x2="239.048"
                      y2="390.737"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-12"
                      x1="250.52"
                      y1="341.99"
                      x2="250.52"
                      y2="402"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-13"
                      x1="261.943"
                      y1="348.518"
                      x2="261.943"
                      y2="395.473"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-14"
                      x1="273.366"
                      y1="355.045"
                      x2="273.366"
                      y2="388.945"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-15"
                      x1="284.157"
                      y1="361.725"
                      x2="284.157"
                      y2="382.279"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-16"
                      x1="296.843"
                      y1="354.677"
                      x2="296.843"
                      y2="389.327"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-17"
                      x1="308.12"
                      y1="357.496"
                      x2="308.12"
                      y2="386.508"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-18"
                      x1="319.057"
                      y1="345.254"
                      x2="319.057"
                      y2="398.736"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-19"
                      x1="330.48"
                      y1="350.149"
                      x2="330.48"
                      y2="393.841"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-20"
                      x1="341.903"
                      y1="355.045"
                      x2="341.903"
                      y2="388.945"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-21"
                      x1="353.326"
                      y1="350.149"
                      x2="353.326"
                      y2="393.841"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-22"
                      x1="364.506"
                      y1="353.267"
                      x2="364.506"
                      y2="390.737"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-23"
                      x1="375.783"
                      y1="356.086"
                      x2="375.783"
                      y2="387.918"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-24"
                      x1="387.06"
                      y1="361.725"
                      x2="387.06"
                      y2="382.279"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-25"
                      x1="398.337"
                      y1="360.315"
                      x2="398.337"
                      y2="383.689"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-26"
                      x1="410.44"
                      y1="355.045"
                      x2="410.44"
                      y2="388.945"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-27"
                      x1="421.863"
                      y1="348.518"
                      x2="421.863"
                      y2="395.473"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-28"
                      x1="433.286"
                      y1="350.149"
                      x2="433.286"
                      y2="393.841"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-29"
                      x1="444.709"
                      y1="355.045"
                      x2="444.709"
                      y2="388.945"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      id="wave-line-30"
                      x1="456.132"
                      y1="361.725"
                      x2="456.132"
                      y2="382.279"
                      stroke="#6B58C2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </g>
                  <g id="player controls">
                    <g id="Group 7">
                      <circle
                        id="Ellipse 1"
                        cx="285"
                        cy="498.632"
                        r="34"
                        transform="rotate(-31 285 498.632)"
                        fill="#FFA665"
                      />
                      <path
                        id="play-btn"
                        d="M276.304 487.524C276.278 485.985 277.927 484.994 279.274 485.74L298.967 496.656C300.314 497.403 300.347 499.327 299.028 500.12L279.727 511.717C278.407 512.51 276.724 511.577 276.697 510.037L276.304 487.524Z"
                        fill="#130C28"
                      />
                    </g>
                    <g id="Group 8">
                      <path
                        id="Polygon 2"
                        d="M173.328 500.732C171.994 499.962 171.994 498.038 173.328 497.268L192.828 486.01C194.161 485.24 195.828 486.202 195.828 487.742V510.258C195.828 511.798 194.161 512.76 192.828 511.99L173.328 500.732Z"
                        fill="#FFA665"
                        fillOpacity="0.72"
                      />
                      <rect
                        id="Rectangle 12"
                        x="168"
                        y="486"
                        width="4"
                        height="25"
                        rx="1"
                        fill="#FFA665"
                        fillOpacity="0.72"
                      />
                    </g>
                    <g id="Group 9">
                      <path
                        id="Polygon 2_2"
                        d="M397 500.732C398.333 499.962 398.333 498.038 397 497.268L377.5 486.01C376.167 485.24 374.5 486.202 374.5 487.742V510.258C374.5 511.798 376.167 512.76 377.5 511.99L397 500.732Z"
                        fill="#FFA665"
                        fillOpacity="0.72"
                      />
                      <rect
                        id="Rectangle 12_2"
                        width="4"
                        height="25"
                        rx="1"
                        transform="matrix(-1 0 0 1 402.328 486)"
                        fill="#FFA665"
                        fillOpacity="0.72"
                      />
                    </g>
                  </g>
                </g>
                <g
                  ref={svgCard}
                  id="progress card"
                  className="svg-card svg-card-1"
                >
                  <rect
                    id="Rectangle 2"
                    x="566"
                    y="13"
                    width="264"
                    height="402"
                    rx="12"
                    fill="#3E2782"
                    fillOpacity="0.73"
                  />
                  <g id="progress-bar">
                    <circle
                      id="Ellipse 2"
                      cx="698"
                      cy="156"
                      r="89"
                      fill="#6B58C2"
                    />
                    <path
                      id="progress-line"
                      d="M779 156.223C778.879 200.855 742.661 237 698 237C653.265 237 617 200.735 617 156C617 111.265 653.265 75 698 75C710.611 75 730.127 79.0778 746.777 91.2569C763.056 103.165 777.083 123.146 779 156.223Z"
                      stroke="#FFA665"
                      strokeWidth="16"
                    />
                    <circle
                      id="Ellipse 3"
                      cx="698"
                      cy="156"
                      r="73"
                      fill="#32206A"
                    />
                  </g>
                  <g id="stats contain">
                    <g id="Group 11">
                      <circle
                        id="album-1"
                        cx="616"
                        cy="304"
                        r="7"
                        fill="#6B58C2"
                      />
                      <rect
                        id="status-1"
                        x="630"
                        y="301"
                        width="9"
                        height="6"
                        rx="3"
                        fill="#FFA665"
                      />
                    </g>
                    <g id="Group 12">
                      <circle
                        id="album-2"
                        cx="616"
                        cy="324"
                        r="7"
                        fill="#6B58C2"
                      />
                      <rect
                        id="status-2"
                        x="630"
                        y="321"
                        width="9"
                        height="6"
                        rx="3"
                        fill="#FFA665"
                      />
                    </g>
                    <g id="Group 13">
                      <circle
                        id="album-3"
                        cx="616"
                        cy="344"
                        r="7"
                        fill="#6B58C2"
                      />
                      <rect
                        id="status-3"
                        x="630"
                        y="341"
                        width="9"
                        height="6"
                        rx="3"
                        fill="#FFA665"
                      />
                    </g>
                    <g id="Group 14">
                      <circle
                        id="album-3_2"
                        cx="616"
                        cy="364"
                        r="7"
                        fill="#6B58C2"
                      />
                      <rect
                        id="status-3_2"
                        x="630"
                        y="361"
                        width="9"
                        height="6"
                        rx="3"
                        fill="#FFA665"
                      />
                    </g>
                  </g>
                </g>
                <g
                  ref={svgCard}
                  id="music card"
                  className="svg-card svg-card-2"
                >
                  <rect
                    id="Rectangle 1"
                    x="285"
                    y="43"
                    width="241"
                    height="171"
                    rx="12"
                    fill="#3E2782"
                    fillOpacity="0.73"
                  />
                  <g id="music" clipPath="url(#clip0)">
                    <path
                      id="Vector"
                      d="M432.716 96.1923L392.095 108.188C391.27 108.447 390.55 108.962 390.038 109.659C389.527 110.356 389.251 111.197 389.25 112.061V145.248C387.92 144.925 386.556 144.758 385.188 144.751C378.459 144.751 373 148.389 373 152.876C373 157.362 378.459 161.001 385.188 161.001C391.916 161.001 397.375 157.362 397.375 152.876V123.209L429.875 113.688V137.125C428.545 136.801 427.181 136.633 425.812 136.626C419.084 136.626 413.625 140.264 413.625 144.751C413.625 149.237 419.084 152.876 425.812 152.876C432.541 152.876 438 149.238 438 144.751V100.063C437.999 99.4254 437.849 98.7967 437.56 98.228C437.271 97.6594 436.853 97.1666 436.338 96.7897C435.824 96.4128 435.228 96.1624 434.599 96.0586C433.969 95.9548 433.324 96.0006 432.716 96.1923Z"
                      fill="#FFA665"
                    />
                  </g>
                </g>
                <g
                  ref={svgCard}
                  id="headphone card"
                  className="svg-card svg-card-1"
                >
                  <rect
                    id="Rectangle 5"
                    x="566"
                    y="465"
                    width="264"
                    height="182"
                    rx="12"
                    fill="#3E2782"
                    fillOpacity="0.73"
                  />
                  <g id="headphones-alt">
                    <path
                      id="Vector_2"
                      d="M683.688 561.438H681.219C675.764 561.438 671.344 565.866 671.344 571.331V581.169C671.344 586.633 675.764 591.062 681.219 591.062H683.688C686.414 591.062 688.625 588.847 688.625 586.116V566.384C688.625 563.652 686.414 561.438 683.688 561.438ZM715.781 561.438H713.312C710.586 561.438 708.375 563.652 708.375 566.384V586.116C708.375 588.847 710.586 591.062 713.312 591.062H715.781C721.236 591.062 725.656 586.633 725.656 581.169V571.331C725.656 565.867 721.236 561.438 715.781 561.438ZM698.5 521.938C676.422 521.938 659.705 540.319 659 561.438V578.719C659 580.083 660.105 581.188 661.469 581.188H663.938C665.301 581.188 666.406 580.083 666.406 578.719V561.438C666.406 543.744 680.807 529.375 698.5 529.372C716.193 529.375 730.594 543.744 730.594 561.438V578.719C730.594 580.083 731.699 581.188 733.062 581.188H735.531C736.895 581.188 738 580.083 738 578.719V561.438C737.295 540.319 720.578 521.938 698.5 521.938Z"
                      fill="#FFA665"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="65"
                    height="65"
                    fill="white"
                    transform="translate(373 96)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </section>
        <section
          id="top-ten-section"
          className="section top-ten-section py-1 mb-10"
        >
          <div className="section-header mb-2">
            <h4 className="head-4 med sub-head">Week's Top 10</h4>
            <h2>Top 10 songs being discovered this week</h2>
          </div>

          <div className="top-ten-songs songs-contain">
            {topTenSongs.map((song, i) => (
              <div key={song.id} className="music-item">
                <div className="progress-contain">
                  <div className="song-progress">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle
                        className="progress-line"
                        ref={(el: any) =>
                          appendToRefs(el, song.trendPercent, i)
                        }
                        cx="70"
                        cy="70"
                        r="70"
                        style={{
                          strokeDashoffset: `calc(440 - (440 * ${song.trendPercent} / 100)`,
                        }}
                      ></circle>
                    </svg>
                    <div className="song-img">
                      <img
                        src={song.songImg}
                        alt="song img"
                        // className="song-img"
                      />
                      <div className="song-desc">
                        <div className="likes stat">
                          <i className="material-icons">favorite</i>
                          <span className="fav-count count">{song.likes}</span>
                        </div>
                        <div className="trend stat">
                          <i className="material-icons">trending_up</i>
                          <span className="trend-count count">
                            {song.trend}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="song-desc">
                  <h4 className="head-4">{song.songName}</h4>
                  <p className="lead-2">{song.singer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="section trending-section py-1 mb-10">
          <div className="section-header mb-2">
            <h4 className="head-4 med sub-head">Trending Today</h4>
            <h2>Trending songs of the day</h2>
          </div>
          <div className="trending-contain">
            <Carousel
              removeArrowOnDeviceType={["tablet", "mobile"]}
              swipeable
              draggable
              responsive={responsive}
            >
              {[1, 2, 3, 4, 5].map(num => (
                <Card
                  key={num}
                  songImg={shape}
                  songName="Shape of you"
                  releaseDate="11/07/21"
                  totalListens={200}
                  totalFollowers={100}
                  listenLimit={20}
                  points={150}
                  user="general"
                />
              ))}
            </Carousel>
          </div>
        </section>
        <section className="section artist-section py-1 mb-10">
          <div className="section-header mb-2">
            <h4 className="head-4 med sub-head">Top Artists</h4>
            <h2>World's top artists</h2>
          </div>
          <div className="top-artists songs-contain">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <div key={num} className="music-item">
                <div className="progress-contain">
                  <div className="song-progress">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle
                        cx="70"
                        cy="70"
                        r="70"
                        style={{
                          strokeDashoffset: `calc(440 - (440 * 80) / 100)`,
                        }}
                      ></circle>
                    </svg>
                    <div className="song-img">
                      <img
                        src={artist1}
                        alt="song img"
                        // className="song-img"
                      />
                      <div className="song-desc">
                        <div className="likes stat">
                          <i className="material-icons">favorite</i>
                          <span className="fav-count count">999</span>
                        </div>
                        <div className="trend stat">
                          <i className="material-icons">trending_up</i>
                          <span className="trend-count count">540</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="song-desc">
                  <h4 className="head-4">Shawn Mendes</h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

// Function to map state to props
const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Home);
