import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLinkedinSquareOutline = ({
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
      fillRule="evenodd"
      d="M7.883 10.242a.75.75 0 0 1 .75.75V15.8a.75.75 0 0 1-1.5 0v-4.808a.75.75 0 0 1 .75-.75M13.694 10.648c-.984 0-1.783.799-1.783 1.783v3.37a.75.75 0 0 1-1.5 0v-3.37a3.283 3.283 0 0 1 6.565 0v3.37a.75.75 0 1 1-1.5 0v-3.37c0-.984-.798-1.783-1.783-1.783M7.024 8.308a.859.859 0 1 1 1.718 0 .859.859 0 0 1-1.718 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.75 5.389A2.64 2.64 0 0 1 5.389 2.75H18.61a2.64 2.64 0 0 1 2.639 2.639V18.61a2.64 2.64 0 0 1-2.639 2.639H5.39a2.64 2.64 0 0 1-2.639-2.639zM5.389 4.25c-.63 0-1.139.51-1.139 1.139V18.61c0 .63.51 1.139 1.139 1.139H18.61c.63 0 1.139-.51 1.139-1.139V5.39c0-.63-.51-1.139-1.139-1.139z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLinkedinSquareOutline;
