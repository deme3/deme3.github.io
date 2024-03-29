---
layout: post
title: "NEST Academy"
summary: "Proprietary platform for students to create a study plan and have a personal agenda in the NEST Academy programme. Express.js and vanilla front-end stack."
article_image: "/assets/img/nestacademy-header2.png"
---

<p>Proprietary platform for students to create a study plan and have a personal agenda in the NEST Academy programme.</p>
<p>Back-end written in Express.js + <a class="small external medium-link" href="https://ejs.co">EJS</a> + MySQL, front-end vanilla HTML / CSS / JavaScript.</p>
<p>Currently being rewritten using <a class="small external medium-link" href="https://preactjs.com">Preact.js</a>.</p>

<!--more-->

<h3>About the project</h3>
<p><strong>NEST Academy</strong> is an excellence program inside the college of <strong>NEST Trento</strong> aimed towards enriching the University experience with extracurricular courses that range from <strong>soft skills training</strong> to <strong>language courses</strong>, starting September.</p>
<p>A proposal of the project was made in <strong>August</strong>, setting the first phase deadline in <strong>September</strong>. Considering the strict deadline, we needed to focus on the minimum set of necessary functionalities for the students to make use of the platform and the staff to benefit of it, but also to have a sort-of <strong>open beta</strong> stage to gather more info on what students and coaches alike need to have an easier life.</p>

<h3>Software design</h3>
<p>In order to make a good product, both in terms of user-friendliness and developer-friendliness, one has to first make <strong>a lot</strong> of design choices. Starting from database, I chose to use one of the most popular DBMSs in the industry: <strong>MySQL</strong> (according to the latest statistics, it's second only to Oracle, and has maintained a steady popularity across the years).</p>
<p>Keep in mind, it's not just a matter of trends: it's about <strong>maintainability</strong>. This kind of decision about maintainability can be made for every external tool or library used in a project: <strong>Express.js</strong> and <strong>EJS</strong> are two other examples.</p>
<p>One thing is missing from this maintainability list: the front-end stack. I initially chose to not make use of any framework available in the industry, put simply because I despise the <strong>performance trade-offs</strong> they ship with: this kind of software should focus on user-friendliness <strong>first</strong>, and developer-friendliness <strong>last</strong>.</p>
<p>However, one relatively new player has entered the scene: <strong>Preact.js</strong>. It's a React-like framework that is way faster than React itself, and poses little performance overhead to the user. This will allow faster development thanks to component re-usability and modularity in general, while still keeping an acceptable performance even for less capable machines. Plus, it's still <strong>JSX</strong>, which is now more and more widespread. <strong>Svelte</strong> might be a worthy opponent (being it even lighter than Preact.js), but it doesn't come with JSX out-of-the-box, for good reasons.</p>

<h3>UI Design</h3>
<p><strong>Disclaimer:</strong> I'm <strong>not qualified</strong> (yet) to give <strong>full-fledged UI analysis</strong>. But I will explain a little about the design choices I've made.</p>
<p>We needed something welcoming, NEST Academy is a <strong>relatively new</strong> concept in the NEST community, and NEST itself is still a fast-growing reality, hence, a desirable property for the website is for the average freshman to be <strong>greeted</strong> with all the information they need to fill out their study plan, at a glance. In addition, it must be a <strong>familiar</strong>, <strong>streamlined</strong> process for the student to complete, as it's only the first step in the Academy journey.</p>
<figure>
  <img src="/assets/img/nestacademy-coaching-screenshot.png" />
  <figcaption>Choosing activities for the study plan</figcaption>
  <img-enlarge></img-enlarge>
</figure>
<p>As you can see, the page is somewhat structured like a classic &ldquo;installation wizard&rdquo;, but instead of accepting ToS and installing toolbars, the student is presented with all the activities they can participate in, with all the relevant information: <strong>date</strong>, <strong>time</strong> and <strong>awarded credits</strong> (expressed in hours). By checking each activity, the progress bar will move, indicating when the student has fulfilled their minimum study requirements to obtain the title.</p>
<figure>
  <img src="/assets/img/nestacademy-calendar-screenshot.png" />
  <figcaption>A student's personal calendar</figcaption>
  <img-enlarge></img-enlarge>
</figure>
<p>Once a student has completed their study plan, they can access a <strong>summary</strong> of the chosen activities and a <strong>personal calendar</strong> with all the upcoming activities (as seen in the above screenshot).</p>
<p>After collecting all the data from students and coaches, the second development phase may begin. There will likely be separate control panels for <strong>administrators</strong>, <strong>coaches</strong> and <strong>technical support staff</strong>.</p>
