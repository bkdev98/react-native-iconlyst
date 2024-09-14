import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeHomeBroken = ({
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
      d="M9.941 19.894v-2.765a1.283 1.283 0 0 1 1.282-1.276h2.598a1.28 1.28 0 0 1 1.289 1.276v2.77c0 .599.48 1.088 1.08 1.101h1.732a3.11 3.11 0 0 0 3.128-3.092v-7.854a2.2 2.2 0 0 0-.866-1.71l-5.922-4.727a2.86 2.86 0 0 0-3.55 0L4.817 8.348a2.18 2.18 0 0 0-.866 1.715v2.523m5.977 7.308A1.11 1.11 0 0 1 8.81 21H7.076a3.11 3.11 0 0 1-3.126-3.095v-1.96"
    />
  </Svg>
);
export default IconlystHomeHomeBroken;
