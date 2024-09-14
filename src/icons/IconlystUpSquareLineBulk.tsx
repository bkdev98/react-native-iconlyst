import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpSquareLineBulk = ({
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
      d="M12 6.864c.023 0 .043.01.066.013a.8.8 0 0 1 .222.045.8.8 0 0 1 .244.165l3.04 3.049a.747.747 0 0 1-.003 1.06.75.75 0 0 1-1.06-.001L12.75 9.43v4.807a.75.75 0 0 1-1.5 0V9.429l-1.758 1.766a.75.75 0 0 1-1.062-1.06l3.038-3.05c.026-.027.061-.04.091-.061.048-.037.094-.077.15-.101a.8.8 0 0 1 .291-.06m2.726 9.4a.75.75 0 0 1 0 1.5h-5.45a.75.75 0 0 1 0-1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpSquareLineBulk;
