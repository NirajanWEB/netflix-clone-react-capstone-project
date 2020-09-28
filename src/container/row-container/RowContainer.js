import React, { useEffect } from 'react'
import Row from '../../components/row/Row'
import styles from './styles/RowContainer.module.css'

const RowContainer = () => {
  return (
    <div className={styles.container}>
      <Row category={'NetflixOriginals'} isNetflixRow>Netflix Originals</Row>
      <Row category={'Trending'}>Trending Now</Row>
      <Row category={'ActionMovies'}>Action Movies</Row>
      <Row category={'ComedyMovies'}>Comedy Movies</Row>
      <Row category={'TopRated'}>Top Rated</Row>
      <Row category={'RomanceMovies'}>Romance Movies</Row>
      <Row category={'HorrorMovies'}>Horror Movies</Row>
      <Row category={'Documentaries'}>Documentaries</Row>
    </div>
  )
}

export default RowContainer
