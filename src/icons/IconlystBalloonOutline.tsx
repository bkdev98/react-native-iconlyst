import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBalloonOutline = ({
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
      d="M12.002 16.662a.75.75 0 0 1 .539.228l1.621 1.673a.75.75 0 0 1-.538 1.272H10.38a.75.75 0 0 1-.539-1.272l1.621-1.673a.75.75 0 0 1 .54-.228"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.934 19.812a.75.75 0 0 0-.36-1.456l.177.73a66 66 0 0 0-.178-.73l-.003.001-.004.001-.011.003a2 2 0 0 0-.13.039 3 3 0 0 0-.302.12 2.7 2.7 0 0 0-.834.593c-.288.308-.53.733-.584 1.288-.054.546.08 1.147.414 1.805a.75.75 0 1 0 1.337-.68c-.242-.477-.277-.79-.258-.978a.67.67 0 0 1 .186-.41c.106-.113.243-.198.37-.257a1.4 1.4 0 0 1 .178-.068zM12 4.115a5.853 5.853 0 0 0-5.854 5.853c0 1.63.666 3.322 1.756 4.604 1.089 1.28 2.545 2.09 4.098 2.09s3.008-.81 4.097-2.09c1.09-1.282 1.756-2.974 1.756-4.604A5.853 5.853 0 0 0 12 4.115M4.646 9.968a7.353 7.353 0 0 1 14.707 0c0 2.017-.813 4.047-2.113 5.575-1.301 1.53-3.146 2.618-5.24 2.618s-3.94-1.088-5.24-2.618c-1.3-1.528-2.114-3.558-2.114-5.575"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.732 7.797a2.107 2.107 0 0 0-2.107 2.107.75.75 0 0 1-1.5 0 3.607 3.607 0 0 1 3.607-3.607.75.75 0 0 1 0 1.5M18.476 19.88a.85.85 0 0 1 .93-.765.75.75 0 1 0 .145-1.493 2.35 2.35 0 0 0-2.568 2.114.75.75 0 0 0 1.493.145M3.58 14.017a.75.75 0 0 0-.991.378 1.986 1.986 0 0 0 1.002 2.624l.306-.685-.306.685.128.057.306-.684-.306.684a.346.346 0 0 1 .174.457l-.054.12c-.386.864.001 1.878.865 2.264a.75.75 0 1 0 .612-1.37.213.213 0 0 1-.107-.281l.054-.12c.416-.931-.001-2.023-.931-2.439l-.129-.057a.486.486 0 0 1-.245-.643.75.75 0 0 0-.378-.99M19.596 4.763a.75.75 0 0 1 1.024-.975.756.756 0 0 1 .394.875.75.75 0 0 1-.485.515.75.75 0 0 1-.933-.415M2.617 5.737a.75.75 0 0 1 .39-.987.806.806 0 0 0 .417-1.06.75.75 0 0 1 1.376-.597 2.306 2.306 0 0 1-1.196 3.033.75.75 0 0 1-.987-.389"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBalloonOutline;
