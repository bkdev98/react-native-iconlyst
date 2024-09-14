import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSortDownBulk = ({
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
      d="M6.823 18.649c-.007 0-.012.003-.02 0a1 1 0 0 1-.358-.074l-.082-.038-.003-.001-.003-.001v-.001l-.002-.001-.003-.001v-.001l-.003-.001-.003-.002-.002-.001-.003-.002-.002-.001-.003-.001v-.001l-.003-.001-.002-.001v-.001q-.001 0-.004-.002l-.003-.001-.002-.002-.003-.001q-.002-.002-.003-.002 0 .002-.003-.002l-.002-.001q-.002-.003-.003-.002l-.004-.002-.002-.001-.002-.001-.003-.002-.002-.001v-.001l-.003-.001-.003-.002-.003-.002-.002-.001a1 1 0 0 1-.153-.121l-.003-.003v-.001l-.014-.013-2.822-2.83a1 1 0 1 1 1.416-1.411l1.115 1.118V6.348a1 1 0 1 1 2 0v8.883l1.116-1.118a1 1 0 1 1 1.416 1.412l-2.823 2.829-.014.015h-.002s.002.005 0 .002l-.003.002-.002.002a1 1 0 0 1-.246.17l-.002.002H7.26l-.003.003h-.002l-.003.002q-.005 0-.003.002h-.003l-.003.002-.002.002h-.003l-.003.002c-.002.004-.003.002-.003.002H7.23l-.003.002h-.003l-.003.003H7.22l-.004.002q-.001.002-.002 0l-.003.002h-.002a1 1 0 0 1-.366.078zM20 12.998h-6.59a1 1 0 1 1 0-2H20a1 1 0 0 1 0 2"
      clipRule="evenodd"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M11.529 7.348h8.47a1 1 0 1 0 0-2h-8.47a1 1 0 1 0 0 2M13.41 18.649H20a1 1 0 1 0 0-2h-6.59a1 1 0 1 0 0 2" />
    </G>
  </Svg>
);
export default IconlystSortDownBulk;
