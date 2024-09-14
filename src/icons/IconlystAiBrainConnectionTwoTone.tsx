import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainConnectionTwoTone = ({
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
      d="M6.114 21.5s.507-4.775-.322-6.77c-1.08-2.603-2.334-5.002-1.08-7.891 1.284-2.962 4.16-4.267 7.236-4.336 1.843-.04 3.593.281 5.035 1.497 2.358 1.988 2.071 4.811 2.52 7.13.203 1.047 1.019 2.164 1.294 3.291.2 1.27-1.62.586-1.839 1.723l-.12 2.328a1.14 1.14 0 0 1-1.061.926l-2.605.122a.653.653 0 0 0-.618.652V21.5l-2.806-.023"
      opacity={0.4}
    />
    <Circle
      cx={11.779}
      cy={10.738}
      r={1.25}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.01 13.508a3.917 3.917 0 0 1 0-5.54M14.549 13.508a3.917 3.917 0 0 0 0-5.54M11.748 11.992v9.484"
    />
  </Svg>
);
export default IconlystAiBrainConnectionTwoTone;
