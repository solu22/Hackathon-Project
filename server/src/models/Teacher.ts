import { Schema, model } from 'mongoose'
import { SaltAndHash } from '../routers/user/auth'
// import { Order } from './order';

export interface Teacher {
  _id: string
  email: string
  password: SaltAndHash
  firstName: string
  lastName: string
  //   orders: Order[];
  TeacherAddress?: string
  phoneNumber?: string
}

const TeacherSchema = new Schema({
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
  TeacherAddress: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
})

export const TeacherModel = model<Teacher>('Teacher', TeacherSchema)
