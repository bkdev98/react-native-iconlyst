import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpDiamondTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.312 4.54 20.27 9.5c1.733 1.733 1.589 4.035-.143 5.766l-4.672 4.673c-1.731 1.73-4.033 1.876-5.767.142L4.73 15.122c-1.733-1.732-1.588-4.035.144-5.766l4.67-4.673c1.733-1.73 4.04-1.87 5.768-.143"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.293 11.535-2.794-2.804-2.792 2.804M12.5 8.733v7.162"
    />
  </Svg>
);
export default IconlystUpDiamondTwoTone;
