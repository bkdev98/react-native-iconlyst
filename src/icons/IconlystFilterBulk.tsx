import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterBulk = ({
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
      d="M8.762 21.5h8.435c3.16 0 5.284-2.221 5.284-5.526V8.026c0-3.305-2.123-5.526-5.283-5.526H8.762c-3.16 0-5.282 2.221-5.282 5.526v7.948c0 3.305 2.122 5.526 5.282 5.526"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.6 9.89a2.15 2.15 0 0 1-2.013 1.399h-.005a2.14 2.14 0 0 1-1.53-.64 2.15 2.15 0 0 1-.484-.76h-.763a.75.75 0 0 1 0-1.5h.766a2.21 2.21 0 0 1 2.027-1.401c.916.008 1.697.59 2 1.401h3.556a.75.75 0 0 1 0 1.5zm-2.666-.756a.65.65 0 0 1 .649-.646h.004c.34.003.617.266.645.597a1 1 0 0 0 0 .11.65.65 0 0 1-.651.594h-.002a.64.64 0 0 1-.457-.193.65.65 0 0 1-.188-.462M8.804 14.11h3.558a2.15 2.15 0 0 1 2.011-1.399h.008a2.16 2.16 0 0 1 2.012 1.4h.761a.75.75 0 0 1 0 1.5h-.76a2.155 2.155 0 0 1-2.016 1.4h-.014a2.16 2.16 0 0 1-2-1.4h-3.56a.75.75 0 0 1 0-1.5m4.924.744a.65.65 0 0 1 .652-.643h.003a.65.65 0 0 1-.004 1.3h-.004a.653.653 0 0 1-.647-.647v-.01"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilterBulk;
