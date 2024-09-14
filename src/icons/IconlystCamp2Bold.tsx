import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp2Bold = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m11.15 6.25-2.609 4.833a.2.2 0 0 0 .176.295h6.569a.2.2 0 0 0 .176-.294L12.85 6.239l.81-1.5c.2-.36.06-.82-.3-1.02a.76.76 0 0 0-1.02.31l-.34.63-.34-.63c-.2-.37-.66-.5-1.02-.3-.37.19-.5.65-.3 1.01zM12.011 16.974a1.85 1.85 0 0 0-1.852 1.845v3.09c0 .111.09.2.2.2h3.301a.2.2 0 0 0 .2-.2v-3.09a1.85 1.85 0 0 0-1.849-1.845"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21 20.61h-.4l-4.113-7.627a.2.2 0 0 0-.176-.105H7.69a.2.2 0 0 0-.176.105L3.4 20.61H3a.749.749 0 1 0 0 1.5h5.46a.2.2 0 0 0 .2-.2v-3.09a3.35 3.35 0 0 1 6.7 0v3.09c0 .11.09.2.2.2H21a.749.749 0 1 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCamp2Bold;
