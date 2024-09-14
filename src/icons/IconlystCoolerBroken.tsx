import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoolerBroken = ({
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
      d="m7.79 15.665.796-2.013a1.41 1.41 0 0 1 1.312-.892h2.027M18.183 15.665l-.796-2.013a1.41 1.41 0 0 0-1.313-.892H14.53M18.185 7.14h-1.82M12.925 17.922v2.258M15.566 17.923a2.26 2.26 0 0 0 2.259 2.257M10.148 17.923A2.26 2.26 0 0 1 7.89 20.18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.897 3.82c2.16-.004 5.287.064 5.493.115 2.676.35 3.127 2.103 3.302 2.899.272 1.961.284 3.95 0 5.91-.265 1.384-1.056 2.585-3.302 2.891-.477.09-4.113.115-5.493.116s-4.663 0-5.481-.114c-2.136-.28-2.994-1.367-3.312-2.893a21.6 21.6 0 0 1 0-5.91c.195-.848.638-2.55 3.312-2.898.25-.048 1.405-.079 2.727-.096"
    />
  </Svg>
);
export default IconlystCoolerBroken;
