import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpDiamondBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.955 19.938c-1.731 1.73-4.033 1.876-5.767.142L4.23 15.122c-1.733-1.732-1.588-4.035.144-5.766l4.67-4.673c1.733-1.73 4.04-1.87 5.768-.143L19.77 9.5c1.733 1.733 1.589 4.035-.143 5.766l-2.336 2.337"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.793 11.534 11.999 8.73l-2.792 2.804M12 8.734v7.162"
    />
  </Svg>
);
export default IconlystUpDiamondBroken;
