import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayCircleAddBroken = ({
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
      d="M3.25 15.962c0 2.828 1.761 4.828 4.593 4.828h8.099c2.832 0 4.595-2 4.595-4.828v-4.83M13.14 3.502H7.843C5.02 3.502 3.25 5.5 3.25 8.329v3.816"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.58 15.087c-.925.368-1.7-.091-1.813-1.01a18.2 18.2 0 0 1 0-3.867c.124-.956.977-1.362 1.813-1.007a9.5 9.5 0 0 1 2.864 1.814c.713.653.73 1.578 0 2.255q-.283.26-.598.503M18.914 3.21v4.673m2.336-2.336h-4.672"
    />
  </Svg>
);
export default IconlystPlayCircleAddBroken;
