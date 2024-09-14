import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBrandOperaOutline = ({
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
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.522 8.85c-.462.77-.772 1.882-.772 3.15s.31 2.38.772 3.15c.47.784 1.017 1.1 1.478 1.1s1.007-.316 1.478-1.1c.462-.77.772-1.882.772-3.15s-.31-2.38-.772-3.15c-.47-.784-1.017-1.1-1.478-1.1s-1.007.316-1.478 1.1M9.236 8.08C9.85 7.054 10.805 6.25 12 6.25s2.15.804 2.764 1.829c.624 1.04.986 2.428.986 3.921s-.362 2.882-.986 3.921C14.15 16.946 13.195 17.75 12 17.75s-2.15-.804-2.764-1.829c-.624-1.04-.986-2.428-.986-3.921s.362-2.881.986-3.921"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBrandOperaOutline;
