import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpaceStarsCircleLight = ({
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
      d="M18.478 5.637A9 9 0 1 1 5.75 18.364 9 9 0 0 1 18.478 5.637"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.16 9.471a3.67 3.67 0 0 1 2.358 2.36 3.67 3.67 0 0 1 2.36-2.36 3.67 3.67 0 0 1-2.36-2.359 3.67 3.67 0 0 1-2.359 2.36M10.183 15.405a3.1 3.1 0 0 1 1.993 1.993 3.1 3.1 0 0 1 1.992-1.993 3.1 3.1 0 0 1-1.992-1.993 3.1 3.1 0 0 1-1.993 1.993M14.162 11.134c.81.263 1.446.898 1.708 1.708a2.66 2.66 0 0 1 1.709-1.708 2.66 2.66 0 0 1-1.709-1.708 2.66 2.66 0 0 1-1.708 1.708"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.192 7.709v-.007M16.44 15.647v-.007M7.9 14.002v-.007"
    />
  </Svg>
);
export default IconlystSpaceStarsCircleLight;
