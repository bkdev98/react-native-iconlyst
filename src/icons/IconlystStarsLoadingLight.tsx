import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarsLoadingLight = ({
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
      d="M4.894 6.635a9 9 0 0 1 1.452-1.552M17.676 19.087a9.006 9.006 0 0 1-7.523 1.694M6.964 19.36a9 9 0 0 1-3.12-3.78M3.44 9.544a9 9 0 0 0-.3 3.033M19.76 16.724a8.9 8.9 0 0 0 1.345-5.06 9.01 9.01 0 0 0-9.348-8.657"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.913 12a7.46 7.46 0 0 0-4.799 4.799 7.47 7.47 0 0 0-4.799-4.8 7.47 7.47 0 0 0 4.8-4.798A7.47 7.47 0 0 0 16.912 12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarsLoadingLight;
