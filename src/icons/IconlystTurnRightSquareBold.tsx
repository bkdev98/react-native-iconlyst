import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnRightSquareBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.287 14.991-1.938 1.937a.747.747 0 0 1-1.06-.001.75.75 0 0 1 .001-1.06l.664-.664h-2.802a3.674 3.674 0 0 1-3.67-3.67 3.675 3.675 0 0 1 3.67-3.671h4.284a.75.75 0 0 1 0 1.5h-4.284c-1.197 0-2.17.974-2.17 2.171s.973 2.17 2.17 2.17h2.8l-.663-.663a.75.75 0 1 1 1.061-1.061l1.931 1.931a.743.743 0 0 1 .006 1.081m-.07-12.241H7.784C4.623 2.75 2.5 4.97 2.5 8.275v7.949c0 3.305 2.123 5.526 5.283 5.526h8.434c3.16 0 5.283-2.221 5.283-5.526V8.275c0-3.305-2.123-5.525-5.283-5.525"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnRightSquareBold;
