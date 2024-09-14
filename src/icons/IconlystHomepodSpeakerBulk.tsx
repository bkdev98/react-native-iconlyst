import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomepodSpeakerBulk = ({
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
      d="M18.61 4.216C17.427 3.029 15.392 2.5 12.014 2.5 4.6 2.5 4.025 5.33 4.025 9.327v5.346c0 3.997.574 6.827 7.99 6.827 3.377 0 5.412-.529 6.595-1.716 1.268-1.27 1.368-3.143 1.364-5.111V9.328c.004-1.969-.096-3.842-1.364-5.112"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M6.96 6.07c0 1.341 2.613 1.952 5.04 1.952s5.04-.61 5.04-1.953S14.425 4.116 12 4.116s-5.04.611-5.04 1.953"
    />
  </Svg>
);
export default IconlystHomepodSpeakerBulk;
