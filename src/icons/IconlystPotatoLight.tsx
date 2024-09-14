import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPotatoLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.978 9.462a3.29 3.29 0 0 1-3.074-3.038c-.226-3.033-4.397-4.33-6.676-2.744C2.893 6 3.21 12.11 4.847 15.15c2.258 4.194 6.99 7.034 11.49 5.364 1.833-.68 3.03-2.136 3.703-3.92 1.079-2.861-.763-6.926-4.062-7.132M8.184 8.294v.01M9.278 13.358v.01M15.778 12.947v.01M14.068 17.046v.01"
    />
  </Svg>
);
export default IconlystPotatoLight;
