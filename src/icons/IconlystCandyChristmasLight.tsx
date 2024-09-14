import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCandyChristmasLight = ({
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
      d="M8.403 5.33a5.854 5.854 0 0 1 8.28 8.279l-7.37 7.37a2.173 2.173 0 0 1-3.074-3.074l7.37-7.37a1.508 1.508 0 0 0-2.133-2.132 2.173 2.173 0 0 1-3.073-3.074M13.53 8.311l3.046-3.045M11.233 3.78l.43 4.441M13.822 10.265l4.444.462M10.25 13.984l5.449.566M6.545 17.69l5.464.569"
    />
  </Svg>
);
export default IconlystCandyChristmasLight;
