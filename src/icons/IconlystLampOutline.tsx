import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLampOutline = ({
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
      d="M15.326 15.958a7.32 7.32 0 0 0 3.818-8.057c-.583-2.8-2.834-5.03-5.627-5.61-4.694-.95-8.843 2.62-8.843 7.16 0 2.84 1.62 5.299 3.986 6.497l-.002.813a2.25 2.25 0 0 0 2.25 2.26h2.166a2.254 2.254 0 0 0 2.25-2.25zm-5.623-1.177c.279.12.46.39.459.69l-.004 1.29v.006a.754.754 0 0 0 .75.754h2.166c.413 0 .749-.34.75-.75l.001-.54H12.13a.746.746 0 0 1-.75-.75c0-.41.336-.75.75-.75h2.293c2.337-1.062 3.845-3.675 3.254-6.53-.461-2.2-2.253-3.98-4.458-4.44C9.467 3 6.174 5.84 6.174 9.45c0 2.4 1.454 4.46 3.529 5.33"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M9.95 20.89c0-.41.337-.75.75-.75h2.576c.414 0 .75.34.75.75s-.336.75-.75.75H10.7a.753.753 0 0 1-.75-.75"
    />
  </Svg>
);
export default IconlystLampOutline;
