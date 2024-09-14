import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouse5Bulk = ({
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
      d="M19.196 9.295C19.194 5.548 15.965 2.5 12 2.5c-1.915 0-3.72.703-5.078 1.981-1.367 1.284-2.12 2.995-2.119 4.816l.002 5.409c0 3.746 3.228 6.794 7.197 6.794 1.915 0 3.718-.703 5.076-1.98 1.367-1.285 2.12-2.996 2.119-4.817z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.1 10.923h5.802a.75.75 0 0 0 0-1.5h-2.15V7.271a.75.75 0 0 0-1.5 0v2.152H9.1a.75.75 0 0 0 0 1.5"
    />
  </Svg>
);
export default IconlystMouse5Bulk;