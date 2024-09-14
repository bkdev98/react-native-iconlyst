import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSendTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="m15.712 7.727-5.821 5.821" opacity={0.4} />
      <Path d="M9.891 13.548 3.076 9.381c-.893-.546-.712-1.893.294-2.184l16.09-4.648a1.203 1.203 0 0 1 1.487 1.501l-4.774 15.964c-.299 1-1.64 1.172-2.182.28z" />
    </G>
  </Svg>
);
export default IconlystSendTwoTone;
