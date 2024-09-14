import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplyShareUpTwoTone = ({
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
      d="M10.535 11.718H6.873c-.786 0-1.203-.929-.676-1.512l6.244-6.908a.903.903 0 0 1 1.362.024l5.845 6.9a.908.908 0 0 1-.69 1.494l-2.975.002"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.534 11.719c0 4.18-1.446 7.415-5.397 9.205 0 0 10.846 1.547 10.846-9.205"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystReplyShareUpTwoTone;
