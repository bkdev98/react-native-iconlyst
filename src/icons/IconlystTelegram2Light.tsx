import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelegram2Light = ({
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
      d="m3.842 12.64 4.8.545 7.489 6.406a.996.996 0 0 0 1.675-.482l3.17-13.877a.91.91 0 0 0-1.233-1.045L3.6 10.794c-.916.374-.739 1.72.243 1.845"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.07 16.34-1.883 1.608a.714.714 0 0 1-1.163-.4l-.383-4.36M8.643 13.185l12.035-8.85"
    />
  </Svg>
);
export default IconlystTelegram2Light;
