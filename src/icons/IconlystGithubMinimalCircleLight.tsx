import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGithubMinimalCircleLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.159 10.496c.534.56.832 1.305.832 2.08 0 3.18-3.05 3.885-4.99 3.885s-4.991-.712-4.991-3.87a3 3 0 0 1 .831-2.095 2.81 2.81 0 0 1 .05-2.09s.654-.195 2.168.82a7.4 7.4 0 0 1 3.881 0c1.514-1.015 2.169-.82 2.169-.82.284.664.302 1.412.05 2.09"
    />
  </Svg>
);
export default IconlystGithubMinimalCircleLight;
