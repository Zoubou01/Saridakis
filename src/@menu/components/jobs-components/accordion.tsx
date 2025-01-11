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
          <Typography>Digital Marketing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography marginBottom={3}>
            - Developed and executed data-driven digital marketing campaigns across multiple channels (SEO, SEM, social media, email marketing, and content marketing) to drive brand awareness and customer acquisition.
          </Typography>
          <Typography marginBottom={3}>
            - Managed social media platforms, creating engaging content and analyzing performance metrics to increase audience engagement and brand visibility.
            Conducted keyword research and optimized website content to improve organic search rankings and drive targeted traffic to the site.
          </Typography>
          <Typography marginBottom={3}>
            - Utilized Google Analytics and other tools to track, analyze, and report on campaign performance, providing insights to optimize future marketing strategies.
          </Typography>
          <Typography marginBottom={3}>
            - Led email marketing campaigns, from content creation and design to segmentation, automation, and performance analysis, achieving high open and conversion rates.
          </Typography>
          <Typography marginBottom={3}>
            - Developed and maintained PPC (Pay-Per-Click) advertising campaigns, ensuring effective budget management and achieving optimal ROI.
          </Typography>
          <Typography marginBottom={3}>
            - Collaborated with design and content teams to create visually appealing and conversion-focused landing pages and digital assets.
          </Typography>
          <Typography marginBottom={3}>
            - Implemented A/B testing strategies across various channels (emails, ads, landing pages) to optimize conversion rates and overall campaign performance.
          </Typography>
          <Typography marginBottom={3}>
            - Conducted competitive analysis to identify industry trends, monitor competitors' digital marketing strategies, and develop recommendations for improvement.
          </Typography>
          <Typography marginBottom={3}>
            - Managed influencer marketing partnerships, identifying relevant influencers, negotiating terms, and measuring campaign success.
          </Typography>
          <Typography marginBottom={3}>
            - Developed and executed SEO strategies, increasing organic search traffic by optimizing on-page content and building high-quality backlinks.
          </Typography>
          <Typography marginBottom={3}>
            - Managed paid social campaigns on platforms like Facebook, Instagram, LinkedIn, and Twitter, driving targeted traffic and lead generation.
          </Typography>
          <Typography marginBottom={3}>
            - Assisted in the creation of content calendars, ensuring consistent brand messaging across all digital channels.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: '#242323' }}>
        <AccordionSummary id='panel-header-3' aria-controls='panel-content-3'>
          <Typography>HR Assistant</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography marginBottom={3}>
            - Managed end-to-end recruitment processes, from job posting and screening to interviewing and onboarding new employees.
          </Typography>
          <Typography marginBottom={3}>
            - Developed and implemented HR policies and procedures to ensure compliance with labor laws and company standards.
          </Typography>
          <Typography marginBottom={3}>
            - Conducted employee performance evaluations, providing actionable feedback and development plans to enhance productivity and job satisfaction.
          </Typography>
          <Typography marginBottom={3}>
            - Facilitated employee training and development programs to improve skills, foster professional growth, and promote a positive workplace culture.
          </Typography>
          <Typography marginBottom={3}>
            - Advised management on employee relations matters, conflict resolution, and organizational changes to ensure a harmonious work environment.
          </Typography> <Typography marginBottom={3}>
            - Analyzed HR data and metrics to assess employee retention, engagement, and turnover rates, implementing strategies to address areas of concern.
          </Typography> <Typography marginBottom={3}>
            - Assisted in the administration of benefits programs, including health insurance, retirement plans, and paid time off, ensuring employees’ needs are met.
          </Typography> <Typography marginBottom={3}>
            - Worked closely with leadership teams to align HR strategies with overall business objectives and promote employee engagement.
          </Typography> <Typography marginBottom={3}>
            - Managed compensation and payroll processing, ensuring accurate and timely distribution of salaries and bonuses.
          </Typography> <Typography marginBottom={3}>
            - Supported organizational development efforts, including succession planning, talent management, and career progression initiatives.
          </Typography> <Typography marginBottom={3}>
            - Administered employee wellness programs and initiatives to support physical, mental, and emotional well-being in the workplace.
          </Typography> <Typography marginBottom={3}>
            - Ensured compliance with all federal and state labor laws, handling audits, filings, and reporting for HR-related matters.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </>
  )
}

export default JobsAccordion
