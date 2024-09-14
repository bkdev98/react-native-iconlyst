import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpGraphBold = ({
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
      d="M22.423 6.708a1 1 0 0 0-.923-.618h-4.909a1 1 0 1 0 0 2h2.494l-5.358 5.356-3.383-3.384c-.375-.375-1.038-.375-1.414 0l-6.138 6.14a1 1 0 0 0 1.415 1.415l5.43-5.433 3.382 3.383a1 1 0 0 0 1.415 0L20.5 9.503V12a1 1 0 1 0 2 0V7.09c0-.13-.027-.26-.077-.382"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpGraphBold;
