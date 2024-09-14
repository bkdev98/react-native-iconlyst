import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIPhoneTwoTone = ({
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
      d="M18.875 6.618v10.764A3.62 3.62 0 0 1 15.258 21H9.743a3.62 3.62 0 0 1-3.618-3.617L6.124 6.618A3.62 3.62 0 0 1 9.742 3h5.515a3.62 3.62 0 0 1 3.618 3.618"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.135 14.862h12.732M12.5 17.981v-.048m0-.253a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystIPhoneTwoTone;
