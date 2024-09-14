import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallSilentBulksharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.885 14.032-2.945 1.695a9 9 0 0 1-2.047-1.052l7.971-8.502-1.095-1.026L3.13 21.83l1.094 1.026 4.158-4.436c2.06 1.754 5.141 3.592 9.057 3.592q.285 0 .575-.013l.12-.006.102-.058c1.603-.898 2.766-2.062 3.663-3.663l.215-.385z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m6.208 16.26 3.384-3.834-.197-.316a7.9 7.9 0 0 1-.812-1.728l1.699-2.95-3.698-5.08-.391.23c-1.582.927-2.742 2.088-3.651 3.651l-.059.16c-.476 2.542.84 6.232 3.354 9.4z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCallSilentBulksharp;
