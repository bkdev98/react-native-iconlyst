import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeElectricityTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M5.094 9.047v8.675a3.064 3.064 0 0 0 3.064 3.064h8.88a3.064 3.064 0 0 0 3.063-3.064V9.047" />
      <Path d="M21.598 10.228 14.072 4.27a2.38 2.38 0 0 0-2.948 0l-7.526 5.958" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.598 16.445a3.105 3.105 0 0 1-3.105-3.105v-1.938c0-.34.275-.616.615-.616h4.98c.34 0 .615.276.615.616v1.938a3.105 3.105 0 0 1-3.105 3.105M12.597 16.45v4.333M10.978 10.785V8.781m3.24 2.004V8.781"
    />
  </Svg>
);
export default IconlystHomeElectricityTwoTone;
