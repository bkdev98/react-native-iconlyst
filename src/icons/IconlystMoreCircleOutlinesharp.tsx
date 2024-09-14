import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoreCircleOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.469 16.097a2.719 2.719 0 1 0 0 5.438 2.719 2.719 0 0 0 0-5.438M2.25 18.816a4.219 4.219 0 1 1 8.438 0 4.219 4.219 0 0 1-8.438 0M18.031 16.097a2.719 2.719 0 1 0 0 5.438 2.719 2.719 0 0 0 0-5.438m-4.218 2.719a4.219 4.219 0 1 1 8.437 0 4.219 4.219 0 0 1-8.437 0M12.25 4.535a2.719 2.719 0 1 0 0 5.438 2.719 2.719 0 0 0 0-5.438M8.031 7.253a4.22 4.22 0 1 1 8.438.001 4.22 4.22 0 0 1-8.438 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoreCircleOutlinesharp;
