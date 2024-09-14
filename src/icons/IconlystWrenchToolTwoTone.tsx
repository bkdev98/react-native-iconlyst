import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWrenchToolTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.626 16.152A6.552 6.552 0 0 1 3.89 7.416l3.548 3.548a.5.5 0 0 0 .461.134l2.105-.463a.5.5 0 0 0 .38-.381l.464-2.105a.5.5 0 0 0-.134-.461L7.166 4.14a6.552 6.552 0 0 1 8.736 8.736"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.626 16.151 4.67 4.67a2.316 2.316 0 1 0 3.276-3.276l-4.67-4.67"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWrenchToolTwoTone;
