import React from 'react';
import VLayout from '../components/Layout/VLayout';
import ResourcesMap from '../components/ResourcesMap';
import ResourcesList from '../components/ResourcesList';

const ResourcesPage = () => {
  return (
    <VLayout>
      <div className='flex flex-col h-screen'>
        <div className='flex-1'>
          <ResourcesList />
          <ResourcesMap />
        </div>
      </div>
    </VLayout>
  );
};

export default ResourcesPage;
