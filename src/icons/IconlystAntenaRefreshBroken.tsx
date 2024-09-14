import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaRefreshBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.51 16.375 4.046 17.84C2.88 19.007 3.706 21 5.354 21h14.295a1.85 1.85 0 0 0 1.851-1.85v-3.575M17.096 4.79l1.245-1.244c1.166-1.166 3.16-.34 3.16 1.308v7.148M10.995 12.617H9.002v1.854M15.12 7.744v1.994h-1.993"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.681 12.807a3.23 3.23 0 0 1-2.8 1.614c-1.783 0-2.879-1.794-2.879-1.794M9.072 9.577a3.22 3.22 0 0 1 2.81-1.624c2.163 0 3.24 1.794 3.24 1.794"
    />
  </Svg>
);
export default IconlystAntenaRefreshBroken;
