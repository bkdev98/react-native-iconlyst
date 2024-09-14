import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunriseTwoTone = ({
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
      d="M7.136 12.398a4.922 4.922 0 0 1 9.845 0m-4.92-8.982v.032M5.718 6.054l.02.019m-2.633 6.325h-.05m18 0h-.042m-2.625-6.325.045-.045"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.055 14.713v5.873m0-5.873 2.573 2.575m-2.573-2.575L9.48 17.288"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSunriseTwoTone;
