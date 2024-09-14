import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTerminalCodeBulk = ({
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
      d="M17.061 2.86H6.94A4.445 4.445 0 0 0 2.5 7.3v6.914a4.444 4.444 0 0 0 4.44 4.44h1.068c.443 0 .859.171 1.173.485l1.421 1.421c.386.385.892.578 1.399.578.506 0 1.012-.193 1.398-.578l1.421-1.42c.314-.315.73-.487 1.173-.487h1.068a4.444 4.444 0 0 0 4.439-4.439V7.3a4.444 4.444 0 0 0-4.439-4.44"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.713 13.947h-3.05a.75.75 0 0 1 0-1.5h3.05a.75.75 0 0 1 0 1.5m-4.705-2.938-2.19 2.189a.74.74 0 0 1-.53.22.749.749 0 0 1-.53-1.28l1.66-1.66-1.66-1.658a.75.75 0 0 1 1.06-1.061l2.19 2.189a.75.75 0 0 1 0 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTerminalCodeBulk;
