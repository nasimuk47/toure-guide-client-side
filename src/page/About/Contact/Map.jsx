/* eslint-disable no-unused-vars */
import React from "react";

const Map = () => {
    return (
        <div className="map-container mt-9">
            <iframe
                title="Location Map"
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3083.2872763315437!2d-122.41941568477145!3d37.774929879758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e7c6de91525%3A0x40b82c3688c9460!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1638477160075!5m2!1sen!2sus"
                allowFullScreen></iframe>
        </div>
    );
};

export default Map;
