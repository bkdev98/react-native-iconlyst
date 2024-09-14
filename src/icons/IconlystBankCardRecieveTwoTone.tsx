import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardRecieveTwoTone = ({
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
      d="M21.5 12.197v-3.49c0-2.443-1.52-4.168-3.965-4.168H7.465C5.028 4.54 3.5 6.264 3.5 8.706v6.587c0 2.442 1.52 4.168 3.965 4.168h3.749"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 9.834h18M14.6 16.967h6.617m-4.28-2.33L14.6 16.964l2.337 2.326"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBankCardRecieveTwoTone;
