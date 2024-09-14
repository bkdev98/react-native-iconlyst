import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartCheck2Bulk = ({
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
      d="M21.342 7.069a2.04 2.04 0 0 0-1.354-.805c-.07-.01-.114-.016-13.99-.021l-.226-2.707a.75.75 0 0 0-.62-.677l-2.024-.35a.75.75 0 0 0-.255 1.478l1.453.25.888 10.586a2.515 2.515 0 0 0 2.49 2.297h10.627a2.514 2.514 0 0 0 2.475-2.147l.923-6.38a2.04 2.04 0 0 0-.387-1.524"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.288 19.04a1.232 1.232 0 1 0 .003 2.464 1.232 1.232 0 0 0-.003-2.464M18.311 19.04a1.232 1.232 0 1 0 .003 2.464 1.232 1.232 0 0 0-.003-2.464"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="m12.993 13.504 2.676-2.676a.75.75 0 1 0-1.061-1.06l-2.146 2.145-.808-.808a.751.751 0 0 0-1.061 1.061l1.339 1.338a.75.75 0 0 0 1.06 0"
    />
  </Svg>
);
export default IconlystShoppingCartCheck2Bulk;
