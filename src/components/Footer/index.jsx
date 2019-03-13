import React, { Component } from 'react'

import LogoGithub from 'react-ionicons/lib/LogoGithub'
import IosGlobeOutline from 'react-ionicons/lib/IosGlobeOutline'

import './styles.scss'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer__brand'>
          <div className='footer__brand__name'>Movie rolls</div>

          <div className='footer__brand__author'>
            <div className='footer__brand__author__name'>
              <span>code and design by </span>
              Sumit joshi
            </div>
            <div className='footer__brand__author__social'>
              <a
                className='footer__brand__author__socail__portfolio'
                href='https://sumitjoshi97.surge.sh'
                target='_blank'
                rel='noopener noreferrer'
              >
                <IosGlobeOutline
                  color='#fff'
                  fontSize='2.4rem'
                  style={{ marginRight: '1rem' }}
                />
              </a>
              <a
                className='footer__brand__author__soacil__github'
                href='https://github.com/sumitjoshi97'
                target='_blank'
                rel='noopener noreferrer'
              >
                <LogoGithub color='#fff' fontSize='2.4rem' />
              </a>
            </div>
          </div>
        </div>

        <div className='footer__support'>
          <a
            href='https://www.themoviedb.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={require('../../assets/tmdb.png')}
              alt=''
              className='footer__support__img'
            />
          </a>
        </div>
      </div>
    )
  }
}
