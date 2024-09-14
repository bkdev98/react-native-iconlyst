import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageBulk = ({
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
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="M16.333 22H7.666C4.276 22 2 19.623 2 16.084V7.917C2 4.378 4.277 2 7.666 2h8.668C19.724 2 22 4.378 22 7.917v8.167C22 19.623 19.723 22 16.333 22"
        opacity={0.4}
      />
      <Path d="M15.428 13.09c.222-.291 1.046-1.201 2.111-.553.68.408 1.25.96 1.861 1.55.233.227.4.485.51.76.333.832.16 1.832-.196 2.656a3.64 3.64 0 0 1-2.248 2.046 4.6 4.6 0 0 1-1.399.207h-8.38c-.835 0-1.573-.194-2.178-.558-.379-.228-.446-.753-.165-1.095.47-.57.934-1.142 1.402-1.72.892-1.103 1.493-1.423 2.161-1.142.271.116.543.29.823.475.746.494 1.783 1.172 3.15.436.94-.514 1.482-1.396 1.956-2.16.194-.311.378-.621.592-.902M8.76 6.189a2.49 2.49 0 0 1 2.485 2.486A2.49 2.49 0 0 1 8.76 11.16a2.487 2.487 0 0 1-2.485-2.485A2.49 2.49 0 0 1 8.76 6.189" />
    </G>
  </Svg>
);
export default IconlystImageBulk;
