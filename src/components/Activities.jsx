import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { FaJava, FaReact, FaHtml5, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiPython, SiSpring, SiMysql, SiOracle, SiMongodb, SiGraphql, SiFlutter, SiTypescript, SiCplusplus, SiHibernate, SiPostman, SiApachemaven, SiGradle, SiJunit5, SiApachetomcat, SiLiquibase } from 'react-icons/si';
import { BiLogoGoogleCloud } from 'react-icons/bi';
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
const Activities = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const achievements = [
    "Rising Star Award - Deutsche Bank",
    "Cummins Meritorious Student Award - Gold Medalist of Computer Engineering Department",
    "1st Prize in Tech Srujan - State Level Project Competition organized by Cummins College",
    "1st Prize in Veritas BTech Project Competition - organized by Veritas Technologies",
    "1st Prize in ASPIRE 2K22 - National Level Project Competition organized by PES Modern College",
    "Published paper on 'Serverless Data Protection in Cloud' in International Conference on Information Systems and Computer Networks (ISCON) 2023 IEEE Conference",
  ];

  const cocurriculars = [
    "Citi Bridge 2021 Program Training and Project Work – 100 hours of training and project work",
    "Published articles on Medium on Deep Neural networks and Convolutional Neural networks",
    "Attended Goldman Sachs Engineering Workshop and Vodafone eight days hands-on Workshop",
    "Participated in various coding competitions and hackathons",
    "Completed Deep Learning Specialization from DeepLearning.ai",
  ];
  const extracurriculars = [
    "Mentored students under Garnishing Talent Program 2020 by Eaton and Confederation of Indian Industry (CII)",
    "Mentored students with summer projects in Summer of Learning and Loop – Buffer: DSA project series in college",
    "Website Development committee member of Artificial Intelligence & Computer Vision Society (AICVS) of college",
    "Participated and volunteered in college cultural fest – Gandhaar Trashion Event",
    "Volunteered for Bhumi's Women Empowerment Campaign and Team Everest's game designing event"
  ];

  return (
    <div name="activities" className='h-screen w-full bg-gradient-to-b from-slate-300 to-slate-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-600 max-sm:h-full'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-full px-4'>
                <h2 className='pb-4 pt-12 text-4xl font-bold inline border-b-4 border-zinc-800 dark:border-zinc-50 text-gray-700 dark:text-white'>
                    Activities
                </h2>
                <div className='w-full flex items-center justify-center text-xl text-grey-800 dark:text-white pt-16'>
                    <Box sx={{width: '100%'}}>
                    <Box sx={{ borderColor: 'divider', display: 'flex'}}>
                        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
                        <Tab className='text-grey-800 dark:text-white text-center m-auto text-ellipsis' label="Achievements" {...a11yProps(0)} />
                        <Tab className='text-grey-800 dark:text-white text-center m-auto overflow-wrap: normal' label="Co-Curriculars" {...a11yProps(1)} />
                        <Tab className='text-grey-800 dark:text-white text-center m-auto' label="Extra-Curriculars" {...a11yProps(2)} />
                        <Tab className='text-grey-800 dark:text-white text-center m-auto' label="Skills" {...a11yProps(3)} />
                        </Tabs>
                        </Box>
                    <CustomTabPanel className='w-full max-h-fit' value={value} index={0}>
                        {achievements.map((a) => 
                        <List sx={{ width: '100%'}}>
                            <ListItem>
                                    <ListItemAvatar>
                                        <MdOutlineDoubleArrow />
                                    </ListItemAvatar>
                                    <ListItemText primary={a} />
                                </ListItem>
                        </List>)}
                    </CustomTabPanel>
                    <CustomTabPanel className='w-full max-h-fit' value={value} index={1}>
                    {cocurriculars.map((a) => 
                        <List sx={{ width: '100%'}}>
                            <ListItem>
                                    <ListItemAvatar>
                                        <MdOutlineDoubleArrow />
                                     </ListItemAvatar>
                                    <ListItemText primary={a} />
                                </ListItem>
                        </List>)}
                    </CustomTabPanel>
                    <CustomTabPanel className='w-full max-h-fit' value={value} index={2}>
                    {extracurriculars.map((a) => 
                        <List sx={{ width: '100%'}}>
                            <ListItem>
                                    <ListItemAvatar>
                                        <MdOutlineDoubleArrow />
                                    </ListItemAvatar>
                                    <ListItemText primary={a} />
                                </ListItem>
                        </List>)}
                    </CustomTabPanel>
                    <CustomTabPanel className='w-full max-w-full' value={value} index={3}>
                    <div className='grid grid-cols-5 lg:grid-cols-12 md:gap-12 px-4 py-4 sm:px-0 pt-6 w-full h-full justify-center'>
                      <Tooltip title="Java"><Avatar alt="Java" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><FaJava color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="JavaScript"><Avatar alt="JavaScript" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><SiJavascript color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="Python"><Avatar alt="Python" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><SiPython color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="HTML5"><Avatar alt="HTML" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><FaHtml5 color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="C++"><Avatar alt="C++" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><SiCplusplus color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="Hibernate"><Avatar alt="Hibernate" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><SiHibernate color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="Liquibase"><Avatar alt="Liquibase" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><SiLiquibase color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="React"><Avatar alt="React" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><FaReact color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="Spring Boot"><Avatar alt="Spring" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><SiSpring color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="MySQL"><Avatar alt="MySQL" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><SiMysql color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="Oracle"><Avatar alt="Oracle" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><SiOracle color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="MongoDB"><Avatar alt="MongoDB" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><SiMongodb color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="GraphQL"><Avatar alt="GraphQL" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><SiGraphql color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="Git"><Avatar alt="Git" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><FaGitAlt color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="Postman"><Avatar alt="Postman" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><SiPostman color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="Maven"><Avatar alt="Apachemaven" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><SiApachemaven color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="Gradle"><Avatar alt="Gradle" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><SiGradle color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="JUnit5"><Avatar alt="JUnit" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><SiJunit5 color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="TypeScript"><Avatar alt="TS" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><SiTypescript color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="Amazon Web Services"><Avatar alt="AWS" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><FaAws color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="Docker"><Avatar alt="Docker" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><FaDocker color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="Google Cloud Platform"><Avatar alt="GCP" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><BiLogoGoogleCloud color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="Flutter"><Avatar alt="Flutter" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><SiFlutter color='white' size={40}/></Avatar></Tooltip>
                      <Tooltip title="Apache Tomcat"><Avatar alt="Tomcat" sx={{ width: 62, height: 62, bgcolor: 'slategrey' }} variant="rounded"><SiApachetomcat color='white' size={40}/></Avatar></Tooltip>
                    </div>
                    </CustomTabPanel>
                    </Box>
                    </div>
                </div>
            </div>
  )
}

export default Activities