import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeFuseSquareOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M16.215 21.754h-8.43c-3.31 0-5.53-2.32-5.53-5.78v-7.95c0-3.45 2.22-5.78 5.53-5.78h8.43c3.31 0 5.53 2.32 5.53 5.78v7.95c0 3.45-2.22 5.78-5.53 5.78m-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.95c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28v-7.95c0-2.6-1.58-4.28-4.03-4.28z"
    />
    <Path
      fill={props.color}
      d="M14.835 16.204c-.47 0-.92-.08-1.27-.22a.753.753 0 0 1-.42-.97c.15-.38.59-.57.97-.42.44.17 1.29.16 1.64-.1.07-.05.12-.11.1-.28-.01-.1-.03-.24-.49-.43l-.83-.33c-.32-.13-1.29-.52-1.42-1.64-.08-.67.16-1.26.67-1.65.82-.63 2.25-.65 3.11-.31.38.15.57.59.42.97-.15.39-.59.57-.97.42-.44-.17-1.29-.16-1.64.1-.07.05-.12.11-.1.28.01.1.03.24.49.43l.84.33c.32.13 1.29.52 1.42 1.64.08.67-.16 1.25-.67 1.65-.48.37-1.17.53-1.83.53zM7.396 16.207c-.41 0-.75-.34-.75-.75v-6.9c0-.41.34-.75.75-.75h3.49c.41 0 .75.34.75.75s-.34.75-.75.75h-2.74v1.87h2.74c.41 0 .75.34.75.75s-.34.75-.75.75h-2.74v2.78c0 .41-.34.75-.75.75"
    />
  </Svg>
);
export default IconlystAdobeFuseSquareOutline;
