import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNoteLockLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.48 21.283H7.89a4.12 4.12 0 0 1-4.12-4.12v-9.76a4.12 4.12 0 0 1 4.12-4.12h7.096a4.12 4.12 0 0 1 4.12 4.12v3.364M11.55 14.364H8.896m5.084-4.436H8.897z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.831 21.283h-2.82c-.773 0-1.4-.626-1.4-1.4V18.3a1.4 1.4 0 0 1 1.4-1.4h2.82c.773 0 1.4.628 1.4 1.4v1.583a1.4 1.4 0 0 1-1.4 1.4"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.105 16.926v-1.042a1.684 1.684 0 0 0-3.367-.008v1.05"
    />
  </Svg>
);
export default IconlystNoteLockLight;
