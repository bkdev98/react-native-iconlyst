import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar9Outlinesharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m12.25.844 2.348 5.487 5.54-2.22-2.22 5.54L23.407 12l-5.487 2.348 2.22 5.54-5.54-2.22-2.349 5.488-2.348-5.487-5.54 2.22 2.219-5.54L1.094 12 6.58 9.652l-2.22-5.54 5.54 2.219zm0 3.812-1.546 3.612-3.647-1.46 1.461 3.646L4.906 12l3.612 1.546-1.46 3.647 3.646-1.462 1.546 3.613 1.546-3.613 3.647 1.462-1.462-3.647L19.595 12l-3.613-1.546 1.462-3.647-3.647 1.461z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStar9Outlinesharp;
