import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const PriceOption = styled.button`
  padding: 1rem 2rem;
  margin: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: #f0f0f0;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 10;
`

const PriceSelection: React.FC = () => {
  const router = useRouter()
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)

  const handlePriceSelect = (priceType: string) => {
    router.push(`/form/${priceType}`)
  }

  return (
    <Container>
      <h1>Select a Price Option</h1>
      <PriceOption onClick={() => handlePriceSelect('Basic')}>
        Basic
      </PriceOption>
      <PriceOption onClick={() => handlePriceSelect('Standard')}>
        Standard
      </PriceOption>
      <PriceOption onClick={() => handlePriceSelect('Premium')}>
        Premium
      </PriceOption>

      {showModal && (
        <Modal>
          <h2>Enter Your Data</h2>
          <form>
            {/* Add your form fields here */}
            <button type="submit">Submit</button>
          </form>
          <button onClick={() => setShowModal(false)}>Close</button>
        </Modal>
      )}
    </Container>
  )
}

export default PriceSelection
