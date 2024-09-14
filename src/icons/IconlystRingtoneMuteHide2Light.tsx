import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneMuteHide2Light = ({
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
      d="M5.46 16.875a2.28 2.28 0 0 1-.623-2.74l.47-.998c.325-.7.499-1.475.499-2.251V9.564A6.567 6.567 0 0 1 12.369 3a6.48 6.48 0 0 1 4.829 2.137M9.494 17.382h8.351c1.674 0 2.78-1.736 2.06-3.248l-.458-.989a5.3 5.3 0 0 1-.504-2.258V9.853c0-.36-.027-.712-.09-1.062M15.67 17.473v.432A3.095 3.095 0 0 1 12.577 21a3.08 3.08 0 0 1-3.06-2.672l-.022-.945M3.871 18.46 19.093 3.236"
    />
  </Svg>
);
export default IconlystRingtoneMuteHide2Light;
