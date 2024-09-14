import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVacuumCleanerBroken = ({
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
      d="M5.719 20.324a2.72 2.72 0 1 0-2.213-1.14"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.87 10.636c2.903.519 7.426 4.046 5.861 7.297-.593 1.235-1.888 1.927-3.275 2.024-1.715.066-3.39-.052-5.056-.215M4.288 15.247c-.026-1.948 1.002-3.485 2.518-4.22M17.875 19.854H21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.045 13.898c.02-.037 1.402.403 1.998 1.742M13.156 12.124c.67-.916.956-2.11.7-3.224-.248-1.083-1.2-1.708-1.52-2.734-.348-1.117.444-2.302 1.585-2.47 1.241-.183 2.267.958 2.934 1.884 2.941 4.066 2.334 8.21 2.317 13.002v1.276"
    />
  </Svg>
);
export default IconlystVacuumCleanerBroken;
