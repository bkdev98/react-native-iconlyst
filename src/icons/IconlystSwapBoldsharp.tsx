import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapBoldsharp = ({
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
      d="M21.5 14.555c-1.344 0-2.61.534-3.6 1.389V5.21h-2v10.73c-.987-.853-2.25-1.385-3.59-1.385h-1v2h1c1.878 0 3.59 1.714 3.59 3.596v1h2v-1c0-1.882 1.716-3.596 3.6-3.596h1v-2zM12.19 9.445h1v-2h-1c-1.879 0-3.59-1.714-3.59-3.596v-1h-2v1c0 1.882-1.717 3.596-3.6 3.596H2v2h1c1.343 0 2.61-.534 3.6-1.389V18.79h2V8.06c.986.854 2.25 1.386 3.59 1.386"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwapBoldsharp;
