import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplyShareLeftTwoTone = ({
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
      d="M12.218 13.966v3.661c0 .788-.929 1.205-1.512.677l-6.91-6.245a.903.903 0 0 1 .027-1.361l6.899-5.844a.907.907 0 0 1 1.494.69l.002 2.974"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.218 13.968c4.18 0 7.415 1.446 9.205 5.398 0 0 1.547-10.846-9.205-10.846"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystReplyShareLeftTwoTone;
