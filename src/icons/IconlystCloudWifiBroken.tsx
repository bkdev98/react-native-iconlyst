import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudWifiBroken = ({
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
      d="M12 4.29c-3.617 0-4.897 3.264-4.897 4.897C4.833 9.207 3 10.732 3 13.328c0 1.68 1 3.125 2.436 3.774M18.563 17.102A4.14 4.14 0 0 0 21 13.328c0-2.596-1.83-4.14-4.103-4.141 0-1.07-.55-2.84-1.945-3.933M11.99 19.71v-.046M10.14 17.547a2.88 2.88 0 0 1 3.709-.006M8.35 15.295a5.835 5.835 0 0 1 7.282 0"
    />
  </Svg>
);
export default IconlystCloudWifiBroken;
