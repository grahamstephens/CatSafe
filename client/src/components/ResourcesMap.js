import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ResourcesMap = () => {
  const [zoom, setZoom] = useState(14);
  const [activeResource, setActiveResource] = useState(null);

  const resources = [
    {
      name: 'University of Kentucky Counseling Center',
      address: '106 Frazee Hall',
      coordinates: [38.0406787, -84.5034344],
      phone: '(859) 257-8701',
      website: 'https://www.uky.edu/counselingcenter/',
      hours: 'Monday-Friday 8am-5pm',
      description:
        'The UK Counseling Center provides confidential counseling and therapy services to all UK students, including individual, group, and couples therapy.',
    },
    {
      name: 'Bluegrass.org',
      address: '1351 Newtown Pike',
      coordinates: [38.076714, -84.504237],
      phone: '(859) 253-1686',
      website: 'https://www.bluegrass.org/',
      hours: 'Monday-Friday 8am-5pm',
      description:
        'Bluegrass.org offers a wide range of mental health services, including crisis intervention, outpatient therapy, and medication management.',
    },
    {
      name: 'UK HealthCare Samaritan Hospital',
      address: '310 South Limestone',
      coordinates: [38.040475, -84.508961],
      phone: '(859) 323-5000',
      website: 'https://ukhealthcare.uky.edu/samaritan-hospital',
      hours: 'Open 24 hours',
      description:
        'UK HealthCare Samaritan Hospital provides emergency and urgent care services to patients of all ages.',
    },
    {
      name: 'Big Blue Pantry',
      address: '434 Columbia Avenue',
      coordinates: [38.031914, -84.505046],
      phone: '',
      website: 'https://www.ukcco.org/bigbluepantry',
      hours: 'Monday-Thursday 1pm-6pm, Friday 1pm-5pm',
      description:
        'The Big Blue Pantry provides free food, hygiene items, and school supplies to UK students in need.',
    },
  ];

  const handleMarkerClick = (resource) => {
    setActiveResource(resource);
  };

  return (
    <MapContainer
      center={[38.0406787, -84.5034344]}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {resources.map((resource) => (
        <Marker
          key={resource.name}
          position={resource.coordinates}
          onClick={() => handleMarkerClick(resource)}
        >
          <Popup>{resource.name}</Popup>
        </Marker>
      ))}
      {activeResource && (
        <div className='absolute top-0 right-0 bg-white p-4 shadow-md rounded-lg'>
          <h2 className='text-lg font-semibold'>{activeResource.name}</h2>
          <p className='text-gray-600'>{activeResource.address}</p>
          <p className='text-gray-600'>{activeResource.phone}</p>
          <p className='text-gray-600'>{activeResource.website}</p>
          <p className='text-gray-600'>{activeResource.hours}</p>
          <p className='mt-4'>{activeResource.description}</p>
        </div>
      )}
    </MapContainer>
  );
};

export default ResourcesMap;
