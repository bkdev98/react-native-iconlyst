import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadioTwoTone = ({
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
      d="M17.776 7.666H7.223A3.723 3.723 0 0 0 3.5 11.39v5.734a3.723 3.723 0 0 0 3.723 3.723h10.553a3.723 3.723 0 0 0 3.723-3.723V11.39a3.723 3.723 0 0 0-3.723-3.724M16.948 10.049v-.01m-2.82.01v-.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.33 16.3a1.386 1.386 0 1 0-2.772 0 1.386 1.386 0 0 0 2.772 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.948 17.432.75-2.264m-3.57 2.264.75-2.264M3.5 12.215h18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.463 7.665 6.015-4.51"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRadioTwoTone;
