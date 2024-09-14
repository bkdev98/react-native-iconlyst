import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinSqaureTwoTone = ({
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
      d="M8.282 3h8.435C19.665 3 21.5 5.081 21.5 8.026v7.948c0 2.945-1.835 5.026-4.784 5.026H8.282C5.334 21 3.5 18.919 3.5 15.974V8.026C3.5 5.081 5.343 3 8.282 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.1 14.712.088-.783c.04-.359.2-.692.451-.95l.957-.972c.207-.211.498-.292.794-.279a.91.91 0 0 0 .746-.332c.308-.373.244-.931-.098-1.274l-2.42-2.419c-.342-.342-.9-.406-1.274-.098a.91.91 0 0 0-.332.746c.013.295-.068.587-.278.794l-.973.957a1.6 1.6 0 0 1-.95.451l-.782.087a1.014 1.014 0 0 0-.604 1.724l2.952 2.952c.6.6 1.629.24 1.723-.604"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.865 13.875-1.693 1.693"
    />
  </Svg>
);
export default IconlystPinSqaureTwoTone;
