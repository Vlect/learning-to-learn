import { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import Button from '@mui/material/Button';
import './App.css'

interface Task {
    title: string,
    items: string[],
}

interface Phase {
    title: string,
    tasks: Task[],
}

interface Program {
    title: string,
    phases: Phase[],
}[]

// The Program type should be generated by the user
// The user should be able to work with the structure of created type
// By now, the Program type is hardcoded

function App() {
    const programOverview: Program[] = [
        {
            title: "Supplementary Learning",
            phases: [
                {
                    title: "30-day Challenges",
                    tasks: [],
                },
                {
                    title: "Behaviour Change and Growth",
                    tasks: [],
                },
                {
                    title: "Higher ground decision-making",
                    tasks: [],
                },
            ],
        },
        {
            title: "High-Yield Phase",
            phases: [
                {
                    title: "Rapid Start",
                    tasks: [
                        {
                            title: "Fix urgency trapping",
                            items: [
                                "Identify tasks that are urgent but not important",
                                "Identify tasks that are important but not urgent -- Remember that a task is important if the consequence of failure is unacceptable and unmanageable",
                                "Set time for important but not urgent tasks. Your urgent tasks should fit around this"
                            ]
                        }
                    ]
                },
                {
                    title: "Fundamentals",
                    tasks: [],
                },
                {
                    title: "30-Day Plan",
                    tasks: [],
                },
                {
                    title: "Fundamentals II",
                    tasks: [],
                },
            ],
        },
        {
            title: "Growth Phase",
            phases: [],
        },
    ];

    return (
        <Box>
            <Typography
                variant="h1"
            >
                Learning How to Learn
            </Typography>

            <Box>
                {
                    programOverview.map(({
                        title,
                        phases: pPhases
                    }, index) => {
                        return (
                            <Accordion
                                key={`${title}-${index}`}
                            >
                                <AccordionSummary

                                >
                                    {title}
                                </AccordionSummary>
                                <AccordionDetails>
                                    {
                                        pPhases.map(({
                                            title: phaseTitle,
                                            tasks,
                                        }, index) => {
                                            return (
                                                <Accordion
                                                    key={`${phaseTitle}-${index}`}>
                                                    <AccordionSummary>
                                                        {phaseTitle}
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        {
                                                            tasks.map(({
                                                                title: taskTitle, 
                                                                items,
                                                            }) => {
                                                                return(
                                                                    <Accordion
                                                                        key={taskTitle}
                                                                    >
                                                                        <AccordionSummary>
                                                                            {taskTitle}
                                                                        </AccordionSummary>
                                                                        <AccordionDetails>
                                                                            <ul>
                                                                                {
                                                                                    items.map((item, index) => {
                                                                                        return (
                                                                                            <li
                                                                                                key={`${item}-${index}`}
                                                                                            >
                                                                                                {item}
                                                                                            </li>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </ul>
                                                                        </AccordionDetails>
                                                                    </Accordion>
                                                                )
                                                            })
                                                        }
                                                    </AccordionDetails>
                                                </Accordion>
                                            )
                                        })
                                    }
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default App
