import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatTwoTone = ({
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
    >
      <Path
        strokeWidth={1.5}
        d="M19.071 19.07c-3.056 3.056-7.581 3.717-11.285 2.004-.546-.22-.995-.398-1.42-.398-1.188.007-2.665 1.158-3.433.391-.767-.768.384-2.246.384-3.44 0-.427-.17-.867-.39-1.415C1.212 12.51 1.873 7.982 4.93 4.927c3.902-3.903 10.24-3.903 14.141 0 3.909 3.908 3.902 10.241 0 14.143"
      />
      <Path
        strokeWidth={2}
        d="M15.939 12.413h.009M11.93 12.413h.009M7.921 12.413h.009"
        opacity={0.4}
      />
    </G>
  </Svg>
);
export default IconlystChatTwoTone;
