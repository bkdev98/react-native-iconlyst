import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftSquareLineBulk = ({
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
      d="M15.974 2.813H8.026C4.721 2.813 2.5 4.936 2.5 8.096v8.434c0 3.159 2.221 5.282 5.526 5.282h7.948c3.305 0 5.526-2.123 5.526-5.282V8.097c0-3.16-2.221-5.284-5.526-5.284"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.701 13.062h-4.808l1.765 1.76a.751.751 0 0 1-1.06 1.061l-3.049-3.04a.8.8 0 0 1-.163-.243.8.8 0 0 1-.045-.224c-.002-.022-.013-.04-.013-.064 0-.1.021-.2.059-.29.024-.057.064-.103.101-.15.022-.03.034-.066.061-.092l3.049-3.038a.75.75 0 0 1 1.059 1.062l-1.764 1.758h4.808a.75.75 0 0 1 0 1.5m-8.65 1.976a.75.75 0 0 1-1.5 0v-5.45a.75.75 0 0 1 1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftSquareLineBulk;
