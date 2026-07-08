---
type: quickstart/single
position: "Resources"
title: "**OpenTripPlanner (OTP)**"
subtitle: "Multimodal trip planning platform"

rows:

  - title: "What is OpenTripPlanner (OTP)?"
    description: >
      OpenTripPlanner (OTP) is an open source multi-modal trip planner, focusing on travel by scheduled public transportation in combination with bicycling, walking, and mobility services including bike share and ride hailing. Its server component runs on any platform with a Java virtual machine (including Linux, Mac, and Windows). It exposes GraphQL APIs that can be accessed by various clients including open source Javascript components and native mobile applications. It builds its representation of the transportation network from open data in open standard file formats (primarily GTFS and OpenStreetMap). It applies real-time updates and alerts with immediate visibility to clients, finding itineraries that account for disruptions and service changes.
    partial: text.html

  - title: "OTP Use Cases"
    description: >
      <strong>Transit agencies</strong><br>
      Transit agencies can use OTP as a backend for their public website/app trip planner, or internal trip planner for their customer service team.​<br><br>

      <strong>Regions, countries and private entities</strong><br>
      Regional, provincial or national governments, as well as private entity, can set up a trip planner including multiple transit agencies.​<br><br>

      <strong>Researchers</strong><br>
      While historically, OpenTripPlanner has been used by researchers for programmatic calculation of large numbers of trip plans, this is no longer intended use case of OTP. You are welcome to use OTP for any purpose.​
    partial: text.html

  - title: "OTP Benefits"
    description: >
      • Fully customizable for use with any frontend<br>
      • High-performance trip planning<br>
      • ​Fully multimodal routing, including walking, biking, bikeshare, demand-responsive service combined trip plans rather than presented in alternative trip plans<br>
      • Support for real-time alerts, trip re-routing based on real-time delays and vehicle positions<br>
      • Multi-criteria cost calculation allows for dynamic user inputs and requests including mode, time, transfers, and other preferences while delivering balanced results<br>
      • One OTP backend can power both a website and app for use by riders, along with a separate frontend with a different configuration for use by a customer service team<br>
      • ​Highly scalable software for large regions<br>
      • Interagency fare calculation<br>
      • Integrates multiple modes including bikeshare and demand-response<br>
      • Can be provided as a service to agencies for use in their websites and apps<br>
      • Active development by dozens of agencies means new features every year
    partial: text.html

  - title: "OpenTripPlanner API"
    description: >
      Access the OpenTripPlanner API to integrate multimodal journey planning into your applications.<br><br>

      <strong>API Endpoint</strong><br>
      https://v2.otp.opendatahub.com/<br><br>

      <strong>Note:</strong><br>
      The API endpoint will be updated to <strong>https://otp.opendatahub.com/</strong> once the current V1 service has been shut down.
    partial: text.html

  - title: "OpenTripPlanner Documentation"
    description: >
      The following documentation provides an overview of the available APIs and their usage.<br><br>

      <strong>API Overview</strong><br>
      https://docs.opentripplanner.org/en/latest/apis/Apis/<br><br>

      <strong>GTFS GraphQL API</strong><br>
      https://docs.opentripplanner.org/en/latest/apis/GTFS-GraphQL-API/
    partial: text.html
---