import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVirusLight = ({
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
      d="M12.58 19.3h-1.16a3.97 3.97 0 0 1-3.969-3.97v-2.628a3.97 3.97 0 0 1 3.968-3.968h1.161a3.97 3.97 0 0 1 3.97 3.968v2.628a3.97 3.97 0 0 1-3.97 3.97"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.074 6.094.193 1.136a3.04 3.04 0 0 0 1.878 2.316l2.073.81M7.452 12.695c-1.413-.106-2.817-.243-4.452.414M4.074 19.689l.198-1.136a3.02 3.02 0 0 1 1.875-2.31l1.334-.516M16.527 15.727l1.32.515a3.07 3.07 0 0 1 1.89 2.311l.183 1.136M16.549 12.695c1.413-.106 2.817-.243 4.452.414M19.925 6.094l-.194 1.136a3.04 3.04 0 0 1-1.878 2.316l-2.072.81M9.36 9.318V7.52a2.64 2.64 0 1 1 5.281 0v1.798M12 9.05V19.3"
    />
  </Svg>
);
export default IconlystVirusLight;
