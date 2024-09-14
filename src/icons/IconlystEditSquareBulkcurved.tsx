import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditSquareBulkcurved = ({
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
      d="M12.25 2.854c-7.2 0-9.75 2.55-9.75 9.75s2.55 9.75 9.75 9.75 9.75-2.55 9.75-9.75-2.55-9.75-9.75-9.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m16.46 11.344.56-.63c.4-.45.59-1 .59-1.55 0-.64-.27-1.29-.79-1.75a2.35 2.35 0 0 0-3.3.2l-.56.63c.04.02 3.48 3.07 3.5 3.1M9.07 17.874c.79 0 1.79-.2 2.53-1.03l3.88-4.39c-.03-.02-3.47-3.07-3.5-3.1l-3.88 4.39c-1.43 1.62-.4 3.87-.39 3.89.01.03.04.06.07.07.01 0 .57.17 1.29.17"
    />
  </Svg>
);
export default IconlystEditSquareBulkcurved;
