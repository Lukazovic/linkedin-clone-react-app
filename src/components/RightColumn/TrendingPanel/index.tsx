import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const TrendingPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Assuntos mais discutidos</span>

        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Codeminer42 vagas abertas</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Codeminer42 vagas abertas</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Codeminer42 vagas abertas</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Codeminer42 vagas abertas</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Codeminer42 vagas abertas</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Codeminer42 vagas abertas</span>
              <span className="subtext">há 1 d • 316 leitores</span>
            </span>
          </li>
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;
