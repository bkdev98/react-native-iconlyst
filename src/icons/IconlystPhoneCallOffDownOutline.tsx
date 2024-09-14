import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallOffDownOutline = ({
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
      fill={props.color}
      d="M5.437 12.523a2.83 2.83 0 0 1-2.13-.621c-.574-.56-.807-1.457-.807-3.1l.002-.107a3.08 3.08 0 0 1 .944-2.35c1.414-1.43 4.376-2.156 8.8-2.157h.008c4.424 0 7.384.726 8.8 2.157a3.08 3.08 0 0 1 .944 2.349v.104c0 1.647-.233 2.547-.806 3.1-.678.662-1.621.638-2.807.609-.284-.008-.614-.027-.925-.015a2.516 2.516 0 0 1-2.561-1.86c-.374-.855-.67-1.53-2.653-1.53s-2.277.675-2.65 1.53a2.514 2.514 0 0 1-2.56 1.861c-.328 0-.633.008-.913.015q-.356.015-.686.015m6.819-6.837h-.006c-4.995 0-6.963.931-7.734 1.712a1.62 1.62 0 0 0-.512 1.279q.003.102-.007.205a3.3 3.3 0 0 0 .359 1.946c.226.222.892.205 1.734.184.292-.008.608-.016.95-.016.766 0 .88-.261 1.185-.96.423-.968 1.06-2.431 4.025-2.431s3.605 1.461 4.027 2.428c.307.7.42.962 1.187.962h.008c.343 0 .662.008.955.016.834.022 1.5.038 1.72-.182a3.43 3.43 0 0 0 .355-2.033v.01-.132a1.6 1.6 0 0 0-.512-1.277c-.774-.78-2.74-1.711-7.734-1.711M12.25 19.81a.75.75 0 0 1-.531-.22l-2.52-2.529a.752.752 0 0 1 1.065-1.063l1.986 2 1.986-2a.75.75 0 0 1 1.063 1.06l-2.518 2.527a.75.75 0 0 1-.532.225"
    />
    <Path
      fill={props.color}
      d="M12.249 19.813a.75.75 0 0 1-.75-.75v-6.27a.75.75 0 1 1 1.5 0v6.27a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystPhoneCallOffDownOutline;