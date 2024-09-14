import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamondBroken = ({
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
      d="M15.455 19.626c-1.731 1.731-4.033 1.876-5.767.142L4.73 14.81c-1.733-1.733-1.588-4.034.144-5.766l4.67-4.672c1.733-1.731 4.04-1.871 5.768-.143l4.958 4.958c1.733 1.733 1.589 4.035-.143 5.767l-2.336 2.336"
    />
  </Svg>
);
export default IconlystDiamondBroken;
