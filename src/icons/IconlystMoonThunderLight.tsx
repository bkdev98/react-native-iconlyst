import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonThunderLight = ({
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
      d="M18.415 14.778c0-2.17-1.533-3.444-3.43-3.461 0-1.365-1.071-4.095-4.095-4.095-1.499 0-2.518.67-3.165 1.514l-.32.462"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.363 15.762a2.12 2.12 0 0 1-1.248-1.933c0-1.33.94-2.11 2.102-2.12 0-.837.656-2.51 2.508-2.51 1.853 0 2.51 1.673 2.51 2.51M9.328 7.336a2.257 2.257 0 0 0-4.504-.218M3.115 8.24a1.184 1.184 0 0 1 2.295-.41M12.807 14.187l-1.301 3.175a.202.202 0 0 0 .19.272h1.38c.133 0 .23.126.196.254l-.597 2.236c-.055.207.207.346.348.186l3.128-3.57a.202.202 0 0 0-.152-.336H14.35a.202.202 0 0 1-.19-.27l.771-1.81M7.626 15.345l-.734 1.763h2.275l-.903 2.016M12.202 7.244a4.364 4.364 0 0 1 3.984-3.922c-1.292 3.49 1.293 6.048 4.707 4.703A4.365 4.365 0 0 1 17.088 12"
    />
  </Svg>
);
export default IconlystMoonThunderLight;
