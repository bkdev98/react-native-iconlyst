import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletLockOutline = ({
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
      d="M21.25 15.156h-3.807a3.28 3.28 0 1 1 0-6.562h3.806a.75.75 0 1 1 0 1.5h-3.806a1.781 1.781 0 1 0 0 3.562h3.806a.75.75 0 0 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M17.248 12.57a.75.75 0 1 1 .285-.056.8.8 0 0 1-.288.056z"
    />
    <Path
      fill={props.color}
      d="M16.315 21.058h-3.427a.75.75 0 1 1 0-1.5h3.427a4.19 4.19 0 0 0 4.185-4.185V8.622a4.19 4.19 0 0 0-4.185-4.184H8.186A4.19 4.19 0 0 0 4 8.622V9.73a.75.75 0 1 1-1.5 0V8.62a5.69 5.69 0 0 1 5.686-5.683h8.129A5.69 5.69 0 0 1 22 8.62v6.752a5.69 5.69 0 0 1-5.685 5.685"
    />
    <Path
      fill={props.color}
      d="M8.14 16.32a.75.75 0 0 1-.75-.75v-1.132a1.08 1.08 0 0 0-1.08-1.06h-.014a1.08 1.08 0 0 0-1.068 1.065v1.128a.75.75 0 0 1-1.5 0V14.43a2.582 2.582 0 0 1 5.163 0v1.142a.75.75 0 0 1-.75.749"
    />
    <Path
      fill={props.color}
      d="M7.841 21.057H4.774A2.276 2.276 0 0 1 2.5 18.784v-1.723a2.276 2.276 0 0 1 2.274-2.272h3.067a2.276 2.276 0 0 1 2.274 2.272v1.723a2.276 2.276 0 0 1-2.274 2.273M4.774 16.29a.774.774 0 0 0-.774.772v1.723a.774.774 0 0 0 .774.773h3.067a.774.774 0 0 0 .774-.773v-1.723a.774.774 0 0 0-.774-.772z"
    />
  </Svg>
);
export default IconlystWalletLockOutline;
