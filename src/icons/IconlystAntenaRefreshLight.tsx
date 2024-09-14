import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaRefreshLight = ({
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
      d="m16.595 4.79 1.246-1.244C19.006 2.38 21 3.206 21 4.854V19.15a1.85 1.85 0 0 1-1.85 1.85H4.853c-1.648 0-2.474-1.993-1.308-3.159l1.464-1.465"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.495 12.617H8.502v1.854M14.62 7.744v1.994h-1.993"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.181 12.807a3.23 3.23 0 0 1-2.8 1.614c-1.783 0-2.879-1.794-2.879-1.794M8.572 9.577a3.22 3.22 0 0 1 2.81-1.624c2.163 0 3.24 1.794 3.24 1.794"
    />
  </Svg>
);
export default IconlystAntenaRefreshLight;
