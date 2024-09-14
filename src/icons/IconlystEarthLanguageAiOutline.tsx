import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEarthLanguageAiOutline = ({
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
      d="M11.25 3a.75.75 0 0 1 .75-.75c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12c0-1.187.213-2.327.603-3.382a.75.75 0 0 1 1.406.52C3.93 10.03 3.75 10.994 3.75 12A8.25 8.25 0 1 0 12 3.75a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.263 11.755a.75.75 0 0 1 .877-.596l3.222.615a.75.75 0 0 1 .397.213l.004.004.014.014.055.056a27 27 0 0 0 .875.847c.259.24.53.48.774.674.265.21.43.311.489.335a.75.75 0 0 1 .47.696v2.47a.75.75 0 0 1-.082.341l-1.255 2.45a.75.75 0 1 1-1.335-.683L7.94 16.9v-1.854a7 7 0 0 1-.393-.292 16 16 0 0 1-.859-.746 30 30 0 0 1-.836-.806l-2.993-.57a.75.75 0 0 1-.596-.878M14.51 21.305a.75.75 0 0 1-1.042-.203c-.763-1.133-.734-2.171-.512-3.083.08-.324.189-.654.286-.946l.083-.253c.12-.37.206-.688.235-.995.056-.589.301-1.066.537-1.44.097-.155.202-.306.294-.439l.05-.072a5 5 0 0 0 .264-.409c.135-.24.156-.377.135-.493-.023-.131-.129-.39-.575-.803l-.02-.019a30 30 0 0 0-.547-.528l-.095-.09a17 17 0 0 1-.283-.27 2.2 2.2 0 0 1-.296-.345 1 1 0 0 1-.176-.623c.013-.228.105-.406.155-.497.033-.06.081-.14.123-.208l.048-.078c.11-.185.262-.458.427-.91.1-.28.314-.419.45-.48.133-.06.261-.08.345-.087.172-.016.357-.001.517.019.332.042.741.132 1.131.232.76.193 1.59.456 1.845.563.547.221.896.571 1.144.913a6 6 0 0 1 .325.51c.072.124.125.215.183.3.117.171.184.21.251.229.098.027.345.051.893-.127a.75.75 0 1 1 .465 1.426c-.673.22-1.258.29-1.77.143-.543-.156-.864-.513-1.077-.825-.09-.13-.172-.27-.24-.387l-.025-.044a4 4 0 0 0-.217-.342 1.1 1.1 0 0 0-.498-.407l-.017-.007c-.128-.055-.875-.3-1.631-.492a10 10 0 0 0-.841-.182 6 6 0 0 1-.372.724l.159.15a47 47 0 0 1 .672.646c.561.522.92 1.053 1.024 1.634.107.6-.087 1.102-.303 1.488-.106.19-.23.371-.339.53q-.03.041-.057.082c-.092.132-.174.25-.252.374-.184.292-.29.534-.312.781-.045.478-.175.924-.301 1.315l-.102.31a10 10 0 0 0-.237.784c-.155.637-.161 1.208.298 1.89a.75.75 0 0 1-.203 1.041m-.2-10.771.004-.007zM4.177 1.902a.75.75 0 0 0-.718.532 1.02 1.02 0 0 1-.678.679.75.75 0 0 0 0 1.434c.325.1.579.354.678.68a.75.75 0 0 0 1.435 0 1.02 1.02 0 0 1 .678-.68.75.75 0 0 0 0-1.434 1.02 1.02 0 0 1-.678-.68.75.75 0 0 0-.717-.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEarthLanguageAiOutline;