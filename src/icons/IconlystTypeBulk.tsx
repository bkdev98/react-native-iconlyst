import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTypeBulk = ({
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
      d="M12.186 17.388h-1.895V6.61h4.415v1.25a1 1 0 0 0 2 0V5.61a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2.25a1 1 0 0 0 2 0V6.61h4.291v10.78H6.518a1 1 0 1 0 0 2h5.668a1 1 0 1 0 0-2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21 10.979h-6.368a1 1 0 0 0-1 1v1.13a1 1 0 1 0 2 0v-.13h1.154v4.409h-.39a1 1 0 1 0 0 2h2.841a1 1 0 1 0 0-2h-.451v-4.41H20v.13a1 1 0 1 0 2 0v-1.13a1 1 0 0 0-1-1"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTypeBulk;
