import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShowOutlinecurved = ({
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
      d="M12.002 10.036a2.412 2.412 0 1 0 0 4.824 2.412 2.412 0 0 0 0-4.824M8.09 12.448a3.912 3.912 0 1 1 7.824 0 3.912 3.912 0 0 1-7.824 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.976 6.994C6.77 5.477 9.25 4.396 12.002 4.396s5.232 1.08 7.026 2.597c1.775 1.5 2.976 3.517 2.976 5.455s-1.2 3.955-2.976 5.455c-1.794 1.517-4.275 2.597-7.026 2.597S6.77 19.42 4.976 17.902C3.2 16.402 2 14.385 2 12.448s1.201-3.953 2.976-5.454m.968 1.146C4.37 9.47 3.5 11.105 3.5 12.448c0 1.344.87 2.978 2.444 4.308C7.498 18.07 9.644 19 12.002 19c2.359 0 4.504-.93 6.058-2.243 1.574-1.33 2.444-2.964 2.444-4.309s-.87-2.98-2.444-4.31c-1.554-1.313-3.7-2.242-6.058-2.242s-4.504.93-6.058 2.244"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShowOutlinecurved;
