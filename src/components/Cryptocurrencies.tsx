import  { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { SimplifiedPropsType } from '../types'
import Loader from './Loader'
const Cryptocurrencies = ({simplified}: SimplifiedPropsType) => {
  const count = simplified ? 10 : 100
  const {data: cryptosList, isFetching} = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  
  useEffect(() => {
    setCryptos(cryptosList?.data?.coins)
    const filterData =  cryptosList?.data?.coins.filter((item:any) => item.name.toLowerCase().includes(searchTerm));
    setCryptos(filterData)    
  },[cryptosList,searchTerm])  
  if (isFetching) return <Loader/>
  return (
    <>
     {!simplified && (
      <div className='search-crypto'>
        <Input style={{borderRadius: '20px'}} placeholder='Search Cryptocurrencies' onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
      </div>
     )} 
     <Row gutter={[32,32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={24} lg={6} className="crypto-card" key={currency.uuid}>
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} alt={currency.name}/>}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
     </Row>
    </>
  )
}

export default Cryptocurrencies