import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar8TwoTonesharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="m15.783 12 4.478-4.625-6.244 1.565-1.767-6.19-1.767 6.19L4.24 7.375 8.717 12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="m15.783 12 4.478 4.625-6.244-1.565-1.767 6.19-1.767-6.19-6.244 1.565L8.717 12"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStar8TwoTonesharp;
