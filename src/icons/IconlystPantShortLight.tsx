import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPantShortLight = ({
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
      d="M4.801 4.868a1.8 1.8 0 0 0-1.793 1.966l.98 10.667a1.8 1.8 0 0 0 1.793 1.636h2.266a1.8 1.8 0 0 0 1.722-1.274l1.751-5.72a.501.501 0 0 1 .96 0l1.751 5.72a1.8 1.8 0 0 0 1.721 1.274h2.267a1.8 1.8 0 0 0 1.793-1.636l.98-10.667A1.8 1.8 0 0 0 19.2 4.868z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.565 4.863v.107a6.12 6.12 0 0 1-5.167 6.052M15.434 4.863v.107a6.12 6.12 0 0 0 5.176 6.052"
    />
  </Svg>
);
export default IconlystPantShortLight;
