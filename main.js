var isVisualizationVisible = false; // Variable to track visibility of embedded visualization
var embedLink = "https://public.tableau.com/views/HASSAssignment3/PriceChangeYearly?:showVizHome=no&:embed=true";

function toggleVisualization() {
    var embeddedVisualization = document.getElementById("embeddedVisualization");
    var iframe = embeddedVisualization.querySelector("iframe");

    if (isVisualizationVisible) {
        embeddedVisualization.style.display = "none"; // Hide the embedded visualization
    } else {
        iframe.src = embedLink; // Set the src attribute of the iframe
        embeddedVisualization.style.display = "block"; // Show the embedded visualization
    }

    isVisualizationVisible = !isVisualizationVisible; // Toggle visibility
}

// Function to fetch and embed Tableau visualization
function fetchTableauVisualization() {
  var tableauDiv = document.getElementById('tableauViz');
  tableauDiv.innerHTML = `
    <div class='tableauPlaceholder'>
      <iframe src='https://public.tableau.com/views/HASSAssignment3_1/HDBPriceYr2005-2024?:showVizHome=no&:embed=true' frameborder='0'></iframe>
    </div>
  `;
}

// Function to adjust iframe dimensions
function adjustIframeDimensions() {
  var iframes = document.querySelectorAll('.tableauPlaceholder iframe');
  iframes.forEach(function(iframe) {
    var parentHeight = iframe.parentElement.clientHeight;
    var minHeight = 300; // Set a minimum height for the iframe
    iframe.style.height = Math.max(parentHeight, minHeight) + 'px';
    iframe.style.width = '100%'; // Adjust width as needed
  });
}

// Call the function to fetch and embed Tableau visualization
fetchTableauVisualization();

// Call the function to adjust iframe dimensions
adjustIframeDimensions();

// Call the function to adjust iframe dimensions whenever the window is resized
window.addEventListener('resize', adjustIframeDimensions);

function lightUpButton() {
  var button = document.querySelector(".header-tab");
  button.style.backgroundColor = "#ffff66"; // Change to your desired color
}

function turnOffButton() {
  var button = document.querySelector(".header-tab");
  button.style.backgroundColor = ""; // Reset to default color
}

function openNewPage() {
  var embedLink =
    "https://public.tableau.com/views/HASSAssignment3/PriceChangeYearly?:showVizHome=no&:embed=true";
  var newWindow = window.open("", "_blank");
  var htmlContent = `
          <iframe src="${embedLink}" frameborder="0" style="width: 100%; height: 100vh;"></iframe>
      `;
  newWindow.document.write(htmlContent);
}

document.getElementById("sourceLink").addEventListener("click", function() {
  window.open("https://beta.data.gov.sg/datasets", "_blank");
});

document.getElementById("blowUpButton").addEventListener("mouseover", lightUpButton);
document.getElementById("blowUpButton").addEventListener("mouseout", turnOffButton);
document.getElementById("blowUpButton").addEventListener("click", openNewPage);

document.getElementById("sourceLink").addEventListener("mouseover", function() {
  this.style.textDecoration = "underline"; // Add underline on hover
  this.style.cursor = "pointer"; // Change cursor to pointer on hover
});

document.getElementById("sourceLink").addEventListener("mouseout", function() {
  this.style.textDecoration = "none"; // Remove underline when not hovered
});

document.getElementById("sourceLink").addEventListener("click", function() {
  window.open("https://beta.data.gov.sg/datasets", "_blank");
});
