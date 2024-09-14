import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpDiamondLight = ({
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
      d="m14.812 4.228 4.958 4.958c1.733 1.734 1.589 4.036-.143 5.767l-4.672 4.672c-1.731 1.731-4.033 1.876-5.767.142L4.23 14.81c-1.733-1.733-1.588-4.035.144-5.767l4.67-4.672c1.733-1.731 4.04-1.871 5.768-.143"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.793 11.223-2.794-2.804-2.792 2.804M12 8.42v7.162"
    />
  </Svg>
);
export default IconlystUpDiamondLight;
