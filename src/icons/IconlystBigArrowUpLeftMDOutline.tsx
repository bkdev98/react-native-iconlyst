import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowUpLeftMDOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M4.25 7A2.75 2.75 0 0 1 7 4.25h8a2.75 2.75 0 1 1 0 5.5h-1.36l5.305 5.306a2.75 2.75 0 1 1-3.89 3.889L9.75 13.639V15a2.75 2.75 0 1 1-5.5 0zM7 5.75c-.69 0-1.25.56-1.25 1.25v8a1.25 1.25 0 1 0 2.5 0v-3.172a.75.75 0 0 1 1.28-.53l6.586 6.586a1.25 1.25 0 0 0 1.768-1.768L11.298 9.53a.75.75 0 0 1 .53-1.28H15a1.25 1.25 0 1 0 0-2.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowUpLeftMDOutline;
