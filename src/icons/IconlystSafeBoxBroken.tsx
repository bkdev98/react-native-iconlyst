import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSafeBoxBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 2.69H7.434A4.183 4.183 0 0 0 3.25 6.871v7.435a4.18 4.18 0 0 0 4.183 4.181h9.634a4.18 4.18 0 0 0 4.183-4.182V6.872a4.18 4.18 0 0 0-4.182-4.183h-1.426M18.619 20.82h-2.263M8.147 20.82H5.884M14.662 7.367v1.074M14.662 12.734v1.075M11.869 8.978l.927.537M16.526 11.662l.927.537M11.869 12.199l.927-.537M16.526 9.515l.927-.537"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.18 9.068a2.148 2.148 0 1 1-3.038 3.038 2.148 2.148 0 0 1 3.038-3.038M8.55 7.375h-.39a1.11 1.11 0 0 0-1.11 1.11v4.204c0 .612.496 1.11 1.11 1.11h.39"
    />
  </Svg>
);
export default IconlystSafeBoxBroken;
