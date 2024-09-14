import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLikePostCardTwoTone = ({
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
      d="M8.903 3h7.147c2.184 0 3.543 1.541 3.543 3.724v10.552c0 2.183-1.36 3.724-3.544 3.724H8.903c-2.184 0-3.543-1.541-3.543-3.724V6.724C5.36 4.54 6.725 3 8.903 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.056 9.006c-.285-.89.047-1.905.98-2.205a1.6 1.6 0 0 1 1.44.242 1.6 1.6 0 0 1 1.437-.242c.933.3 1.268 1.315.984 2.205-.443 1.408-2.42 2.492-2.42 2.492s-1.963-1.068-2.421-2.492"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.237 17.274h-3.524M15.396 14.538h-5.84"
    />
  </Svg>
);
export default IconlystLikePostCardTwoTone;
