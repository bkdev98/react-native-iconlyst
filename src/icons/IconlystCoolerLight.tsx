import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoolerLight = ({
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
      d="m6.89 15.665.796-2.013a1.41 1.41 0 0 1 1.313-.892h6.175c.579 0 1.1.353 1.313.892l.796 2.013M17.284 7.14h-1.82M12.025 17.922v2.258M14.666 17.923a2.26 2.26 0 0 0 2.258 2.257M9.247 17.923A2.26 2.26 0 0 1 6.99 20.18"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M20.791 12.744c-.265 1.384-1.056 2.585-3.301 2.892-.477.09-4.114.114-5.494.115s-4.662 0-5.48-.114c-2.136-.28-2.994-1.367-3.312-2.893a21.6 21.6 0 0 1 0-5.91c.194-.847.638-2.55 3.312-2.897.424-.082 3.449-.113 5.48-.117 2.16-.004 5.288.064 5.494.116 2.676.35 3.127 2.102 3.302 2.898.272 1.962.283 3.95 0 5.91Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoolerLight;
