import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlowLikeOutline = ({
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
      d="M5.524 19.286a.75.75 0 0 1-.53-1.28l1-1a.752.752 0 0 1 1.233.236.75.75 0 0 1-.173.824l-1 1a.75.75 0 0 1-.53.22m13-.022a.75.75 0 0 1-.53-.22l-1-1a.75.75 0 1 1 1.06-1.06l1 1a.75.75 0 0 1-.53 1.28M6.501 7.287a.75.75 0 0 1-.53-.22l-1-1a.75.75 0 0 1 1.06-1.06l1 1a.75.75 0 0 1-.53 1.28m11-.023a.75.75 0 0 1-.53-1.28l1-1a.75.75 0 0 1 1.06 1.06l-1 1a.75.75 0 0 1-.53.22M11.999 21.764a.75.75 0 0 1-.75-.75v-1a.75.75 0 1 1 1.5 0v1a.75.75 0 0 1-.75.75m9-9h-1.044a.75.75 0 1 1 0-1.5H21a.75.75 0 1 1 0 1.5zm-16.956 0H3a.75.75 0 1 1 0-1.5h1.044a.75.75 0 1 1 0 1.5zm7.955-8a.75.75 0 0 1-.75-.75v-1a.75.75 0 1 1 1.5 0v1a.75.75 0 0 1-.749.75zM12.001 16.408a.75.75 0 0 1-.359-.091c-.118-.064-2.883-1.59-3.577-3.746a3 3 0 0 1 1.79-3.878 2.87 2.87 0 0 1 2.145.16 2.9 2.9 0 0 1 2.136-.161 3 3 0 0 1 1.8 3.878c-.67 2.132-3.455 3.68-3.574 3.746a.75.75 0 0 1-.36.092m-1.688-6.287a1.514 1.514 0 0 0-.82 1.99A6.2 6.2 0 0 0 12 14.785a6.2 6.2 0 0 0 2.505-2.668 1.515 1.515 0 0 0-.822-1.995 1.38 1.38 0 0 0-1.235.21.75.75 0 0 1-.9 0 1.37 1.37 0 0 0-1.235-.21"
    />
  </Svg>
);
export default IconlystGlowLikeOutline;
