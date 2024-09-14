import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneTabletBroken = ({
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
      d="M9.796 19.993H7.562a3.416 3.416 0 0 1-3.416-3.415v-5.08M19.689 6.415A3.415 3.415 0 0 0 16.273 3H7.56a3.416 3.416 0 0 0-3.416 3.416v1.979M10.709 6.102h1.677M20.855 18.58a2.42 2.42 0 0 1-2.42 2.42h-3.688a2.42 2.42 0 0 1-2.42-2.42v-7.2a2.42 2.42 0 0 1 2.419-2.42h3.688a2.42 2.42 0 0 1 2.42 2.42v3.716"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.596 18.145v-.001m0-.006a.01.01 0 0 0-.006.006q0 .005.006.006a.01.01 0 0 0 .006-.006.01.01 0 0 0-.006-.006"
    />
  </Svg>
);
export default IconlystPhoneTabletBroken;
