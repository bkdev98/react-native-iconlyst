import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwitterTwoTone = ({
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
      d="M11.655 8.799c-.194-1.521.646-3.982 2.732-4.616 2.576-.783 4.332 1.575 4.332 1.575L21 5.417l-1.6 2.421.026.232c.405 6.426-3.17 11.478-9.597 11.884-1.843.116-5.191-.223-6.829-2.197a8.62 8.62 0 0 0 5.167-1.52"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.654 8.798a13.2 13.2 0 0 1-7.667-3.833c-1.075 6.4 1.027 9.505 4.18 11.273"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTwitterTwoTone;
