import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faCode,
  faRankingStar,
  faSquareCheck,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "../../hooks/useInView";
import cpData from "../../assets/data/competetive-programming.json";
import "./competitive-programming.css";

interface CPProfile {
  platform: string;
  "max-rating": string;
  rank: {
    name: string;
    color: string;
  };
  solved: string;
  "contest-participation": string;
  profile: string;
}

const CompetitiveProgramming: React.FC = () => {
  const { "competetive-programming": profiles, achievements } = cpData;
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="competitive-programming"
      className={`cp-section ${inView ? "animate" : ""}`}
    >
      <div className="cp-grid">
        <h2>Competitive Programming</h2>

        <div className="cp-profiles">
          {profiles.map((profile: CPProfile, index) => (
            <a
              href={profile.profile}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="cp-card"
            >
              <div className="cp-card-header">
                <h3>{profile.platform}</h3>
                <FontAwesomeIcon icon={faCode} />
              </div>

              <div className="cp-card-content">
                <p className="rating">
                  <FontAwesomeIcon icon={faChartLine} />
                  Max Rating: <span>{profile["max-rating"]}</span>
                </p>

                <p className="rank">
                  <FontAwesomeIcon icon={faRankingStar} />
                  Rank:{" "}
                  <span style={{ color: profile.rank.color }}>
                    {profile.rank.name}
                  </span>
                </p>

                <p className="solved">
                  <FontAwesomeIcon icon={faSquareCheck} />
                  Problems solved: {profile.solved}
                </p>

                <p className="contests">
                  <FontAwesomeIcon icon={faTrophy} />
                  Contests: {profile["contest-participation"]}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="cp-achievements">
          <ul>
            {achievements.map((achievement, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faTrophy} />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
