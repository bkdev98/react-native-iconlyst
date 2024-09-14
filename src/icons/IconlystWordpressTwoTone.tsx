import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWordpressTwoTone = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M4.194 7.762h3.034M9.869 17.563 6.397 7.762M9.435 7.762h4.735M16.811 17.563 13.34 7.762M18.572 12.658l.875-2.091c.35-.964.474-1.994.36-3.012m-1.235 5.103c.558-1.535-.659-3.351-2.03-4.99-.85-1.017-.197-2.512 1.138-2.512m.892 7.502-2.373 6.693c-.231.653-1.15.665-1.4.019L10.343 7.81M11.905 12.01 9.217 19.35c-.232.653-1.15.666-1.4.02L4.023 9.53l-.346-.87" />
    </G>
  </Svg>
);
export default IconlystWordpressTwoTone;
