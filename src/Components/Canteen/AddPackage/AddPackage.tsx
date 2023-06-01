
import { TextField, Button, Grid, Typography, Box, } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { StyledForm, ContainerBox } from './style'
import axios from '../../../Axios/axios'
import Axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

interface formValues {
  BreakfastMainCourses: string,
  BreakfastSideCourses: string,
  BreakfastSpecials: string,
  BreakfastAvailableTime: number | string | TimeRanges,
  BreakfastRateperDay: number | string,
  BreakfastRateperMonth: number | string,
  LunchMainCourses: string,
  LunchSideCourses: string,
  LunchSpecials: string,
  LunchAvailableTime: number | string | TimeRanges,
  LunchRateperDay: number | string,
  LunchRateperMonth: number | string,
  DinnerMainCourses: string,
  DinnerSideCourses: string,
  DinnerSpecials: string,
  DinnerAvailableTime: number | string | TimeRanges,
  DinnerRateperDay: number | string,
  DinnerRateperMonth: number | string,
  Total: number | string,
  image: FileList | null | undefined;
}


const validationSchema = {

  required: "Must provide details",
  pattern: {
    value: /^[a-zA-Z,]+$/,
    message: "Only accept letters or commas",
  },
  minLength: {
    value: 20,
    message: "Minimum twenty letters",
  },
  maxLength: {
    value: 100,
    message: "Maximum hundred letters",
  },
};


