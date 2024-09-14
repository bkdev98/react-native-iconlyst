import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareMessage4RightAiTwoTone = ({
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
      d="M12.284 17.6a1 1 0 0 0-.664-.253H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-1a.5.5 0 0 0-.5.5v2.387a.5.5 0 0 1-.832.373z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.568 12.317-.101-.274A3.76 3.76 0 0 0 7.245 9.82l-.273-.102.273-.1A3.76 3.76 0 0 0 9.467 7.39l.1-.273.102.273a3.76 3.76 0 0 0 2.222 2.225l.273.101-.273.102a3.76 3.76 0 0 0-2.222 2.224zM15.47 13.22a1.77 1.77 0 0 0-1.176-1.179 1.77 1.77 0 0 0 1.177-1.178 1.77 1.77 0 0 0 1.177 1.178 1.77 1.77 0 0 0-1.177 1.178"
    />
  </Svg>
);
export default IconlystSquareMessage4RightAiTwoTone;
