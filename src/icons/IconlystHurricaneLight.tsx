import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHurricaneLight = ({
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
      d="M4.09 4.935c0 1.068 2.95 1.935 6.587 1.935 3.638 0 6.587-.867 6.587-1.935S14.314 3 10.677 3s-6.586.866-6.586 1.935M10.887 12.75c-2.408 0-4.488-.412-5.465-1.01M11.531 15.854c2.128.402 4.167.052 5.305-.415M12.58 10.187c2.581.312 4.68.071 5.252 0 1.905-.234 3.255-.821 3.255-1.508 0-.503-.723-.953-1.857-1.25M4.398 15.21c-.788.326-1.256.734-1.256 1.176 0 .989 2.337 1.804 5.354 1.92"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.712 21c.71-5.543-5.815-9.69-4.623-16.095m13.175.253c-.589 5.143 2.153 11.563-4.898 15.842"
    />
  </Svg>
);
export default IconlystHurricaneLight;
