# Project 2: Fine Like Wine
Group 7 - Sandeep Komuravelli, Jason Garner, Carter Cunningham

### Topic and Rationale

Understanding wine can be intimidating. Inputs to winemaking (grape variety, terroir, winery, etc.) and characteristics of the wine vary widely. To better understand the current state of winemaking, we visualize information about wines that have recently been reviewed by professional wine critics. We hope this sampling will provide insight into at least a few basic characteristics of the current winemaking landscape.

Questions Potentially Explored by Site Visitors

•	Where are the most wines are produced?

•	How are variety, country, price, qualitative reviews, and ratings related?

•	How are countries' wine production levels, ratings, and prices related to demographics characteristics?

•	Where is the user’s favorite type of wine most frequently made?

•	How, if at all, does climate affect wine production?

•	Are wines priced evenly across the globe?

### Dataset

We utilized a dataset from [Kaggle.com](https://www.kaggle.com/zynicide/wine-reviews) that includes scrapes from Wine Enthusiast's website. We decided to use this dataset because it contains recent wine review data (2017), a variety of geographic and qualitative descriptive data, such as the winery, country and region of the wines, as well the number of points received by each wine. It is accessible via API and website download.
 
### Visualizations

[Country Level Summary Visualization (Donut Chart)](https://github.com/ksk4uever/Group-Project2/tree/dev/Sandeep/donut): This interactive donut chart allows users to visualize country wine production, along with an additional seven wine and demographic data points specific to the each country by hovering over the country's donut slice or name. 

[Total Wines Produced by Country Visualization](https://github.com/ksk4uever/Group-Project2/tree/dev/Jason): This interactive map color codes wine production levels at the country level, while allowing the user to hover over a country for additional information.

[Winery Locations Visualization](https://github.com/ksk4uever/Group-Project2/tree/dev/Jason/Pages/Mapping): This interactive map places flags on world map for each winery while allowing the user to hover over a flag for additional winery information.

[Wine Varieties Dashboard Visualizations](https://github.com/ksk4uever/Group-Project2/blob/dev/Jason/Pages/app.py): This interactive dashboard provides numerous visualizations of the wine data from a variety of perspectives (price, rating, country, etc.), driven entirely by the user-selected wine variety.

### Software Utilized

•	HTML/ CSS

•	JavaScript (Plotly, Leaflet, etc.)

•	Python

•	Flask

•	Database Tools (SQL Alchemy, SQL/MySQL)

[GitHub Repository Home](https://github.com/ksk4uever/Group-Project2/)
