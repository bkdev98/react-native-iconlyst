import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDarkAndLightLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.503 3v.037M3.071 6.09l.023.023m14.818 0 .053-.054m3.073 7.478h-.05m-3.076 7.41.053.053"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.614 15.257c.032-.017.07.012.06.048a6.44 6.44 0 0 1-6.186 4.668A6.437 6.437 0 0 1 8.714 7.35c.034-.01.064.028.047.06a5.81 5.81 0 0 0 1.029 6.825 5.8 5.8 0 0 0 6.824 1.022"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.05 8.974a6.443 6.443 0 1 1-9.111 9.112 6.443 6.443 0 0 1 9.111-9.112"
    />
  </Svg>
);
export default IconlystDarkAndLightLight;
