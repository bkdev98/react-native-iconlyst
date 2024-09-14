import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystApronLight = ({
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
      d="M14.802 3c0 3.85.384 6.04 3.756 7.94.601.338.961.988.913 1.676l-.46 6.605a1.78 1.78 0 0 1-1.636 1.656c-2.853.21-7.89.15-10.816-.173a1.78 1.78 0 0 1-1.583-1.651l-.448-6.437a1.79 1.79 0 0 1 .913-1.677C8.814 9.04 9.197 6.85 9.197 3M8.932 6.584h6.136"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 17.45a3.07 3.07 0 0 1-3.068-3.068v-.431c0-.564.457-1.023 1.022-1.023h4.09c.566 0 1.023.459 1.023 1.023v.43A3.07 3.07 0 0 1 12 17.45"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystApronLight;
