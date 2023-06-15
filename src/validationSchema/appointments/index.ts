import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  student_id: yup.string().nullable().required(),
  instructor_id: yup.string().nullable().required(),
});
