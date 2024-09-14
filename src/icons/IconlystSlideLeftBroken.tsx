import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlideLeftBroken = ({
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
      d="M13.33 20.821c-2.538.481-5.588.006-6.881-1.603-1.243-1.545-2.208-3.42-2.817-5.1-.326-.901.153-1.872 1.047-2.216a1.84 1.84 0 0 1 2.17.673l1.203 1.744V4.68a1.68 1.68 0 0 1 3.36-.026l.068 4.348c2.35.224 5.757.103 6.708 2.67.957 2.583.015 6.001-1.662 7.678M15.877 4.059 14.625 5.31l1.252 1.253M19.219 4.059 20.47 5.31l-1.252 1.253M20.47 5.313h-5.845"
    />
  </Svg>
);
export default IconlystSlideLeftBroken;
