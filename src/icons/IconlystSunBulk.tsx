import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunBulk = ({
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
      <Path d="M12.517 4.528a.85.85 0 0 0 .85-.85v-.03a.837.837 0 0 0-.85-.836c-.47 0-.85.397-.85.866s.38.85.85.85M3.56 13.498c.47 0 .824-.381.824-.85 0-.47-.404-.85-.874-.85a.85.85 0 0 0 0 1.7zM6.192 7.158a.85.85 0 0 0 .623-1.428l-.019-.02a.837.837 0 0 0-1.19-.035.86.86 0 0 0 .586 1.483M19.476 18.401c-.312-.349-.827-.354-1.178-.042-.349.313-.357.875-.045 1.225a.85.85 0 0 0 1.201.067.85.85 0 0 0 .067-1.2zM21.468 11.798a.85.85 0 1 0 0 1.7h.043c.47 0 .828-.381.828-.85 0-.47-.401-.85-.871-.85M18.254 5.691l-.045.05c-.312.35-.26.863.09 1.176a.83.83 0 0 0 .55.205.9.9 0 0 0 .673-.298.85.85 0 0 0-1.268-1.133M11.35 7.33a5.45 5.45 0 0 0-4.114 4.075c-.051.216.158.395.375.347a5 5 0 0 1 1.067-.115c2.335 0 3.783 1.453 4.424 2.989.032.078.095.14.173.173a4.08 4.08 0 0 1 2.102 1.991c.084.173.303.242.455.124 1.597-1.248 2.437-3.34 1.976-5.443A5.43 5.43 0 0 0 11.35 7.33" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.787 16.465a.37.37 0 0 1-.319-.315c-.133-.988-.914-2.513-2.79-2.513s-2.657 1.525-2.79 2.513a.37.37 0 0 1-.319.315c-1.162.131-2.058.987-2.058 2.362 0 .96.574 1.79 1.399 2.17.346.14.692.19.954.19h5.624c.263 0 .609-.05.96-.19a2.39 2.39 0 0 0 1.396-2.17c0-1.375-.894-2.23-2.057-2.363"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSunBulk;
