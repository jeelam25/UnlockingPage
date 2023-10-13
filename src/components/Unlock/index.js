import {useState} from 'react'

import {PageBGContainer, LookImage, Text, LockButton} from './styledComponents'

const Unlock = () => {
  const [lockStatus, setLockStatus] = useState(false)
  console.log(lockStatus)

  const onClickLock = () => {
    setLockStatus(prevLockStatus => !prevLockStatus)
  }

  const lockButton = lockStatus === true ? 'Lock' : 'Unlock'
  const lockText =
    lockStatus === true ? 'Your Device is Unlocked' : 'Your Device is Locked'

  const lockImage =
    lockStatus === true
      ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
      : 'https://assets.ccbp.in/frontend/hooks/lock-img.png '

  const ImageAltText = lockStatus === true ? 'unlock' : 'lock'

  return (
    <PageBGContainer>
      <LookImage src={lockImage} alt={ImageAltText} />
      <Text>{lockText}</Text>
      <LockButton type="button" onClick={onClickLock}>
        {lockButton}
      </LockButton>
    </PageBGContainer>
  )
}

export default Unlock
