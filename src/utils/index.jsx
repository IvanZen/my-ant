import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { isAddress } from '@ethersproject/address'

export const Networks = {
  MainNet: 1,
  Ropsten: 3,
  Rinkeby: 4,
  Goerli: 5,
  Kovan: 42,
}

export const TOKENS_BY_NETWORK = {
  [Networks.Ropsten]: [
    {
      address: null,
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: 18,
    },
    {
      address: '0xad6d458402f60fd3bd25163575031acdce07538d',
      symbol: 'DAI',
      name: 'Dai',
      decimals: 18,
    },
    {
      address: '0x880bd31775d97Ce7006D1Cc72EbCC36E412E663C',
      symbol: 'WAR',
      name: 'WeStarter',
      decimals: 18,
    },
  ],
}

export const STAKING_ADDRESS_BY_NETWORK = {
  [Networks.Ropsten]: [
    {
      address: '0xB65853Ddc2366564e2238c70a0676B886c79dD9b',
      symbol: 'ETH',
      name: 'Ethereum',
      decimals: 18,
    },
    {
      address: '0xE9bA85Ef193c02a5583599676d93b408E106b60B',
      symbol: 'DAI',
      name: 'Dai',
      decimals: 18,
    },
    {
      address: '0xDdB7B0a03A98e7814430E8C010D221D010F2cD6F',
      symbol: 'WAR',
      name: 'WeStarter',
      decimals: 18,
    },
  ],
}

export const shorter = (str) =>
  str?.length > 8 ? str.slice(0, 6) + '...' + str.slice(-4) : str



// fetcher 是一个异步函数，它接受 SWR 的 key 并返回数据。
export const fetcher = (library, abi) => (...args) => {
  const [arg1, arg2, ...params] = args

  // 如果第一个参数是地址
  if (isAddress(arg1)) {
    const address = arg1
    const method = arg2
    const contrat = new Contract(address, abi, library.getSigner())
    console.log('1111', contrat[method](...params))
    return contrat[method](...params)
  }

  // 如果第一个参数不是地址，则表明要发送的是一个eth call
  const method = arg1
  console.log('22222')
  console.log('method: ', method)
  console.log('arg2: ', arg2)
  console.log('...params: ', params)
  return library[method](arg2, ...params)
}