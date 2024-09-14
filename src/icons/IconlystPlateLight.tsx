import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlateLight = ({
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
      d="M20.99 9.154c.01.125.01.239.01.363 0 2.298-1.618 4.302-4.075 5.468.034.113.13.73.039.922-.125.238-.283 1.212-4.97 1.212-4.676 0-4.834-.974-4.959-1.212-.09-.18 0-.832.034-.956C4.624 13.785 3 11.804 3 9.517c0-.124 0-.238.012-.363"
    />
    <Ellipse
      cx={12}
      cy={8.948}
      stroke={props.color}
      strokeWidth={1.5}
      rx={9}
      ry={2.06}
    />
  </Svg>
);
export default IconlystPlateLight;
