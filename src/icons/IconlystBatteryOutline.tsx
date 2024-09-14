import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBatteryOutline = ({
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
      d="M3.668 7.192c.778-.834 1.881-1.296 3.17-1.296h10.824c1.29 0 2.395.461 3.172 1.296.772.829 1.166 1.965 1.166 3.225v5.962c0 1.26-.394 2.396-1.166 3.226-.778.834-1.882 1.295-3.173 1.295H6.837c-1.29 0-2.395-.46-3.172-1.296C2.894 18.775 2.5 17.64 2.5 16.38v-5.962c0-1.26.396-2.397 1.168-3.225m1.098 1.023C4.296 8.719 4 9.468 4 10.417v5.962c0 .95.294 1.7.763 2.203.464.499 1.154.818 2.074.818h10.824c.92 0 1.611-.32 2.075-.818.47-.504.764-1.253.764-2.203v-5.962c0-.95-.294-1.698-.764-2.203-.464-.498-1.154-.818-2.074-.818H6.837c-.916 0-1.607.32-2.071.819"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.653 10.861a.75.75 0 0 1 .75.75v1.049h1.05a.75.75 0 0 1 0 1.5h-1.05v1.049a.75.75 0 0 1-1.5 0V14.16h-1.05a.75.75 0 0 1 0-1.5h1.05v-1.049a.75.75 0 0 1 .75-.75M13.299 13.408a.75.75 0 0 1 .75-.75h3.597a.75.75 0 0 1 0 1.5h-3.597a.75.75 0 0 1-.75-.75M6.064 5.249a2.15 2.15 0 0 1 4.299 0v1.399a.75.75 0 0 1-1.5 0v-1.4a.65.65 0 0 0-1.299 0v1.4a.75.75 0 1 1-1.5 0zM14.137 5.249a2.15 2.15 0 0 1 4.298 0v1.399a.75.75 0 0 1-1.5 0v-1.4a.65.65 0 0 0-1.298 0v1.4a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBatteryOutline;
