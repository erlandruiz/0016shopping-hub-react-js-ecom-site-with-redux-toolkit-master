import {spinner} from '../../utils/images.js';

import './Loader.scss';

export const Loader = () => {
  return (
    <div className="container py-5">
      <div className="flex flex-center loader">
        <img src={spinner} alt="" />
      </div>
    </div>
  )
}
