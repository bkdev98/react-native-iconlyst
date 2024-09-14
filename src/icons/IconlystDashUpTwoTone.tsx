import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashUpTwoTone = ({
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
      d="M6.442 18.91A8.2 8.2 0 0 1 5.26 17.72M3.82 15.242a8.8 8.8 0 0 1-.486-1.812M3.877 8.605a8.4 8.4 0 0 0-.543 1.964M6.557 4.973c-.439.362-.839.753-1.202 1.182M8.883 20.4h.01c.62.258 1.277.44 1.953.544m.001-17.885c-.62.095-1.23.258-1.812.486"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.707 3.059a8.5 8.5 0 0 1 1.955.543 8.7 8.7 0 0 1 2.45 1.478q.66.544 1.192 1.2a8.9 8.9 0 0 1 1.43 2.47q.343.875.486 1.822.114.7.114 1.43 0 .729-.114 1.43a8.3 8.3 0 0 1-.543 1.945v.01a8.6 8.6 0 0 1-1.479 2.44c-.352.438-.762.839-1.2 1.192a9 9 0 0 1-2.48 1.44c-.581.219-1.191.39-1.811.486"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.334 8.531v6.937m0-6.937-2.707 2.716m2.707-2.716 2.704 2.716"
    />
  </Svg>
);
export default IconlystDashUpTwoTone;
