import React from 'react'
import { Container, Divider, Grow, Grid } from '@mui/material'
import PersonCard from '../components/PersonCard'
import { Helmet } from 'react-helmet'

const titleName = "UniBrain - Team"

const TeamPage = () => {
  return (
    <Container style={{
      alignItems: 'center',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Helmet>
        <title>{titleName}</title>
      </Helmet>

      <h1 style={{ padding: '40px' }}>Faculty</h1>
      <Divider style={{ width: '100%', marginBottom: '50px' }} />

      <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1000 }}>
        <Grid container spacing={1} justifyContent='center'>
          <PersonCard
            name="Lifang He"
            photo="/people/LifangHe.jpg"
            position="Lehigh University"
            link="https://engineering.lehigh.edu/faculty/lifang-he"
          />
          <PersonCard
            name="Carl Yang"
            photo="/people/CarlYang.jpg"
            position="Emory University"
            link="https://www.cs.emory.edu/~jyang71/"
          />
          <PersonCard
            name="Liang Zhan"
            photo="/people/LiangZhan.jpeg"
            position="University of Pittsburgh"
            link={'https://www.engineeringx.pitt.edu/People/Faculty/Profiles/Liang-Zhan/'}
          />
          <PersonCard
            name="Xiangnan Kong"
            photo="/people/XiangnanKong.jpg"
            position="Worcester Polytechnic Institute"
            link="https://www.wpi.edu/people/faculty/xkong"
          />
        </Grid>
      </Grow>

      <h1 style={{ padding: '40px', paddingTop: '100px' }}>Students</h1>
      <Divider style={{ width: '100%', marginBottom: '50px' }} />

      <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1000 }}>
        <Grid container spacing={1} justifyContent='center' paddingBottom='20px'>
          <PersonCard
            name="Yao Su"
            photo="/people/YaoSu.jpg"
            position="Worcester Polytechnic Institute"
            link="https://www.linkedin.com/in/yao-su-b3a056247"
          />
          <PersonCard
            name="Keqi Han"
            photo="/people/KeqiHan.jpg"
            position="Emory University"
            link="https://www.google.com/search?q=Keqi+Han"
          />
          <PersonCard
            name="Songlin Zhao"
            photo="/people/SonglinZhao.jpg"
            position="Lehigh University"
            link="https://www.songlin.my/"
          />
          <PersonCard
            name="Yurou Dai"
            photo="/people/YurouDai.jpg"
            position="Lehigh University"
            link="https://www.google.com/search?q=Yurou+Dai"
          />
          <PersonCard
            name="Mingjie Zeng"
            photo="/people/MingjieZeng.jpg"
            position="Worcester Polytechnic Institute"
            link="https://www.google.com/search?q=Mingjie+Zeng"
          />
        </Grid>
      </Grow>
    </Container>
  )
}

export default TeamPage
