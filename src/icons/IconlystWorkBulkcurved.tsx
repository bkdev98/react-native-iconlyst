import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorkBulkcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.74 4.862c0-.849.588-1.539 1.31-1.539h2.4c.722 0 1.31.69 1.31 1.54v.023c-.766-.077-1.6-.115-2.51-.115q-1.364 0-2.51.115zm-6.984 5.92c2.61 1.608 5.99 2.495 9.514 2.498 3.518-.003 6.89-.887 9.496-2.488-.528-3.264-2.193-5-5.506-5.675v-.255c0-1.676-1.26-3.039-2.81-3.039h-2.4c-1.549 0-2.81 1.363-2.81 3.04v.254c-3.308.674-4.972 2.405-5.504 5.657.007.004.014.004.02.008"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13 14.818v2.163a.75.75 0 0 1-1.5 0v-2.164c-3.261-.11-6.379-.923-8.936-2.332q-.023.477-.024.989c0 6.426 2.541 8.703 9.71 8.703s9.71-2.277 9.71-8.703q0-.5-.022-.966c-2.561 1.4-5.679 2.207-8.938 2.31"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWorkBulkcurved;
