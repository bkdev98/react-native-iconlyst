import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCryingBroken = ({
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
      d="M3.25 12a9 9 0 0 0 15.708 6M20.046 7.5A9 9 0 0 0 12.25 3a9 9 0 0 0-8.132 5.138"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.37 15.324c.702-.913 1.734-1.482 2.88-1.482s2.179.569 2.88 1.482M8.336 9.637c.367.233.807.301 1.214.153s.7-.483.83-.897M13.997 8.893c.131.414.424.75.83.897.408.148.848.08 1.214-.153M20.736 12.516c.211.858-.27 1.714-1.075 1.911s-1.627-.337-1.838-1.195c-.382-1.554.883-2.689.883-2.689"
    />
  </Svg>
);
export default IconlystCryingBroken;
