import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMangoHalfLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.516 16.409c.568-.877 1.051-2.251 1.051-4.28 0-2.442 1.24-4.213 2.49-5.311 1.986-1.746 4.808-2.125 6.984-1.173 2.403 1.173 3.724 4.597 3.082 7.776-1.202 5.956-7.85 8.077-11.932 7.483-2.72-.395-3.072-2.339-1.675-4.495M15.787 5.523c-.301-1.104.21-2.06.973-2.523"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.576 12.358c-.75 1.887-.915 3.537.263 4.006 1.177.468 3.25-.423 4.001-2.31.75-1.888.694-4.196-.484-4.664s-3.03 1.08-3.78 2.968"
    />
  </Svg>
);
export default IconlystMangoHalfLight;
