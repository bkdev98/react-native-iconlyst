import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarBrokencurved = ({
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
      d="M12.25 18.975c1.866 0 3.77 3.02 5.54 1.685s-.3-4.017.12-5.926c.419-1.91 3.808-2.665 3.285-4.89s-4.292-.79-5.503-2.044M14.378 5.162C13.904 4.022 13.342 3 12.25 3c-2.036 0-2.229 3.547-3.44 4.8-1.213 1.253-4.982-.18-5.505 2.044s2.867 2.98 3.285 4.89c.421 1.909-1.65 4.59.12 5.926.952.719 1.945.175 2.95-.481"
    />
  </Svg>
);
export default IconlystStarBrokencurved;
