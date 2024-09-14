import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTickSquareBrokensharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M8.62 11.793c2.09 1.321 3.65 3.681 3.65 3.681h.03s3.32-5.868 9.48-9.477"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M16.859 4.68a9.2 9.2 0 0 0-4.89-1.395 9.25 9.25 0 0 0-9.25 9.25c0 5.108 4.14 9.25 9.25 9.25s9.25-4.142 9.25-9.25a9.2 9.2 0 0 0-1.513-5.074"
    />
  </Svg>
);
export default IconlystTickSquareBrokensharp;
