import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliverySendingBulk = ({
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
      d="M22.51 5.305c.822 1.135 1.134 2.65.876 4.27l-1.25 7.842c-.52 3.256-2.963 5.112-6.08 4.618l-8.32-1.326-.022-.003c-1.54-.25-2.765-.992-3.543-2.15-.759-1.132-1.027-2.56-.777-4.13l.006-.038a.3.3 0 0 1 .296-.253H6.59a.75.75 0 1 0 0-1.5H3.68l.347-2.183c.028-.173.223-.268.398-.268h3.32a.75.75 0 0 0 0-1.5h-3.32a1 1 0 0 0-.117.009l.336-2.108.026-.15a.29.29 0 0 1 .289-.238h1.762a.75.75 0 1 0 0-1.5H5.23c1.01-2.054 3.044-3.119 5.494-2.731h.001l.334.053a.3.3 0 0 1 .25.344l-1.245 7.743a.753.753 0 0 0 .86.86l2.718-.435 2.43 1.248a.75.75 0 0 0 1.084-.549l1.237-7.738a.3.3 0 0 1 .343-.249l.31.05.022.003c1.47.238 2.661.932 3.442 2.009"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m13.647 9.01-1.938.31 1.08-6.722a.3.3 0 0 1 .343-.249l3.529.562a.3.3 0 0 1 .249.344l-1.073 6.717-1.729-.888a.75.75 0 0 0-.46-.073M3.175 3.697a.75.75 0 0 0 0 1.5h3.32a.75.75 0 1 0 0-1.5zM4.199 7.683a.75.75 0 0 0 0 1.5h3.32a.75.75 0 1 0 0-1.5zM3.044 11.635a.75.75 0 0 0 0 1.5h3.32a.75.75 0 0 0 0-1.5z"
    />
  </Svg>
);
export default IconlystDeliverySendingBulk;
