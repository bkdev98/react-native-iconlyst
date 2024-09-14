import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarCircleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 3.75A8.25 8.25 0 0 0 4 12a8.25 8.25 0 0 0 8.25 8.25A8.25 8.25 0 0 0 20.5 12a8.25 8.25 0 0 0-8.25-8.25M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.769 12.932a.75.75 0 0 1 .75-.75h.568a.75.75 0 0 1 0 1.5h-.568a.75.75 0 0 1-.75-.75M8.664 12.932a.75.75 0 0 1 .75-.75h.568a.75.75 0 0 1 0 1.5h-.568a.75.75 0 0 1-.75-.75M6.337 10.42a.75.75 0 0 1 .848-.638c3.356.476 6.763.476 10.119 0a.75.75 0 0 1 .21 1.485 37.5 37.5 0 0 1-10.54 0 .75.75 0 0 1-.637-.847"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.788 7.088a15.8 15.8 0 0 1 4.93 0h.002c.721.117 1.338.633 1.581 1.321l.602 1.672a.3.3 0 0 0 .032.061l.666.895c.37.504.569 1.113.57 1.738v3.005c0 .732-.594 1.325-1.325 1.325h-1.39a1.325 1.325 0 0 1-1.325-1.325v-.06h-3.765v.06c0 .732-.593 1.325-1.325 1.325H7.656a1.325 1.325 0 0 1-1.324-1.33l.009-2.987v-.002c0-.617.194-1.218.556-1.718l.687-.946a.2.2 0 0 0 .027-.048l.6-1.665a2.04 2.04 0 0 1 1.57-1.32zm.238 1.48a.54.54 0 0 0-.401.34l-.003.007-.607 1.686a1.7 1.7 0 0 1-.225.413l-.679.934a1.42 1.42 0 0 0-.27.837v.004l-.009 2.816h1.034v-.06c0-.732.593-1.325 1.324-1.325h4.116c.732 0 1.325.593 1.325 1.325v.06h1.04v-2.829c0-.306-.098-.604-.278-.85l-.668-.897-.011-.014a1.8 1.8 0 0 1-.222-.424v-.001l-.605-1.681a.54.54 0 0 0-.405-.34 14.3 14.3 0 0 0-4.456 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCarCircleOutline;
