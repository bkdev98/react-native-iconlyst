import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.916 18.854H7.432c-2.578 0-4.182-1.82-4.182-4.396v-3.475M18.99 7.509c0-2.576-1.604-4.396-4.182-4.396H7.432c-2.57 0-4.182 1.82-4.182 4.396"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.991 18.532a2.356 2.356 0 1 1-4.712-.001 2.356 2.356 0 0 1 4.712 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.99 18.531v-7.425l2.259-.475v3.103l-2.259.512M11.12 8.666a2.317 2.317 0 1 0 0 4.636 2.32 2.32 0 0 0 2.318-2.319"
    />
  </Svg>
);
export default IconlystSongBroken;
