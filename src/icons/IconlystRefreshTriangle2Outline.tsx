import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshTriangle2Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M13.03 16.455a.75.75 0 0 1 .003 1.06l-.938.944.935.93a.75.75 0 1 1-1.058 1.064l-1.467-1.46a.75.75 0 0 1-.002-1.06l1.467-1.475a.75.75 0 0 1 1.06-.003M17.858 8.5c.4.11.634.523.524.922l-.55 1.995a.75.75 0 0 1-.922.524l-2.006-.553a.75.75 0 1 1 .398-1.446l1.283.354.35-1.272a.75.75 0 0 1 .923-.524"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.913 5.343a1.016 1.016 0 0 0-1.754-.02l-.001.001-.979 1.647a.75.75 0 1 1-1.29-.766l.978-1.645v-.001c.984-1.663 3.4-1.63 4.35.044l3.544 6.238a.75.75 0 1 1-1.304.74zM18.417 13.49a.75.75 0 0 1 1.024.278l.952 1.66v.001c.964 1.673-.25 3.762-2.176 3.767l-7.175.017a.75.75 0 0 1-.004-1.5l7.175-.017c.78-.002 1.266-.85.88-1.519v-.001l-.953-1.662a.75.75 0 0 1 .277-1.023M8.572 12.339a.75.75 0 0 1-.92-.528l-.347-1.284-1.274.344a.75.75 0 1 1-.392-1.448l1.998-.54a.75.75 0 0 1 .92.528l.543 2.008a.75.75 0 0 1-.528.92"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.446 18.486a.75.75 0 0 1-.752.748l-1.914-.006c-1.931-.002-3.133-2.098-2.175-3.768l3.573-6.223a.75.75 0 0 1 1.3.747l-3.572 6.223a1.016 1.016 0 0 0 .875 1.521h.002l1.915.006a.75.75 0 0 1 .748.752"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefreshTriangle2Outline;
