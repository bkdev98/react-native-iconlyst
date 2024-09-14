import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodsConnectedBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M14.912 3.789c-.904.83-1.511 1.991-1.511 3.25v6.066c0 .287.385.426.594.228a5.44 5.44 0 0 1 2.732-1.401.31.31 0 0 0 .258-.303v-.49h.864a4.6 4.6 0 0 0 3.658-1.806c.306-.403.45-.9.45-1.392V5.614c0-.495-.146-.991-.45-1.394a4.31 4.31 0 0 0-3.223-1.716h-.001c-1.248-.057-2.467.456-3.37 1.285M10.088 6.266c.904.83 1.511 1.991 1.511 3.25v10.061c0 .992-.802 1.798-1.792 1.798s-1.792-.806-1.792-1.798v-5.96h-.864a4.6 4.6 0 0 1-3.658-1.806c-.306-.404-.45-.9-.45-1.393V8.092c0-.496.146-.992.45-1.395a4.31 4.31 0 0 1 3.223-1.715h.001c1.248-.058 2.467.455 3.37 1.284" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.749 21.5a4.209 4.209 0 1 0 0-8.417 4.209 4.209 0 0 0 0 8.417m1.857-4.715a.745.745 0 0 0-1.054-1.053l-1.378 1.378-.398-.398a.745.745 0 0 0-1.054 1.053l.925.926a.745.745 0 0 0 1.054 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M18.137 6.165a.745.745 0 1 1 1.49 0V7.52a.745.745 0 0 1-1.49 0zM6.863 8.643a.745.745 0 0 0-1.49 0V10a.745.745 0 0 0 1.49 0z"
    />
  </Svg>
);
export default IconlystAirpodsConnectedBulk;
