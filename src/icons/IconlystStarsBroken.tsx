import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarsBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.67 19.64a.679.679 0 0 0 .99.709l2.022-1.048a.7.7 0 0 1 .636 0l2.022 1.048a.68.68 0 0 0 .99-.709l-.387-2.22a.66.66 0 0 1 .196-.596l1.637-1.573a.67.67 0 0 0-.377-1.147l-2.264-.326a.68.68 0 0 1-.513-.368l-1.013-2.022a.687.687 0 0 0-1.219 0l-1.013 2.022c-.1.2-.292.337-.514.369l-2.264.325a.671.671 0 0 0-.376 1.147l1.638 1.573M20.668 13.282a.67.67 0 0 1 .377 1.147l-1.637 1.572a.67.67 0 0 0-.195.596l.387 2.221a.68.68 0 0 1-.99.71l-1.16-.603M15.164 11.557l.498-.99a.686.686 0 0 1 1.217 0l1.012 2.021M9.364 8.189l-.675-.831m3.28-.884.017-1.07m2.559 2.744.762-.75"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.836 11.557-.497-.99a.686.686 0 0 0-1.218 0L6.11 12.587a.68.68 0 0 1-.514.368l-2.264.326a.67.67 0 0 0-.377 1.147l1.638 1.572c.16.154.233.377.195.596L4.4 18.818a.68.68 0 0 0 .99.71l1.161-.603"
    />
  </Svg>
);
export default IconlystStarsBroken;
