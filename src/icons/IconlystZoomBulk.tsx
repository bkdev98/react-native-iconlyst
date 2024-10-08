import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZoomBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.707 14.97a1 1 0 0 0-.245-.181l-.003-.001-.003-.002-.002-.001-.003-.002q-.036-.017-.073-.033a1.03 1.03 0 0 0-.92.084l-.004.002-.002.002q0 0-.003.002a1 1 0 0 0-.145.115l-.002.003-.002.002-.003.002-.002.002-.002.002q-.001.001 0 .002l-.003.002-2.098 2.106a1 1 0 0 0 1.417 1.412l.39-.391v2.154a1 1 0 0 0 2 0v-2.153l.387.39a1 1 0 1 0 1.418-1.412zM11.29 9.531l.004.003q.141.14.314.211l.002.002.003.001.003.001.003.001.002.001.002.001a.997.997 0 0 0 .854-.047l.003-.002q.002-.001.002-.002l.003-.001c.07-.04.14-.089.202-.148l.002-.002.002-.002.002-.002.003-.002.003-.003v-.002l.002-.001.002-.001q.001-.003.002-.003l.003-.002v-.001l2.098-2.106a1 1 0 1 0-1.417-1.412l-.39.391V4.25a1 1 0 0 0-2 0v2.153l-.386-.39a1.001 1.001 0 0 0-1.418 1.412z"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="m9.28 12.958.006-.005.002-.002a1 1 0 0 0 .2-.293v-.003l.002-.003.002-.003v-.003l.002-.003.002-.003v-.003l.002-.002a1 1 0 0 0 0-.77l-.002-.004-.001-.003-.001-.003-.001-.002-.001-.003-.001-.003q-.002 0-.002-.003l-.001-.003a1 1 0 0 0-.2-.293l-.002-.002-.005-.005-2.106-2.097a.999.999 0 1 0-1.411 1.417l.39.39H4a1 1 0 1 0 0 2h2.154l-.39.387a.999.999 0 1 0 1.41 1.417zM20 11.253h-2.153l.39-.388a.999.999 0 1 0-1.412-1.417l-2.106 2.097-.003.002-.002.003-.002.002a1 1 0 0 0-.162.216q-.001.003-.002.003v.003l-.003.002v.003l-.003.003v.003q-.003.003-.002.003-.002.002-.002.003v.003l-.003.002v.003l-.003.003v.003h-.002v.002l-.002.003c.001.008-.002.003-.002.003v.003l-.003.003v.002l-.002.003-.02.047a1 1 0 0 0 .011.79l.001.004.002.003.001.002.001.003.002.003.001.002.001.003.001.004.002.003.001.002.002.003.001.003.002.003.001.003q.002.002.001.003.002.002.002.003l.001.003.002.002.001.003q.063.121.162.225l.001.002.02.02 2.104 2.096a1 1 0 0 0 1.414-.003 1 1 0 0 0-.003-1.414l-.39-.39H20a1 1 0 0 0 0-2" />
    </G>
  </Svg>
);
export default IconlystZoomBulk;
