import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { rhythm } from '../utils/typography';

const BioImage = ({ image, alt }) => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
    },
    component: {
      marginBottom: rhythm(0.5),
    },
    img: {
      borderRadius: '50%',
      marginBottom: rhythm(0.5),
    },
  };

  return (
    <div css={styles.container}>
      <Image
        fixed={image}
        alt={alt}
        css={styles.component}
        imgStyle={styles.img}
      />
    </div>
  );
};

BioImage.propTypes = {
  image: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  alt: PropTypes.string.isRequired,
};

export default BioImage;
