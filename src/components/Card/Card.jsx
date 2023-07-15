/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { deepPurple, red } from '@mui/material/colors';
import { isRecipeInDeletedList } from 'helpers';
import { StyledNavLink } from 'components/NavLink';

export const ActionAreaCard = ({
    recipe: { id, image_url, name, description },
    deletedData,
    multiplySelection,
}) => {
    return (
        <Card
            sx={{
                maxWidth: 345,
                bgcolor: isRecipeInDeletedList(deletedData, id) && red[100],
            }}
            onClick={multiplySelection.bind(null, id)}
            onContextMenu={multiplySelection.bind(null, id)}
        >
            <StyledNavLink to={`recipe/${id}`}>
                <CardActionArea sx={{ color: deepPurple[500] }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image_url}
                        alt={'beer'}
                        sx={{ objectFit: 'contain' }}
                        loading={'lazy'}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name?.length > 25
                                ? `${name
                                      .slice(0, 20)
                                      .replace(/[.|,]|\s$/gm, '')}...`
                                : name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description
                                .slice(0, 80)
                                .replace(/[.|,|-]|\s$/gm, '')}
                            ...
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </StyledNavLink>
        </Card>
    );
};
