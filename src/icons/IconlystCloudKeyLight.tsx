import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudKeyLight = ({
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
      d="M18.564 17.647A4.14 4.14 0 0 0 21 13.872c0-2.596-1.83-4.14-4.103-4.142 0-1.63-1.28-4.897-4.897-4.897S7.103 8.1 7.103 9.73C4.833 9.752 3 11.277 3 13.873c0 1.68 1 3.126 2.436 3.774M11.966 13.56v.012"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.729 21.185v-4.238c.197-.127.385-.265.557-.438a3.299 3.299 0 1 0-3.835.606v.96l.559.557-.851.85.865.865-.554.554a.4.4 0 0 0 0 .567l1.288 1.287a.4.4 0 0 0 .567 0l1.286-1.286a.4.4 0 0 0 .118-.284"
    />
  </Svg>
);
export default IconlystCloudKeyLight;
