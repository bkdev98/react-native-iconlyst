import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRepeatGenerateAiLight = ({
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
      d="M13.21 6.388h2.177c1.542 0 2.947.629 3.965 1.647A5.57 5.57 0 0 1 20.999 12a5.57 5.57 0 0 1-1.311 3.598M12.768 14.988l2.622 2.622-2.622 2.623"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.389 17.613H8.61a5.6 5.6 0 0 1-3.965-1.647A5.58 5.58 0 0 1 3 12M6.573 9.294l-.094-.254a3.5 3.5 0 0 0-2.063-2.066l-.254-.094.254-.094A3.5 3.5 0 0 0 6.479 4.72l.094-.254.093.254A3.5 3.5 0 0 0 8.73 6.786l.254.094-.254.094A3.5 3.5 0 0 0 6.666 9.04zM11.252 11.482a1.64 1.64 0 0 0-1.092-1.094c.523-.16.933-.57 1.092-1.094.16.524.57.935 1.093 1.094-.524.16-.934.57-1.093 1.094"
    />
  </Svg>
);
export default IconlystRepeatGenerateAiLight;
