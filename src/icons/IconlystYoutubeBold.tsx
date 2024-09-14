import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystYoutubeBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m14.767 13.372-3.672 2.09a.968.968 0 0 1-.977-.015.96.96 0 0 1-.473-.829v-4.18c0-.35.182-.667.486-.842a.95.95 0 0 1 .966-.002l3.67 2.09a.97.97 0 0 1 0 1.688m6.298-5.982a3.1 3.1 0 0 0-2.108-2.239c-1.767-.583-12.288-.55-13.9.035a3.05 3.05 0 0 0-2.109 2.2c-.592 1.731-.592 8.574-.009 10.286.29 1.045 1.102 1.872 2.085 2.145.865.314 3.954.47 7.025.47 3.051 0 6.086-.154 6.9-.46a3.08 3.08 0 0 0 2.103-2.195c.59-1.698.592-8.523.013-10.242"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystYoutubeBold;
