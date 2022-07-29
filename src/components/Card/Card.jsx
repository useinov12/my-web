import React from 'react'

import  Text from '@components/atoms/Text/Text'
import  LinkCustom from '@components/atoms/LinkCustom/LinkCustom'
import Chip from '@components/atoms/Chip/Chip'
import './Card.scss'

const Card = (props) => {
    const {heading, subHeading, text, links, img, tech} = props;
    return (
        <div className={'card-component'}>
            <div className={'card-left-section'}>
                <h1>{heading}</h1>
                <h2>{subHeading}</h2>
                <div className={'text-container'}>
                    {text.map( (paragraph, idx) => <Text key={idx} >{paragraph}</Text>)}
                </div>
            </div>

            <div className={'card-right-section'}>
                <div className={'image-container'}>
                    <img src={img} alt='algovis' />
                </div>

                <div className={'project-info'}>
                    <div className={'chip-list'}>
                        { tech.map( (el) => <Chip key={el} small>{el}</Chip>)}
                    </div>

                    <div className={'card-links-container'}>
                        {links.map( el => <LinkCustom medium link={el.link}>{el.label}</LinkCustom>)}
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Card
