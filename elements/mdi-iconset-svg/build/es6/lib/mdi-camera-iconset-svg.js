var $_documentContainer = document.createElement("div");
$_documentContainer.setAttribute("style", "display: none;");
$_documentContainer.innerHTML = `<iron-iconset-svg name="mdi-camera" size="24">
  <svg>

    <g id="camera-timer">
      <path d="M4.94,6.35C4.55,5.96 4.55,5.32 4.94,4.93C5.33,4.54 5.96,4.54 6.35,4.93L13.07,10.31L13.42,10.59C14.2,11.37 14.2,12.64 13.42,13.42C12.64,14.2 11.37,14.2 10.59,13.42L10.31,13.07L4.94,6.35M12,20A8,8 0 0,0 20,12C20,9.79 19.1,7.79 17.66,6.34L19.07,4.93C20.88,6.74 22,9.24 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12H4A8,8 0 0,0 12,20M12,1A2,2 0 0,1 14,3A2,2 0 0,1 12,5A2,2 0 0,1 10,3A2,2 0 0,1 12,1Z"></path>
    </g>

    <g id="cloud">
      <path d="M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z"></path>
    </g>

    <g id="contrast-box">
      <path d="M17,15.5H12V17H17M19,19H5L19,5M5.5,7.5H7.5V5.5H9V7.5H11V9H9V11H7.5V9H5.5M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"></path>
    </g>

    <g id="contrast-circle">
      <path d="M12,20C9.79,20 7.79,19.1 6.34,17.66L17.66,6.34C19.1,7.79 20,9.79 20,12A8,8 0 0,1 12,20M6,8H8V6H9.5V8H11.5V9.5H9.5V11.5H8V9.5H6M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,16H17V14.5H12V16Z"></path>
    </g>

    <g id="flash">
      <path d="M7,2V13H10V22L17,10H13L17,2H7Z"></path>
    </g>

    <g id="flash-auto">
      <path d="M16.85,7.65L18,4L19.15,7.65M19,2H17L13.8,11H15.7L16.4,9H19.6L20.3,11H22.2M3,2V14H6V23L13,11H9L13,2H3Z"></path>
    </g>

    <g id="flash-off">
      <path d="M17,10H13L17,2H7V4.18L15.46,12.64M3.27,3L2,4.27L7,9.27V13H10V22L13.58,15.86L17.73,20L19,18.73L3.27,3Z"></path>
    </g>

    <g id="tag-faces">
      <path d="M15,18C11.68,18 9,15.31 9,12C9,8.68 11.68,6 15,6A6,6 0 0,1 21,12A6,6 0 0,1 15,18M4,13A1,1 0 0,1 3,12A1,1 0 0,1 4,11A1,1 0 0,1 5,12A1,1 0 0,1 4,13M22,3H7.63C6.97,3 6.38,3.32 6,3.81L0,12L6,20.18C6.38,20.68 6.97,21 7.63,21H22A2,2 0 0,0 24,19V5C24,3.89 23.1,3 22,3M13,11A1,1 0 0,0 14,10A1,1 0 0,0 13,9A1,1 0 0,0 12,10A1,1 0 0,0 13,11M15,16C16.86,16 18.35,14.72 18.8,13H11.2C11.65,14.72 13.14,16 15,16M17,11A1,1 0 0,0 18,10A1,1 0 0,0 17,9A1,1 0 0,0 16,10A1,1 0 0,0 17,11Z"></path>
    </g>

    <g id="timelapse">
      <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.24,7.76C15.07,6.58 13.53,6 12,6V12L7.76,16.24C10.1,18.58 13.9,18.58 16.24,16.24C18.59,13.9 18.59,10.1 16.24,7.76Z"></path>
    </g>

    <g id="white-balance-auto">
      <path d="M10.3,16L9.6,14H6.4L5.7,16H3.8L7,7H9L12.2,16M22,7L20.8,13.29L19.3,7H17.7L16.21,13.29L15,7H14.24C12.77,5.17 10.5,4 8,4A8,8 0 0,0 0,12A8,8 0 0,0 8,20C11.13,20 13.84,18.19 15.15,15.57L15.25,16H17L18.5,9.9L20,16H21.75L23.8,7M6.85,12.65H9.15L8,9L6.85,12.65Z"></path>
    </g>

    <g id="white-balance-incandescent">
      <path d="M17.24,18.15L19.04,19.95L20.45,18.53L18.66,16.74M20,12.5H23V10.5H20M15,6.31V1.5H9V6.31C7.21,7.35 6,9.28 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,9.28 16.79,7.35 15,6.31M4,10.5H1V12.5H4M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M3.55,18.53L4.96,19.95L6.76,18.15L5.34,16.74L3.55,18.53Z"></path>
    </g>

    <g id="white-balance-iridescent">
      <path d="M4.96,19.95L6.76,18.15L5.34,16.74L3.55,18.53M3.55,4.46L5.34,6.26L6.76,4.84L4.96,3.05M20.45,18.53L18.66,16.74L17.24,18.15L19.04,19.95M13,22.45V19.5H11V22.45C11.32,22.45 13,22.45 13,22.45M19.04,3.05L17.24,4.84L18.66,6.26L20.45,4.46M11,3.5H13V0.55H11M5,14.5H19V8.5H5V14.5Z"></path>
    </g>

    <g id="white-balance-sunny">
      <path d="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z"></path>
    </g>

  </svg>
</iron-iconset-svg>`;
document.head.appendChild($_documentContainer);
