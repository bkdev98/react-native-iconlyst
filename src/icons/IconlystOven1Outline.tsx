import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOven1Outline = ({
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
      d="M7.907 3.75a3.24 3.24 0 0 0-3.24 3.24v10.02a3.24 3.24 0 0 0 3.24 3.24h8.185a3.24 3.24 0 0 0 3.24-3.24V6.99a3.24 3.24 0 0 0-3.24-3.24zm-4.74 3.24a4.74 4.74 0 0 1 4.74-4.74h8.185a4.74 4.74 0 0 1 4.74 4.74v10.02a4.74 4.74 0 0 1-4.74 4.74H7.907a4.74 4.74 0 0 1-4.74-4.74z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.475 6.03a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M15.025 6.03a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M11.25 6.03a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75M3.168 8.481a.75.75 0 0 1 .75-.75h16.165a.75.75 0 1 1 0 1.5H3.918a.75.75 0 0 1-.75-.75M7.83 12.445c-.182.228-.32.649-.32 1.397v1.796c0 .734.138 1.141.315 1.36.15.184.43.357 1.068.357h6.217c.64 0 .921-.173 1.07-.357.178-.218.315-.623.313-1.357V13.8c0-.735-.138-1.143-.315-1.363-.15-.184-.43-.358-1.068-.358H8.893c-.632 0-.911.174-1.063.365m-1.173-.935c.526-.66 1.313-.93 2.236-.93h6.217c.92 0 1.707.263 2.234.915.499.617.649 1.444.649 2.306v1.836c.002.864-.148 1.69-.648 2.307-.529.65-1.317.91-2.235.91H8.893c-.917 0-1.704-.26-2.231-.91-.5-.616-.652-1.442-.652-2.306v-1.796c0-.874.15-1.71.647-2.332"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOven1Outline;
