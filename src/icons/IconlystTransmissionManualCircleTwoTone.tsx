import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransmissionManualCircleTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.25 12.514a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.25 10.014v5M16.957 8.307a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414M16.299 15.98v.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.25 10.014v1.5a1 1 0 0 1-1 1h-7M12.957 8.307a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414M8.957 8.307A1 1 0 1 1 7.543 9.72a1 1 0 0 1 1.414-1.414M12.957 15.306a1 1 0 1 1-1.414 1.415 1 1 0 0 1 1.414-1.415M8.957 15.306a1 1 0 1 1-1.414 1.415 1 1 0 0 1 1.414-1.415M12.25 10.014v5"
    />
  </Svg>
);
export default IconlystTransmissionManualCircleTwoTone;
