import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtonePlayingTwoTone = ({
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
      d="M11.862 17.253c-4.827-.898-6.94-1.96-6.673-4.592.482-2.589 2.009-2.134 2.6-5.312.462-2.483 3.244-4.888 6.707-4.243s5.192 3.889 4.73 6.372c-.591 3.178.997 3.301.514 5.891-.7 2.562-3.052 2.782-7.878 1.884"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.72 19.965A2.71 2.71 0 0 0 12.837 21c.854 0 1.617-.4 2.125-1.035"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRingtonePlayingTwoTone;
