import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTargetBroken = ({
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
      d="M18.887 7.23a8.65 8.65 0 0 0-6.992-3.552A8.645 8.645 0 0 0 7.94 20.013M11.896 20.973c4.776 0 8.647-3.88 8.647-8.646q0-.772-.141-1.514"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.672 9.577a4.6 4.6 0 0 0-3.777-1.934c-1.422 0-2.7.635-3.56 1.64M16.345 13.763a4.67 4.67 0 0 1-4.45 3.243 4.69 4.69 0 0 1-4.683-4.682M11.9 12.32l9.35-6.814"
    />
  </Svg>
);
export default IconlystTargetBroken;
