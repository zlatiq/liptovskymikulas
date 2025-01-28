import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaUsers, FaMountain } from 'react-icons/fa';

const AboutWrapper = styled.section`
  padding: 4rem 0;
  background-color: #f8f9fa;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #1e3a8a;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const AboutItem = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const AboutIcon = styled.div`
  font-size: 3rem;
  color: #1e3a8a;
  margin-bottom: 1rem;
`;

const About: React.FC = () => {
    return (
        <AboutWrapper id="about">
            <AboutContent>
                <AboutTitle>O Liptovskom Mikuláši</AboutTitle>
                <AboutGrid>
                    <AboutItem>
                        <AboutIcon><FaMapMarkerAlt /></AboutIcon>
                        <h3>Lokalita</h3>
                        <p>Mesto sa nachádza v srdci Liptovskej kotliny, obklopené Nízkymi Tatrami a Západnými Tatrami.</p>
                    </AboutItem>
                    <AboutItem>
                        <AboutIcon><FaUsers /></AboutIcon>
                        <h3>Obyvateľstvo</h3>
                        <p>Liptovský Mikuláš má približne 31 000 obyvateľov a bohatú históriu siahajúcu do 13. storočia.</p>
                    </AboutItem>
                    <AboutItem>
                        <AboutIcon><FaMountain /></AboutIcon>
                        <h3>Atrakcie</h3>
                        <p>Mesto je známe svojimi historickými pamiatkami, prírodnými krásami a možnosťami pre aktívny oddych.</p>
                    </AboutItem>
                </AboutGrid>
            </AboutContent>
        </AboutWrapper>
    );
};

export default About;