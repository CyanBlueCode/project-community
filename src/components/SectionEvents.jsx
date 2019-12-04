import React from 'react';
import PropTypes from 'prop-types';
import Event from './Event';

const SectionEvents = ({ events }) => (
  <section className="section padding-bottom-50" id="events">
    <div className="section-heading">
      <div className="container">
        <div className="section-subtitle">UPCOMING</div>
        <h2 className="section-title">Events at Umma Charities</h2>
      </div>
    </div>
    <div className="container">
      <div className="fly-events flex-container">
        <Event events={events} />
      </div>
    </div>
  </section>
);

SectionEvents.propTypes = {
  events: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default SectionEvents;
