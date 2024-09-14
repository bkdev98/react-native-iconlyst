import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFacebookGamingLight = ({
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
      d="M20.028 10.11h-9.444a.47.47 0 0 0-.473.472v2.833c0 .26.212.472.473.472h6.138v6.139c0 .26.212.472.473.472h2.833c.26 0 .472-.211.472-.472v-9.444a.47.47 0 0 0-.472-.473"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.028 3.5H3.972a.47.47 0 0 0-.472.472v16.056c0 .26.211.472.472.472h9.445c.26 0 .472-.211.472-.472v-2.834a.47.47 0 0 0-.472-.472h-6.14V7.278h12.75c.262 0 .473-.212.473-.472V3.972a.47.47 0 0 0-.472-.472"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFacebookGamingLight;
