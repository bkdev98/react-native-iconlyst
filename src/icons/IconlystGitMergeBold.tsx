import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitMergeBold = ({
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
      d="M17.392 14.153a2.96 2.96 0 0 0-2.823 2.1 7.68 7.68 0 0 1-7.36-6.943 2.97 2.97 0 0 0 2.365-2.906 2.97 2.97 0 0 0-2.967-2.966 2.97 2.97 0 0 0-2.968 2.966c0 1.31.858 2.41 2.036 2.805v10.603a.75.75 0 0 0 1.5 0v-6.204a9.17 9.17 0 0 0 7.321 4.142 2.97 2.97 0 0 0 2.896 2.337 2.97 2.97 0 0 0 2.969-2.968 2.97 2.97 0 0 0-2.969-2.966"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGitMergeBold;
