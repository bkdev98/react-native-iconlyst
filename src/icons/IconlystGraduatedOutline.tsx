import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraduatedOutline = ({
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
      d="M13.553 4.988a2.34 2.34 0 0 0-2.058 0L4.96 8.183c-.901.44-.901 1.726.001 2.167l6.709 3.28c.61.237 1.294.21 1.887-.08l6.54-3.196c.903-.44.903-1.727 0-2.168zM11.06 15.001l.084.041a.8.8 0 0 0 .215.068c.937.297 1.96.226 2.855-.212l2.92-1.426v3.705a1.38 1.38 0 0 1-.829 1.274c-2.564 1.074-5.12 1.063-7.715-.008a1.38 1.38 0 0 1-.835-1.278v-3.77l3.075 1.503q.114.056.23.103m-4.805-2.348v4.512a2.88 2.88 0 0 0 1.762 2.664c2.955 1.22 5.926 1.238 8.868.006 1.075-.45 1.748-1.517 1.748-2.658v-4.438l2.122-1.037.013-.007-.018 2.973a.75.75 0 1 0 1.5.01l.033-5.414a1 1 0 0 0-.014-.152 2.67 2.67 0 0 0-1.514-2.274L14.212 3.64a3.84 3.84 0 0 0-3.376 0L4.3 6.835c-2.023.99-2.023 3.874.001 4.863z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGraduatedOutline;
