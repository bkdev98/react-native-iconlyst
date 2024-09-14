import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunRainyTwoTone = ({
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
      d="m17.019 3.62-.006.02m-4.428.545.009.016m7.936 2.174.036-.02m.549 4.455-.027-.008M12.508 7.458a3.464 3.464 0 1 1 4.893 4.674"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.414 14.778c0-2.17-1.533-3.444-3.43-3.461 0-1.365-1.071-4.095-4.095-4.095-1.499 0-2.518.67-3.164 1.514l-.322.462"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.362 15.762a2.12 2.12 0 0 1-1.248-1.933c0-1.33.94-2.11 2.102-2.12 0-.837.656-2.51 2.508-2.51 1.853 0 2.51 1.673 2.51 2.51M9.327 7.336a2.257 2.257 0 0 0-4.504-.218M3.114 8.24a1.184 1.184 0 0 1 2.295-.41"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.806 14.187-1.301 3.175a.202.202 0 0 0 .19.272h1.38c.133 0 .23.126.196.254l-.597 2.236c-.055.207.207.346.348.186l3.128-3.57a.202.202 0 0 0-.152-.336H14.35a.202.202 0 0 1-.19-.27l.771-1.81M7.625 15.345l-.734 1.763h2.275l-.902 2.016"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSunRainyTwoTone;
