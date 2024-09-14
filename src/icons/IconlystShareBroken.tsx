import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShareBroken = ({
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
      d="M18.38 21a2.7 2.7 0 1 1 2.457-1.58M4.88 11.999a2.7 2.7 0 1 1 1.41 2.372M18.38 3a2.7 2.7 0 1 1-2.222 1.167M9.911 13.358l6.147 3.583m-.01-9.882L9.91 10.64"
    />
  </Svg>
);
export default IconlystShareBroken;
