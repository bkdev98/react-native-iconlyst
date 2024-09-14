import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBagBoldcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.19 13.014h-.047a1 1 0 0 1 0-2c.554 0 1.023.458 1.023 1 0 .561-.429 1-.977 1M8.73 6.911a3.548 3.548 0 0 1 3.513-2.971h.017a3.57 3.57 0 0 1 3.51 2.971 26 26 0 0 0-3.52-.216c-1.329 0-2.488.077-3.52.216m.628 6.103h-.046a1.001 1.001 0 0 1 0-2c.555 0 1.023.458 1.023 1 0 .561-.429 1-.977 1m11.56-3.767c-.74-.965-1.937-1.635-3.619-2.049-.165-2.648-2.35-4.758-5.036-4.758h-.023a5.04 5.04 0 0 0-3.568 1.47c-.888.88-1.389 2.034-1.47 3.288-1.683.413-2.879 1.083-3.619 2.05-1.01 1.318-1.185 3.131-.534 5.543 1.503 5.576 2.385 7.838 9.201 7.838 6.815 0 7.697-2.262 9.201-7.838.65-2.412.476-4.225-.534-5.544"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBagBoldcurved;
