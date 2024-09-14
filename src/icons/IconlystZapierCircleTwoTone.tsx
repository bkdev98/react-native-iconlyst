import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZapierCircleTwoTone = ({
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
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.098 8.117 2.343 2.336M13.547 13.547l2.344 2.337M10.441 13.547l-2.343 2.337M15.89 8.113l-2.345 2.337M17.503 12.006h-3.675M10.159 12.006H6.496M11.992 6.504v3.666M11.992 13.828v3.666"
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
export default IconlystZapierCircleTwoTone;
