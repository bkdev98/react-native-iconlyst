import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudWindBulk = ({
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
      fillRule="evenodd"
      d="M18.244 8.658a.32.32 0 0 1-.277-.267c-.316-1.888-1.833-4.817-5.467-4.817-3.632 0-5.15 2.928-5.467 4.817a.32.32 0 0 1-.276.267c-2.39.323-4.004 2.172-4.004 4.703a4.78 4.78 0 0 0 2.819 4.35c.087.034.175.058.264.081a.34.34 0 0 0 .298-.066 2.47 2.47 0 0 1 1.556-.553h.074c.235 0 .384-.262.307-.484a2.5 2.5 0 0 1 2.36-3.326h4.795a2.5 2.5 0 0 1 2.354 3.344.426.426 0 0 0 .29.537c.368.091.705.266.99.5a.32.32 0 0 0 .297.063 4 4 0 0 0 .297-.106 4.77 4.77 0 0 0 2.793-4.34c0-2.531-1.614-4.38-4.003-4.703"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.226 16.613a.75.75 0 0 0 0-1.5h-4.795a.75.75 0 0 0 0 1.5zM11.801 18.923h-4.11a.75.75 0 0 0 0 1.5h4.11a.75.75 0 0 0 0-1.5M17.283 18.923h-2.056a.75.75 0 0 0 0 1.5h2.055a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudWindBulk;
