import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleSOngBulk = ({
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
      d="M12.57 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5c5.24 0 9.5-4.262 9.5-9.5s-4.26-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.652 10.126a.75.75 0 0 1-.948.476 3.3 3.3 0 0 1-1.054-.58l-.515 4.275q-.001.006-.003.011a2.84 2.84 0 0 1-1.069 1.892 2.83 2.83 0 0 1-2.102.588 2.83 2.83 0 0 1-1.903-1.07 2.84 2.84 0 0 1-.589-2.103 2.857 2.857 0 0 1 3.174-2.49c.49.058.926.25 1.301.516l.457-3.789a.75.75 0 0 1 .697-.659.766.766 0 0 1 .774.565c.013.047.307 1.09 1.304 1.42a.75.75 0 0 1 .476.948m-5.35 2.478q.081 0 .162.01a1.353 1.353 0 1 1-.162-.01"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCircleSOngBulk;
