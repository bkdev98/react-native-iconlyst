import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpaceShuttleTwoTone = ({
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
      d="M11.311 7.782a1.4 1.4 0 0 1 1.07 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.674 16.034h3.563a.793.793 0 0 0 .793-.793v-.982c0-.664-.324-1.286-.869-1.666l-.315-.22a10.2 10.2 0 0 1-2.017-1.86l-1.065-1.29M9.04 16.034H5.476a.793.793 0 0 1-.793-.793v-.982c0-.664.325-1.286.87-1.666l.314-.22a10.2 10.2 0 0 0 2.018-1.86l1.065-1.29"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.895 13.047v1.775"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.027 17.18-.547-.546a1.5 1.5 0 0 1-.44-1.063V7.803c0-1.481.589-2.902 1.636-3.95v0a1.72 1.72 0 0 1 1.219-.505v0c.456 0 .895.182 1.218.505v0a5.59 5.59 0 0 1 1.636 3.95v7.768c0 .399-.158.78-.44 1.063l-.547.547c-.282.281-.664.44-1.063.44h-1.61c-.398 0-.78-.159-1.062-.44"
      clipRule="evenodd"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M13.309 17.545c-.027.725.146 2.715 1.329 3.803M10.48 17.545c.027.725-.146 2.715-1.329 3.803" />
      <Path d="M16.848 21.036a1.126 1.126 0 0 0-2.073-.613 1.13 1.13 0 0 0-.137.925M6.94 21.036a1.127 1.127 0 1 1 2.21.312M20.138 20.654a1.91 1.91 0 0 0-3.604-.647M4.09 20.832a1.91 1.91 0 0 1 1.897-1.704" />
    </G>
  </Svg>
);
export default IconlystSpaceShuttleTwoTone;
