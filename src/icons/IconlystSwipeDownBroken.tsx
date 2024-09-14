import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeDownBroken = ({
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
      d="M13.968 20.984c-2.471.386-5.328-.113-6.569-1.656-1.243-1.545-2.208-3.42-2.817-5.1-.326-.902.153-1.873 1.048-2.216a1.836 1.836 0 0 1 2.17.672l1.202 1.744V4.79a1.68 1.68 0 0 1 3.361-.026l.067 4.348c2.352.224 5.757.103 6.708 2.67.957 2.583.015 6.002-1.662 7.68M19.17 5.728l-1.545 1.545-1.546-1.545M17.65 7.273V2.892"
    />
  </Svg>
);
export default IconlystSwipeDownBroken;
