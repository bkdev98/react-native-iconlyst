import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleSOngBold = ({
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
      d="M10.894 12.614a1.357 1.357 0 0 0-1.505 1.181c-.044.358.055.713.278.996s.543.466.902.508c.362.046.714-.056.997-.278a1.353 1.353 0 0 0-.673-2.407"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.082 10.126a.75.75 0 0 1-.948.476 3.3 3.3 0 0 1-1.054-.58l-.515 4.275q-.002.005-.003.011a2.84 2.84 0 0 1-1.069 1.892 2.83 2.83 0 0 1-2.102.588 2.83 2.83 0 0 1-1.903-1.07 2.84 2.84 0 0 1-.589-2.103 2.857 2.857 0 0 1 3.174-2.491c.489.059.926.25 1.301.517l.457-3.789a.75.75 0 0 1 .697-.659.766.766 0 0 1 .774.565c.011.039.303 1.089 1.304 1.42a.75.75 0 0 1 .476.948M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCircleSOngBold;
