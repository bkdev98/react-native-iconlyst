import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinCoinBulk = ({
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
      d="M20.97 7.135a3.8 3.8 0 1 0-7.602 0 3.8 3.8 0 0 0 7.602 0M9.856 18.925H7.092v-2.06h2.764c.569 0 1.032.462 1.032 1.03s-.463 1.03-1.032 1.03m-2.764-3.56v-1.4h2.572a.7.7 0 0 1 .699.7.69.69 0 0 1-.68.7zm4.353.576c.26-.361.418-.8.418-1.276 0-.941-.596-1.739-1.428-2.053v-.327a.75.75 0 0 0-1.5 0v.18h-.98v-.18a.75.75 0 0 0-1.5 0v.18h-.658a.742.742 0 0 0-.205 1.459v5.042a.74.74 0 0 0-.547.709c0 .414.336.75.75.75h.496c.018.001.033.01.05.01.019 0 .034-.009.052-.01h.062v.19a.75.75 0 0 0 1.5 0v-.19h.98v.19a.75.75 0 0 0 1.5 0v-.263a2.53 2.53 0 0 0 1.953-2.457c0-.791-.373-1.489-.943-1.954"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="m22.058 16.28-1.36-1.66a.752.752 0 0 0-1.161 0l-1.357 1.66a.75.75 0 0 0 .58 1.225h.608v.89c0 .81-.66 1.47-1.471 1.47H16.72a.75.75 0 0 0 0 1.5h1.176a2.974 2.974 0 0 0 2.97-2.97v-.89h.61a.75.75 0 0 0 .58-1.225M6.82 7.719a.749.749 0 0 0-.58-1.225h-.607v-.89c0-.81.66-1.47 1.47-1.47H8.28a.75.75 0 1 0 0-1.5H7.104a2.974 2.974 0 0 0-2.971 2.97v.89h-.61a.75.75 0 0 0-.58 1.225l1.359 1.66a.75.75 0 0 0 1.161-.001z" />
    </G>
  </Svg>
);
export default IconlystBitcoinCoinBulk;
