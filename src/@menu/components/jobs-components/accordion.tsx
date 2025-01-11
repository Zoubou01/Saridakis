// MUI Imports
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

const JobsAccordion = () => {
  return (
    <>
      <Accordion sx={{ backgroundColor: '#242323' }}>
        <AccordionSummary id='panel-header-1' aria-controls='panel-content-1'>
          <Typography>Webhotelier</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography marginBottom={3}>
            - Maintained and enhanced front-end features for a Property Management System, ensuring a smooth and
            intuitive user experience for property owners, tenants, and managers across web and mobile platforms.
          </Typography>
          <Typography marginBottom={3}>
            - Upgraded legacy PHP,Angular projects to Next.js for enhanced performance, improved SEO, and server-side
            rendering, ensuring modern web standards.
          </Typography>
          <Typography marginBottom={3}>
            - Optimized component architecture and code structure in React applications to increase maintainability,
            scalability, and overall efficiency.
          </Typography>
          <Typography marginBottom={3}>
            - Implemented dynamic routing and API integration in Next.js applications, enabling faster load times and
            seamless user experience.
          </Typography>
          <Typography marginBottom={3}>
            - Migrated front-end state management from legacy solutions to more efficient tools like Redux or React
            Context API, improving app performance and development workflow.
          </Typography>
          <Typography marginBottom={3}>
            - Enhanced UI/UX design by refactoring and updating outdated UI components, ensuring responsiveness and
            cross-browser compatibility.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: '#242323' }}>
        <AccordionSummary id='panel-header-2' aria-controls='panel-content-2'>
          <Typography>Loggia Studios</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography marginBottom={3}>
            - Maintained and enhanced the front-end of the iStorm e-commerce platform, implementing new features using
            modern frameworks like React, improving user experience and site performance for Apple product buyers.
          </Typography>
          <Typography marginBottom={3}>
            - Developed and optimized UI/UX components for iStorm, aligning with Apple’s premium brand standards and
            ensuring cross-browser and cross-device compatibility for all customers.
          </Typography>
          <Typography marginBottom={3}>
            - Acted as Account Manager for ACS, overseeing web solutions and providing technical support, ensuring the
            smooth operation of digital tools and services for Greece’s largest transfer company.
          </Typography>
          <Typography marginBottom={3}>
            - Implemented custom features and improvements for iStorm and iSquare, streamlining user interfaces,
            enhancing functionality, and ensuring scalability to meet the high volume of transactions and logistics
            needs.
          </Typography>
          <Typography marginBottom={3}>
            - Developed and updated websites and applications using modern front-end frameworks like React, Angular and
            a little bit of Vue improving responsiveness, cross-browser compatibility, and user engagement.
          </Typography>
          <Typography marginBottom={3}>
            - Collaborated closely with back-end developers to integrate APIs, manage databases, and handle complex data
            flows, ensuring seamless functionality across both web and mobile applications.
          </Typography>
          <Typography marginBottom={3}>
            - Led UI/UX improvements across multiple projects by refactoring and optimizing front-end components,
            improving performance, scalability, and accessibility for diverse user groups.
          </Typography>
          <Typography marginBottom={3}>
            - Managed ongoing support and feature upgrades for web and mobile applications, addressing user feedback and
            ensuring stability, security, and compliance with industry standards.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: '#242323' }}>
        <AccordionSummary id='panel-header-3' aria-controls='panel-content-3'>
          <Typography>8essentially</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography marginBottom={3}>
            - Designed and developed the front-end of a dynamic website and mobile app ensuring a responsive,
            user-friendly interface.
          </Typography>
          <Typography marginBottom={3}>
            - Implemented intuitive UI/UX features that optimized user interaction, improving accessibility, navigation,
            and overall engagement on both platforms.
          </Typography>
          <Typography marginBottom={3}>
            - Maintained and updated both the website and app, incorporating user feedback and implementing new features
            to improve performance, security, and functionality.
          </Typography>
          <Typography marginBottom={3}>
            - Led performance optimizations by refactoring front-end code, reducing load times, and ensuring
            cross-browser and cross-platform compatibility for smooth user experiences.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: '#242323' }}>
        <AccordionSummary id='panel-header-4' aria-controls='panel-content-4'>
          <Typography>Conveos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography marginBottom={3}>
            - Created fully responsive UI elements using React and React Native, ensuring a smooth, consistent user
            experience across desktop and mobile devices.
          </Typography>
          <Typography marginBottom={3}>
            - Worked closely with the back-end team to establish secure authentication protocols, multi-factor
            verification, and adherence to legal compliance requirements, safeguarding sensitive data and processes.
          </Typography>
          <Typography marginBottom={3}>
            - Conducted performance testing and front-end optimizations, ensuring quick load times, smooth performance,
            and compatibility across various browsers for busy legal professionals.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default JobsAccordion
