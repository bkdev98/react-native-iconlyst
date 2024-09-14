import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp3Bold = ({
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
      d="m11.15 6.3-2.492 4.62a.2.2 0 0 0 .176.295h6.33a.2.2 0 0 0 .175-.295L12.85 6.3l.84-1.56c.2-.36.06-.82-.3-1.02a.757.757 0 0 0-1.02.31l-.37.69-.37-.69a.745.745 0 0 0-1.01-.31c-.37.2-.51.66-.31 1.02zM10.527 21.815a.2.2 0 0 0 .176.294h3.093a.2.2 0 0 0 .176-.295l-1.547-2.866a.2.2 0 0 0-.352 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21 20.61h-.44l-4.215-7.824a.2.2 0 0 0-.177-.105l-8.356.025a.2.2 0 0 0-.175.105L3.43 20.61H3a.749.749 0 1 0 0 1.5h5.544a.2.2 0 0 0 .176-.105l2.869-5.318c.262-.486 1.058-.486 1.32 0l2.87 5.318a.2.2 0 0 0 .176.105H21a.749.749 0 1 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCamp3Bold;
