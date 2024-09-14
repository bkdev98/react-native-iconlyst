import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGarlicLight = ({
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
      d="M7.493 11.546c.062-.326.317-1.099.846-1.585"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.337 16.348c4.183 0 4.4-3.431 3.113-5.58-1.09-1.82-3.335-2.678-4.601-4.628-.63-.968-.338-2.698-.338-2.698L9.569 3s-.595 2.22-1.332 3.26C6.91 8.135 4.186 9.992 3.361 12.144c-.532 1.386-.15 3.21 1.122 4.07.645.437 1.574.68 2.873.467"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.849 10.78c.608.738.981 1.728.981 2.817 0 2.277-1.627 4.122-3.635 4.122-1.642 0-3.03-1.235-3.481-2.93M17.527 21a3.345 3.345 0 0 0 3.134-4.515c-.187-.503-.808-.602-1.253-.301L15.46 18.85c-.446.3-.586.914-.188 1.277a3.33 3.33 0 0 0 2.254.873"
    />
  </Svg>
);
export default IconlystGarlicLight;
