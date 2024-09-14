import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaRefreshTwoTone = ({
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
      d="m17.095 4.79 1.246-1.244c1.165-1.166 3.159-.34 3.159 1.308V19.15a1.85 1.85 0 0 1-1.85 1.85H5.353c-1.648 0-2.474-1.993-1.308-3.159l1.464-1.465"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.995 12.617H9.002v1.854M15.12 7.744v1.994h-1.993"
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
export default IconlystAntenaRefreshTwoTone;
