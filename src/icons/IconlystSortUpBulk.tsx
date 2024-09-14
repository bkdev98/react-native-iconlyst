import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSortUpBulk = ({
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
      d="m20.708 8.474-2.822-2.83q-.007-.005-.012-.012l-.002-.001-.003-.003a1 1 0 0 0-.153-.121l-.003-.001-.003-.002-.002-.002-.002-.001V5.5l-.003-.001-.003-.002-.002-.001v-.001h-.003c-.004-.001 0-.001-.003-.002q0 0-.003-.002l-.002-.001q-.002-.003-.003-.002 0 0-.003-.002l-.003-.001-.002-.002-.003-.001q-.002-.003-.003-.002v-.001l-.004-.001v-.001l-.002-.001-.003-.001-.002-.001-.003-.002-.002-.001-.003-.002-.003-.001v-.001l-.003-.001-.002-.001v-.001l-.003-.001-.003-.001-.079-.037a1 1 0 0 0-.36-.075h-.041999999999999996a1 1 0 0 0-.363.076h-.003v.002h-.003l-.002.002h-.003l-.003.002-.004.002h-.002l-.003.002h-.002l-.003.003h-.003l-.003.002-.003.002h-.003l-.002.002q0 0-.003.002h-.003l-.002.002-.003.002h-.003l-.003.002a1 1 0 0 0-.245.17l-.002.003-.003.002-.002.002q0 .001-.002.002l-.013.013-2.822 2.829a1 1 0 0 0 1.416 1.412l1.116-1.118.001 8.883a1 1 0 1 0 2 0V8.769l1.114 1.117a.999.999 0 1 0 1.416-1.412M4 13h6.59a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M4 7.35h6.59a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2M12.471 16.65h-8.47a1 1 0 1 0 0 2h8.47a1 1 0 1 0 0-2" />
    </G>
  </Svg>
);
export default IconlystSortUpBulk;
