import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIncognitoBroken = ({
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
      d="M5.351 15.166a3.004 3.004 0 1 1-.8 2.354M16.962 20.226a3.003 3.003 0 1 1 2.239-1.001"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.543 17.185c1.19-.395 2.328-.39 3.415 0M3.25 11.02c5.956-.981 11.956-.967 18 0M19.225 10.376 17.9 5.563a1.552 1.552 0 0 0-2.076-1.028l-2.917 1.172M5.434 10.376l1.323-4.813a1.552 1.552 0 0 1 2.076-1.028l1.459.586"
    />
  </Svg>
);
export default IconlystIncognitoBroken;
