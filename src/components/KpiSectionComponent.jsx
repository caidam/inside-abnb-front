// KpiSectionComponent.jsx
import React from 'react';
import './styles/KpiSectionComponent.css';  // Import the specific stylesheet for KpiSectionComponent

const KpiSectionComponent = ({ title, text, graph, kpis }) => (
  <div className="kpi-section">
    <h2 className="kpi-section-title">{title}</h2>
    <div className="kpi-section-content">
      <div className="kpi-section-columns">
        {/* <div className="kpi-section-column kpi-section-text" dangerouslySetInnerHTML={{ __html: text }}></div> */}
        <div className="kpi-section-column kpi-section-text">{text}</div>
        <div className="kpi-section-column">{kpis}</div>
      </div>
      <div className="kpi-section-column">{graph}</div>
    </div>
  </div>
);

export default KpiSectionComponent;