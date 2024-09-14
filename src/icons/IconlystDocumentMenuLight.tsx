import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentMenuLight = ({
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
      d="M10.22 10.73h3.365c1.176 0 1.908.83 1.908 2.006v2.694c0 1.175-.732 2.005-1.908 2.005h-3.366c-1.177 0-1.908-.83-1.908-2.005v-2.694c0-1.175.735-2.006 1.908-2.006M11.902 17.435v-6.704M8.31 14.083h7.182"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.786 3c.557 0 1.092.227 1.478.63l3.791 3.95c.367.38.571.89.571 1.42v8.163A3.81 3.81 0 0 1 15.97 21l-7.926-.001a3.753 3.753 0 0 1-3.67-3.836V6.657A3.746 3.746 0 0 1 8.134 3z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.27 3.063v2.892a2.56 2.56 0 0 0 2.553 2.56h2.74"
    />
  </Svg>
);
export default IconlystDocumentMenuLight;
