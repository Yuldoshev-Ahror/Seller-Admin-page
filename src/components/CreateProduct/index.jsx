import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FormData from 'form-data';
import './index.scss';

const tileData = [
  {
    img: 'https://petapixel.com/assets/uploads/2017/03/product1.jpeg',
    title: 'Men Shoes',
  },

  {
    img: 'https://petapixel.com/assets/uploads/2017/03/product1.jpeg',
    title: 'Men Shoes',
  },

  {
    img: 'https://petapixel.com/assets/uploads/2017/03/product1.jpeg',
    title: 'Men Shoes',
  },

  {
    img: 'https://petapixel.com/assets/uploads/2017/03/product1.jpeg',
    title: 'Men Shoes',
  },
  {
    img: 'https://petapixel.com/assets/uploads/2017/03/product1.jpeg',
    title: 'Men Shoes',
  },

  {
    img: 'https://petapixel.com/assets/uploads/2017/03/product1.jpeg',
    title: 'Men Shoes',
  },

  {
    img: 'https://petapixel.com/assets/uploads/2017/03/product1.jpeg',
    title: 'Men Shoes',
  },

  {
    img: 'https://petapixel.com/assets/uploads/2017/03/product1.jpeg',
    title: 'Men Shoes',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    '& ul': {
      height: '65px',
      overflowY: 'hidden',
      overflowX: 'scroll',
    },
    '& img': {
      width: '100%',
      height: '55px',
      backgroundSize: 'contain',
    },
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  textFileWidth: {
    width: '100%',
  },
  outlineAB: {
    outline: 'none !important',
  },
}));

export default function CreateProduct(props) {
  const [stateData, setStateData] = useState([]);

  const newFormData = new FormData();

  const huldleMata = (e) => {
    newFormData.append('files', 'salom');
    console.log(newFormData);
    // setStateData()
  };

  const classes = useStyles();

  return (
    <div className='create-product-modal'>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.root}>
            <GridList className={classes.gridList} cols={6.5}>
              {tileData.map((tile) => (
                <GridListTile key={tile.img}>
                  <img src={tile.img} alt={tile.title} />
                  {/* <GridListTileBar
                    title={tile.title}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                    actionIcon={
                      <IconButton aria-label={`star ${tile.title}`}>
                        <StarBorderIcon className={classes.title} />
                      </IconButton>
                    }
                  /> */}
                </GridListTile>
              ))}
            </GridList>
          </div>
          <Button
            variant='contained'
            component='label'
            className={classes.textFileWidth}
          >
            Upload Image
            <input type='file' hidden multiple onChange={huldleMata} />
          </Button>
        </Grid>
        <Grid item xs={8}>
          <TextField
            className={classes.textFileWidth}
            label='Title'
            name='title'
            id='outlined-size-small'
            defaultValue=''
            variant='outlined'
            size='small'
            type='text'
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className={classes.textFileWidth}
            label='Brand'
            name='brand'
            id='outlined-size-small'
            defaultValue=''
            variant='outlined'
            size='small'
            type='text'
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className={classes.textFileWidth}
            label='Description UZ'
            name='description_uz'
            id='outlined-size-small'
            defaultValue=''
            variant='outlined'
            size='small'
            type='text'
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className={classes.textFileWidth}
            label='Description RU'
            name='description_ru'
            id='outlined-size-small'
            defaultValue=''
            variant='outlined'
            size='small'
            type='text'
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className={classes.textFileWidth}
            label='Description EN'
            name='description_en'
            id='outlined-size-small'
            defaultValue=''
            variant='outlined'
            size='small'
            type='text'
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            className={classes.textFileWidth}
            label='RetailPrice'
            name='retailPrice'
            type='number'
            id='outlined-size-small'
            defaultValue=''
            variant='outlined'
            size='small'
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className={classes.textFileWidth}
            label='RetailValute'
            name='retailValute'
            type='text'
            id='outlined-size-small'
            defaultValue=''
            variant='outlined'
            size='small'
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className={classes.textFileWidth}
            label='PurchasePrice'
            name='purchasePrice'
            type='number'
            id='outlined-size-small'
            defaultValue=''
            variant='outlined'
            size='small'
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className={classes.textFileWidth}
            label='PurchaseValute'
            name='purchaseValute'
            type='text'
            id='outlined-size-small'
            defaultValue=''
            variant='outlined'
            size='small'
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className={classes.textFileWidth}
            label='Options'
            name='options'
            type='text'
            id='outlined-size-small'
            defaultValue=''
            variant='outlined'
            size='small'
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            className={classes.textFileWidth}
            label='Quantity'
            name='quantity'
            type='number'
            id='outlined-size-small'
            defaultValue=''
            variant='outlined'
            size='small'
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className={classes.textFileWidth}
            label='Unit'
            name='unit'
            type='string'
            id='outlined-size-small'
            defaultValue=''
            variant='outlined'
            size='small'
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className={classes.textFileWidth}
            label='Category'
            name='category'
            type='string'
            id='outlined-size-small'
            defaultValue=''
            variant='outlined'
            size='small'
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.textFileWidth}
            label='Sizes'
            name='sizes'
            type='string'
            id='outlined-size-small'
            defaultValue=''
            variant='outlined'
            size='small'
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.textFileWidth}
            label='Colors'
            name='colors'
            type='string'
            id='outlined-size-small'
            defaultValue=''
            variant='outlined'
            size='small'
          />
        </Grid>

        <Grid item xs={6}></Grid>
        <Grid item xs={3}>
          <Button
            onClick={props.handleClose}
            className={classes.outlineAB}
            fullWidth
            variant='outlined'
            color='secondary'
          >
            Cancel
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            className={classes.outlineAB}
            fullWidth
            variant='outlined'
            color='primary'
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
