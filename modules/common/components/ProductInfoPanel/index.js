import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const ProductInfoPanel = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-control="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Product Info 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Dolores possimus doloremque aut sed voluptas distinctio voluptas
            voluptatem. Odio eum et expedita veritatis. Odit odit placeat ea est
            dolorum aliquam atque ratione.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-control="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Product Info 2</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Dolores possimus doloremque aut sed voluptas distinctio voluptas
            voluptatem. Odio eum et expedita veritatis. Odit odit placeat ea est
            dolorum aliquam atque ratione.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-control="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Product Info 3</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Dolores possimus doloremque aut sed voluptas distinctio voluptas
            voluptatem. Odio eum et expedita veritatis. Odit odit placeat ea est
            dolorum aliquam atque ratione.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default ProductInfoPanel;
