import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import {
  Input,
  Radio,
  Select,
  DatePicker,
  InputNumber,
  Checkbox,
  Typography,
  Button,
  Form as FormAntd,
} from 'antd'
import { useRouter } from 'next/router'
import axios from 'axios'

const { TextArea } = Input
const { Option } = Select

const sexData = [
  { key: 'Male', value: 'Male' },
  { key: 'Female', value: 'Female' },
  { key: 'Others', value: 'Others' },
]

const jobData = [
  { key: 'Student', value: 'Student' },
  { key: 'Worker', value: 'Worker' },
  { key: 'Developer', value: 'Developer' },
  { key: 'Doctor', value: 'Doctor' },
  { key: 'Others', value: 'Others' },
]

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  sex: Yup.string().required('Sex is required'),
})


const FormData = () => {
  const router = useRouter()
  const { priceType } = router.query
  console.log('priceType', priceType)
  const GOOGLE_SHEET_API_URL =
    process.env.GOOGLE_SHEET_API_URL ||
    'https://script.google.com/macros/s/AKfycbye7f5ivJzfG5pq8EAqi7OO1VS_M_jA_hjO6A_8wklvHBw2fGjYPp51DzYIQXFWKRrC/exec'

  console.log('GOOGLE', GOOGLE_SHEET_API_URL)

  const handleSendEmail = async () => {} // sorry, I just see the trouble when creating service in sendGridEmail, nodeMailer.
  const handleError = () => {}

  const handleSubmitData = (values: any) => {
    console.log(values)
    return axios.post(GOOGLE_SHEET_API_URL, values, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
  }

  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        phoneNumber: '',
        sex: '',
        job: '',
        address: '',
        note: '',
        agreement: false,
        priceType: priceType,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        handleSubmitData(values)
          .then(handleSendEmail)
          .then(() => resetForm())
          .catch((err) => handleError())
        setSubmitting(false)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
      }) => (
        <FormAntd
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 20 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
        >
          <FormAntd.Item label="Full name" required>
            <Field
              name="fullName"
              as={Input}
              onChange={(event: any) => {
                setFieldValue('fullName', event.target.value)
              }}
            />
            {errors.fullName && touched.fullName && (
              <div>{errors.fullName}</div>
            )}
          </FormAntd.Item>
          <FormAntd.Item label="Email" required>
            <Field name="email" as={Input} />
            {errors.email && touched.email && <div>{errors.email}</div>}
          </FormAntd.Item>
          <FormAntd.Item label="Phone Number" required>
            <Field name="phoneNumber" as={Input} />
            {errors.phoneNumber && touched.phoneNumber && (
              <div>{errors.phoneNumber}</div>
            )}
          </FormAntd.Item>
          <FormAntd.Item label="Sex" required>
            <Field name="sex" as={Radio.Group}>
              {sexData.map((data) => (
                <Radio value={data.value} key={data.key}>
                  {data.value}
                </Radio>
              ))}
            </Field>
            {errors.sex && touched.sex && <div>{errors.sex}</div>}
          </FormAntd.Item>
          <FormAntd.Item label="Job">
            <Field name="job">
              {() => (
                <Select
                  placeholder="Select a job"
                  onChange={(value: string) => setFieldValue('job', value)}
                >
                  {jobData.map((data) => (
                    <Option key={data.key} value={data.value}>
                      {data.value}
                    </Option>
                  ))}
                </Select>
              )}
            </Field>
          </FormAntd.Item>
          <FormAntd.Item label="Address">
            <Field name="address" as={Input} />
          </FormAntd.Item>
          <FormAntd.Item label="Note">
            <Field name="note" as={TextArea} />
          </FormAntd.Item>
          <FormAntd.Item
            name="agreement"
            valuePropName="checked"
            wrapperCol={{ offset: 7, span: 20 }}
          >
            <Field name="agreement" as={Checkbox}>
              <Typography.Text>I agree to submit this data.</Typography.Text>
            </Field>
          </FormAntd.Item>
          <FormAntd.Item wrapperCol={{ offset: 7, span: 20 }}>
            <Button
              type="primary"
              htmlType="submit"
              disabled={isSubmitting}
              onClick={(e: any) => handleSubmit(e)}
            >
              Submit
            </Button>
          </FormAntd.Item>
        </FormAntd>
      )}
    </Formik>
  )
}

export default FormData
