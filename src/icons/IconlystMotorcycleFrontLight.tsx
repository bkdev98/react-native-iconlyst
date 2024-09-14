import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMotorcycleFrontLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.03 3.885h1.722c.552 0 .977.46 1.15.984.254.763.831 1.348 1.793 1.348M18.47 3.885h-1.722c-.552 0-.977.46-1.15.984-.254.763-.832 1.348-1.793 1.348M10.662 8.55h-2.18a2 2 0 0 0-1.948 2.449l1.409 6.106a2 2 0 0 0 1.948 1.55h.758M13.862 8.55h2.253a2 2 0 0 1 1.949 2.449l-1.41 6.106a2 2 0 0 1-1.948 1.55h-.851"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.307 7.383a1.944 1.944 0 1 0 3.887 0 1.944 1.944 0 0 0-3.887 0M10.677 16.341a1.573 1.573 0 0 1 3.146 0v3.97a1.573 1.573 0 1 1-3.146 0z"
    />
  </Svg>
);
export default IconlystMotorcycleFrontLight;
