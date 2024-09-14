import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashDownBroken = ({
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
      d="M8.633 20.398h.01c.62.258 1.277.44 1.953.544M6.192 18.91A8.2 8.2 0 0 1 5.01 17.72M3.57 15.241a8.8 8.8 0 0 1-.486-1.811M3.627 8.605a8.4 8.4 0 0 0-.543 1.964M6.307 4.973c-.439.362-.839.753-1.202 1.182M10.597 3.059c-.62.095-1.23.258-1.812.486M13.457 3.059a8.5 8.5 0 0 1 1.955.543 8.7 8.7 0 0 1 2.45 1.478q.66.544 1.192 1.2a8.9 8.9 0 0 1 1.43 2.47c.229.582.39 1.192.486 1.821q.114.7.114 1.43M20.427 15.375v.01a8.6 8.6 0 0 1-1.479 2.44 8 8 0 0 1-1.2 1.192 9 9 0 0 1-2.48 1.44 9 9 0 0 1-1.811.486M12.081 15.468V8.53m0 6.937 2.707-2.716m-2.707 2.716-2.704-2.716"
    />
  </Svg>
);
export default IconlystDashDownBroken;
