import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingAiGenerateOutline = ({
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
      d="M10.94 3.31a.75.75 0 0 1 .75-.75 9.44 9.44 0 0 1 9.204 7.35.75.75 0 0 1-1.463.331 7.94 7.94 0 0 0-7.742-6.18.75.75 0 0 1-.75-.75M5.388 5.97a.75.75 0 0 1 .114 1.054 7.94 7.94 0 0 0 9.616 12.136.75.75 0 0 1 .648 1.353A9.44 9.44 0 0 1 4.334 6.083.75.75 0 0 1 5.39 5.97"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.958 16.86a.75.75 0 0 1-.498.936 6.06 6.06 0 1 1 3.814-8.148.75.75 0 0 1-1.382.582 4.56 4.56 0 1 0-2.87 6.131.75.75 0 0 1 .936.498"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.3 11.754a.75.75 0 0 1 .704.49l.105.285a3.16 3.16 0 0 0 1.868 1.87l.284.105a.75.75 0 0 1 0 1.407l-.284.105a3.16 3.16 0 0 0-1.867 1.87l-.106.284a.75.75 0 0 1-1.407 0l-.105-.284a3.16 3.16 0 0 0-1.867-1.87l-.284-.105a.75.75 0 0 1 0-1.407l.284-.105a3.16 3.16 0 0 0 1.867-1.87l.105-.285a.75.75 0 0 1 .704-.49m-1.036 3.453c.398.29.748.64 1.037 1.038a4.7 4.7 0 0 1 1.037-1.038A4.7 4.7 0 0 1 18.3 14.17a4.7 4.7 0 0 1-1.037 1.038M11.875 9.46a.75.75 0 0 1 .718.532c.194.64.694 1.14 1.331 1.334a.75.75 0 0 1 0 1.435 2 2 0 0 0-1.331 1.334.75.75 0 0 1-1.435 0 2 2 0 0 0-1.332-1.334.75.75 0 0 1 0-1.435 2 2 0 0 0 1.332-1.334.75.75 0 0 1 .717-.532m-.323 2.584q.172.15.323.323.152-.173.324-.323a4 4 0 0 1-.324-.324q-.151.172-.323.324"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoadingAiGenerateOutline;
