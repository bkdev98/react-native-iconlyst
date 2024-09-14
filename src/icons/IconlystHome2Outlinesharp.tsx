import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHome2Outlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m12.146 2.469 9.298 6.527V22.64h-7.366v-5.08h-3.622v5.08h-7.4V9zm.01 1.84-7.6 5.462v11.368h4.4v-5.08h6.622v5.08h4.366V9.776z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHome2Outlinesharp;
