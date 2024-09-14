import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentZip2Bold = ({
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
      d="M9.616 6.897a.746.746 0 0 1-.75-.745v-.01a.75.75 0 0 1 1.5 0 .755.755 0 0 1-.75.755m0 2.926a.746.746 0 0 1-.75-.745v-.01a.75.75 0 0 1 1.5 0 .755.755 0 0 1-.75.755m0 2.929a.746.746 0 0 1-.75-.745v-.01a.75.75 0 0 1 1.5 0 .754.754 0 0 1-.75.755m0 2.926a.746.746 0 0 1-.75-.745v-.01a.75.75 0 0 1 1.5 0 .755.755 0 0 1-.75.755m0 2.93a.746.746 0 0 1-.75-.745v-.01a.75.75 0 1 1 1.5 0 .754.754 0 0 1-.75.755M19.85 9.096h-2.962c-1.766-.01-3.223-1.472-3.223-3.255V2.703a.445.445 0 0 0-.444-.45H8.068c-2.402 0-4.351 1.98-4.351 4.397v10.506c0 2.534 2.045 4.59 4.554 4.59h7.67c2.404 0 4.343-1.96 4.343-4.376V9.535a.434.434 0 0 0-.434-.44"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.016 7.672c.673.007 1.608.01 2.4.007a.465.465 0 0 0 .332-.787c-.51-.534-1.218-1.279-1.93-2.027l-1.955-2.053a.46.46 0 0 0-.793.325v2.57c0 1.077.879 1.965 1.946 1.965"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentZip2Bold;
