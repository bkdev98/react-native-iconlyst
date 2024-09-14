import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserCheckedBulk = ({
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
      d="M16.297 20.446a1 1 0 0 1-.708-.293l-1.704-1.707a1 1 0 1 1 1.416-1.413l.996.998 2.805-2.805a1 1 0 0 1 1.414 1.414l-3.512 3.513a1 1 0 0 1-.707.293M10.702 3.25a4.88 4.88 0 0 0-4.875 4.875 4.88 4.88 0 0 0 4.875 4.876 4.88 4.88 0 0 0 4.875-4.876 4.88 4.88 0 0 0-4.875-4.875"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.701 14.522c-4.98 0-7.21 2.75-7.21 5.48a.75.75 0 0 0 .75.75l5.81-.01 1.177-.002q.157-.004.305-.053c.425-.122.7-.47.7-.965V15.54c0-.611-.444-1.018-1.532-1.018"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUserCheckedBulk;
