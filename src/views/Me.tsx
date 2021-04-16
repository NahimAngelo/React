import { FC } from 'react';
import { 
    Container,
    Grid,
    CardMedia,
    Typography,
    CardContent,
    Card
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import mePhoto from '../img/me.jpg';
import { likes } from '../utils/likes';
import { theme } from '../utils/theme';
import { Like } from '../models/Like';


const Me: FC = () => {
    const classes = useStyles(theme);

    return (
        <>
            <NavBar index={0} />
            <div className={classes.aboutMe}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Nahim Angelo Gómez Ceja
                </Typography>
                <Container maxWidth="lg">
                    <Grid container spacing={10}>
                      <Grid item xs={12} sm={6}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={mePhoto}
                            title="Image title"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                          <div className={classes.center}>
                            <Typography variant="h5" align="justify" color="textSecondary" paragraph>
                              Soy egresado del Instituto Tecnológico de Morelia como Ingeniero Informático.
                              Tengo 24 años rozando los 25 años. Me gusta aprender todo lo que pueda. Como pasatiempos 
                              me gusta jugar video juegos y leer libros. Prefiero el anime en vez de series o 
                              películas, aunque casi no veo nada. 
                            </Typography>
                          </div>
                      </Grid>
                    </Grid>
                </Container>
            </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
            {likes.map((card: Like, index: number) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </>
    )
}

const useStyles = makeStyles((theme) => ({
    aboutMe: {
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    photo: {
        padding: theme.spacing(6),
    },
    cardContent: {
      flexGrow: 1,
    },
    center: {
        height: "100%",
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export default Me;