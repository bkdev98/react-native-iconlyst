import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuildingHospitalBold = ({
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
      d="M10.2 17.066c.4-.02.76.28.78.69v.06c.02.41-.3.76-.72.77h-.03a.75.75 0 0 1-.75-.72c-.01-.41.31-.78.72-.8m.78-2.5v.05c.02.41-.3.76-.72.77h-.03a.75.75 0 0 1-.75-.72c-.01-.41.31-.78.72-.8.4-.03.76.28.78.7m4.63 3.26v.05c-.02.4-.35.71-.75.71h-.03a.75.75 0 0 1-.72-.78c.02-.42.38-.76.79-.74s.73.35.71.76m-.75-2.44h-.03a.75.75 0 0 1-.72-.78c.02-.42.38-.75.79-.74.41.02.73.35.71.76v.05c-.02.4-.35.71-.75.71m-2.39-8.08c.41 0 .75.34.75.75v.92h.92a.749.749 0 1 1 0 1.5h-.92v.92c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75v-.92h-.92a.749.749 0 1 1 0-1.5h.92v-.92c0-.41.33-.75.75-.75M21 20.55h-.729V9.99c0-.58-.47-1.05-1.048-1.05l-1.69-.05V5.42c0-.58-.47-1.05-1.048-1.05H13.22V3.3a.75.75 0 0 0-1.5 0v1.07H8.455a1.05 1.05 0 0 0-1.047 1.05L7.36 8.94H5.718A1.05 1.05 0 0 0 4.67 9.99v10.56h-.728a.75.75 0 0 0 0 1.5H21a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBuildingHospitalBold;
