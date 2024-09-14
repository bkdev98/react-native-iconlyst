import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCherryLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.176 13.045c-2.756-2.846-5.08-7.35-.875-9.831"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.715 11.75q1.052.095 2.082.334c.685-.16 1.2-.454 1.901-.517 0 0 3.302-.223 3.302 4.09a5.203 5.203 0 0 1-10.406 0c0-2.272 1.041-3.906 3.121-3.906"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.518 11.838c-1.107-1.304-2.937-1.251-4.316-.633C5.383 10.551 3 11.382 3 14.778a5.203 5.203 0 0 0 8.495 3.956"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.363 4.971c-2.116 2.148-6.405 2.692-5.49 7.524"
    />
  </Svg>
);
export default IconlystCherryLight;
