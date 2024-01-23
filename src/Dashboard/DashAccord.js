import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BasicPie from './DashPieChart';

export default function DisabledAccordion() {
    return (
        <div className="border shadow rounded-md h-[60vh] px-3 bg-white">
            <h1 className="mt-2 font-semibold text-[17px] text-center">Popular Services</h1>
            <Accordion sx={{marginTop:"8px"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header">
                    <Typography>Service 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Service 1
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{marginTop:""}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header">
                    <Typography>Service 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Service 2
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{marginTop:""}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header">
                    <Typography>Service 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Service 3
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <BasicPie/>
        </div>
    );
}
