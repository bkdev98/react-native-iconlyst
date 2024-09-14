import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunOffLight = ({
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
      d="m8.922 3.224.63 1.49M17.043 3.17l-.608 1.499M4.72 9.622l-1.499-.608M4.769 16.504l-1.49.63M17.928 10.087l-.839-.84a5.506 5.506 0 1 0-7.787 7.788l.839.839M21.054 6.961l-14.04 14.04"
    />
  </Svg>
);
export default IconlystSunOffLight;
