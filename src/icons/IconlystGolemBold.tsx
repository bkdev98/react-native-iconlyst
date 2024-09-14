import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGolemBold = ({
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
      d="M11.809 9.47A2.33 2.33 0 0 1 9.48 7.14a2.33 2.33 0 0 1 2.329-2.33 2.33 2.33 0 0 1 2.329 2.33 2.33 2.33 0 0 1-2.329 2.33m2.329 8.2A2.33 2.33 0 0 1 11.809 20a2.33 2.33 0 0 1-2.329-2.33 2.333 2.333 0 0 1 2.329-2.33 2.333 2.333 0 0 1 2.329 2.33m2.037-15.426a1 1 0 0 0-1.411.1l-.881 1.019a4.3 4.3 0 0 0-2.074-.553A4.334 4.334 0 0 0 7.48 7.14c0 2.042 1.425 3.747 3.329 4.202v2.126c-1.904.454-3.329 2.16-3.329 4.202A4.334 4.334 0 0 0 11.809 22a4.334 4.334 0 0 0 4.329-4.33c0-2.042-1.425-3.748-3.329-4.202v-2.126c1.904-.455 3.329-2.16 3.329-4.202 0-.908-.283-1.75-.762-2.446l.9-1.04a1 1 0 0 0-.101-1.41"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGolemBold;
