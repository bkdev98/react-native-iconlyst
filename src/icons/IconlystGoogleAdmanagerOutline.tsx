import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAdmanagerOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.919 6.885a2.408 2.408 0 0 1 3.405 3.405l-7.034 7.034a2.408 2.408 0 0 1-3.405-3.406zm2.344 1.06a.91.91 0 0 0-1.284 0L7.946 14.98a.908.908 0 0 0 1.283 1.284l7.034-7.034a.91.91 0 0 0 0-1.283"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.42 10.385a2.408 2.408 0 1 1 3.405 3.405 2.408 2.408 0 0 1-3.405-3.405m2.345 1.06a.908.908 0 1 0-1.284 1.285.908.908 0 0 0 1.284-1.284M9.989 2.955a2.408 2.408 0 1 1 3.405 3.405L6.36 13.394a2.408 2.408 0 0 1-3.405-3.405zm2.344 1.06a.91.91 0 0 0-1.283 0L4.016 11.05A.908.908 0 0 0 5.3 12.333L12.333 5.3a.91.91 0 0 0 0-1.284"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.988 2.955a2.408 2.408 0 1 1 3.406 3.405 2.408 2.408 0 0 1-3.406-3.405m2.345 1.06A.908.908 0 1 0 11.049 5.3a.908.908 0 0 0 1.284-1.284M17.64 10.604a2.408 2.408 0 1 1 3.404 3.405l-7.033 7.034a2.408 2.408 0 0 1-3.405-3.406zm2.344 1.06a.91.91 0 0 0-1.284 0l-7.034 7.034a.908.908 0 0 0 1.284 1.284l7.034-7.034a.91.91 0 0 0 0-1.284"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.606 17.639a2.408 2.408 0 1 1 3.405 3.405 2.408 2.408 0 0 1-3.405-3.405m2.344 1.06a.908.908 0 1 0-1.284 1.285.908.908 0 0 0 1.284-1.285"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleAdmanagerOutline;
