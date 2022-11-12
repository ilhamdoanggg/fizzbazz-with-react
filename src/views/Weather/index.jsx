import React, { useEffect, useState } from 'react';
import { withStyles } from '@mui/styles';
import {
    CardContent, Grid,
    CircularProgress,
    Typography,
    Card,
    Divider,
    TextField, Stack,
} from '@mui/material';
import styles from './styles';
import * as weatherServices from 'services';
import dayjs from 'dayjs';
import { LoadingDialog, ButtonAppBar } from 'components';

const Weather = ({ classes, history }) => {
    const [loading, setLoading] = useState(false);
    const [locationName, setLocationName] = useState('');
    const [listTemp, setListTemp] = useState([]);
    const [flagReuslt, setFlagResult] = useState(false);
    const [inputValue, setInputValue] = useState();
    const [inputError, setInputError] = useState();
    const [result, setResult] = useState([])

    useEffect(() => {
        if (!flagReuslt) {
            setLoading(true);
            let lat = '-6.200000';
            let long = '106.816666';
            weatherServices.getForecast(lat, long, 7).then((response) => {
                setLoading(false);
                if (response.status !== 200) {
                    console.log(response);
                } else if (response.data) {
                    let dataList = response.data.list.filter((forecast) =>
                        forecast.dt_txt.match(/09:00:00/)
                    );
                    setListTemp(dataList);
                    setLocationName(response.data.city.name);
                }
            });
            setFlagResult(true);
        }
    }, [flagReuslt]);

    const handleChangeValue = (event) => {
        if (isNaN(event.target.value)) {
            setInputError('Inputan hanya bisa Number');
        } else {
            setInputError('');
            setInputValue(event.target.value);
            apaBole(event.target.value)
        }
    };

    const answer = []
    function apaBole(n) {
        for (let i = 1; i <= n; i++) {
            if (i % 3 == 0 && i % 5 == 0)
                answer.push("ApaBole")
            else if (i % 3 == 0)
                answer.push("Apa")
            else if (i % 5 == 0)
                answer.push("Bole")
            else
                answer.push(i.toString())
        }
        setResult(answer)
        return answer
    };

    return (
        <>
            <ButtonAppBar />
            <div className={classes.appRoot}>
                <Grid container>
                    <Typography gutterBottom variant="h5" component="div">
                        Menampilkan ramalan cuaca kota Jakarta untuk 7 hari kedepan
                    </Typography>

                    <Typography component="div">
                        Cuaca 5 hari kedepan daerah {locationName}, karena 7 hari kedepan
                        hanya menggunakan api berbayar
                    </Typography>
                    <br />
                    <Grid container spacing={0.5} direction="row" alignItems="center">
                        {loading ? (
                            <CircularProgress />
                        ) : listTemp !== [] ? (
                            listTemp.map((result, index) => {
                                const day_icon = `${'https://openweathermap.org/img/wn/' +
                                    result.weather[0]['icon']
                                    }@2x.png`;
                                return (
                                    <Grid item xs>
                                        <Card key={index}>
                                            <img
                                                src={day_icon}
                                                alt=""
                                                style={{
                                                    maxWidth: '50%',
                                                    height: '50%'
                                                }}
                                            />
                                            <CardContent>
                                                <Typography component="div"></Typography>
                                                <Typography component="div">
                                                    {dayjs(result.dt_txt).format('ddd DD MMM YYYY')}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Temperature : <b>{result.main.temp} &deg;C</b>
                                                    {/* {weatherServices.convertToFahrenheit(result.main.temp)} */}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {result.weather[0].description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                );
                            })
                        ) : (
                            <Typography variant="body2" color="text.secondary">
                                Tidak ada data
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs>
                        <Divider />
                        <Grid item>
                            <Typography variant="h5" component="div">
                                Program kecil bernama "ApaBole"
                            </Typography>
                            <br />
                            Tolong print angka dari 1 sampai 100. Tetapi, Ada peraturan
                            khusus:
                            <p>
                                1. Untuk setiap angka yang bisa dibagi dengan 3, jangan print
                                angka nya, tapi print "Apa".
                            </p>
                            <p>2. Kalau bisa dibagi dengan 5, print "Bole",</p>
                            <p>3. Kalau bisa dibagi oleh 3 dan 5, print "ApaBole".</p>
                            <br />

                            <Stack direction="row" spacing={2}>
                                <TextField
                                    type='tel'
                                    label="Masukan Nilai"
                                    onChange={handleChangeValue}
                                    name="inputan-mu"
                                    value={inputValue}
                                    error={!!inputError}
                                    helperText={inputError}
                                />

                            </Stack>
                        </Grid>
                        {result && result.map((res, index) => {
                            console.log(res, index)
                            return (
                                <Stack key={index}>
                                    {/* <Typography> */}
                                    {res},
                                    {/* </Typography> */}
                                </Stack>
                            )

                        })}
                    </Grid>
                </Grid>
            </div>
            <LoadingDialog open={loading} />
        </>
    );
};
export default withStyles(styles)(Weather);
