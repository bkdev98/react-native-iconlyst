import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowHatBroken = ({
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
      d="M13.745 5.33A1.746 1.746 0 1 1 12 3.584M19.53 14.936c1.349.495 1.7 1.396 1.72 2.98.038 3.163-1.971 3.647-9.25 3.73-7.279-.083-9.288-.567-9.25-3.73.02-1.584.371-2.486 1.72-2.98"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.149 15.844c2.955.184 5.61-.07 9.365-.754 0-3.848-3.363-8.014-7.513-8.014s-7.515 4.166-7.515 8.014c.962.177 1.852.324 2.693.443M11.999 9.833v3.312M13.435 10.662l-2.869 1.656M13.435 12.317l-2.869-1.656M12 18.897v2.749M6.193 18.82v2.483M17.81 18.82v2.483"
    />
  </Svg>
);
export default IconlystSnowHatBroken;
