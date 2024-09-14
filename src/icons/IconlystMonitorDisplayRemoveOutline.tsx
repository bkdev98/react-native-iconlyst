import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayRemoveOutline = ({
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
      d="M2.5 7.314c0-2.639 2.14-4.779 4.778-4.779h9.943A4.78 4.78 0 0 1 22 7.315v5.456a4.78 4.78 0 0 1-4.78 4.779H7.279A4.78 4.78 0 0 1 2.5 12.77zm4.778-3.279A3.28 3.28 0 0 0 4 7.315v5.456a3.28 3.28 0 0 0 3.278 3.279h9.943a3.28 3.28 0 0 0 3.279-3.28V7.315a3.28 3.28 0 0 0-3.28-3.279zM6.555 20.715a.75.75 0 0 1 .75-.75h9.888a.75.75 0 0 1 0 1.5H7.305a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.733 7.626a.75.75 0 0 1 1.061 0l1.455 1.455 1.456-1.455a.75.75 0 0 1 1.06 1.06l-1.455 1.456 1.456 1.456a.75.75 0 0 1-1.061 1.06l-1.456-1.455-1.455 1.455a.75.75 0 0 1-1.06-1.06l1.455-1.456-1.456-1.455a.75.75 0 0 1 0-1.061M10.254 16.059a.75.75 0 0 1 .62.86l-.638 3.918a.75.75 0 0 1-1.48-.241l.637-3.918a.75.75 0 0 1 .86-.62M14.245 16.059a.75.75 0 0 1 .86.62l.638 3.917a.75.75 0 0 1-1.48.24l-.638-3.917a.75.75 0 0 1 .62-.86"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorDisplayRemoveOutline;
