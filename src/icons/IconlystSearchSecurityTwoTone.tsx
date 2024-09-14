import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchSecurityTwoTone = ({
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
      d="M20.261 12.746A8.19 8.19 0 0 1 3.955 11.68a8.19 8.19 0 0 1 7.169-8.125"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.713 17.676 21.044 21"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.07 8.934s2.507-.76 2.507-2.853.091-2.026-.11-2.229S18.399 3 18.07 3c-.33 0-2.196.65-2.398.852s-.11.136-.11 2.23 2.508 2.852 2.508 2.852"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSearchSecurityTwoTone;
