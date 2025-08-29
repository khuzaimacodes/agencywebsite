import React from "react";

export default function Map() {
  return (
    <div className="map-section wow fadeInUp py-40" data-wow-delay=".6s">
      <div className="map-items">
        <div className="googpemap">
          <iframe
            src="https://maps.google.com/maps?q=124+City+Road,+London,+United+Kingdom,+EC1V+2NX&t=&z=15&ie=UTF8&iwloc=&output=embed"
            style={{ border: 0, height: '600px', width: '100%' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="124 City Road, London, United Kingdom, EC1V 2NX"
          />
        </div>
      </div>
    </div>
  );
}
