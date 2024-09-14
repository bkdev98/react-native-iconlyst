import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPresentationChartLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 12.455v-5.31m4.144 5.31v-2.75m-8.288 2.75v-3.54M7.383 3.12h10.233a3.876 3.876 0 0 1 3.877 3.876v5.609a3.876 3.876 0 0 1-3.877 3.876H7.383a3.876 3.876 0 0 1-3.876-3.876v-5.61A3.876 3.876 0 0 1 7.383 3.12M12.5 16.481v4.638m0-4.638 5.566 4.638M12.5 16.481l-5.566 4.638"
    />
  </Svg>
);
export default IconlystPresentationChartLight;
