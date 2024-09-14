import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneMuteHide2Broken = ({
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
      d="M5.96 16.874a2.28 2.28 0 0 1-.623-2.74l.47-.997c.325-.7.499-1.475.499-2.251V9.563M17.698 5.137A6.48 6.48 0 0 0 12.869 3a6.56 6.56 0 0 0-5.315 2.714M9.994 17.382h8.351c1.674 0 2.78-1.736 2.06-3.248l-.458-.989a5.3 5.3 0 0 1-.504-2.258V9.853c0-.36-.027-.712-.09-1.062M9.994 17.383l.023.945A3.08 3.08 0 0 0 13.076 21a3.09 3.09 0 0 0 2.46-1.218M4.371 18.46 19.593 3.236"
    />
  </Svg>
);
export default IconlystRingtoneMuteHide2Broken;
