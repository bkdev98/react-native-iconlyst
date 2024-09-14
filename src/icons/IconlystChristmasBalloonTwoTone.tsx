import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasBalloonTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.624 19.085H10.38l1.621-1.674z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.788 21.865c-1.155-2.267.963-2.78.963-2.78M18.603 9.968c0 3.647-2.957 7.443-6.603 7.443s-6.604-3.796-6.604-7.443a6.603 6.603 0 0 1 13.207 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.479 18.185c.88-.085 1.663.56 1.748 1.44M19.353 19.167a1.556 1.556 0 0 1 .256-2.185M18.61 3.365q-.014-.005.003-.01M2.62 13.791q-.013-.005.004-.01M12.068 12.203v1.819m2.267-1.82h-4.67l1.168-2.021H9.27L12 6.755l2.731 3.426h-1.563z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystChristmasBalloonTwoTone;
