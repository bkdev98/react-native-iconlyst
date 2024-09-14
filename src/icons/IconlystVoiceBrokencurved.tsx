import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoiceBrokencurved = ({
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
      d="M6.58 13.68a5.67 5.67 0 0 0 11.339 0M9.38 3.28a5.67 5.67 0 0 0-2.8 4.89v2.253M17.92 10.423V8.169A5.67 5.67 0 0 0 12.25 2.5M12.25 21.5v-2.152M5.116 13.68h14.268"
    />
  </Svg>
);
export default IconlystVoiceBrokencurved;
