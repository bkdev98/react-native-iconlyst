import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageCloseLight = ({
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
      d="m3.006 15.572 3.949-2.866a3.86 3.86 0 0 1 4.816.224l7.694 6.903"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 15.474c-.839-.77-2.145-1.999-3.92-1.043a28 28 0 0 0-2.174 1.316"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 10.954v5.022c0 2.945-1.843 5.022-4.787 5.022H7.778C4.833 20.998 3 18.92 3 15.976V8.03c0-2.944 1.843-5.021 4.778-5.021h4.534M20.786 3.672 17.1 7.358M20.788 7.358l-3.686-3.686"
    />
  </Svg>
);
export default IconlystImageCloseLight;
