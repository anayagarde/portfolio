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
import { maxHeight } from '@mui/system';

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
  
const Portfolio = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const achievements = [
    "Cummins Meritorious Student Award - Gold Medalist of Computer Engineering Department",
    "1st Prize in Tech Srujan - State Level Project Competition organized by Cummins College",
    "1st Prize in Veritas BTech Project Competition - organized by Veritas Technologies",
    "1st Prize in ASPIRE 2K22 - National Level Project Competition organized by PES Modern College",
    "Anaya Garde et al., Serverless Data Protection in Cloud, 2023 6th International Conference on Information Systems and Computer Networks (ISCON), Mathura, India, 2023, pp. 1-6, doi: 10.1109/ISCON57294.2023.10112206.",
  ];

  const cocurriculars = [
    "Citi Bridge 2021 Program Training and Project Work – 100 hours of training and project work",
    "Published articles on Medium on Deep Neural networks and Convolutional Neural networks",
    "Attended Goldman Sachs Engineering Workshop and Vodafone 8-Days Hands-on Workshop",
    "Participated in various coding competitions and hackathons"
  ];
  const extracurriculars = [
    "Mentored students under Garnishing Talent Program 2020 by Eaton and Confederation of Indian Industry (CII)",
    "Mentored students with summer projects in Summer of Learning and Loop – Buffer: DSA project series in college",
    "Website Development committee member of Artificial Intelligence & Computer Vision Society (AICVS) of college",
    "Participated and volunteered in college cultural fest – Gandhaar Trashion Event"
  ];

  return (
    <div name="portfolio" className='h-screen w-full bg-gradient-to-b from-slate-300 to-slate-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-600 max-sm:h-full'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-full px-4'>
                <h2 className='pb-4 text-4xl font-bold inline border-b-4 border-zinc-800 dark:border-zinc-50 text-gray-700 dark:text-white'>
                    Portfolio
                </h2>
                <div className='w-full items-center justify-center text-xl text-grey-800 dark:text-slate-300 py-16 min-h-min'>
                <Box sx={{ width: '100%'}}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs centered value={value} onChange={handleChange}>
                        <Tab className='text-grey-800 dark:text-white text-center' label="Achievements" {...a11yProps(0)} />
                        <Tab className='text-grey-800 dark:text-white text-center' label="Co-Curriculars" {...a11yProps(1)} />
                        <Tab className='text-grey-800 dark:text-white text-center' label="Extra-Curriculars" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel className='w-full' value={value} index={0}>
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
                    <CustomTabPanel value={value} index={1}>
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
                    <CustomTabPanel value={value} index={2}>
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
                    </Box>
                    </div>
                </div>
            </div>
  )
}

export default Portfolio