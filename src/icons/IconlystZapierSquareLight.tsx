import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZapierSquareLight = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3M8.099 8.117l2.343 2.336M13.547 13.547l2.344 2.337M10.442 13.547 8.1 15.884M15.89 8.113l-2.344 2.337M17.503 12.002h-3.675M10.16 12.002H6.496M11.992 6.504v3.666M11.992 13.828v3.666"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.547 13.55a4.37 4.37 0 0 0 .001-3.094 4.393 4.393 0 0 0-3.103-.004 4.4 4.4 0 0 0-.284 1.549c0 .527.096 1.05.283 1.544a4.4 4.4 0 0 0 1.552.285 4.4 4.4 0 0 0 1.55-.28"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystZapierSquareLight;
