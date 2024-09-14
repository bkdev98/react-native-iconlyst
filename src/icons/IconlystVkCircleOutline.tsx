import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVkCircleOutline = ({
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
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M12.82 13.139c-.41 0-.74-.32-.75-.73 0-.41.32-.76.73-.77.42 0 .72-.05.98-.15.41-.15.79-.43 1.18-.86.39-.44.74-.97 1.04-1.58.18-.37.63-.52 1-.34s.52.63.34 1c-.36.73-.78 1.37-1.27 1.91-.56.62-1.15 1.04-1.8 1.28-.54.19-1.06.23-1.45.23h-.02z"
    />
    <Path
      fill={props.color}
      d="M16.68 16.14c-.28 0-.54-.15-.67-.42-.3-.6-.65-1.13-1.04-1.58-.39-.43-.78-.72-1.19-.86-.26-.09-.56-.13-.97-.14h-.6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.61c.4 0 .92.04 1.46.23.65.23 1.24.65 1.8 1.28.49.55.92 1.19 1.27 1.92a.748.748 0 0 1-.67 1.08z"
    />
    <Path
      fill={props.color}
      d="M12.2 16.129c-3.93 0-5.63-4.47-5.63-6.75 0-.41.34-.75.75-.75s.75.34.75.75c0 1.06.83 4.58 3.38 5.17v-4.42H11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.2c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75"
    />
  </Svg>
);
export default IconlystVkCircleOutline;
