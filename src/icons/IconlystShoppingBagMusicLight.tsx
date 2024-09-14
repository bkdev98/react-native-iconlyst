import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagMusicLight = ({
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
      d="M15.904 20.997H8.087c-2.87 0-5.074-1.037-4.449-5.21l.729-5.657c.381-2.083 1.714-2.88 2.88-2.88h9.53c1.183 0 2.435.856 2.88 2.88l.729 5.656c.531 3.703-1.611 5.211-4.482 5.211"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.034 7.045A4.045 4.045 0 0 0 11.99 3a4.045 4.045 0 0 0-4.063 4.028v.017"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.867 15.811a1.687 1.687 0 1 1-3.374 0 1.687 1.687 0 0 1 3.374 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.865 15.812V10.75s.438 1.14 1.617 1.38"
    />
  </Svg>
);
export default IconlystShoppingBagMusicLight;
