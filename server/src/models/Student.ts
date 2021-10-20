import { Schema, model } from 'mongoose'
import { SaltAndHash } from '../routers/user/auth'
// import { Order } from './order';

export interface Student {
  _id: string
  email: string
  password: SaltAndHash
  firstName: string
  lastName: string
  //   orders: Order[];
  studentAddress?: string
  phoneNumber?: string
}

const StudentSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: true,
  },
  password: {
    salt: {
      type: String,
    },
    hash: {
      type: String,
    },
  },
  firstName: {
    type: String,
    required: true,
    index: true,
  },
  lastName: {
    type: String,
    required: true,
    index: true,
  },
  //   orders: [
  //     {
  //       type: Schema.Types.ObjectId,
  //       ref: 'Order',
  //     },
  //   ],
  studentAddress: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
})

export const StudentModel = model<Student>('Student', StudentSchema)
