import React from 'react';
import styled from 'styled-components';
import { FaLandmark, FaWater, FaSkiing, FaTree } from 'react-icons/fa';

const AttractionsWrapper = styled.section`
  padding: 4rem 0;
`;

const AttractionsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const AttractionsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #1e3a8a;
`;

const AttractionsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const AttractionItem = styled.div`
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const AttractionIcon = styled.div`
  font-size: 3rem;
  color: #1e3a8a;
  margin-bottom: 1rem;
`;

const Attractions: React.FC = () => {
    return (
        <AttractionsWrapper id="attractions">
            <AttractionsContent>
                <AttractionsTitle>Hlavné atrakcie</AttractionsTitle>
                <AttractionsList>
                    <AttractionItem>
                        <AttractionIcon><FaLandmark /></AttractionIcon>
                        <h3>Historické centrum</h3>
                        <p>Objavte bohatú históriu mesta prechádzkou po námestí a návštevou múzeí.</p>
                    </AttractionItem>
                    <AttractionItem>
                        <AttractionIcon><FaWater /></AttractionIcon>
                        <h3>Aquapark Tatralandia</h3>
                        <p>Užite si zábavu a relax v jednom z najväčších aquaparkov v strednej Európe.</p>
                    </AttractionItem>
                    <AttractionItem>
                        <AttractionIcon><FaSkiing /></AttractionIcon>
                        <h3>Jasná</h3>
                        <p>Vyskúšajte zimné športy v najväčšom lyžiarskom stredisku na Slovensku.</p>
                    </AttractionItem>
                    <AttractionItem>
                        <AttractionIcon><FaTree /></AttractionIcon>
                        <h3>Nízke Tatry</h3>
                        <p>Preskúmajte krásnu prírodu a turistické chodníky v okolitých horách.</p>
                    </AttractionItem>
                </AttractionsList>
            </AttractionsContent>
        </AttractionsWrapper>
    );
};

export default Attractions;