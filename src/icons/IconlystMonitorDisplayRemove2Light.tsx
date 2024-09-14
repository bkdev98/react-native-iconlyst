import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayRemove2Light = ({
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
      d="M13.947 3.89H6.911A3.91 3.91 0 0 0 3 7.802v5.296a3.91 3.91 0 0 0 3.91 3.91h9.651a3.91 3.91 0 0 0 3.91-3.91v-2.682M21 3.19l-3.855 3.855m3.855 0-3.855-3.856M6.936 20.81h9.597M9.681 17.008l-.618 3.801M13.79 17.008l.618 3.801"
    />
  </Svg>
);
export default IconlystMonitorDisplayRemove2Light;
