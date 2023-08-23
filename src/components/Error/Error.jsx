import './Error.scss'

import {error} from '../../utils/images'

export const Error = () => {
  return (
    <div className="container py-5">
      <div className="flex flex-center error">
        <img src={error} alt="error" />
      </div>
    </div>
  )
}
