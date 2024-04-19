import React from 'react';
import { useParams } from 'react-router-dom';

function SectionPage() {
  const { section } = useParams();

  return (
    <div>
      <h1>{section}</h1>

    </div>
  );
}

export default SectionPage;