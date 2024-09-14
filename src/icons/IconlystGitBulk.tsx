import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitBulk = ({
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
      d="M21.503 11.942c0 1.19-.54 2.38-1.52 3.36l-4.67 4.68c-1.01 1.01-2.19 1.52-3.36 1.52-1.1 0-2.19-.46-3.12-1.38l-4.95-4.96c-1.9-1.89-1.84-4.49.14-6.48l3.53-3.52 1.05-1.06.09-.09c.95-.95 2.07-1.47 3.22-1.51 1.19-.05 2.32.43 3.26 1.37l4.95 4.96c.9.9 1.38 1.97 1.38 3.11"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.483 12.712c-.4 0-.72-.32-.72-.71 0-.4.32-.71.72-.71.39 0 .71.31.71.71 0 .39-.32.71-.71.71m-4.11-3.92c-.39 0-.71-.32-.71-.71 0-.4.32-.71.71-.71.4 0 .71.31.71.71 0 .39-.31.71-.71.71m0 7c-.39 0-.71-.33-.71-.73 0-.39.32-.71.71-.71.4 0 .71.32.71.71 0 .4-.31.73-.71.73m4.11-6c-.35 0-.67.08-.97.22l-1.09-1.1a2.21 2.21 0 0 0-2.05-3.04c-.29 0-.58.06-.84.16l-1.93-1.93-1.05 1.06 1.88 1.88c-.17.31-.27.66-.27 1.04 0 .95.61 1.77 1.46 2.07v2.84a2.21 2.21 0 0 0-1.46 2.07c0 1.23.99 2.23 2.21 2.23s2.21-1 2.21-2.23c0-.95-.61-1.76-1.46-2.07v-2.84c.1-.03.2-.08.29-.13l1.05 1.06c-.12.28-.2.59-.2.92 0 1.22.99 2.21 2.22 2.21a2.21 2.21 0 0 0 0-4.42"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGitBulk;
