import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyBagDollarLight = ({
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
      d="M6.69 11.376c.69-1.148 1.434-2.277 2.156-3.408L6.873 4.276s.15-.13.527-.422c1.126-.871 2.358-1.097 3.69-.58 1.268.494 2.556.867 3.933.79.401-.024 1.94-.228 1.94-.228l-1.807 4.125c.722 1.13 1.464 2.267 2.154 3.415 1.134 1.888 2.22 3.994 1.34 6.185C17.629 20.11 14.646 20.958 12 21c-2.645-.042-5.628-.888-6.65-3.44-.88-2.19.205-4.296 1.34-6.184"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.37 12.332h-1.978a1.065 1.065 0 1 0 0 2.132h1.218a1.065 1.065 0 1 1 0 2.13h-1.98M12 16.596v.895m0-6.057v.902M8.846 7.977q3.154.724 6.31 0"
    />
  </Svg>
);
export default IconlystMoneyBagDollarLight;
