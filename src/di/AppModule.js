import { RxHR } from '@akanass/rx-http-request'

import UserService from '../data/user/service/UserService'
import UserDataRepository from '../data/user/repository/UserDataRepository'

export default container => {
  container.singleton('ApiClient',
    RxHR.defaults({
      baseUrl: BASE_URL,
      headers: {
        'X-IBM-Client-Id': CLIENT_ID,
        'X-IBM-Client-Secret': CLIENT_SECRET,
      }
    })
  )

  container.singleton('UserService', UserService, ['ApiClient'])
  container.singleton('UserRepository', UserDataRepository, ['UserService'])

  return container
}
