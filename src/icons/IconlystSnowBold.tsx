import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowBold = ({
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
      d="m20.681 13.514-2.756.737-3.907-2.256 3.908-2.257 2.755.737a1.001 1.001 0 0 0 .518-1.931l-2.172-.582.591-2.203a1 1 0 1 0-1.932-.518l-.739 2.753-3.938 2.275V5.743l2.016-2.016a1 1 0 0 0-1.414-1.414L12.02 3.905l-1.61-1.612a1 1 0 0 0-1.416-.001 1 1 0 0 0 0 1.415l2.016 2.017v4.533L7.09 7.993l-.736-2.751a1 1 0 1 0-1.932.516l.581 2.175-2.202.591a1 1 0 1 0 .518 1.932l2.756-.74 3.945 2.279-3.945 2.279-2.756-.74a1 1 0 0 0-.518 1.932l2.202.591-.58 2.175a1 1 0 0 0 1.931.516l.736-2.752 3.92-2.263v4.543l-2.017 2.017a1 1 0 0 0 1.415 1.414l1.611-1.612 1.592 1.592a1 1 0 0 0 1.414-1.414l-2.016-2.017v-4.535l3.938 2.275.74 2.753a1 1 0 1 0 1.931-.518l-.59-2.204 2.171-.581a1 1 0 0 0-.518-1.932"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSnowBold;
