import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftEdgeOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75a8.25 8.25 0 1 0 5.48 14.417c-1.687.155-3.458.022-5-.543-1.107-.404-2.116-1.04-2.877-1.97-.766-.937-1.248-2.133-1.355-3.6L8.246 12a3.754 3.754 0 1 1 7.38.976c.813.238 1.909.349 2.86.192.61-.1 1.077-.298 1.368-.561.258-.233.425-.555.393-1.072l-.023-.194-.002-.024A8.25 8.25 0 0 0 12 3.75m7.186 12.622.026-.008a.75.75 0 0 1 .835 1.142A9.74 9.74 0 0 1 12 21.75c-5.385 0-9.75-4.365-9.75-9.75S6.615 2.25 12 2.25c5.11 0 9.3 3.93 9.716 8.932l.023.2.003.033c.068.97-.269 1.752-.883 2.306-.584.526-1.363.8-2.13.927-1.518.25-3.315-.03-4.406-.568a.75.75 0 0 1-.331-1.024 2.254 2.254 0 1 0-4.246-1.082c.09 1.173.47 2.06 1.018 2.73.557.681 1.322 1.179 2.231 1.512 1.831.67 4.163.637 6.192.156"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.24 8.426c-2.41.4-4.374 1.94-4.46 4.324a.75.75 0 1 1-1.5-.054c.123-3.368 2.909-5.284 5.713-5.75 2.776-.46 6.054.42 7.282 3.167a.75.75 0 1 1-1.37.612c-.83-1.86-3.228-2.704-5.666-2.299"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.539 10.173a.75.75 0 0 1 .36.998c-1.079 2.294-1.001 4.655-.33 6.396.696 1.805 1.89 2.69 2.896 2.62a.75.75 0 0 1 .105 1.497c-1.99.14-3.612-1.53-4.4-3.577-.814-2.11-.888-4.896.371-7.575a.75.75 0 0 1 .998-.36"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMicrosoftEdgeOutline;
