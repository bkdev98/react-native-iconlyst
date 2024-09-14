import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProfileBoldsharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.77 19.391c-1.017-3.213-3.747-5.054-7.493-5.054h-.027c-3.757-.02-6.501 1.833-7.52 5.054l-.117.374.334.204c1.958 1.194 4.4 1.8 7.256 1.8h.095c2.896 0 5.27-.59 7.256-1.8l.334-.204zM12.25 12.109a4.944 4.944 0 0 0 4.94-4.938 4.944 4.944 0 0 0-4.94-4.94 4.944 4.944 0 0 0-4.938 4.94 4.943 4.943 0 0 0 4.938 4.938"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystProfileBoldsharp;
