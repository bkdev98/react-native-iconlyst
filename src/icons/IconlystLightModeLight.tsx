import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLightModeLight = ({
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
      d="M17.918 5.326 5.984 17.26M7.976 3.027l.012.03M3.096 7.921l.026.01M14.878 3.06l.024-.06M3.116 14.837l-.046.019M15.02 7.785a4.955 4.955 0 1 0-7.006 7.007"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.012 20.948c.018.02.004.052-.023.052a4.774 4.774 0 0 1-4.527-3.532 4.769 4.769 0 0 1 8.692-3.69c.015.024-.007.052-.033.046a4.31 4.31 0 0 0-4.686 2.045 4.3 4.3 0 0 0 .577 5.079"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLightModeLight;
