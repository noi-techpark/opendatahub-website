

---
position: "Datasets"

title: "Public Transportation"
img: "/img/datasets/dataset-publictransportation.jpg"

availability: "open"
weight: 1
availability_label: "Open Data"
availability_description: 

doc_link: "http://dev.opentripplanner.org/apidoc/1.0.0/index.html"


datatype: "Mobility"
---

This is the current reference API for the Open Data Hub Public Transportation data. This is productive API used by STA for all its applications.

|             |                                                                                                                                                                                                                                                       |
| :---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Output      | JSON, mime-type application/json                                                                                                                                                                                                                      |
| API version | v2                                                                                                                                                                                                                                                    |
| Endpoint | {{< target-blank-link
                        url="https://mobility.api.opendatahub.com/v2/XML_STOPFINDER_REQUEST"
                        text="https://mobility.api.opendatahub.com/v2/XML_STOPFINDER_REQUEST" >}}<br>This endpoint allows resolving any text input by the user into a list of stops that match that text.<br>{{< target-blank-link
                        url="https://mobility.api.opendatahub.com/v2/XML_DM_REQUEST"
                        text="https://mobility.api.opendatahub.com/v2/XML_DM_REQUEST" >}}<br>This endpoint returns the Departure Monitor, which is the departure and arrival board at a particular stop.<br>{{< target-blank-link
                        url="https://mobility.api.opendatahub.com/v2/XML_STT_REQUEST"
                        text="https://mobility.api.opendatahub.com/v2/XML_STT_REQUEST" >}}<br>This endpoint returns only the planned data, which is what is printed on the signs at stops.<br>{{< target-blank-link
                        url="https://mobility.api.opendatahub.com/v2/XML_ADDINFO_REQUES"
                        text="https://mobility.api.opendatahub.com/v2/XML_ADDINFO_REQUES" >}}<br>This endpoint returns the list of disruptions currently affecting the public transport network.<br>{{< target-blank-link
                        url="https://mobility.api.opendatahub.com/v2/XML_COORD_REQUEST"
                        text="https://mobility.api.opendatahub.com/v2/XML_COORD_REQUEST" >}}<br>This endpoint allows obtaining the coordinates of a specific stop.<br>{{< target-blank-link
                        url="https://mobility.api.opendatahub.com/v2/XML_TRIP_REQUEST2"
                        text="https://mobility.api.opendatahub.com/v2/XML_TRIP_REQUEST2" >}}<br>This is the main endpoint, which enables calculating a route from point A to point B.                                                                                                                                                                                                             |
| Documentation | This specification explains how these calls can be configure: {{< target-blank-link
                        url="https://data.civis.bz.it//dataset/575f7455-6447-4626-a474-0f93ff03067b/resource/c4e66cdf-7749-40ad-bcfd-179f18743d84/download/dokumentationxmlschnittstelleapbv32014-08-28.pdf"
                        text="https://data.civis.bz.it//dataset/575f7455-6447-4626-a474-0f93ff03067b/resource/c4e66cdf-7749-40ad-bcfd-179f18743d84/download/dokumentationxmlschnittstelleapbv32014-08-28.pdf" >}}<br><br>Examples of calls are available here: {{< target-blank-link
                        url="https://github.com/noi-techpark/it.bz.opendatahub.api.mobility-ninja/issues/29"
                        text="https://github.com/noi-techpark/it.bz.opendatahub.api.mobility-ninja/issues/29" >}} |
| Sources     | STA                                                                                                                                                                                            |
| OpenData    | Open Data                                                                                                                                                                                                                                             |
