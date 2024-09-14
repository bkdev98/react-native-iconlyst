import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldLocationBroken = ({
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
      d="M11.541 20.364a8.695 8.695 0 0 1-7.985-8.673 8.68 8.68 0 0 1 3.393-6.888M12.247 3c4.44 0 8.094 3.328 8.618 7.624"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.467 10.805a20 20 0 0 0-.19-2.134C14.825 5.36 13.641 3 12.247 3 10.864 3 9.67 5.36 9.218 8.67c-.136.94-.208 1.954-.208 3.021s.072 2.09.208 3.029c.316 2.297 1.293 4.513 2.324 5.644M3.556 11.7h8.298M14.229 16.328a3.358 3.358 0 1 1 6.715 0c0 2.39-2.82 4.672-3.358 4.672-.292 0-1.26-.675-2.081-1.675"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.562 16.242h.046"
    />
  </Svg>
);
export default IconlystWorldLocationBroken;
