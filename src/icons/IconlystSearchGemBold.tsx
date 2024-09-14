import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchGemBold = ({
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
      d="m12.684 9.352.56.98-2.18 2.42-2.17-2.42.55-.98z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.714 10.942-3.09 3.43c-.14.16-.34.25-.56.25a.73.73 0 0 1-.55-.25l-3.09-3.43a.74.74 0 0 1-.1-.87l1.03-1.84c.13-.24.38-.38.65-.38h4.12c.28 0 .53.14.66.38l1.03 1.84c.16.28.12.63-.1.87m-3.58-8.44a8.42 8.42 0 1 0 0 16.84 8.42 8.42 0 0 0 0-16.84M20.993 19.79l-1.983-1.98a1 1 0 0 0-1.413 1.417l1.984 1.979a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchGemBold;
