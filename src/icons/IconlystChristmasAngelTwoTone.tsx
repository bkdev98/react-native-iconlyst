import * as React from 'react';
import Svg, { Circle, Ellipse, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasAngelTwoTone = ({
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
    <Circle
      cx={11.994}
      cy={9.022}
      r={3.068}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Ellipse
      cx={11.262}
      cy={3.602}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
      rx={2.605}
      ry={0.228}
      transform="rotate(-5.727 11.262 3.602)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.788 11.912c-3.153 2.67-3.416 7.45-3.153 9.505 3.408.935 5.312.926 8.697 0 .263-2.055 0-6.834-3.152-9.505"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.578 10.783c.72.355 3.268 1.02 6.407-1.073 0 2.092-.962 7.437-4.643 8.41M9.42 10.783c-.72.355-3.269 1.02-6.407-1.073 0 2.092.961 7.437 4.642 8.41"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.057 15.992v.01M12.057 18.732v.01M17.722 13.916c.505.123 1.674.295 2.317 0M6.106 13.916c-.504.123-1.674.295-2.316 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystChristmasAngelTwoTone;
