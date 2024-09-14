import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCatLocationLight = ({
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
      d="M10.804 20.587c-1.473.448-2.838.614-3.65.63.072-1.459.267-3.123.634-5.2.307-1.739-.958-2.975-2.428-2.975-1.952 0-2.837-2.345-2.56-3.463 1.014 0 1.71-.546 2.132-1.573.731-1.78 2.21-2.235 3.95-2.235V2.938c3.112 1.289 5.54 3.795 6.16 7.192M8.277 9.086v.015M13.739 16.7c0 2.356 2.782 4.609 3.312 4.609s3.313-2.253 3.313-4.61a3.312 3.312 0 1 0-6.625 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.057 16.3v-.05m-.007-.154a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45"
    />
  </Svg>
);
export default IconlystCatLocationLight;
