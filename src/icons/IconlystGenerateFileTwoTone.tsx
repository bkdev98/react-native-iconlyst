import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGenerateFileTwoTone = ({
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
      d="M13.786 3c.557 0 1.092.227 1.478.63l3.791 3.95c.367.38.571.89.571 1.42v8.163A3.81 3.81 0 0 1 15.97 21l-7.926-.001a3.753 3.753 0 0 1-3.67-3.836V6.657A3.746 3.746 0 0 1 8.134 3z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.27 3.063v2.892a2.56 2.56 0 0 0 2.553 2.56h2.74"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.179 14.433-.095-.256a3.52 3.52 0 0 0-2.08-2.082L7.75 12l.256-.095a3.52 3.52 0 0 0 2.08-2.082l.094-.256.094.256a3.52 3.52 0 0 0 2.08 2.082l.255.095-.255.095a3.52 3.52 0 0 0-2.08 2.082zM15.15 16.224a1.66 1.66 0 0 0-1.102-1.103c.528-.161.94-.575 1.101-1.103.16.528.574.942 1.102 1.103-.528.16-.941.574-1.102 1.103"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGenerateFileTwoTone;
