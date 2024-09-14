import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVote2Outline = ({
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
      d="M5.5 17.172a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.134 4.116a1.25 1.25 0 0 0-1.768 0l-6.172 6.172a1.25 1.25 0 0 0 0 1.768L9.78 16.64a.75.75 0 0 1-1.06 1.06l-4.586-4.585a2.75 2.75 0 0 1 0-3.889l6.171-6.172a2.75 2.75 0 0 1 3.89 0l2.085 2.086a.75.75 0 0 1-1.06 1.06zM19.306 9.227a.75.75 0 0 1 1.06 0 2.75 2.75 0 0 1 0 3.889L15.78 17.7a.75.75 0 1 1-1.06-1.06l4.585-4.586a1.25 1.25 0 0 0 0-1.768.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.023 5.774a.75.75 0 0 1 0 1.061l-6.867 6.867a.75.75 0 0 1-1.06 0l-2.542-2.541a.75.75 0 0 1 1.06-1.061l2.012 2.011 6.336-6.337a.75.75 0 0 1 1.061 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 16.172a2.75 2.75 0 0 1 2.75-2.75h1a.75.75 0 0 1 0 1.5h-1c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25v-2c0-.69-.56-1.25-1.25-1.25h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 1 2.75 2.75v2a2.75 2.75 0 0 1-2.75 2.75h-14a2.75 2.75 0 0 1-2.75-2.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVote2Outline;
