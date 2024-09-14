import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrailerFrontLight = ({
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
      d="M18.127 4.179H6.373a2 2 0 0 0-2 2V20.59a1 1 0 0 0 1 1h1.424a1 1 0 0 0 .863-.496l.389-.666a1 1 0 0 1 .864-.496h6.67a1 1 0 0 1 .864.496l.389.666a1 1 0 0 0 .864.496h1.427a1 1 0 0 0 1-1V6.179a2 2 0 0 0-2-2M22.25 12.1v-1.762m-20 1.761v-1.761"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.684 13.776a37.1 37.1 0 0 0 11.132 0V9.991a2 2 0 0 0-2-2.001H8.684a2 2 0 0 0-2 2zM15.635 17.024h1.717M7.148 17.024h1.718"
    />
  </Svg>
);
export default IconlystTrailerFrontLight;
