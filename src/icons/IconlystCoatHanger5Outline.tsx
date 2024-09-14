import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger5Outline = ({
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
      fill={props.color}
      d="M18.71 17.857H5.293a3.094 3.094 0 0 1-1.185-5.928l5.3-2.243a.75.75 0 1 1 .584 1.381l-5.3 2.244a1.54 1.54 0 0 0-.94 1.418 1.563 1.563 0 0 0 1.54 1.628h13.42a1.541 1.541 0 0 0 .59-2.964l-7.57-3.133a.75.75 0 0 1-.461-.694V9.08a1.98 1.98 0 0 1 1.28-1.843 1.447 1.447 0 0 0 .856-1.772 1.4 1.4 0 0 0-.975-.96 1.45 1.45 0 0 0-1.852 1.388.75.75 0 1 1-1.5 0 2.92 2.92 0 0 1 1.15-2.333 2.96 2.96 0 0 1 2.585-.506 2.944 2.944 0 0 1 .284 5.58.49.49 0 0 0-.328.433l7.1 2.94a3.04 3.04 0 0 1-1.163 5.851z"
    />
    <Path
      fill={props.color}
      d="M14.909 21.052H9.09a1.99 1.99 0 0 1-1.986-1.987v-1.859a.75.75 0 1 1 1.5 0v1.86a.487.487 0 0 0 .486.486h5.819a.487.487 0 0 0 .486-.487v-1.859a.75.75 0 1 1 1.5 0v1.86a1.99 1.99 0 0 1-1.986 1.986"
    />
  </Svg>
);
export default IconlystCoatHanger5Outline;
