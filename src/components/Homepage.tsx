import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'
import Loader from './Loader'

const {Title} = Typography
const Homepage = () => {
  const {data, isFetching} = useGetCryptosQuery(10)
  
  if(isFetching) {
    return (<div><Loader/></div>)
  }
  
  const globalStat = data?.data.stats
  
  return (
    <div>
      <Title level={2} className="heading">Global Crypto Stat</Title>
      <Row gutter={[32,32]}>
          <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(globalStat.totalCoins)}/></Col>
          <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStat.totalExchanges)}/></Col>
          <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStat.totalMarketCap)}/></Col>
          <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStat.total24hVolume)}/></Col>
          <Col span={12}><Statistic title="Total Markets" value={millify(globalStat.totalMarkets)}/></Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptos In The World</Title>
        <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>News</Title>
        <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show more</Link></Title>
      </div>
      <News simplified />
    </div>
    
  )
}

export default Homepage