import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallSendingBroken = ({
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
      d="M8.799 15.705c8.087 8.086 10.39 4.583 10.751 4.292 2.892-2.891 1.58-3.348-.703-5.63-2.367-2.365-3.472 2.197-7.19-1.52-3.72-3.718.841-4.826-1.525-7.192C7.848 3.373 7.4 2.055 4.5 4.953c-.263.327-3.151 2.244 2.289 8.593M17.281 3.009 21.5 3l-.009 4.219M21.5 3l-5.242 5.241"
    />
  </Svg>
);
export default IconlystCallSendingBroken;
