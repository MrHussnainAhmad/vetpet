import React, { useState } from "react";
import recentCasesData from "./Data/Cases.json";
import "./CSS/RecentCases.css";

const RecentCases = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Get first 6 cases (newest first) or all cases based on state
  const displayedCases = isExpanded
    ? recentCasesData
    : recentCasesData.slice(0, 6);

  // Group cases by category
  const groupedCases = displayedCases.reduce((acc, caseItem) => {
    const category = caseItem.category || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(caseItem);
    return acc;
  }, {});

  return (
    <div className="recent-cases">
      <h2>Recent Cases</h2>

      {/* Display grouped cases */}
      {Object.entries(groupedCases).map(([category, cases]) => (
        <div key={category} className="category-section">
          <h3 className="category-title">{category}</h3>
          <div className="cases-list">
            {cases.map((caseItem) => (
              <div key={caseItem.id} className="case-item">
                <img
                  src={caseItem.img}
                  alt={caseItem.petName}
                  className="pet-image"
                />
                <div className="case-details">
                  <h4>{caseItem.petName}</h4>
                  <p><strong>Owner:</strong> {caseItem.ownerName}</p>
                  <p><strong>Condition:</strong> {caseItem.condition}</p>
                  <p><strong>Treatment:</strong> {caseItem.treatment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Show "Explore More" button only if there are more than 6 cases */}
      {recentCasesData.length > 6 && (
        <button
          className="explore-more-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Explore More"}
        </button>
      )}
    </div>
  );
};

export default RecentCases;