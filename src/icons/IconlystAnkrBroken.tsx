import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnkrBroken = ({
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
      d="M17.09 13.13v.75c0 .637-.364 1.219-.937 1.498l-2.942 1.432c-.46.224-.998.224-1.458 0L8.81 15.378a1.67 1.67 0 0 1-.936-1.498v-.75M17.09 10.844v-.704c0-.627-.353-1.202-.913-1.485l-2.943-1.49a1.67 1.67 0 0 0-1.505 0l-2.941 1.49c-.56.283-.913.857-.913 1.485v.704"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.729 11.973a2.247 2.247 0 1 1-4.494 0 2.247 2.247 0 0 1 4.494 0M12.481 14.229v2.747"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.499 21H8.282C5.334 21 3.5 18.919 3.5 15.974V8.026C3.5 5.081 5.343 3 8.282 3h8.435C19.665 3 21.5 5.081 21.5 8.026v7.948c0 2.945-1.835 5.026-4.784 5.026h-.375"
    />
  </Svg>
);
export default IconlystAnkrBroken;
