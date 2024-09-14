import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUmbrella1Outline = ({
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
      d="M19.782 14.515H4.718a2.214 2.214 0 0 1-2.189-2.567 9.8 9.8 0 0 1 19.441 0 2.2 2.2 0 0 1-1.252 2.361 2.2 2.2 0 0 1-.936.206m-7.533-9.65a8.52 8.52 0 0 0-8.24 7.33.7.7 0 0 0 .16.564.72.72 0 0 0 .55.256h15.063a.72.72 0 0 0 .693-.52.7.7 0 0 0 .016-.3 8.52 8.52 0 0 0-8.24-7.33z"
    />
    <Path
      fill={props.color}
      d="M15.756 14.508a.75.75 0 0 1-.75-.75 13.1 13.1 0 0 0-2.755-8.55 13.08 13.08 0 0 0-2.756 8.558.75.75 0 1 1-1.5 0c0-6.946 3.617-10.087 3.772-10.218a.75.75 0 0 1 .968 0c.155.13 3.771 3.27 3.771 10.217a.75.75 0 0 1-.75.743"
    />
    <Path
      fill={props.color}
      d="M14.232 21.878a2.734 2.734 0 0 1-2.731-2.731v-5.38a.75.75 0 1 1 1.5 0v5.38a1.23 1.23 0 1 0 2.462 0 .75.75 0 1 1 1.5 0 2.734 2.734 0 0 1-2.731 2.73"
    />
  </Svg>
);
export default IconlystUmbrella1Outline;
