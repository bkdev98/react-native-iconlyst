import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockLightcurved = ({
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
      d="M16.47 9.403V7.254a4.561 4.561 0 0 0-9.12-.02v2.17M11.91 14.156v2.221"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.91 8.824c-5.745 0-7.66 1.568-7.66 6.271 0 4.704 1.915 6.272 7.66 6.272s7.661-1.568 7.661-6.272c0-4.703-1.916-6.27-7.66-6.27"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLockLightcurved;
