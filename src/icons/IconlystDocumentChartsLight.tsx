import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentChartsLight = ({
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
      d="M8.463 21.12h8.074a4.12 4.12 0 0 0 4.12-4.12V7.239a4.12 4.12 0 0 0-4.12-4.12H8.463a4.12 4.12 0 0 0-4.12 4.12v9.76a4.12 4.12 0 0 0 4.12 4.12M16.487 17.219v-4.427M11.138 17.218v-4.173M13.812 17.219v-1.842M8.385 17.219v-1.842"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.167 10.698 2.667-2.867 3.043 1.976 2.61-2.787"
    />
  </Svg>
);
export default IconlystDocumentChartsLight;
