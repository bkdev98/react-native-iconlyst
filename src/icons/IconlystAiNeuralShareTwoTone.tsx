import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiNeuralShareTwoTone = ({
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
      d="M18.908 8.386a1.296 1.296 0 1 0 2.593 0 1.296 1.296 0 0 0-2.593 0M13.436 4.75a1.296 1.296 0 1 0 2.59 0 1.296 1.296 0 0 0-2.59 0M9.934 5.995a1.296 1.296 0 1 1-2.593 0 1.296 1.296 0 0 1 2.593 0M6.092 9.663a1.296 1.296 0 1 1-2.592 0 1.296 1.296 0 0 1 2.592 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.701 10.44V8.604L9.331 7.09M14.732 6.045v3.824M17.805 11.332l1.708-1.852"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M11.733 16.746c.675-.1 1.363.001 2.045-.015 1.582-.038 2.822-1.375 4.026-2.282a1.54 1.54 0 0 1 2.021.144 1.556 1.556 0 0 1 0 2.195c-1.3 1.307-2.45 2.518-4.212 3.203-2.447.952-4.717.49-7.194 0-.959-.19-2.77-.2-3.74-.2" />
      <Path d="M11.732 16.716h1.336c.953 0 1.723-.686 1.723-1.64 0-.791-.536-1.425-1.304-1.618-1.1-.276-2.198-.493-3.346-.466-1.82.045-4.02 1.06-5.461 2.024" />
    </G>
  </Svg>
);
export default IconlystAiNeuralShareTwoTone;
