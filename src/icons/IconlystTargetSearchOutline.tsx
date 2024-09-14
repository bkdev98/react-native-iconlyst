import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTargetSearchOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.759 2.85a.75.75 0 0 1 .896-.566 9.33 9.33 0 0 1 7.035 7.035.75.75 0 1 1-1.463.33 7.83 7.83 0 0 0-5.902-5.902.75.75 0 0 1-.566-.897m-2.309 0a.75.75 0 0 1-.567.897 7.82 7.82 0 0 0-5.901 5.901.75.75 0 0 1-1.464-.329 9.32 9.32 0 0 1 7.036-7.035.75.75 0 0 1 .896.567m1.226 6.426a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92m-3.46 1.961a3.46 3.46 0 1 1 6.92 0 3.46 3.46 0 0 1-6.92 0m-5.13 1.287a.75.75 0 0 1 .896.566 7.83 7.83 0 0 0 5.901 5.902.75.75 0 1 1-.329 1.463 9.33 9.33 0 0 1-7.035-7.035.75.75 0 0 1 .566-.896m17.037 0a.75.75 0 0 1 .567.896 9.3 9.3 0 0 1-1.983 3.968l3.073 3.066a.75.75 0 1 1-1.06 1.062l-3.072-3.065a9.3 9.3 0 0 1-3.993 2.004.75.75 0 1 1-.33-1.463 7.84 7.84 0 0 0 5.902-5.902.75.75 0 0 1 .896-.566"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTargetSearchOutline;
