import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneLikeBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.392 11.806c.424-1.097.203-2.37-.854-3.055a2.4 2.4 0 0 0-1.074-.372c-.383-.037-.797.122-1.155.265-.238-.301-.517-.646-.865-.806-.35-.16-.73-.237-1.115-.222-1.487.076-2.38 1.437-2.313 2.855.088 2.243 2.62 4.378 2.62 4.378s1.532-.267 2.892-1.06"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.113 14.432v2.949A3.625 3.625 0 0 1 13.493 21H7.978a3.625 3.625 0 0 1-3.62-3.62v-5.385M17.113 8.4V6.61A3.617 3.617 0 0 0 13.493 3H7.978a3.63 3.63 0 0 0-2.559 1.06 3.59 3.59 0 0 0-1.06 2.55v2.297"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.736 17.057v-.048m0-.253a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5"
    />
  </Svg>
);
export default IconlystPhoneLikeBroken;
