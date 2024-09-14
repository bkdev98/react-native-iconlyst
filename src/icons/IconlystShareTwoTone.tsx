import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShareTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.38 3a2.7 2.7 0 1 1 .001 5.399 2.7 2.7 0 0 1 0-5.399M7.58 9.3a2.7 2.7 0 1 1 .002 5.399 2.7 2.7 0 0 1-.001-5.4M18.38 15.6A2.7 2.7 0 1 1 18.381 21a2.7 2.7 0 0 1 0-5.399"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.911 13.358 6.147 3.583m-.01-9.882L9.91 10.64"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystShareTwoTone;
