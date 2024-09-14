import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollar2Light = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.556 9.27v-.128a2.216 2.216 0 0 0-2.217-2.216h-2.216a2.677 2.677 0 1 0 0 5.354h1.86a2.573 2.573 0 1 1 0 5.148h-2.32a2.22 2.22 0 0 1-2.217-2.218M11.998 5.063v14"
    />
  </Svg>
);
export default IconlystDollar2Light;
