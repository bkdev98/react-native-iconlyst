import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTextHeigh2Bold = ({
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
      d="M9.54 18.15a1 1 0 0 1-1-1V4.86H3a1 1 0 1 1 0-2h13.209a1 1 0 1 1 0 2H10.54v12.29a1 1 0 0 1-1 1M18.968 21.14a1 1 0 0 1-.556-.169l-.003-.001-.002-.002-.002-.002q0 .001-.003-.002l-.003-.002-.002-.001q0-.001-.003-.002l-.003-.002q0-.003-.003-.002l-.002-.002-.002-.001q-.002 0-.003-.002l-.003-.002-.002-.002-.003-.002q-.002 0-.003-.002l-.001-.001s-.001.002-.003-.002q0 .002-.002-.002c-.001-.001-.001.001-.002-.002l-.002-.001q0 .002-.002-.002c-.001 0-.002.002-.003-.002q-.001.001-.002-.002 0 .001-.003-.002h-.001q-.001-.002-.002-.002l-.003-.002-.002-.002-.002-.002s.003.007-.002-.002q0 .002-.003-.002 0 .002-.002-.002 0-.001-.003-.001l-.002-.002-.001-.001-.002-.001q-.003-.001-.003-.003l-.002-.002-.002-.002-.002-.002-.003-.002-.002-.002q0-.001-.003-.002 0-.001-.002-.002 0-.003-.002-.002l-.003-.003-.002-.002-.002-.002s.004-.003-.003-.002l-.003-.003q0-.003-.002-.002c-.001-.001-.001.001-.003-.003l-.002-.002-.002-.001-.002-.002-.003-.003-.002-.002q-.002-.001-.002-.002-.002 0-.003-.003l-.002-.002-.001-.001q.002-.001-.002-.001l-.001-.001-.001-.001v-.001l-.002-.001-2.031-2.029a1.001 1.001 0 0 1 1.413-1.416l.325.325v-4.315l-.325.325a1 1 0 0 1-1.414-1.414l2.03-2.029v-.002a1 1 0 0 1 .685-.293h.047a1 1 0 0 1 .684.293l2.032 2.031a1 1 0 1 1-1.413 1.414l-.326-.326v4.316l.326-.325a1 1 0 0 1 1.413 1.416l-2.032 2.029-.001.001-.001.001-.002.001v.001l-.001.001-.003.002-.002.002-.002.002s.003.001-.002.002l-.001.001-.002.002-.002.002-.002.002q.002 0-.002.001l-.001.001-.002.002-.002.002-.003.002-.002.003-.002.002q0 0-.003.002l-.002.002-.002.002a1 1 0 0 1-.084.067l-.003.002-.002.002-.003.001-.003.002-.002.002-.003.002-.002.002h-.001l-.002.002-.002.001-.003.002q-.003.001-.003.002 0 .003-.003.002l-.002.001q0-.002-.002.002l-.003.002-.002.001-.001.001q-.002 0-.003.002l-.002.001q-.002.004-.003.002l-.003.002-.002.001-.002.001-.001.001-.003.001q-.001-.002-.002.002l-.003.001-.002.001-.002.002-.003.001q-.002.002-.003.002l-.002.001-.003.002-.002.002-.002.001-.003.001q-.002 0-.003.002l-.003.001-.002.002-.004.002-.002.001-.002.002h-.001l-.002.001q-.004.001-.003.002l-.003.001-.003.002-.078.037a1 1 0 0 1-.387.077"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTextHeigh2Bold;
