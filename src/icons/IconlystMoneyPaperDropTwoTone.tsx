import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperDropTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.604 9.182H6.397c-1.895 0-3.075 1.338-3.075 3.23v5.358c0 1.893 1.18 3.23 3.076 3.23h11.206c1.894 0 3.074-1.337 3.074-3.23v-5.358c0-1.892-1.185-3.23-3.074-3.23"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.422 11.842h1.352M17.577 18.342h-1.352"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.793 15.093a2.206 2.206 0 1 1 4.412 0 2.206 2.206 0 0 1-4.412 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.117 6.337V4.846M15.88 6.337V4.846M11.998 6.338V3"
    />
  </Svg>
);
export default IconlystMoneyPaperDropTwoTone;