const ResponsiveForm = () => {
  const form = useForm<formValues>()
  const { register, handleSubmit, formState, watch } = form;
  const { errors } = formState;

  const onSubmit: SubmitHandler<formValues> = async (data) => {
    console.log(data, ':is');

    const file = data?.image?.[0]
    console.log(file)
    if (file) {
      try {
        const response = await axios.get('/service/s3service')
        const url = response?.data?.url
        console.log(url);
        await Axios.put(url, file, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        })
        const imageUrl = url.split('?')[0]
        console.log(imageUrl)



      } catch (err) {
        console.log(err)
      }
    } else {
      toast.error("add an image")
    }

  };

  return (
    <Box>
      <Toaster
        position="top-left"
        reverseOrder={false}
      />
      <StyledForm onSubmit={handleSubmit(onSubmit)} sx={{ mt: '30px' }} noValidate>
        <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 'bold', color: '#4B6190' }}>Add Packages</Typography>


        <ContainerBox>
          <Grid container spacing={2} sx={{ mr: 2, mt: 3 }} >
            <Typography variant='body2' sx={{ textAlign: 'center', color: '#8A93A6' }}>*Breakfast section</Typography>

            <Grid item xs={12} sm={12}>
              <TextField

                label="BreakfastMainCourses"
                variant="outlined"
                fullWidth={true}
                type='text'
                {...register('BreakfastMainCourses', validationSchema)}
                error={!!errors.BreakfastMainCourses}
                helperText={errors?.BreakfastMainCourses?.message}

              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField

                label="BreakfastSideCourses"
                variant="outlined"
                fullWidth={true}
                {...register('BreakfastSideCourses', validationSchema)}
                error={!!errors.BreakfastSideCourses}
                helperText={errors?.BreakfastSideCourses?.message}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField

                label="BreakfastSpecials"
                variant="outlined"
                fullWidth={true}
                {...register('BreakfastSpecials', validationSchema)}
                error={!!errors.BreakfastSpecials}
                helperText={errors?.BreakfastSpecials?.message}

              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                type='time'

                label="BreakfastAvailableTime"
                variant="outlined"
                fullWidth={true}
                {...register("BreakfastAvailableTime", { required: 'Time is required' })}
                error={!!errors.BreakfastAvailableTime}
                helperText={errors?.BreakfastAvailableTime?.message}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField

                label="BreakfastRateperDay"
                variant="outlined"
                fullWidth={true}
                {...register('BreakfastRateperDay', {
                  required: 'amount is required',
                  pattern: {
                    value: /^[1-9]\d{0,4}$/,
                    message: 'only accept letters lessthan 5 digits'
                  }
                })}
                error={!!errors.BreakfastRateperDay}
                helperText={errors?.BreakfastRateperDay?.message}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField

                label="BreakfastRateperMonth"
                variant="outlined"
                fullWidth={true}
                {...register('BreakfastRateperMonth', {
                  required: 'amount is required',
                  pattern: {
                    value: /^[1-9]\d{0,4}$/,
                    message: 'only accept letters lessthan 5 digits'
                  }
                })}
                error={!!errors.BreakfastRateperMonth}
                helperText={errors?.BreakfastRateperMonth?.message}

              />
            </Grid>
          </Grid  >

          <Grid container spacing={2} sx={{ mr: 2, mt: 3 }}  >
            <Typography variant='body2' sx={{ textAlign: 'center', color: '#8A93A6' }}>*Lunch section</Typography>
            <Grid item xs={12} sm={12}>
              <TextField

                label="LunchMainCourses"
                variant="outlined"
                fullWidth={true}
                {...register("LunchMainCourses", validationSchema)}
                error={!!errors.LunchMainCourses}
                helperText={errors?.LunchMainCourses?.message}

              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField

                label="LunchSideCourses"
                variant="outlined"
                fullWidth={true}
                {...register("LunchSideCourses", validationSchema)}
                error={!!errors.LunchSideCourses}
                helperText={errors?.LunchSideCourses?.message}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField

                label="LunchSpecials"
                variant="outlined"
                fullWidth={true}
                {...register("LunchSpecials", validationSchema)}
                error={!!errors.LunchSpecials}
                helperText={errors?.LunchSpecials?.message}

              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                type='time'

                label="LunchAvailableTime"
                variant="outlined"
                fullWidth={true}
                {...register("LunchAvailableTime", { required: 'Time is required' })}
                error={!!errors.LunchAvailableTime}
                helperText={errors?.LunchAvailableTime?.message}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField

                label="LunchRateperDay"
                variant="outlined"
                fullWidth={true}
                {...register('LunchRateperDay', {
                  required: 'amount is required',
                  pattern: {
                    value: /^[1-9]\d{0,4}$/,
                    message: 'only accept letters lessthan 5 digits'
                  }
                })}
                error={!!errors.LunchRateperDay}
                helperText={errors?.LunchRateperDay?.message}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField

                label="LunchRateperMonth"
                variant="outlined"
                fullWidth={true}
                {...register('LunchRateperMonth', {
                  required: 'amount is required',
                  pattern: {
                    value: /^[1-9]\d{0,4}$/,
                    message: 'only accept letters lessthan 5 digits'
                  }
                })}
                error={!!errors.LunchRateperMonth}
                helperText={errors?.LunchRateperMonth?.message}
              />
            </Grid>
          </Grid >
          <Grid container spacing={2} sx={{ mt: 3 }} >
            <Typography variant='body2' sx={{ textAlign: 'center', color: '#8A93A6' }}>*Dinner section</Typography>
            <Grid item xs={12} sm={12} >
              <TextField

                label="DinnerMainCourses"
                variant="outlined"
                fullWidth={true}
                {...register("DinnerMainCourses", validationSchema)}
                error={!!errors.DinnerMainCourses}
                helperText={errors?.DinnerMainCourses?.message}

              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField

                label="DinnerSideCourses"
                variant="outlined"
                fullWidth={true}
                {...register("DinnerSideCourses", validationSchema)}
                error={!!errors.DinnerSideCourses}
                helperText={errors?.DinnerSideCourses?.message}

              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField

                label="DinnerSpecials"
                variant="outlined"
                fullWidth={true}
                {...register("DinnerSpecials", validationSchema)}
                error={!!errors.DinnerSpecials}
                helperText={errors?.DinnerSpecials?.message}

              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                type='time'

                label="DinnerAvailableTime"
                variant="outlined"
                fullWidth={true}
                {...register("DinnerAvailableTime", { required: 'Time is required' })}
                error={!!errors.DinnerAvailableTime}
                helperText={errors?.DinnerAvailableTime?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField

                label="DinnerRateperDay"
                variant="outlined"
                fullWidth={true}
                {...register('DinnerRateperDay', {
                  required: 'amount is required',
                  pattern: {
                    value: /^[1-9]\d{0,4}$/,
                    message: 'only accept letters lessthan 5 digits'
                  }
                }

                )}
                error={!!errors.DinnerRateperDay}
                helperText={errors?.DinnerRateperDay?.message}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField

                label="DinnerRateperMonth"
                variant="outlined"
                fullWidth={true}
                {...register("DinnerRateperMonth", {
                  required: 'amount is required',
                  pattern: {
                    value: /^[1-9]\d{0,4}$/,
                    message: 'only accept letters lessthan 5 digits'
                  }
                }

                )}
                error={!!errors.DinnerRateperMonth}
                helperText={errors?.DinnerRateperMonth?.message}

              />
            </Grid>
          </Grid >
        </ContainerBox>

        <TextField label='Total' variant="outlined" fullWidth={true} placeholder='Enter the total amount for the package' sx={{ mt: 3 }}
          {...register('Total', {
            required: 'amount is required',
            pattern: {
              value: /^[1-9]\d{0,4}$/,
              message: 'only accept letters lessthan 5 digits'
            }
          }

          )}
          error={!!errors.Total}
          helperText={errors?.Total?.message}
        />
        <Grid item xs={12} sm={12}>
          <input
            type="file"
            id="image-upload-input"
            {...register("image")}
            style={{ display: "none" }}
          />
          <label htmlFor="image-upload-input">
            <Button
              variant="outlined"
              component="span"
              sx={{ marginTop: 2, borderColor: '#4B6190', color: '#4B6190' }}
            >
              Upload Image
            </Button>
          </label>
          {form.watch("image") && (
            <Typography variant="body2">
              Selected Image: {(form.watch("image") as FileList)[0]?.name}
            </Typography>
          )}
        </Grid>
        <Button type='submit' variant="contained" sx={{ marginTop: 4, width: '100%', padding: 1.5, background: '#4B6190' }}>
          Submit
        </Button>

      </StyledForm>

    </Box>
  );
};

export default ResponsiveForm;
