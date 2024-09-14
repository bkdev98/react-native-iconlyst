import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpTideLight = ({
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
      d="M3.055 16.398a3.49 3.49 0 0 0 3.6 0 3.49 3.49 0 0 1 3.6 0 3.49 3.49 0 0 0 3.6 0 3.49 3.49 0 0 1 3.6 0 3.49 3.49 0 0 0 3.6 0M3.055 20.502a3.49 3.49 0 0 0 3.6 0 3.49 3.49 0 0 1 3.6 0 3.49 3.49 0 0 0 3.6 0 3.49 3.49 0 0 1 3.6 0 3.49 3.49 0 0 0 3.6 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.327 9.13c.025-.014.055.01.047.037a4.996 4.996 0 0 1-4.797 3.62 4.99 4.99 0 0 1-1.375-9.788c.027-.008.05.022.036.047a4.51 4.51 0 0 0 .798 5.291 4.5 4.5 0 0 0 5.291.793"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.802 4.064v.008M3.696 12.786v.008M18.513 3.775a3.58 3.58 0 0 1-2.38 2.38 3.58 3.58 0 0 1 2.38 2.38 3.58 3.58 0 0 1 2.38-2.38 3.58 3.58 0 0 1-2.38-2.38"
    />
  </Svg>
);
export default IconlystUpTideLight;
