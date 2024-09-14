import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotification2Lightsharp = ({
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
      strokeWidth={1.5}
      d="M12.25 4.297a6.31 6.31 0 0 1 6.309 6.309v2.793c0 1.886.573 3.728 1.644 5.28H4.297a9.3 9.3 0 0 0 1.644-5.28v-2.793a6.31 6.31 0 0 1 6.309-6.309Zm0 0V2.138M15.48 18.68v.23a3.228 3.228 0 1 1-6.458 0v-.23"
    />
  </Svg>
);
export default IconlystNotification2Lightsharp;
