import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRestartBroken = ({
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
      d="m18.614 5.637-1.721 1.72M5.886 18.366l1.721-1.723m11.007 1.723-1.721-1.723M5.886 5.637l1.721 1.72M12.25 3v2.434m0 15.566v-2.434m9-6.566h-2.434M3.25 12h2.434"
    />
  </Svg>
);
export default IconlystRestartBroken;
