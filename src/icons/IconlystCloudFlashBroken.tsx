import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudFlashBroken = ({
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
      d="M18.814 16.747a4.14 4.14 0 0 0 2.436-3.774c0-2.596-1.83-4.139-4.103-4.14 0-1.053-.533-2.787-1.883-3.884M12.25 3.934c-3.617 0-4.897 3.266-4.897 4.899-2.27.019-4.103 1.544-4.103 4.14 0 1.679 1 3.125 2.436 3.774M12.238 20.067l1.863-3.42h-3.703l1.86-3.42"
    />
  </Svg>
);
export default IconlystCloudFlashBroken;
