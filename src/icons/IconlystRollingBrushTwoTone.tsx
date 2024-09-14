import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRollingBrushTwoTone = ({
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
      d="M11.553 21a1.894 1.894 0 0 1-1.895-1.894v-2.843a1.894 1.894 0 1 1 3.789 0v2.843a1.894 1.894 0 0 1-1.894 1.895"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.184 5.842a2.843 2.843 0 0 1 0 5.685h-3.79a2.84 2.84 0 0 0-2.841 2.841"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.343 8.684H6.817a2.842 2.842 0 0 1 0-5.684h8.526a2.842 2.842 0 0 1 0 5.684"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRollingBrushTwoTone;
