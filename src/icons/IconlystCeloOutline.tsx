import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCeloOutline = ({
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
      d="M2.5 14.43a7.318 7.318 0 1 1 14.636.002A7.318 7.318 0 0 1 2.5 14.43m7.318-5.817a5.818 5.818 0 1 0 0 11.636 5.818 5.818 0 0 0 0-11.636"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.363 9.567A7.318 7.318 0 1 1 22 9.57a7.318 7.318 0 0 1-14.636-.002m7.318-5.817a5.818 5.818 0 1 0 0 11.636 5.818 5.818 0 0 0 0-11.636"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCeloOutline;
