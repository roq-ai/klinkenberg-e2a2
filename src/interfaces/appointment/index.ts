import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  start_time: any;
  end_time: any;
  student_id: string;
  instructor_id: string;
  created_at?: any;
  updated_at?: any;

  user_appointment_student_idTouser?: UserInterface;
  user_appointment_instructor_idTouser?: UserInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  student_id?: string;
  instructor_id?: string;
}
