import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinStarBold = ({
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
      fillRule="evenodd"
      d="m12.442 8.815-.444-.885-.445.888a1.22 1.22 0 0 1-.92.659l-.97.139.698.67c.29.277.423.68.352 1.08l-.166.958.89-.461a1.22 1.22 0 0 1 1.126 0l.886.46-.167-.958a1.2 1.2 0 0 1 .353-1.08l.698-.67-.975-.14a1.21 1.21 0 0 1-.916-.66"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.799 10.288-1.012.972.24 1.374a1.22 1.22 0 0 1-1.007 1.404c-.262.042-.525 0-.762-.125l-1.26-.652-1.263.655a1.2 1.2 0 0 1-.561.14c-.435 0-.858-.235-1.078-.647a1.23 1.23 0 0 1-.127-.762l.24-1.386-1.014-.973a1.217 1.217 0 0 1-.033-1.713c.187-.194.438-.322.707-.36l1.41-.203.63-1.257a1.225 1.225 0 0 1 1.653-.53 1.2 1.2 0 0 1 .526.53l.63 1.258 1.41.202c.313.041.598.206.793.463.198.256.282.573.24.894a1.2 1.2 0 0 1-.363.716m-3.8-7.788c-4.425 0-8.025 3.601-8.025 8.027 0 5.636 6.592 10.973 8.025 10.973 1.435 0 8.027-5.337 8.027-10.973 0-4.426-3.6-8.027-8.026-8.027"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinStarBold;
