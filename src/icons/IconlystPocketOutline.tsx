import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPocketOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M2.8 10.35a.746.746 0 0 1-.522-.92L3.47 5.14a1.6 1.6 0 0 1 1.17-1.128 1 1 0 0 1 .136-.032 1 1 0 0 1 .109-.005q.06-.005.12-.005h13.99q.05 0 .098.003a.7.7 0 0 1 .267.04 1.6 1.6 0 0 1 1.172 1.127l1.192 4.29a.75.75 0 0 1-1.446.4l-.755-2.714-1.6 10.644c-.075.5-.318.92-.66 1.24-.002 0-.006 0-.01.01a2.12 2.12 0 0 1-1.384.52h-7.93c-.517 0-.998-.198-1.359-.515l-.004.005a2.1 2.1 0 0 1-.693-1.28l-.001-.01L4.454 7.201l-.73 2.629a.75.75 0 0 1-.924.52m3.256-2.499 1.25 9.218 4.036-4.48-1.489-1.949H9.02c-.692 0-1.345-.34-1.728-.92l.001-.001zM8.544 8.89c.102.16.28.25.476.25h5.96c.195 0 .374-.09.475-.25l2.266-3.42H6.279zm9.338-.947L16.706 9.72c-.383.58-1.034.92-1.726.92h-3.24l4.794 6.277zM15.497 18.03l-3.23-4.23-3.812 4.23z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPocketOutline;
