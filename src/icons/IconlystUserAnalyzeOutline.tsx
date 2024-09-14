import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserAnalyzeOutline = ({
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
      d="M11.384 4.234a3.95 3.95 0 1 0 0 7.902 3.95 3.95 0 0 0 0-7.902m-5.45 3.951a5.45 5.45 0 1 1 10.901 0 5.45 5.45 0 0 1-10.901 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.152 17.57a5.15 5.15 0 0 1 5.149-5.148h4.283c1.384 0 2.641.547 3.566 1.434a.75.75 0 0 1-1.04 1.082 3.63 3.63 0 0 0-2.526-1.016H9.301a3.65 3.65 0 0 0-3.649 3.649q0 .262-.005.497c-.007.486-.013.9.06 1.319a.75.75 0 0 1-1.479.256c-.099-.572-.089-1.177-.08-1.689q.003-.204.004-.383M20.438 17.15a.75.75 0 0 1 0 1.06l-2.377 2.377a.75.75 0 0 1-1.06 0l-1.333-1.332-1.786 1.786a.75.75 0 0 1-1.06-1.06l2.316-2.317a.75.75 0 0 1 1.06 0l1.333 1.332 1.847-1.847a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserAnalyzeOutline;
