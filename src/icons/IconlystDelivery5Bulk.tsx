import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDelivery5Bulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M11.8 7.265a.3.3 0 0 0 .3-.3v-4.15a.3.3 0 0 0-.3-.3H7.747c-1.352 0-2.55.814-3.051 2.075L3.85 6.7l-.07.181a.29.29 0 0 0 .278.384zM13.6 6.965a.3.3 0 0 0 .3.3h7.752a.288.288 0 0 0 .277-.383l-.074-.194-.848-2.109a3.27 3.27 0 0 0-3.05-2.064H13.9a.3.3 0 0 0-.3.3zM3.664 8.765a.296.296 0 0 0-.298.279q-.003.09-.004.18l-.012 7.69c-.008 2.845 1.467 4.55 3.945 4.561l11.13.01c1.12 0 2.03-.339 2.703-1.007.787-.78 1.204-1.999 1.208-3.522l.014-7.71q0-.102-.005-.201a.295.295 0 0 0-.297-.28z" />
    </G>
    <Path
      fill={props.color}
      d="M7.953 13.299H9.15a.75.75 0 0 1 0 1.5H7.953a.75.75 0 0 1 0-1.5M10.949 17.639H7.953a.75.75 0 0 1 0-1.5h2.996a.75.75 0 0 1 0 1.5"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.272 14.579c0 .854-.695 1.55-1.55 1.55h-2.061a1.55 1.55 0 0 1-1.548-1.55v-2.06c0-.855.694-1.55 1.548-1.55h2.062c.854 0 1.549.695 1.549 1.55zm-3.612.05-.048-.05.048-2.11 2.111.05-.049 2.11z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDelivery5Bulk;
