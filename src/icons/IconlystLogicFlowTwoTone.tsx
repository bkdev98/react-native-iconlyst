import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLogicFlowTwoTone = ({
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
      d="M17.001 5.21c0-.622-.504-1.126-1.125-1.126h-6.75C8.504 4.084 8 4.588 8 5.209v1.125c0 .621.504 1.125 1.126 1.125h6.75c.621 0 1.125-.504 1.125-1.125zM13.296 11.63a1.125 1.125 0 0 0-1.591 0l-3.182 3.182c-.44.44-.44 1.152 0 1.592l3.182 3.182c.44.44 1.152.44 1.591 0l3.182-3.182c.44-.44.44-1.152 0-1.591z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.501 7.459V11.3M8.192 15.537H4.625c-.621 0-1.125.504-1.125 1.125v2.395M16.808 15.537h3.567c.622 0 1.125.504 1.125 1.125v2.395"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystLogicFlowTwoTone;
