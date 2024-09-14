import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystYoutubeBulk = ({
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
      d="M21.065 6.883a3.1 3.1 0 0 0-2.108-2.24c-1.767-.582-12.288-.55-13.9.036a3.05 3.05 0 0 0-2.109 2.2c-.592 1.73-.592 8.574-.009 10.286.29 1.044 1.102 1.872 2.085 2.145.865.314 3.954.469 7.025.469 3.051 0 6.086-.154 6.9-.46a3.08 3.08 0 0 0 2.103-2.194c.59-1.698.592-8.523.013-10.242"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m11.095 14.955 3.672-2.09a.973.973 0 0 0 0-1.688l-3.67-2.09a.95.95 0 0 0-.966.002.96.96 0 0 0-.486.841v4.181c0 .344.177.653.473.83a.97.97 0 0 0 .977.014"
    />
  </Svg>
);
export default IconlystYoutubeBulk;
