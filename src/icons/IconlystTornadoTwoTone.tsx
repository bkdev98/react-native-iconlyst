import * as React from 'react';
import Svg, { Ellipse, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTornadoTwoTone = ({
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
    <Ellipse
      cx={12.114}
      cy={7.559}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={9}
      ry={3.828}
    />
    <Ellipse
      cx={12.114}
      cy={7.559}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={9}
      ry={3.828}
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M12.115 11.387c-3.473 0-6.289 1.197-6.289 2.674s2.816 2.675 6.289 2.675c2.034 0 3.844-.411 4.993-1.049" />
      <Path d="M12.115 11.387c-3.473 0-6.289 1.197-6.289 2.674s2.816 2.675 6.289 2.675c2.034 0 3.844-.411 4.993-1.049M12.114 16.736c-2.293 0-4.153.79-4.153 1.766s1.86 1.767 4.153 1.767c1.192 0 2.266-.213 3.023-.555" />
      <Path d="M12.114 16.736c-2.293 0-4.153.79-4.153 1.766s1.86 1.767 4.153 1.767c1.192 0 2.266-.213 3.023-.555" />
    </G>
  </Svg>
);
export default IconlystTornadoTwoTone;
