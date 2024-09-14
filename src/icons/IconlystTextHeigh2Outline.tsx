import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTextHeigh2Outline = ({
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
      d="M2.75 4.621a.75.75 0 0 1 .75-.75h13.21a.75.75 0 0 1 0 1.5H10.79v12.545a.75.75 0 0 1-1.5 0V5.37H3.5a.75.75 0 0 1-.75-.75M19.468 11.016a.75.75 0 0 1 .53.22l2.032 2.031a.75.75 0 1 1-1.06 1.061l-.752-.752V19.1l.752-.752a.75.75 0 0 1 1.06 1.06l-2.032 2.033a.75.75 0 0 1-1.06 0l-2.033-2.032a.75.75 0 1 1 1.06-1.061l.753.752v-5.524l-.752.752a.75.75 0 0 1-1.06-1.06l2.031-2.033a.75.75 0 0 1 .53-.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTextHeigh2Outline;
