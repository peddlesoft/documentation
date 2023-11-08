import React from 'react'
import styles from './styles.module.css'

export interface FeatureCardProps {
    title: string;
    description: string;
    image: string;
}

function FeatureCard({title, description, image}: FeatureCardProps) {
  return (
    <div className={styles.featureCard}>
        <img src={image} width={146} height={146} alt="feature image" />
        <h3>{title}</h3>
        <span>
            {description}
        </span>
    </div>
  )
}

export default FeatureCard