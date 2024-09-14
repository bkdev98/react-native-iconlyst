import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKnifeAndForkTwoTone = ({
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
      d="M19.542 3.022c.004 3.003.005 15.38 0 17.167-.001.55-.336.899-.779.758-.279-.089-3.559-2.288-3.176-10.178.063-.82.418-1.371 1.027-1.792.11-.077 2.427-1.562 2.508-1.646.363-.37.46-.822.412-1.39"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.66 3-.205 5.218a3.248 3.248 0 0 0 6.496 0L11.747 3M8.703 11.465 8.704 21M8.703 7.789V3"
    />
  </Svg>
);
export default IconlystKnifeAndForkTwoTone;
