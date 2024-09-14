import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoopDirectionRepeatCircleVerticalOutline = ({
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
      d="M13.77 11.35a.75.75 0 0 1 1.06 0l2.485 2.485 2.484-2.485a.75.75 0 1 1 1.06 1.06l-3.014 3.015a.75.75 0 0 1-1.06 0l-3.015-3.014a.75.75 0 0 1 0-1.061M6.686 8.218a.75.75 0 0 1 .53.22l3.015 3.014a.75.75 0 0 1-1.06 1.06l-2.485-2.484L4.2 12.513a.75.75 0 0 1-1.06-1.06l3.015-3.016a.75.75 0 0 1 .53-.22"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.745 5.296a6.06 6.06 0 0 1 11.32 3.015v6.565a.75.75 0 0 1-1.5 0V8.31a4.56 4.56 0 0 0-8.52-2.268.75.75 0 0 1-1.3-.747M6.693 8.305a.75.75 0 0 1 .75.75v6.635a4.56 4.56 0 0 0 8.45 2.384.75.75 0 0 1 1.277.785 6.06 6.06 0 0 1-11.228-3.17V9.056a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoopDirectionRepeatCircleVerticalOutline;
