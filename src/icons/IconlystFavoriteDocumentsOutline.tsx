import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFavoriteDocumentsOutline = ({
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
      d="M6.763 9.965a2.563 2.563 0 0 0-2.564 2.563v5.156a2.564 2.564 0 0 0 2.564 2.564h10.474a2.564 2.564 0 0 0 2.563-2.564v-5.156a2.563 2.563 0 0 0-2.563-2.563zm-4.064 2.563a4.063 4.063 0 0 1 4.064-4.063h10.474a4.063 4.063 0 0 1 4.063 4.063v5.156a4.064 4.064 0 0 1-4.063 4.064H6.763a4.064 4.064 0 0 1-4.064-4.064zM7.97 3a.75.75 0 0 1 .75-.75h6.561a.75.75 0 0 1 0 1.5H8.719A.75.75 0 0 1 7.97 3M5.431 6.112a.75.75 0 0 1 .75-.75h11.636a.75.75 0 0 1 0 1.5H6.182a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m11.776 12.953-.003-.002.006.003zm.223.67-.292.585c-.144.286-.42.493-.749.542h-.003l-.634.093.463.446c.236.231.34.562.284.883v.003l-.11.627.576-.301a.99.99 0 0 1 .94 0l.568.297-.108-.618a.99.99 0 0 1 .29-.898l.454-.438-.635-.092a1 1 0 0 1-.755-.547l.672-.334-.673.333m.158-2.594a1 1 0 0 0-.754-.06l-.011.005a1 1 0 0 0-.58.507l-.618 1.242-1.387.201-.025.004a1.04 1.04 0 0 0-.54.278 1 1 0 0 0 0 1.414l.01.01 1.004.966-.24 1.365v.008c-.037.22.003.441.102.63l.007.012c.264.478.857.655 1.337.411l1.254-.655 1.234.646.013.007c.19.095.405.129.616.095h.003a1 1 0 0 0 .829-1.134l-.003-.02-.24-1.364.997-.964a.995.995 0 0 0 .103-1.327l-.003-.005c-.157-.2-.389-.34-.654-.377l-1.383-.2-.62-1.245-.005-.011a1 1 0 0 0-.446-.44m-.194 6.209-.011.006zm-.482.006-.011-.006z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFavoriteDocumentsOutline;
