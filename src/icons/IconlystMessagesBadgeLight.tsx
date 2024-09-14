import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesBadgeLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.163 4.572a2.232 2.232 0 1 1 0 4.464 2.232 2.232 0 0 1 0-4.464"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.208 12.592a8.98 8.98 0 0 1-2.636 6.382 9.01 9.01 0 0 1-10.157 1.804c-.493-.2-.896-.359-1.28-.359-1.068.007-2.398 1.043-3.089.353-.69-.691.345-2.021.345-3.096 0-.384-.153-.78-.352-1.273-1.54-3.332-.946-7.407 1.804-10.158a9 9 0 0 1 8.276-2.43"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.06 12.48v.07m.283-.055a.284.284 0 1 1-.569 0 .284.284 0 0 1 .57 0M9.357 12.48v.07m.283-.055a.285.285 0 1 1-.569 0 .285.285 0 0 1 .57 0"
    />
  </Svg>
);
export default IconlystMessagesBadgeLight;
