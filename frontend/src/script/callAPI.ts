import axios from 'axios'

// Your form data
const formData = {
  fullName: 'John Doe',
  email: 'john.doe@example.com',
  phoneNumber: '123-456-7890',
  sex: 'Male',
  job: 'Software Engineer',
  address: '123 Main St, Anytown',
  note: 'Some additional information',
  agreement: true,
  priceType: 'Standard',
}

// Replace with your deployed Apps Script URL
const scriptUrl =
  'https://script.google.com/macros/s/AKfycbxcxiv_dqVw-Dktf1y2RXYBMlQkxAtlfMa7rHayYFPlQIx3qMGcGS-1ixGMz1lYfbCI/exec'

axios
  .post(scriptUrl, formData, {})
  .then((response) => {
    console.log('Success:', response.data)
  })
  .catch((error) => {
    console.error('Error:', error)
  })
