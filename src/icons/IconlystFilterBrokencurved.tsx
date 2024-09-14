import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterBrokencurved = ({
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
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.734 17.245H4.261M14.795 17.245c0 2.042.68 2.722 2.722 2.722 2.04 0 2.722-.68 2.722-2.722s-.681-2.722-2.722-2.722M13.767 6.755h6.471M9.705 6.754c0-2.04-.681-2.722-2.721-2.722-2.042 0-2.723.681-2.723 2.722s.681 2.722 2.723 2.722"
    />
  </Svg>
);
export default IconlystFilterBrokencurved;
