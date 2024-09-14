import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnimalBaadgeLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.041 15.277a6.027 6.027 0 0 0 6.024 6.024 6.027 6.027 0 0 0 6.024-6.024 6.027 6.027 0 0 0-6.024-6.024 6.027 6.027 0 0 0-6.024 6.024"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.206 9.969 5.913 4.143a.557.557 0 0 1 .484-.83h2.576c.202 0 .39.11.487.287l3.159 5.69M12.209 8.54l2.475-4.932a.56.56 0 0 1 .5-.307l2.418.008a.557.557 0 0 1 .497.806l-2.967 5.915M12.065 12.312v-.04m-.006-.118a.174.174 0 1 0 .002.347.174.174 0 0 0-.002-.347M14.587 13.594v-.04m-.005-.119a.174.174 0 1 0 .002.347.174.174 0 0 0-.002-.347M9.552 13.594v-.04m-.005-.119a.174.174 0 1 0 .002.347.174.174 0 0 0-.002-.347"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.07 17.565c1.056 0 2.397.915 2.377-.494-.007-1.057-1.108-2.05-2.378-2.05-1.276 0-2.544 1.077-2.369 2.177.195 1.274 1.433.366 2.37.366Z"
    />
  </Svg>
);
export default IconlystAnimalBaadgeLight;
