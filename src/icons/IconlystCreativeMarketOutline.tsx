import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCreativeMarketOutline = ({
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
      d="M13.003 3.753a2.06 2.06 0 0 0-1.556.6l-.506-.507.506.506-6.82 6.821a2.99 2.99 0 0 0 0 4.232l3.969 3.969a2.99 2.99 0 0 0 4.231 0l6.82-6.821.531.53-.53-.53c.41-.41.628-.976.6-1.556l-.25-5.043a2.057 2.057 0 0 0-1.952-1.953zm-2.617-.461a3.56 3.56 0 0 1 2.69-1.038l5.044.25-.037.748.037-.749a3.557 3.557 0 0 1 3.377 3.377l.249 5.043a3.56 3.56 0 0 1-1.038 2.69l-6.82 6.821a4.49 4.49 0 0 1-6.353 0l-3.97-3.969.531-.53-.53.53a4.49 4.49 0 0 1 0-6.353z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.082 9.246a.75.75 0 0 1 .754.746l.008 1.529 1.295-.78a.75.75 0 0 1 .773 1.286l-1.326.798 1.325.754a.75.75 0 1 1-.741 1.304l-1.312-.747.008 1.55a.75.75 0 0 1-1.5.008l-.008-1.529-1.296.78a.75.75 0 1 1-.773-1.286l1.327-.798-1.326-.754a.75.75 0 0 1 .741-1.304l1.313.747-.008-1.55a.75.75 0 0 1 .746-.754M15.952 7.049a.99.99 0 1 1 1.98 0 .99.99 0 0 1-1.98 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCreativeMarketOutline;
