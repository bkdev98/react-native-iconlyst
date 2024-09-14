import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPauseBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M7.433 3.5a2.66 2.66 0 0 0-2.657 2.657v11.686A2.66 2.66 0 0 0 7.433 20.5a2.66 2.66 0 0 0 2.657-2.657V6.157A2.66 2.66 0 0 0 7.433 3.5M16.567 3.5a2.66 2.66 0 0 0-2.657 2.657v11.686a2.66 2.66 0 0 0 2.657 2.657 2.66 2.66 0 0 0 2.657-2.657V6.157A2.66 2.66 0 0 0 16.567 3.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPauseBold;
