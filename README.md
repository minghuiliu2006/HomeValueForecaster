# Home Value Forecaster
*Harvard Extension School - EXT CSCI E-106 Model Data Class Group Project*

## Project Team
- Author One
- Author Two
- Author Three
- Author Four
- Author Five
- Author Six
- *Date: 09 November 2023*

## Abstract
[Provide a concise summary of the project in two paragraphs.]

## Contents
1. [Introduction](#introduction)
2. [Data Description](#data-description)
3. [Model Development Process](#model-development-process)
4. [Model Performance Testing](#model-performance-testing)
5. [Challenger Models](#challenger-models)
6. [Model Limitation and Assumptions](#model-limitation-and-assumptions)
7. [Ongoing Model Monitoring Plan](#ongoing-model-monitoring-plan)
8. [Conclusion](#conclusion)
9. [Bibliography](#bibliography)
10. [Appendix](#appendix)

---

## Introduction
[Outline the problem, purpose, and scope of statistical testing applied in the project.]
[Back to Top](#your-project-name)

## Data Description
- **Dataset**: House Sales in King County, USA
| Variable       | Description                                                                                   |
|----------------|-----------------------------------------------------------------------------------------------|
| `id`           | **Unique ID for each home sold (it is not a predictor)**                                      |
| `date`         | *Date of the home sale*                                                                       |
| `price`        | *Price of each home sold*                                                                     |
| `bedrooms`     | *Number of bedrooms*                                                                          |
| `bathrooms`    | *Number of bathrooms, where ".5" accounts for a bathroom with a toilet but no shower*         |
| `sqft_living`  | *Square footage of the apartment interior living space*                                       |
| `sqft_lot`     | *Square footage of the land space*                                                            |
| `floors`       | *Number of floors*                                                                            |
| `waterfront`   | *A dummy variable for whether the apartment was overlooking the waterfront or not*            |
| `view`         | *An index from 0 to 4 of how good the view of the property was*                               |
| `condition`    | *An index from 1 to 5 on the condition of the apartment,*                                     |
| `grade`        | *An index from 1 to 13, where 1-3 falls short of building construction and design, 7 has an average level of construction and design, and 11-13 has a high-quality level of construction and design.* |
| `sqft_above`   | *The square footage of the interior housing space that is above ground level*                 |
| `sqft_basement`| *The square footage of the interior housing space that is below ground level*                 |
| `yr_built`     | *The year the house was initially built*                                                      |
| `yr_renovated` | *The year of the house’s last renovation*                                                     |
| `zipcode`      | *What zipcode area the house is in*                                                           |
| `lat`          | *Latitude*                                                                                    |
| `long`         | *Longitude*                                                                                   |
| `sqft_living15`| *The square footage of interior housing living space for the nearest 15 neighbors*            |
| `sqft_lot15`   | *The square footage of the land lots of the nearest 15 neighbors*                             |

[Back to Top](#your-project-name)

## Model Development Process
- Data Segregation: 70% training, 30% testing (set.seed 1023)
- Data Cleaning and Preparation
- Regression Model Development
- [Detail the process with relevant methodologies and justifications.]
[Back to Top](#your-project-name)

## Model Performance Testing
- Model Assessment on Test Data
- Comparative Analysis of Top Linear Models
- Model Assumptions and Remedial Measures
- [Discuss the methods and results of model performance testing.]
[Back to Top](#your-project-name)

## Challenger Models
- Development of Alternative Models (Regression Tree, NN, SVM, etc.)
- Model Assumptions and Testing
- [Describe the process and rationale for choosing the best-fit model.]
[Back to Top](#your-project-name)

## Model Limitation and Assumptions
- Discussion on Champion and Benchmark Models
- Model Validation and Performance Metrics
- [Highlight any limitations or assumptions relevant to the models.]
[Back to Top](#your-project-name)

## Ongoing Model Monitoring Plan
- Monitoring Strategies and Quantitative Thresholds
- Assumptions for Continuous Model Usage
- [Outline the plan for regular model evaluation and updates.]
[Back to Top](#your-project-name)

## Conclusion
- Summary of Findings
- Justification for the Best Model Choice
- [Conclude with insights and implications of the project.]
[Back to Top](#your-project-name)

## Bibliography
[Include references, articles, and papers relevant to the project.]
[Back to Top](#your-project-name)

## Appendix
[Add supplementary graphs, plots, and data analysis.]
[Back to Top](#your-project-name)

---

### Notes
- Language: English
- Submit: RMD Markdown File, PDF, and/or Word Document
