import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleHeart3Bold = ({
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
      d="M20.754 4.355a4.15 4.15 0 0 0-1.897-.747c-.577-.09-1.16.053-1.72.226-.32-.432-.731-.919-1.27-1.197a4.45 4.45 0 0 0-1.985-.485c-2.612.012-4.218 2.263-4.352 4.539-.009.145.14.242.276.19.808-.304 1.58-.363 2.23-.363 3.414 0 6.113 2.795 6.31 6.436.009.145.162.24.292.174 1.278-.651 2.226-1.404 2.847-2.295 1.373-1.916 1.477-4.862-.731-6.478"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.036 8.019c-.748 0-1.503.186-2.19.538-.58.307-1.023.822-1.42 1.36-.637-.202-1.3-.36-1.947-.272a4.9 4.9 0 0 0-2.088.839c-2.456 1.767-2.338 5.032-.808 7.163 2.39 3.392 8.21 4.167 8.457 4.198a.501.501 0 0 0 .403-.129c.178-.167 4.399-4.126 4.42-8.335v-.003c-.002-2.634-1.808-5.36-4.827-5.36"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleHeart3Bold;
