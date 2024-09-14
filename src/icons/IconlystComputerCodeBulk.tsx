import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystComputerCodeBulk = ({
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
      d="M10.56 17.176h6.41c2.5 0 4.53-2.03 4.53-4.53v-5.46c0-2.5-2.03-4.53-4.53-4.53H7.03c-2.5 0-4.53 2.03-4.53 4.53v5.46c0 2.5 2.03 4.53 4.53 4.53h3.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m10.56 17.176-.43 2.67h3.74l-.43-2.67h1.52l.43 2.67h1.55c.42 0 .75.33.75.75 0 .41-.33.75-.75.75H7.06c-.42 0-.75-.34-.75-.75 0-.42.33-.75.75-.75h1.55l.43-2.67z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.709 13.236h-3.047a.75.75 0 0 1 0-1.5h3.047a.75.75 0 0 1 0 1.5m-6.889-.748a.74.74 0 0 1-.53.22.749.749 0 0 1-.53-1.28L9.417 9.77 7.76 8.112a.749.749 0 1 1 1.06-1.06l2.188 2.188a.75.75 0 0 1 0 1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystComputerCodeBulk;
