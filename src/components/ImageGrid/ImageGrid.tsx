import { Card, CardActionArea, CardMedia, makeStyles } from "@material-ui/core";
import React from "react";
import { Data, Item } from "../../shared/interfaces/Interfaces";
import { GridFlex, GridWrapper } from "./ImageGrid.styles";

interface ImageGridProps {
    data: Data | undefined;
}

const useStyles = makeStyles({
    root: {
        maxWidth: 'calc(12.5% - 12px)',
        minWidth: '260px',
        width: 'calc(12.5% - 12px)',
        marginRight: '.5rem',
        marginLeft: '.5rem',
        marginBottom: '1rem',
        maxHeight: '180px',
    },
});

const ImageGrid: React.FC<ImageGridProps> = ({ data }) => {
    const classes = useStyles();

    const showCard = (item: Item) => {
        const id = item.data && item.data.length && item.data[0].nasa_id;
        const link = item.links?.find(x => x.rel === 'preview');

        return (
            <Card variant="outlined" key={id} className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        key={id}
                        title={item.data[0].title}
                        image={link?.href}
                        component="img"
                        height="140"
                    ></CardMedia>
                </CardActionArea>
            </Card>
        )
    }

    return (
        <GridWrapper>
            <GridFlex>
                {data && data.collection.items && data.collection.items.map(x => showCard(x))}
            </GridFlex>
        </GridWrapper>
    )
}

export default ImageGrid;