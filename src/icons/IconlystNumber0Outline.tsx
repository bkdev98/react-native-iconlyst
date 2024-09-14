import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber0Outline = ({
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
      d="M7.25 8.954c0-2.929 2.34-5.321 5.25-5.321 2.912 0 5.25 2.392 5.25 5.321v6.857c0 2.927-2.338 5.322-5.25 5.322-2.91 0-5.25-2.395-5.25-5.322zm5.25-3.821c-2.059 0-3.75 1.699-3.75 3.821v6.857c0 2.12 1.691 3.822 3.75 3.822s3.75-1.701 3.75-3.822V8.954c0-2.122-1.69-3.821-3.75-3.821"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNumber0Outline;
