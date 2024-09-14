import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCelciusDegreeTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.605 10.467a4.59 4.59 0 1 0 0 6.49 1.35 1.35 0 1 1 1.908 1.908 7.288 7.288 0 1 1 0-10.306 1.35 1.35 0 0 1-1.908 1.908"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.032 6.425a1.713 1.713 0 1 0 0-3.426 1.713 1.713 0 0 0 0 3.426"
    />
  </Svg>
);
export default IconlystCelciusDegreeTwoTone;
