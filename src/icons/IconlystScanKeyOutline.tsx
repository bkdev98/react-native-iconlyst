import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanKeyOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.143 4.04A3.14 3.14 0 0 0 4 7.182v1.577a.75.75 0 1 1-1.5 0V7.182A4.64 4.64 0 0 1 7.143 2.54h1.29a.75.75 0 0 1 0 1.5zM3.25 15.071a.75.75 0 0 1 .75.75v1.577a3.14 3.14 0 0 0 3.143 3.142H8.4a.75.75 0 1 1 0 1.5H7.143A4.64 4.64 0 0 1 2.5 17.398v-1.577a.75.75 0 0 1 .75-.75M21.25 15.071a.75.75 0 0 1 .75.75v1.577a4.64 4.64 0 0 1-4.642 4.642h-1.29a.75.75 0 1 1 0-1.5h1.29a3.14 3.14 0 0 0 3.142-3.142v-1.577a.75.75 0 0 1 .75-.75M15.35 3.29a.75.75 0 0 1 .75-.75h1.257A4.64 4.64 0 0 1 22 7.182v1.577a.75.75 0 1 1-1.5 0V7.182a3.14 3.14 0 0 0-3.143-3.142H16.1a.75.75 0 0 1-.75-.75M9.676 9.763a.75.75 0 0 1 1.06 0l.01.01a.75.75 0 0 1-1.06 1.06l-.01-.01a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.657 8.042a2.72 2.72 0 0 1 2.72 2.72c0 .185-.026.37-.072.579a.75.75 0 0 0 .202.69l3.056 3.057v1.45h-1.258v-.495a.75.75 0 0 0-.75-.75h-.536v-.515a.75.75 0 0 0-.75-.75h-.52l-.495-.494a.75.75 0 0 0-.76-.183 2.724 2.724 0 0 1-3.557-2.59 2.72 2.72 0 0 1 2.72-2.719m3.148 8.75h-.536a.75.75 0 0 1-.75-.75v-.514h-.08a.75.75 0 0 1-.53-.22l-.411-.41a4.22 4.22 0 1 1 3.379-4.136q-.002.254-.033.485l2.876 2.877c.22.22.343.518.343.828v1.914c0 .647-.524 1.171-1.172 1.171h-1.915a1.17 1.17 0 0 1-1.171-1.171z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanKeyOutline;
