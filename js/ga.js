/**
 * Balloon site only — separate GA4 property from eventeaserental.com
 * 1. In Google Analytics: Admin → Create property → Data stream (Web) → eventeaseballoondecornj.com
 * 2. Copy the Measurement ID (format G-XXXXXXXXXX)
 * 3. Paste it below (replace the placeholder)
 */
(function () {
  var GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX';

  if (!GA4_MEASUREMENT_ID || GA4_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    return;
  }

  if (!/^G-[A-Z0-9]+$/i.test(GA4_MEASUREMENT_ID)) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA4_MEASUREMENT_ID);

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA4_MEASUREMENT_ID);
  document.head.appendChild(s);
})();
