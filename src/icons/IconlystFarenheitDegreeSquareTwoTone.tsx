import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFarenheitDegreeSquareTwoTone = ({
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
      d="M8.997 8.658v.048m.19-.037a.196.196 0 1 1-.392 0 .196.196 0 0 1 .391 0M15.434 9.503h-3.1a.5.5 0 0 0-.5.5v6.38M15.434 13.234h-3.6"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.896 3h8.435c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026H7.896c-2.948 0-4.782-2.081-4.782-5.026V8.026C3.114 5.081 4.957 3 7.896 3"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFarenheitDegreeSquareTwoTone;
