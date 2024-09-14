import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChevronContractVerticalLight = ({
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
      d="M10.755 9.528a1.76 1.76 0 0 0 2.49 0l3.522-3.522a1.761 1.761 0 0 0-2.49-2.49L12 5.792 9.723 3.516a1.76 1.76 0 1 0-2.49 2.49zM7.233 20.484a1.76 1.76 0 0 0 2.49 0L12 18.208l2.277 2.276a1.76 1.76 0 1 0 2.49-2.49l-3.522-3.522a1.76 1.76 0 0 0-2.49 0l-3.522 3.522a1.76 1.76 0 0 0 0 2.49"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChevronContractVerticalLight;
