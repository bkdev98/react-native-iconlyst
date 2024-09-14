import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarOutline = ({
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
      d="M7.522 3.425a.75.75 0 0 1 .897.11l4.104 3.973 4.103-3.972a.75.75 0 0 1 1.249.721l-1.389 5.54 5.492 1.567a.75.75 0 0 1 0 1.443l-5.492 1.567 1.389 5.54a.75.75 0 0 1-1.25.721l-4.102-3.972-4.104 3.972a.75.75 0 0 1-1.249-.721l1.389-5.54-5.492-1.567a.75.75 0 0 1 0-1.443l5.492-1.567-1.389-5.54a.75.75 0 0 1 .352-.832m8.259 3.017-2.737 2.65a.75.75 0 0 1-1.043 0l-2.737-2.65.926 3.694a.75.75 0 0 1-.522.904l-3.663 1.046 3.663 1.045a.75.75 0 0 1 .522.903l-.926 3.695L12 15.08a.75.75 0 0 1 1.043 0l2.737 2.65-.926-3.695a.75.75 0 0 1 .521-.903l3.664-1.046-3.663-1.045a.75.75 0 0 1-.522-.903z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarOutline;
