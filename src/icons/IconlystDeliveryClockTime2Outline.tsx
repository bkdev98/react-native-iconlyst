import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryClockTime2Outline = ({
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
      d="M20.837 8.196v.002l.018 2.21a.75.75 0 0 1-1.5.011l-.018-2.214v-.004c-.003-1.235-.388-2.226-1.019-2.9-.626-.669-1.548-1.087-2.754-1.084l-.537.001.013 5.549a.75.75 0 0 1-.982.715l-2.442-.796-2.458.81a.75.75 0 0 1-.985-.71l-.007-5.552-.562.001c-1.202.003-2.123.425-2.746 1.097-.63.678-1.011 1.672-1.008 2.906l.017 7.5c.003 1.235.388 2.226 1.019 2.9.625.67 1.548 1.087 2.754 1.085l3.741-.018a.75.75 0 1 1 .008 1.5l-3.743.018h-.002c-1.577.004-2.914-.555-3.853-1.56-.935-.998-1.42-2.376-1.424-3.921l-.017-7.5c-.004-1.546.478-2.927 1.408-3.93.936-1.008 2.27-1.573 3.842-1.577l6.617-.015a1 1 0 0 1 .112 0l1.231-.003c1.577-.004 2.914.554 3.853 1.559.934.998 1.42 2.376 1.424 3.92m-7.31-3.974.01 4.513-1.69-.552a.75.75 0 0 0-.467.001l-1.708.564-.006-4.518zm3.883 9.682a2.94 2.94 0 1 0 0 5.88 2.94 2.94 0 0 0 0-5.88m-4.44 2.94a4.44 4.44 0 1 1 8.88 0 4.44 4.44 0 0 1-8.88 0m4.42-1.987a.75.75 0 0 1 .75.75v1.074l.8.478a.75.75 0 0 1-.769 1.288l-1.166-.697a.75.75 0 0 1-.365-.644v-1.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryClockTime2Outline;
