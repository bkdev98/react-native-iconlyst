import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneSilentSleep3Bold = ({
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
      d="M14.349 17.775a2.353 2.353 0 0 1-2.35 2.35 2.353 2.353 0 0 1-2.35-2.35l-.002-.016h4.705q-.002.008-.003.016m5.64-3.983-.465-.99a4.8 4.8 0 0 1-.457-2.043l-.001-1.318A7.074 7.074 0 0 0 12 2.375c-.574 0-1.13.076-1.664.206.182.175.344.374.45.614a2 2 0 0 1-.242 2.028c.26.337.414.76.414 1.219 0 .055-.012.106-.016.16h3.033a2 2 0 0 1 1.481 3.344l-.36.397a2 2 0 0 1-1.122 3.656h-3.08a2 2 0 0 1-1.48-3.343l.359-.397a2 2 0 0 1-.878-1.657c0-.055.012-.106.016-.16H6.748c-.63 0-1.202-.304-1.576-.789a7 7 0 0 0-.238 1.788l-.001 1.318c0 .701-.158 1.407-.457 2.043l-.465.99a2.77 2.77 0 0 0 .167 2.675 2.77 2.77 0 0 0 2.35 1.292h1.625q-.002.008-.003.016a3.854 3.854 0 0 0 3.849 3.85 3.854 3.854 0 0 0 3.85-3.85q-.002-.008-.003-.016h1.626a2.77 2.77 0 0 0 2.35-1.292 2.77 2.77 0 0 0 .168-2.675"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.748 4.755h.518L6.192 5.938a.752.752 0 0 0 .556 1.254h2.21a.75.75 0 0 0 0-1.5H8.44l1.074-1.183a.752.752 0 0 0-.556-1.254h-2.21a.75.75 0 0 0 0 1.5M14.66 8.299a.75.75 0 0 0-.685-.446h-3.08a.75.75 0 0 0 0 1.5h1.388l-1.944 2.143a.75.75 0 0 0 .555 1.254h3.08a.75.75 0 1 0 0-1.5h-1.386l1.943-2.143a.75.75 0 0 0 .13-.808"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingtoneSilentSleep3Bold;
