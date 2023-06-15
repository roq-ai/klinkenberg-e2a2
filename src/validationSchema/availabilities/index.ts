import * as yup from 'yup';

export const availabilityValidationSchema = yup.object().shape({
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  instructor_id: yup.string().nullable().required(),
});
