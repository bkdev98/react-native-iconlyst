import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmail2Broken = ({
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
      d="M12 20.1H7.582C4.845 20.1 3 17.85 3 15.088V8.906C3 6.141 4.845 3.894 7.582 3.9h8.836C19.155 3.894 21 6.141 21 8.906v6.182c0 2.762-1.845 5.012-4.582 5.012h-1.393"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.305 8.91-4 3.252a2.07 2.07 0 0 1-2.573 0L6.7 8.91M9.963 11.543l-3.268 3.548m10.61 0-3.23-3.548"
    />
  </Svg>
);
export default IconlystEmail2Broken;
