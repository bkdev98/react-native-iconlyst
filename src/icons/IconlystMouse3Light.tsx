import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouse3Light = ({
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
      d="M12 7.672v2.023m6.697 6.438-.001-8.267A4.866 4.866 0 0 0 13.83 3h-3.658a4.866 4.866 0 0 0-4.867 4.867v8.267A4.866 4.866 0 0 0 10.173 21h3.659a4.867 4.867 0 0 0 4.866-4.867"
    />
  </Svg>
);
export default IconlystMouse3Light;
