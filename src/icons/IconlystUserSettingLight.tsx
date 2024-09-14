import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserSettingLight = ({
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
      d="M16.418 14.555v.907m0 3.63V20m-2.36-4.084.783.454m3.154 1.815.783.454m-4.72 0 .783-.454m3.154-1.815.783-.454m-1.078.077a1.816 1.816 0 0 1-2.567 2.568 1.816 1.816 0 0 1 2.567-2.568M5.522 19.212c0-2.005 1.582-4.501 6.14-4.501"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.583 7.922a3.922 3.922 0 1 1-7.845-.001 3.922 3.922 0 0 1 7.845.001"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserSettingLight;
