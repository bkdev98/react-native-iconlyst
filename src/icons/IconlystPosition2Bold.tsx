import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPosition2Bold = ({
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
      d="M14.176 17.073H13V14.71a1 1 0 1 0-2 0v2.362H9.825a1 1 0 0 0-.707 1.707l2.173 2.174a.997.997 0 0 0 1.401.017l.002-.002.002-.002.002-.002.01-.01 2.175-2.175a1 1 0 0 0-.707-1.707M9.825 7.426H11v2.362a1 1 0 1 0 2 0V7.426h1.175a1 1 0 0 0 .707-1.707L12.71 3.545a.997.997 0 0 0-1.401-.017l-.002.002-.002.002-.002.002-.01.009-2.175 2.176a1 1 0 0 0 .707 1.707M10.539 12.25a1 1 0 0 0-1-1H7.177v-1.176a1.002 1.002 0 0 0-1.707-.707l-2.176 2.176-.01.009-.002.003-.002.002q0 .002-.002.002a1 1 0 0 0-.277.688v.003a1 1 0 0 0 .294.709l2.175 2.173a1 1 0 0 0 1.707-.707V13.25h2.362a1 1 0 0 0 1-1M20.722 11.559l-.003-.003q.002-.002-.003-.003l-.01-.01-2.175-2.175a.999.999 0 0 0-1.707.707v1.175h-2.363a1 1 0 0 0 0 2h2.363v1.175a.999.999 0 0 0 1.707.707l2.173-2.173a1 1 0 0 0 .295-.71v-.002a1 1 0 0 0-.277-.688"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPosition2Bold;
