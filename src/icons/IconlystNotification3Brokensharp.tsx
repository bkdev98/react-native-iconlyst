import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotification3Brokensharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M4.45 15.427v2.704h15.6v-2.704l-1.613-1.635v-3.58M12.25 3.024a6.187 6.187 0 0 0-6.187 6.188v4.58M15.417 18.131v.226a3.166 3.166 0 1 1-6.333 0v-.226M18.933 5.098a2.345 2.345 0 1 1-2.345-2.345"
    />
  </Svg>
);
export default IconlystNotification3Brokensharp;
