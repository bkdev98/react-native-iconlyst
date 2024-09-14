import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftBulk = ({
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
      d="m15.798 13.19 3.699.328c.83 0 1.503-.68 1.503-1.518a1.51 1.51 0 0 0-1.503-1.518l-3.7.327c-.65 0-1.179.533-1.179 1.19 0 .66.528 1.191 1.18 1.191"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M3.375 13.13c.058.058.274.305.477.51 1.184 1.283 4.274 3.382 5.89 4.024.246.102.867.32 1.2.336a2 2 0 0 0 .91-.22c.36-.203.649-.525.808-.904.101-.262.26-1.05.26-1.064.159-.86.245-2.259.245-3.805 0-1.472-.086-2.814-.216-3.688-.014-.016-.174-.993-.347-1.328A1.82 1.82 0 0 0 10.999 6h-.057c-.433.014-1.343.394-1.343.408-1.53.642-4.548 2.639-5.761 3.966 0 0-.343.342-.491.554A1.77 1.77 0 0 0 3 11.992c0 .423.13.816.375 1.138"
    />
  </Svg>
);
export default IconlystLeftBulk;
