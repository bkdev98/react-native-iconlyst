import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChampignonLight = ({
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
      d="M7.19 9.631c1.004-.467 2.375.213 2.29 1.706a2.644 2.644 0 0 1-2.71 2.574h.007a3.32 3.32 0 0 1-3.2-3.428C3.71 5.962 7.472 3 11.997 3c4.524 0 8.293 2.962 8.426 7.483a3.32 3.32 0 0 1-3.2 3.428h.006a2.644 2.644 0 0 1-2.708-2.574c-.069-1.199 1.256-2.311 2.408-1.706"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.468 7.071c-.859-.81-2.264-.742-2.936.174M14.53 11.619c.257 1.859 2.486 8.372-.396 9.1-1.466.37-2.662.38-4.136-.002-2.817-.73-.732-7.24-.514-9.098"
    />
  </Svg>
);
export default IconlystChampignonLight;
