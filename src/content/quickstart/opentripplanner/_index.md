---
type: quickstart/single
position: "Resources"
title: "**OpenTripPlanner (OTP)**"
subtitle: "Help your customer to plan their journey effortlessly with integrating the data offered by the Open Data Hub multi-modal transit planner API in your application. The Open Data Hub OpenTripPlanner API combines data from different sources such as public transport, cycling and walking routes, to elaborate the best path."

rows:

  - title: "What is OpenTripPlanner (OTP)?"
    description: >
      OpenTripPlanner (OTP) is an Open Source multi-modal trip planner, focusing on travel by scheduled public transportation in combination with cycling, walking and mobility services including bike sharing and ride hailing. Its server component runs on any platform with a Java virtual machine (including Linux, Mac and Windows). It exposes GraphQL APIs that can be accessed by various clients including Open Source Javascript components and native mobile applications. It builds its representation of the transportation network from Open Data in Open Standard file formats (primarily GTFS and OpenStreetMap). It applies real-time updates and alerts with immediate visibility to clients, finding itineraries that account for disruptions and service changes.
    partial: text.html

  - title: "OTP Benefits"
    description: >
      <ul>
        <li>Fully customisable for use with any frontend</li>
        <li>High-performance trip planning</li>
        <li>Fully multimodal routing, including walking, biking, bikeshare, and demand-responsive services combined in single trip plans</li>
        <li>Support for real-time alerts and trip re-routing based on delays and vehicle positions</li>
        <li>Multi-criteria cost calculation allowing dynamic user inputs (mode, time, transfers, preferences) with balanced results</li>
        <li>A single OTP backend can power rider websites and apps, as well as distinct customer service frontends</li>
        <li>Highly scalable software for large regions</li>
        <li>Interagency fare calculation</li>
        <li>Integrates multiple modes, including bikeshare and demand-response</li>
        <li>Available as a service for agencies to embed in their websites and apps</li>
        <li>Active development driven by dozens of agencies, delivering new features annually</li>
      </ul>
    partial: text.html

  - title: "OpenTripPlanner Use Cases"
    description: >
      <p><strong>Transit agencies</strong></p>
      <p>Transit agencies can use OpenTripPlanner as a backend for their public website/app trip planner or internal trip planner for their customer service team.</p>

      <p><strong>Regions, countries and private entities</strong></p>
      <p>Regional, provincial or national governments, as well as private entities, can set up a trip planner including multiple transit agencies.</p>

      <p><strong>Researchers</strong></p>
      <p>While historically, OpenTripPlanner has been used by researchers for programmatic calculation of large numbers of trip plans, this is no longer the intended use case of OpenTripPlanner. You are welcome to use OpenTripPlanner for any purpose.</p>
    partial: text.html

  - title: "OpenTripPlanner API"
    description: "Access the OpenTripPlanner API to integrate multimodal journey planning into your applications."
    buttons: 
      - btn_label: API Endpoint
        btn_link: https://v2.otp.opendatahub.com/
        target_blank: true
    partial: text-cta.html

  - title: "OpenTripPlanner Documentation"
    description: "The following documentation provides an overview of the available APIs and their usage."
    buttons:
      - btn_label: API Documentation
        btn_link: https://docs.opentripplanner.org/en/latest/apis/Apis/
        target_blank: true
      - btn_label: GTFS GraphQL API Documentation
        btn_link: https://docs.opentripplanner.org/en/latest/apis/GTFS-GraphQL-API/
        target_blank: true
    partial: text-cta.html
    
---