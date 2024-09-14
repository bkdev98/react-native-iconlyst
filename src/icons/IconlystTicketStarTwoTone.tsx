import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketStarTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M17.857 20.417a3.39 3.39 0 0 0 3.393-3.393v-2.7c-1.24 0-2.24-1-2.24-2.24s1-2.238 2.24-2.238l-.002-2.703a3.39 3.39 0 0 0-3.392-3.393H6.144a3.393 3.393 0 0 0-3.393 3.393v2.79c1.238 0 2.238.912 2.238 2.152 0 1.239-1 2.239-2.239 2.239v2.7a3.39 3.39 0 0 0 3.392 3.393z" />
      <Path
        d="m12 13.854 1.74.915a.223.223 0 0 0 .323-.234l-.333-1.939 1.409-1.37a.222.222 0 0 0-.123-.38l-1.946-.283-.871-1.764a.222.222 0 0 0-.398 0l-.871 1.764-1.945.283a.222.222 0 0 0-.123.38l1.408 1.37-.333 1.94a.223.223 0 0 0 .323.233z"
        opacity={0.4}
      />
    </G>
  </Svg>
);
export default IconlystTicketStarTwoTone;
