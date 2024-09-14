import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRemoveHexagonalBulk = ({
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
      d="m20.692 7.26-3.951-3.951a2.73 2.73 0 0 0-1.95-.809H9.21c-.728 0-1.44.295-1.95.808L3.308 7.26A2.77 2.77 0 0 0 2.5 9.209v5.581c0 .727.295 1.438.808 1.951l3.952 3.951a2.77 2.77 0 0 0 1.95.808h5.581c.737 0 1.429-.287 1.949-.808l3.952-3.951a2.78 2.78 0 0 0 .808-1.951V9.209c0-.738-.287-1.43-.808-1.949"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.866 14.864a.75.75 0 0 1-1.061 0l-1.806-1.807-1.801 1.8a.75.75 0 0 1-1.061-1.06l1.801-1.8-1.802-1.803a.749.749 0 1 1 1.06-1.06l1.803 1.802L13.8 9.135a.749.749 0 1 1 1.06 1.06l-1.801 1.802 1.807 1.806a.75.75 0 0 1 0 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRemoveHexagonalBulk;
